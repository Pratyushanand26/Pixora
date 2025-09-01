"use client"

export function CameraComponent({setActiveTab}: {setActiveTab:React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Your Generated Images</h2>
        <p className="text-slate-300">All images generated with your trained models</p>
      </div>

      <div className="bg-slate-800 rounded-lg p-12 text-center">
        <div className="w-24 h-24 bg-slate-700 rounded-lg mx-auto mb-6 flex items-center justify-center">
          <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No Images Yet</h3>
        <p className="text-slate-400 mb-6">Start generating images to see them here</p>
        <button
          onClick={() => setActiveTab('generate')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md"
        >
          Generate Your First Image
        </button>
      </div>
    </div>
  );
}

