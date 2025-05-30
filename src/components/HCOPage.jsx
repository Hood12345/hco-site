import React from 'react';

export default function HCOPage() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-black border-b border-neutral-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">HOODCLIPSOFFICIALS</h1>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#workwithus" className="hover:underline">Work With Us</a>
          <a href="#submit" className="hover:underline">Submit Your Clip</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-28 px-6 text-center bg-gradient-to-b from-neutral-950 via-black to-neutral-950">
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-4">Home of Organic Virality</h2>
        <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-6">
          Powered by deep understanding of algorithms, trends, and culture.
        </p>
        <div className="space-x-4">
          <a href="#workwithus" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-2xl shadow-xl">
            Work With Us
          </a>
          <a href="#submit" className="border border-white py-2 px-6 rounded-2xl shadow-xl hover:bg-white hover:text-black font-bold">
            Submit a Clip
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-black via-neutral-900 to-black text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">Built For the Culture</h3>
        <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
          @hoodclipsofficials is one of the fastest-growing media pages on Instagram with 4M+ followers.
          We spotlight the most viral clips, music, movies, and personalities shaping culture today.
        </p>
      </section>

      {/* Why Brands Love Us */}
      <section className="py-24 px-6 bg-gradient-to-bl from-neutral-950 via-black to-neutral-950">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Brands Love Us</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-2xl border border-neutral-800 bg-gradient-to-t from-black via-neutral-900 to-neutral-950 shadow-xl">
            <h4 className="text-xl font-semibold mb-2">100% Organic Virality</h4>
            <p className="text-neutral-400">Our reach is real. No bots. No gimmicks. Just results.</p>
          </div>
          <div className="p-6 rounded-2xl border border-neutral-800 bg-gradient-to-t from-black via-neutral-900 to-neutral-950 shadow-xl">
            <h4 className="text-xl font-semibold mb-2">Massive Visibility</h4>
            <p className="text-neutral-400">Average story views range between 100k–200k. Reels can hit millions.</p>
          </div>
          <div className="p-6 rounded-2xl border border-neutral-800 bg-gradient-to-t from-black via-neutral-900 to-neutral-950 shadow-xl">
            <h4 className="text-xl font-semibold mb-2">Plugged Into Culture</h4>
            <p className="text-neutral-400">We speak Gen Z. We know what goes viral and why it matters.</p>
          </div>
        </div>
      </section>

      {/* Work With Us Form */}
      <section id="workwithus" className="py-24 px-6 bg-black text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">Let's Collaborate</h3>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-neutral-900 border border-neutral-700" />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-neutral-900 border border-neutral-700" />
          <textarea placeholder="Tell us about your brand or idea" rows="5" className="p-3 rounded bg-neutral-900 border border-neutral-700" />
          <button type="submit" className="bg-red-600 hover:bg-red-700 py-3 px-6 rounded-2xl font-bold shadow-lg">
            Send Request
          </button>
        </form>
      </section>

      {/* Submit Clip */}
      <section id="submit" className="py-24 px-6 bg-neutral-950 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">Submit Your Viral Clip</h3>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Instagram or TikTok" className="p-3 rounded bg-neutral-900 border border-neutral-700" />
          <input type="url" placeholder="Clip URL" className="p-3 rounded bg-neutral-900 border border-neutral-700" />
          <textarea placeholder="Any context we should know?" rows="4" className="p-3 rounded bg-neutral-900 border border-neutral-700" />
          <button type="submit" className="bg-white text-black hover:bg-neutral-200 py-3 px-6 rounded-2xl font-bold shadow-xl">
            Submit Clip
          </button>
        </form>
      </section>

      {/* Footer Subscribe Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-xl font-bold mb-4">Get exclusive drops</h4>
            <p className="text-neutral-400 mb-6">
              Stay updated with viral trends, creator features, and brand partnerships.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="p-3 w-full sm:w-auto flex-1 bg-neutral-900 border border-neutral-700 rounded" />
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-bold">Subscribe</button>
            </form>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex gap-5 mt-2">
              <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
                <span className="text-sm">IG</span>
              </div>
              <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
                <span className="text-sm">YT</span>
              </div>
              <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
                <span className="text-sm">X</span>
              </div>
              <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
                <span className="text-sm">TG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <footer className="bg-black text-neutral-600 py-6 text-center text-sm border-t border-neutral-800">
        © 2025 HOODCLIPSOFFICIALS. All rights reserved.
      </footer>
    </div>
  );
}
