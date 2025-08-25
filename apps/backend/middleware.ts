import type { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"

export function authMiddleware(req:Request,res:Response,next:NextFunction){
    const authHeader=req.headers["authorization"];
    let token;
    if(authHeader!=""){
        token=authHeader?.split(" ")[1]??"";
    }

    try{
        let decoded
        if(token !=undefined && process.env.AUTH_JWT_KEY!=undefined){
            decoded=jwt.verify(token,process.env.AUTH_JWT_KEY,{
            algorithms:["RS256"]
           })
        }
        if(decoded?.sub){
           req.userId=decoded.sub as string;
           next()
        }
    }catch(e){
        res.status(403).json({
            message:"jwt token not verified"
        })
    }
}