import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HCOPage() {
  const [showBrandForm, setShowBrandForm] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-800 text-white font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed w-full top-0 left-0 bg-zinc-900 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center">
            <img
              src="/hood.png"
              alt="HCO Logo"
              className="h-10 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Culture</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Why Us</a>
            <a href="#" className="text-gray-300 hover:text-white transition" onClick={() => setShowBrandForm(true)}>Work With Us</a>
            <a href="#" className="text-gray-300 hover:text-white transition" onClick={() => setShowSubmitForm(true)}>Submit Clip</a>
          </nav>
        </div>
      </header>

      <div className="h-20"></div>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-40 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] animate-pulse"></div>
        <motion.img
          src="/hood.png"
          alt="HoodClipsOfficials Logo"
          className="md:h-[12rem] h-[8rem] w-auto z-10 drop-shadow-[0_4px_20px_rgba(255,0,0,0.4)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [1, 1.03, 1] }}
          transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
        <p className="mt-8 text-2xl text-gray-300 max-w-2xl z-10">
          We’re experts in algorithm comprehension and viral momentum — engineering content that breaks the feed.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-6 z-10">
          <button className="bg-gradient-to-br from-red-600 to-red-400 text-white px-10 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-red-500/50 transform transition hover:scale-105 active:scale-95" onClick={() => setShowBrandForm(true)}>
            Work With Us
          </button>
          <button className="bg-gradient-to-br from-white to-gray-200 text-black px-10 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-white/50 transform transition hover:scale-105 active:scale-95" onClick={() => setShowSubmitForm(true)}>
            Submit Your Clip
          </button>
        </div>
        <div className="absolute w-full h-full top-0 left-0 backdrop-blur-md z-0" style={{ mixBlendMode: 'overlay' }}></div>
      </section>

      {/* Rest of your sections remain unchanged */}
      {/* Keep everything from "Built for the Culture", "Why Brands Love Us", "Footer", and the modals exactly the same */}

      {/* If you'd like, I can send the entire file including everything, but only the hero section was changed here. */}
    </div>
  );
}
