import React, { useEffect, useRef, useState } from 'react';
import { Target, Flag, Clock, Activity, Trophy, Zap, BookOpen, Award, GraduationCap, Users, ArrowRight } from 'lucide-react';

export default function StackedProgramCards({ programs, onOpenProgramFinder, setActivePage }) {
  const containerRef = useRef(null);
  const [cardStates, setCardStates] = useState(programs.map(() => ({ scale: 1, opacity: 1, translateY: 0 })));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cardElements = containerRef.current.querySelectorAll('.stacked-program-card');
      const windowHeight = window.innerHeight;

      const newStates = Array.from(cardElements).map((el, index) => {
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        
        // Check next card position to determine if this card is being covered
        const nextEl = cardElements[index + 1];
        if (nextEl) {
          const nextRect = nextEl.getBoundingClientRect();
          const stickyTop = 90 + index * 10;
          const overlapProgress = Math.max(0, Math.min(1, (windowHeight * 0.7 - nextRect.top) / (windowHeight * 0.5)));
          
          if (nextRect.top < windowHeight && overlapProgress > 0) {
            const scale = 1 - overlapProgress * 0.04;
            const opacity = 1 - overlapProgress * 0.2;
            const blur = overlapProgress * 1.5;
            return { scale, opacity, blur, isPinned: top <= stickyTop + 10 };
          }
        }

        return { scale: 1, opacity: 1, blur: 0, isPinned: false };
      });

      setCardStates(newStates);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [programs.length]);

  return (
    <div ref={containerRef} className="relative space-y-10 sm:space-y-16 pb-8 sm:pb-12">
      {programs.map((prog, index) => {
        const state = cardStates[index] || { scale: 1, opacity: 1, blur: 0 };
        const stickyTop = 85 + index * 12; // Mobile-friendly compact sticky offset

        return (
          <div
            key={prog.id}
            className="stacked-program-card sticky transition-all duration-200 ease-out"
            style={{
              top: `${stickyTop}px`,
              zIndex: index + 10,
              transform: `scale(${state.scale}) translate3d(0, 0, 0)`,
              opacity: state.opacity,
              filter: state.blur ? `blur(${state.blur}px)` : 'none',
              transformOrigin: 'top center',
            }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.12)] hover:shadow-2xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                
                {/* Left Photo Banner with Badge */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm h-56 sm:h-72 lg:h-[380px] bg-slate-950 relative group">
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#061326]/90 backdrop-blur-md text-[#38BDF8] text-[10px] sm:text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-full border border-white/15 shadow">
                      {prog.badge}
                    </div>

                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 backdrop-blur-md text-white font-impact text-xs sm:text-sm tracking-wider px-2.5 py-1 rounded-lg border border-white/10">
                      0{index + 1} / 0{programs.length}
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      <span>Program 0{index + 1}</span>
                      <span>•</span>
                      <span className="text-[#0059A6]">SCCTA Pathway</span>
                    </div>

                    <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-950 leading-tight">
                      {prog.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {prog.subtitle}
                    </p>
                  </div>

                  {/* Checklist features */}
                  <div className="space-y-2.5 sm:space-y-3 pt-1 text-xs sm:text-sm text-slate-800">
                    {prog.features.map((feat, fIdx) => {
                      const IconComponent = feat.icon;
                      return (
                        <div key={fIdx} className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-[#0059A6] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                            <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </div>
                          <span className="leading-snug">{feat.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <button
                      onClick={onOpenProgramFinder}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs sm:text-sm transition-all shadow-[0_4px_14px_rgba(0,89,166,0.35)] hover:shadow-[0_6px_20px_rgba(0,89,166,0.5)] active:scale-95 text-center"
                    >
                      {prog.ctaText}
                    </button>

                    <button
                      onClick={() => setActivePage('programs')}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0059A6] transition-colors py-2 text-center"
                    >
                      <span>View Full Curriculum</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
