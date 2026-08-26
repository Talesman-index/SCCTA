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
        scrolled ? 'bg-[#090A0E]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 group text-left focus:outline-none py-1"
            >
              <div className="flex items-center gap-0.5 text-white font-bold group-hover:scale-105 transition-transform">
                <span className="inline-block w-1.5 h-4 sm:h-5 bg-white transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-4 sm:h-5 bg-white transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-4 sm:h-5 bg-[#D4F826] transform -skew-x-12"></span>
              </div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-display">
                SCCTA
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.filter(i => i.id !== 'home' && i.id !== 'contact').map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-xs font-semibold tracking-wide transition-colors duration-200 py-1 ${
                      isActive 
                        ? 'text-[#D4F826]' 
                        : 'text-slate-200 hover:text-[#D4F826]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-[#D4F826] hover:bg-[#c6ec15] text-slate-950 font-bold text-xs transition-all shadow-sm active:scale-95 whitespace-nowrap"
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
        <div className="md:hidden fixed inset-0 z-50 bg-[#090A0E] text-white flex flex-col justify-between p-6 animate-fadeIn overflow-y-auto">
          
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-0.5 text-white font-bold">
                <span className="inline-block w-1.5 h-4 bg-white transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-4 bg-white transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-4 bg-[#D4F826] transform -skew-x-12"></span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-display">
                SCCTA
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-[#D4F826]" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="py-6 space-y-1.5 flex-1">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4F826] px-3 pb-2">
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
                      ? 'bg-[#D4F826] text-slate-950 shadow-md' 
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
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
              className="w-full py-3.5 rounded-xl bg-[#D4F826] hover:bg-[#c6ec15] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <Activity className="w-4 h-4" />
              <span>Interactive Program Matcher</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95"
            >
              <Heart className="w-4 h-4 text-[#D4F826]" />
              <span>Sponsor a Player / Donate</span>
            </button>
          </div>

        </div>
      )}
    </>
  );
}
