import React from "react";

const ButtonGradient = "from-blue-600 to-violet-600";
const ButtonGradientClass = "bg-gradient-to-tl from-blue-600 to-violet-600";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Top Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-8 pb-0 z-10">
        <div className="max-w-[85rem] mx-auto flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            {/* SVG Logo */}
            <span className="inline-block">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                <circle cx="18" cy="18" r="18" fill="url(#logo-gradient)" fillOpacity="0.15" />
                {/* Horizontal lines */}
                {[...Array(7)].map((_, i) => (
                  <rect key={i} x="6" y={7 + i * 3} width="24" height="1.2" rx="0.6" fill="url(#logo-gradient)" fillOpacity={0.7 - i * 0.08} />
                ))}
                {/* Central circle */}
                <circle cx="18" cy="18" r="7" fill="none" stroke="url(#logo-gradient)" strokeWidth="2" />
              </svg>
            </span>
            <span className={`text-lg tracking-widest font-semibold uppercase bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent bg-clip-text`}>EVALUATE</span>
          </div>
          {/* Twitter Icon */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="twitter-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563eb" />
                  <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.482 0-4.495 2.013-4.495 4.495 0 .352.04.695.116 1.022C7.728 9.37 4.1 7.6 1.67 4.905a4.48 4.48 0 0 0-.608 2.262c0 1.56.795 2.936 2.006 3.744a4.48 4.48 0 0 1-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418a4.48 4.48 0 0 1-2.03.077c.573 1.788 2.24 3.09 4.215 3.125A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.13 9.13 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z" fill="url(#twitter-gradient)"/>
            </svg>
          </a>
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <a className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-hidden focus:bg-white/10" href="../figma.html">
                <p className="me-2 text-white text-sm">
                  Watch demo
                </p>
                <span className="group-hover:bg-white/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </a>
            </div>
            {/* End Announcement Banner */}

            {/* Title */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                The first fully autonomous logic agentic network.
              </h1>
            </div>
            {/* End Title */}

            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-white/70">
              Smarter trading starts here. Get AI-driven signals, technical analyisis, market intelligence, and deep social analytics for crypto and finance—all in one place.
              </p>
            </div>

            {/* Buttons */}
            <div className="text-center">
              <a className={`inline-flex justify-center items-center gap-x-3 text-center ${ButtonGradientClass} shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-hidden focus:shadow-blue-700/50 py-3 px-6`} href="#">
                Coming soon
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
} 