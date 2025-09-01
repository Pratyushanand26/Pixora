"use client"

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export const AppBar = () => {
    const router=useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Nav */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-orange-500">Pixora</h1>
            <nav className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-6">
                <a href="#" className="text-slate-300 hover:text-orange-400 transition">
                  Features
                </a>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition">
                  Pricing
                </a>
                <a href="#" className="text-slate-300 hover:text-orange-400 transition">
                  Gallery
                </a>
              </div>
            </nav>
          </div>

          {/* Auth + Dashboard */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="text-slate-300 hover:text-orange-400 transition px-3 py-2 rounded-md text-sm font-medium">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedIn>
                <button
              onClick={() =>router.push("/dashboard")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              Dashboard
            </button>
            </SignedIn>
          </div>

        </div>
      </div>
    </header>
  )
}
