import express, { type Request,type Response } from "express"
import dotenv from "dotenv"
import { GenerateImage,TrainModel,GenerateImagesFromPack } from "common/types";
import { prisma } from "db/client";
import { S3Client } from "bun";
import { FalAIModel } from "./models/falAiModel";
import cors from "cors"
import { authMiddleware } from "./middleware";
import { auth } from "@clerk/nextjs/server";

dotenv.config()
const app=express();
const falaimodel=new FalAIModel()

app.use(express.json())
app.use(cors())

app.get("/pre-signed-url",async(req:Request,res:Response)=>{
 try{

  const key=`models/${Date.now()}_${Math.random()}.zip`
  const url=S3Client.presign(key,{
    method:"PUT",
    accessKeyId:process.env.S3_ACCESS_KEY,
    secretAccessKey:process.env.S3_SCRET_KEY,
    endpoint:process.env.ENDPOINT,
    bucket:process.env.BUCKET_NAME,
    expiresIn:60*5,
    type:"application/zip"
  })
  res.json({
    url,
    key
  })
 }catch(e){
  console.log(e)
 }
})

app.post("/ai/generate",authMiddleware,async(req:Request,res:Response)=>{
    const parsedBody = GenerateImage.safeParse(req.body);

  if (!parsedBody.success) {
    res.status(411).json({});
    return;
  }

  const model=await prisma.model.findUnique({
    where:{
      id:parsedBody.data.modelId
    }
  })
  if(!model|| !model.tensorPath){
    res.status(411).json({
      error:"Model not found"
    })
    return
  }

  const {request_id,response_url}=await falaimodel.generateImage(parsedBody.data.prompt,model.tensorPath)

  const data=await prisma.outputimages.create({
    data:{
        prompt:parsedBody.data.prompt,
        userId:req.userId,
        modelId:parsedBody.data.modelId,
        imageUrl:"",
        falAiRequestId:request_id,
    }
  })
  res.json({
    imageid:data.id
  })
})

app.post("/ai/train",authMiddleware,async(req:Request,res:Response)=>{

    const parsedBody=TrainModel.safeParse(req.body);
    const images=req.body.image;

    if(parsedBody.success==false){
      res.status(411).json({
        error:"Invalidcredentials"
      })
      return
    }

    const {request_id,response_url}=await falaimodel.trainModel(parsedBody.data.zipUrl,parsedBody.data.name)
    const model=await prisma.model.create({
        data:{
            name: parsedBody.data.name,
            type: parsedBody.data.type,
            age: parsedBody.data.age,
            ethinicity: parsedBody.data.ethinicity,
            eyeColor: parsedBody.data.eyeColor,
            bald: parsedBody.data.bald,
            falAiRequestId:request_id,
            zipUrl:parsedBody.data.zipUrl,
            userId:req.userId
        }
    })
    res.json({
        id:model.id
    })
})

app.post("/pack/generate",authMiddleware,async(req:Request,res:Response)=>{
  const parsedBody=GenerateImagesFromPack.safeParse(req.body);
  if(parsedBody.success==false){
    res.status(411).json({
      error:"Invalidcredentials"
    })
    return
  }
  const prompts=await prisma.packprompt.findMany({
    where:{
      packId:parsedBody.data.modelId
    }
  })
  const images=await prisma.outputimages.createManyAndReturn({
    data:prompts.map((prompt)=>({
      prompt:prompt.prompt,
      userId:req.userId,
      modelId:parsedBody.data.modelId,
      imageUrl:""
    }))
  })
  res.json({
    images:images.map((image:any)=> image.id)
  })
 
})

app.get("/pack/bulk",(req:Request,res:Response)=>{
  const packs=prisma.pack.findMany({})
  res.json({
    packs
  })

})

app.get("/image/bulk",authMiddleware,async(req:Request,res:Response)=>{
 const ids=req.query.images as string[]
 const limit=req.query.limit as string??"10"
 const offset=req.query.offset as string??"0"
 const imagesData=await prisma.outputimages.findMany({
  where:{
    id:{in:ids},
    userId:req.userId
  },
  skip:parseInt(offset),
  take:parseInt(limit)
 })
 res.json({
  imagesData
})
})

app.post("/fal-ai/webhook/image",async(req:Request,res:Response)=>{
 const requestId=req.body.request_id;

 await prisma.outputimages.updateMany({
  where:{
    falAiRequestId:requestId
  },
  data:{
    status:"Generated",
    imageUrl:req.body.image_url,
  }
})
res.json({
  success:true
})
})

app.post("/fal-ai/webhook/train",async(req:Request,res:Response)=>{
  const requestId=req.body.request_id

  await prisma.model.updateMany({
    where:{
      falAiRequestId:requestId
    },
    data:{
      status:"Generated",
      tensorPath:req.body.tensor_path,
    }
})
res.json({
  success:true
})})


app.listen(process.env.BACKEND_PORT,()=>{
    console.log(`backend started on port ${process.env.BACKEND_PORT}`)
})
