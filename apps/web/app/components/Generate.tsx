"use client"

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { BACKEND_URL } from "../config";
import axios from "axios"


interface IModel{
  id:string,
  name:string,
  imageUrl:string
}

export function GenerateComponent() {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [model,setModel]=useState<IModel[]>([]);

  const {getToken}=useAuth();

  useEffect(()=>{
    (async()=>{
      const token = await getToken();
        const res = await axios.get(`${BACKEND_URL}/models`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setModel(res.data.models)
    })
  })


  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Generate Images</h2>
        <p className="text-slate-300">Create stunning images using your trained models</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Model Selection */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Select Model</h3>
          <div className="grid grid-cols-1 gap-4">
            {model.map((model) => (
              <div
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                  selectedModel === model.id
                    ? 'bg-orange-500 bg-opacity-20 border-2 border-orange-500'
                    : 'bg-slate-700 border-2 border-transparent hover:border-slate-600'
                }`}
              >
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <span className="text-white font-medium">{model.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Input */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Enter Prompt</h3>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            rows={6}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
          />
          <button
            disabled={!selectedModel || !prompt}
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium"
            onClick={async ()=>{
              const token=await getToken();
              await axios.post(`${BACKEND_URL}/ai/generate`,{
                prompt,
                modelId:selectedModel,
                num:1
              },{
                headers:{
                  Authorization:`Bearer ${token}`
                }
              })
            }}
          >
            Generate Image
          </button>
        </div>
      </div>

      {/* Generated Image Preview */}
      <div className="mt-8 bg-slate-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Generated Image</h3>
        <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-400">Your generated image will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}