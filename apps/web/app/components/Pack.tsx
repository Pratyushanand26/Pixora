import axios from "axios"
import { BACKEND_URL } from "../config";
import {useAuth} from "@clerk/nextjs"

async function getPacks():Promise<TPack[]>{
  const res=await axios.get(`${BACKEND_URL}/pack/bulk`)
  return res.data;
}

interface TPack{
   id:string
   name:string,
   description:string,
   imageUrl:string
  }

export async function PacksComponent({modelId}:{modelId:string}) {

  const packs=await getPacks();
  const {getToken}=useAuth();

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Theme Packs</h2>
        <p className="text-slate-300">Pre-made themes to enhance your image generation</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {packs.map((pack) => (
          <div key={pack.id} className="bg-slate-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all" onClick={async()=>{
            const token = await getToken();
              const res = await axios.post(`${BACKEND_URL}/models`,{
                packId:pack.id,
                modelId:modelId
              } ,{
                headers: {
                  Authorization: `Bearer ${token}`   
                },
              }
            )
          }}>
            <div className="aspect-video bg-slate-700">
              <img 
                src={pack.imageUrl} 
                alt={pack.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{pack.name}</h3>
              <p className="text-slate-300 mb-4">{pack.description}</p>
              <div className="flex justify-between items-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
