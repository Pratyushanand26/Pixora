"use client"

import { useState } from "react";

export function TrainComponent() {
  const [zipUrl, setZipUrl] = useState("");
  const [type, setType] = useState("Man");
  const [age, setAge] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [bald, setBald] = useState(false);
  const [name, setName] = useState("");

  const trainModel = async () => {
    // Training logic here
    console.log('Training model with:', { zipUrl, type, age, ethnicity, eyeColor, bald, name });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-slate-800 rounded-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Train New Model</h2>
          <p className="text-slate-300">Create a custom AI model with your images</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Model Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter model name"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Ethnicity</label>
            <select
              value={ethnicity}
              onChange={(e) => setEthnicity(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select ethnicity</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Asian_American">Asian American</option>
              <option value="East_Asian">East Asian</option>
              <option value="South_East_Asian">South East Asian</option>
              <option value="South_Asian">South Asian</option>
              <option value="Middle_Eastern">Middle Eastern</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Eye Color</label>
            <select
              value={eyeColor}
              onChange={(e) => setEyeColor(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select eye color</option>
              <option value="Brown">Brown</option>
              <option value="Blue">Blue</option>
              <option value="Hazel">Hazel</option>
              <option value="Gray">Gray</option>
            </select>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="bald"
              checked={bald}
              onChange={(e) => setBald(e.target.checked)}
              className="w-4 h-4 text-orange-500 bg-slate-700 border-slate-600 rounded focus:ring-orange-500 focus:ring-2"
            />
            <label htmlFor="bald" className="text-sm font-medium text-slate-300">Bald</label>
          </div>

          {/* Upload Section */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Upload Images</label>
            <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-orange-500 transition-colors">
              <div className="w-16 h-16 bg-slate-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-slate-300 mb-2">Click to upload images</p>
              <p className="text-slate-400 text-sm">Upload 10-20 high-quality images</p>
              <button
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "image/*";
                  input.multiple = true;
                  input.onchange = () => {
                    // Handle file upload
                    setZipUrl("uploaded");
                  };
                  input.click();
                }}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Select Files
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-2 border border-slate-600 text-slate-300 rounded-md hover:border-slate-500 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={trainModel}
            disabled={!eyeColor || !ethnicity || !zipUrl || !type || !age || !name}
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md"
          >
            Create Model
          </button>
        </div>
      </div>
    </div>
  );
}
