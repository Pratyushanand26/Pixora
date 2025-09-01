"use client";

import Image from "next/image";
import gallery1 from "../assets/gallery-1.jpg"
import gallery2 from "../assets/gallery-2.jpg"
import gallery3 from "../assets/gallery-3.jpg"
import gallery4 from "../assets/gallery-4.jpg"
import gallery5 from "../assets/gallery-5.jpg"
import gallery6 from "../assets/gallery-6.jpg"

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Train Custom AI Models with 
            <span className="text-orange-500"> Your Images</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Upload your images, train personalized AI models, and generate stunning visuals with simple prompts. 
            Create art that's uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium">
              Start Training
            </button>
            <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg text-lg font-medium">
              View Examples
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Images</h3>
              <p className="text-slate-300">
                Upload 10-20 high-quality images of your subject. The more diverse angles and lighting, the better.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Train Model</h3>
              <p className="text-slate-300">
                Our AI analyzes your images and creates a custom model that understands your unique style or subject.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Generate</h3>
              <p className="text-slate-300">
                Use simple text prompts to generate new images in your trained style. Endless creative possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Sample Generations</h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          See what our users have created with their custom trained models
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all duration-300">
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ImageAI</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900 rounded-lg">
              <div className="w-10 h-10 bg-orange-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-3">Fast Training</h3>
              <p className="text-slate-300">
                Train your custom model in minutes, not hours. Our optimized pipeline ensures quick turnaround times.
              </p>
            </div>
            <div className="p-6 bg-slate-900 rounded-lg">
              <div className="w-10 h-10 bg-orange-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-3">High Quality</h3>
              <p className="text-slate-300">
                Generate crisp, detailed images at high resolution. Professional quality results every time.
              </p>
            </div>
            <div className="p-6 bg-slate-900 rounded-lg">
              <div className="w-10 h-10 bg-orange-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
              <p className="text-slate-300">
                Simple interface that anyone can use. No technical knowledge required to create amazing images.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of creators who are already using ImageAI to bring their ideas to life.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-medium">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="text-lg font-bold text-orange-500 mb-4">ImageAI</h3>
              <p className="text-slate-300 text-sm">
                The future of personalized AI image generation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 ImageAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}