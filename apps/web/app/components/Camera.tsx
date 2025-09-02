"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface ImageItem {
  id: string;
  status: string;
  imageUrl: string;
}

export default function CameraComponent({
  setActiveTab,
}: {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { getToken } = useAuth();

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const token = await getToken();
        const res = await axios.get(`${BACKEND_URL}/image/bulk`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!mounted) return;
        const imgs = res.data?.imagesData ?? res.data ?? [];
        setImages(Array.isArray(imgs) ? imgs : []);
      } catch (err: any) {
        if (!mounted) return;
        console.error("Failed to fetch images:", err);
        setError(err?.message ?? "Failed to load images");
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [getToken]);

  if (loading) {
    return (
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Your Generated Images</h2>
          <p className="text-slate-300">All images generated with your trained models</p>
        </div>
        <div className="bg-slate-800 rounded-lg p-12 text-center">
          <p className="text-slate-400">Loading images...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Your Generated Images</h2>
          <p className="text-slate-300">All images generated with your trained models</p>
        </div>
        <div className="bg-slate-800 rounded-lg p-12 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => setActiveTab("generate")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md"
          >
            Generate Your First Image
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Your Generated Images</h2>
        <p className="text-slate-300">All images generated with your trained models</p>
      </div>

      {images.length === 0 ? (
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
            onClick={() => setActiveTab("generate")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md"
          >
            Generate Your First Image
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-sm">
              <div className="w-full h-56 bg-black/30">
                <img
                  src={img.imageUrl}
                  alt={`img-${img.id}`}
                  className="w-full h-56 object-cover"
                  onError={(e) => ((e.target as HTMLImageElement).src = "/placeholder.png")}
                />
              </div>
              <div className="p-3 flex items-start justify-between space-x-3">
                <div className="flex-1">
                  <p className="text-sm text-slate-300 truncate">ID: {img.id}</p>
                  <p className="text-sm text-slate-400 mt-1">Status: <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${img.status === "ready" ? "bg-green-800 text-green-300" : "bg-yellow-800 text-yellow-300"}`}>{img.status}</span></p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <a href={img.imageUrl} target="_blank" rel="noreferrer" className="text-sm bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded-md text-white">View</a>
                  <button onClick={() => setActiveTab("generate")} className="text-sm border border-slate-700 px-3 py-1 rounded-md text-slate-200">Generate</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
