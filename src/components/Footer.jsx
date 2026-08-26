import React from 'react';

export default function Footer({ setActivePage }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090A0E] text-slate-400 font-sans relative overflow-hidden pt-16 sm:pt-24 pb-12 border-t border-white/10">
      
      {/* Subtle ambient lighting in background */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#D4F826]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 relative z-10">
        
        {/* ========================================================================= */}
        {/* 01. TOP ROW: BALANCED HEADLINE (LEFT) & REFINED VECTOR ART (RIGHT) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Headline */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-tight sm:leading-[1.12]">
              Ready to revolutionize your <br className="hidden sm:block" />
              tennis journey with SCCTA?
            </h2>
            <p className="text-xs sm:text-base text-slate-400 font-normal max-w-xl leading-relaxed">
              Join structured training, sanctioned tournament play, and academic mentorship across Clayton County.
            </p>
          </div>

          {/* Right: Sleek Neon Lime Tennis Vector Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end overflow-hidden">
            <div className="relative w-full max-w-[280px] sm:max-w-sm">
              <svg 
                className="w-full h-auto text-[#D4F826] overflow-visible" 
                viewBox="0 0 340 190" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Dynamic Tennis Ball Trajectory Flow */}
                <path 
                  d="M -60 110 C 20 50, 90 140, 180 65 C 230 20, 290 35, 330 85" 
                  stroke="#D4F826" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                  fill="none"
                  opacity="0.9"
                />

                {/* Flying Tennis Ball with Seam Details */}
                <g transform="translate(180, 65)">
                  <circle cx="0" cy="0" r="16" stroke="#D4F826" strokeWidth="1.75" fill="#090A0E" />
                  <path d="M -11 -9 C -7 0, -7 6, -11 14" stroke="#D4F826" strokeWidth="1.25" fill="none" />
                  <path d="M 11 -9 C 7 0, 7 6, 11 14" stroke="#D4F826" strokeWidth="1.25" fill="none" />
                </g>

                {/* Angled Tennis Racket */}
                <g transform="translate(210, 25) rotate(22)">
                  {/* Outer Racket Frame */}
                  <ellipse cx="68" cy="42" rx="40" ry="48" stroke="#D4F826" strokeWidth="2.25" fill="none" />
                  {/* Inner Frame Accent */}
                  <ellipse cx="68" cy="42" rx="35" ry="43" stroke="#D4F826" strokeWidth="0.85" opacity="0.4" fill="none" />
                  
                  {/* Vertical Strings */}
                  <line x1="44" y1="20" x2="44" y2="64" stroke="#D4F826" strokeWidth="0.75" opacity="0.4" />
                  <line x1="56" y1="10" x2="56" y2="74" stroke="#D4F826" strokeWidth="0.75" opacity="0.5" />
                  <line x1="68" y1="4" x2="68" y2="80" stroke="#D4F826" strokeWidth="0.75" opacity="0.6" />
                  <line x1="80" y1="10" x2="80" y2="74" stroke="#D4F826" strokeWidth="0.75" opacity="0.5" />
                  <line x1="92" y1="20" x2="92" y2="64" stroke="#D4F826" strokeWidth="0.75" opacity="0.4" />

                  {/* Horizontal Strings */}
                  <line x1="38" y1="28" x2="98" y2="28" stroke="#D4F826" strokeWidth="0.75" opacity="0.4" />
                  <line x1="32" y1="42" x2="104" y2="42" stroke="#D4F826" strokeWidth="0.75" opacity="0.6" />
                  <line x1="38" y1="56" x2="98" y2="56" stroke="#D4F826" strokeWidth="0.75" opacity="0.4" />

                  {/* Throat */}
                  <path d="M 54 88 L 62 108 L 62 142" stroke="#D4F826" strokeWidth="1.85" fill="none" />
                  <path d="M 82 88 L 74 108 L 74 142" stroke="#D4F826" strokeWidth="1.85" fill="none" />
                  
                  {/* Grip Handle */}
                  <rect x="61" y="112" width="14" height="42" rx="2" stroke="#D4F826" strokeWidth="1.5" fill="#090A0E" />
                  <line x1="61" y1="122" x2="75" y2="122" stroke="#D4F826" strokeWidth="0.75" opacity="0.5" />
                  <line x1="61" y1="132" x2="75" y2="132" stroke="#D4F826" strokeWidth="0.75" opacity="0.5" />
                  <line x1="61" y1="142" x2="75" y2="142" stroke="#D4F826" strokeWidth="0.75" opacity="0.5" />
                </g>
              </svg>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 02. MIDDLE ROW: BRAND / SOCIALS, OFFICE & VENUES */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pt-8 sm:pt-10 border-t border-white/10 items-start">
          
          {/* Column 1: Logo & Socials */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4">
            <div 
              onClick={() => handleNav('home')} 
              className="flex items-center gap-3 cursor-pointer inline-flex group"
            >
              <div className="flex items-center gap-0.5 text-white font-bold group-hover:scale-105 transition-transform">
                <span className="inline-block w-1.5 h-5 bg-white transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-5 bg-white transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-5 bg-[#D4F826] transform -skew-x-12"></span>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-white">
                SCCTA
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Non-profit 501(c)(3) community tennis association & official USTA/NJTL chapter.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-300 pt-1">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4F826] hover:text-slate-950 flex items-center justify-center transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4F826] hover:text-slate-950 flex items-center justify-center transition-all" aria-label="X (Twitter)">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4F826] hover:text-slate-950 flex items-center justify-center transition-all" aria-label="TikTok">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4F826] hover:text-slate-950 flex items-center justify-center transition-all" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Administration & Desk */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-[11px] font-extrabold text-[#D4F826] uppercase tracking-widest">
              Administration & Desk
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              South Clayton Community Tennis Association, Inc. <br />
              Clayton County, Georgia
            </p>
            <div className="text-xs text-slate-400 pt-1 space-y-1">
              <div>Email: <a href="mailto:scccta1@gmail.com" className="text-white hover:text-[#D4F826] transition-colors font-medium">scccta1@gmail.com</a></div>
              <div>Phone: <a href="tel:770-872-0921" className="text-white hover:text-[#D4F826] transition-colors font-medium">+1 770-872-0921</a></div>
            </div>
          </div>

          {/* Column 3: Tennis Complex & Facilities */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-[11px] font-extrabold text-[#D4F826] uppercase tracking-widest">
              Tennis Complex & Courts
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Clayton County International Park Tennis Center <br />
              2300 Hwy 138 SE, Jonesboro, GA 30236
            </p>
            <div className="text-xs text-slate-400 pt-1">
              Lovejoy Regional Park Courts, Hampton, GA
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 03. BOTTOM ROW: COPYRIGHT & CLEAN HORIZONTAL NAVIGATION */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 relative z-20">
          
          <div className="text-slate-400 font-medium text-center sm:text-left">
            ©{new Date().getFullYear()} SCCTA. All rights reserved.
          </div>

          {/* Horizontal Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs font-semibold text-slate-300">
            <button onClick={() => handleNav('home')} className="hover:text-[#D4F826] transition-colors py-1">
              Home
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-[#D4F826] transition-colors py-1">
              About
            </button>
            <button onClick={() => handleNav('programs')} className="hover:text-[#D4F826] transition-colors py-1">
              Programs
            </button>
            <button onClick={() => handleNav('tournaments')} className="hover:text-[#D4F826] transition-colors py-1">
              Tournaments
            </button>
            <button onClick={() => handleNav('impact')} className="hover:text-[#D4F826] transition-colors py-1">
              Testimonials
            </button>
            <button onClick={() => handleNav('involved')} className="hover:text-[#D4F826] transition-colors py-1">
              Get Involved
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-[#D4F826] transition-colors py-1">
              Contact
            </button>
          </nav>

        </div>

      </div>

      {/* Subtle Ghost Watermark (Softened & Non-Intrusive) */}
      <div className="w-full select-none pointer-events-none overflow-hidden flex justify-center items-end leading-none absolute bottom-0 left-0 right-0 opacity-[0.025] z-0">
        <div className="font-impact text-[20vw] uppercase tracking-tighter text-white leading-none translate-y-6 sm:translate-y-10 whitespace-nowrap">
          SCCTA
        </div>
      </div>

    </footer>
  );
}
