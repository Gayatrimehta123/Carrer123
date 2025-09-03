import { useState } from "react";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-zinc-800 flex flex-col">
      {/* Bubble Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-100px] left-[20%] w-12 h-12 bg-white/20 rounded-full animate-bubble" />
        <div className="absolute bottom-[-120px] left-[50%] w-16 h-16 bg-white/30 rounded-full animate-bubble-slow" />
        <div className="absolute bottom-[-80px] left-[70%] w-10 h-10 bg-white/20 rounded-full animate-bubble-fast" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-zinc-800/80 backdrop-blur-md text-white">
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold">NikuSoft</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#">Products</a>
            <a href="#">Leaderboard</a>
            <a href="#">Enterprise</a>
            <a href="#">Government</a>
            <a href="#">Customer</a>
            <a href="#">Resources</a>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
              Book a Demo
            </button>
            <a href="#">Login</a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-zinc-800">
            <a href="#">Products</a>
            <a href="#">Leaderboard</a>
            <a href="#">Enterprise</a>
            <a href="#">Government</a>
            <a href="#">Customer</a>
            <a href="#">Resources</a>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
              Book a Demo
            </button>
            <a href="#">Login</a>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-5xl font-bold text-white">Careers at NikuSoft</h1>
        <p className="mt-4 text-lg text-gray-300">Grow with us.</p>
      </main>
      {/* Button */}
    <div className="mt-2 flex justify-center">
      <button
        className="bg-blue-600 text-white font-medium rounded-lg
                   px-4 py-2 md:px-5 md:py-2.5
                   hover:bg-blue-700 transition"
      >
        View Open Positions
      </button>
    </div>
    </section>
  );
}
