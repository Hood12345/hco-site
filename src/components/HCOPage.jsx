import { useState } from 'react';

export default function HCOPage() {
  const [showBrandForm, setShowBrandForm] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-800 text-white font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed w-full top-0 left-0 bg-zinc-900 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-white">HCO</div>
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
        <h1 className="text-7xl font-black text-white tracking-tight drop-shadow-[0_4px_20px_rgba(255,0,0,0.4)] z-10">HoodClipsOfficials</h1>
        <p className="mt-6 text-2xl text-gray-300 max-w-2xl z-10">
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

      {/* Built for the Culture */}
      <section className="py-32 px-6 text-center bg-gradient-to-tr from-zinc-900 via-zinc-800 to-neutral-900">
        <h2 className="text-4xl font-bold mb-8">Built for the Culture</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          @hoodclipsofficials curates the internet’s most viral clips — spotlighting culture, chaos, and creators. We don’t just follow trends. We ignite them.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: "100% Organic Virality", text: "No bots. Just content that hits. We know what people stop and watch." },
            { title: "AI-Assisted Curation", text: "We use cutting-edge AI tools to spot trends before they break." },
            { title: "Trusted by Music & Media", text: "We partner with labels, streamers & platforms to amplify releases." }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-zinc-900 to-neutral-800 rounded-3xl p-6 shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Brands Love Us */}
      <section className="py-32 px-6 bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-800 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Brands Love Us</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          We deliver scroll-stopping content, speed, and cultural relevance. Our creative team moves faster than trends — delivering campaigns that matter.
        </p>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            ["End-to-End Production", "From content ideation to delivery — we handle storytelling that converts."],
            ["Real-Time Performance", "We track, analyze, and optimize every campaign for max visibility."],
            ["Amplified Distribution", "Content reaches not just our platform — but our extended creator network."],
            ["Strategic Collabs", "We craft win-win brand integrations that feel natural and perform."]
          ].map(([title, text], i) => (
            <div key={i} className="bg-gradient-to-br from-zinc-800 to-neutral-800 p-6 rounded-2xl shadow-2xl hover:shadow-red-500/50 hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-300 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="bg-zinc-950 py-20 px-6 text-white shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-4">About HCO</h4>
            <p className="text-sm text-gray-400">
              HoodClipsOfficials is a next-gen media company fueling digital culture. We blend AI-assisted virality with community-driven content to redefine online entertainment.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" onClick={() => setShowBrandForm(true)} className="hover:text-white">Work With Us</a></li>
              <li><a href="#" onClick={() => setShowSubmitForm(true)} className="hover:text-white">Submit Your Clip</a></li>
              <li><a href="https://www.instagram.com/hoodclipsofficials/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Join the Culture</h4>
            <p className="text-sm text-gray-400">Collabs, media, coverage — we’re always listening.</p>
            <button onClick={() => setShowBrandForm(true)} className="mt-4 bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-full text-sm shadow-lg">Contact Us</button>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-2">Stay up to date with our latest drops.</p>
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input type="email" placeholder="Your email" className="w-full p-2 rounded-lg bg-zinc-800 text-white placeholder-gray-500 text-sm" />
              <button type="submit" className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <div className="bg-zinc-950 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} HoodClipsOfficials. All rights reserved.
      </div>

      {/* Modals */}
      {showBrandForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="bg-zinc-900 p-8 rounded-2xl max-w-lg w-full relative shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Work With Us</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400" />
              <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400" />
              <textarea placeholder="Tell us about your project" className="w-full p-3 h-32 rounded-lg bg-zinc-800 text-white placeholder-gray-400"></textarea>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-semibold">Submit</button>
            </form>
            <button onClick={() => setShowBrandForm(false)} className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl">&times;</button>
          </div>
        </div>
      )}

      {showSubmitForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="bg-zinc-900 p-8 rounded-2xl max-w-lg w-full relative shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Submit Your Clip</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name or IG Handle" className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400" />
              <input type="url" placeholder="Video URL" className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400" />
              <textarea placeholder="Optional message" className="w-full p-3 h-24 rounded-lg bg-zinc-800 text-white placeholder-gray-400"></textarea>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-semibold">Send Clip</button>
            </form>
            <button onClick={() => setShowSubmitForm(false)} className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}
