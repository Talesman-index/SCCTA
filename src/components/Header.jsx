import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Heart, Sparkles, Activity, Trophy, Mail } from 'lucide-react';

export default function Header({ activePage, setActivePage, onOpenDonate, onOpenProgramFinder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'tournaments', label: 'Tournaments' },
    { id: 'impact', label: 'Testimonials' },
    { id: 'involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 01. DESKTOP & MOBILE TOP HEADER BAR */}
      {/* ========================================================================= */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#061326]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-xl' 
          : 'bg-[#061326]/80 backdrop-blur-md py-4 border-b border-white/10 shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Real SCCTA Logo with High Contrast White Badge */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left focus:outline-none py-1"
            >
              <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-white shadow-md ring-2 ring-white/50 group-hover:scale-105 group-hover:shadow-lg transition-all">
                <img 
                  src="/logo.png" 
                  alt="SCCTA Official Logo" 
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-display leading-tight">
                  SCCTA
                </span>
                <span className="text-[10px] text-slate-300 font-medium tracking-wide hidden sm:block">
                  South Clayton Tennis
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.filter(i => i.id !== 'home' && i.id !== 'contact').map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-xs font-semibold tracking-wide transition-colors duration-200 py-1 relative ${
                      isActive 
                        ? 'text-[#8cb0bf] font-bold' 
                        : 'text-slate-200 hover:text-[#8cb0bf]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8cb0bf] rounded-full shadow-[0_0_8px_#8cb0bf]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-[#8cb0bf] hover:bg-[#9ec0cf] text-white font-bold text-xs transition-all shadow-[0_2px_12px_rgba(140, 176, 191,0.4)] hover:shadow-[0_4px_16px_rgba(0,124,232,0.6)] active:scale-95 whitespace-nowrap"
              >
                Contact Us
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none active:scale-95"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 02. BULLETPROOF FULLSCREEN MOBILE MENU MODAL */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#061326] text-white flex flex-col justify-between p-6 animate-fadeIn overflow-y-auto">
          
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-white shadow-md ring-2 ring-white/30">
                <img 
                  src="/logo.png" 
                  alt="SCCTA Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-display block">
                  SCCTA
                </span>
                <span className="text-[10px] text-[#8cb0bf] font-bold uppercase tracking-wider">
                  South Clayton Tennis
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-[#8cb0bf]" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="py-6 space-y-1.5 flex-1">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#8cb0bf] px-3 pb-2">
              Menu Navigation
            </div>

            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-2xl font-display font-bold text-lg transition-all ${
                    isActive 
                      ? 'bg-[#8cb0bf] text-[#061326] shadow-md' 
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Bottom Action CTAs */}
          <div className="pt-4 border-t border-white/10 space-y-3 shrink-0 pb-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProgramFinder();
              }}
              className="w-full py-3.5 rounded-xl bg-[#8cb0bf] hover:bg-[#7ba0b0] text-[#061326] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <Activity className="w-4 h-4 text-[#8cb0bf]" />
              <span>Interactive Program Matcher</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95"
            >
              <Heart className="w-4 h-4 text-[#8cb0bf]" />
              <span>Sponsor a Player / Donate</span>
            </button>
          </div>

        </div>
      )}
    </>
  );
}
