import React, { useState, useEffect, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { galleryPhotos } from '../data/galleryPhotos';

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Derive unique sorted years and counts
  const { availableYears, countsByYear } = useMemo(() => {
    const counts = {};
    galleryPhotos.forEach((p) => {
      counts[p.year] = (counts[p.year] || 0) + 1;
    });
    const years = Object.keys(counts)
      .map(Number)
      .sort((a, b) => b - a);
    return { availableYears: years, countsByYear: counts };
  }, []);

  // Filtered photos based on selected year
  const filteredPhotos = useMemo(() => {
    if (selectedYear === 'all') return galleryPhotos;
    return galleryPhotos.filter((p) => p.year === Number(selectedYear));
  }, [selectedYear]);

  // Reset lightbox index when changing year filter
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedPhotoIndex(null);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  return (
    <div className="w-full bg-[#050e1a] min-h-screen text-white font-sans selection:bg-[#8cb0bf] selection:text-[#061326]">
      
      {/* Header */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#8cb0bf]">
          <Calendar className="w-3.5 h-3.5" />
          <span>2016 – 2024 Archives</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          Gallery
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
          Moments, tournaments, clinics, and community highlights from the South Clayton Community Tennis Association.
        </p>
      </section>

      {/* Year Filter Bar */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
          {/* All Years Button */}
          <button
            onClick={() => handleYearChange('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
              selectedYear === 'all'
                ? 'bg-[#8cb0bf] text-[#061326] shadow-lg shadow-[#8cb0bf]/20 scale-105'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20'
            }`}
          >
            <span>All Years</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              selectedYear === 'all' ? 'bg-[#061326]/20 text-[#061326]' : 'bg-white/10 text-slate-400'
            }`}>
              {galleryPhotos.length}
            </span>
          </button>

          {/* Individual Year Pills */}
          {availableYears.map((year) => {
            const count = countsByYear[year] || 0;
            const isSelected = selectedYear === year;
            return (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-3.5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#8cb0bf] text-[#061326] shadow-lg shadow-[#8cb0bf]/20 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20'
                }`}
              >
                <span>{year}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-[#061326]/20 text-[#061326]' : 'bg-white/10 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Pure Photography Masonry Showcase (Zero Tags, Zero Overlays) */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="break-inside-avoid overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#8cb0bf]/60 transition-all duration-300 cursor-pointer group bg-slate-900"
            >
              <img
                src={photo.src}
                alt={`SCCTA Photography ${photo.year}`}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out block"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Top Bar with Info & Close Button */}
          <div 
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-50 pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-white pointer-events-auto">
              <span>{filteredPhotos[selectedPhotoIndex].year}</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-300">
                {selectedPhotoIndex + 1} / {filteredPhotos.length}
              </span>
            </div>

            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer pointer-events-auto"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Photo Container */}
          <div 
            className="relative max-w-5xl max-h-[85vh] flex items-center justify-center pt-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[selectedPhotoIndex].src}
              alt={`SCCTA Photography ${filteredPhotos[selectedPhotoIndex].year}`}
              className="max-h-[82vh] max-w-full w-auto h-auto rounded-xl sm:rounded-2xl object-contain shadow-2xl select-none"
            />
          </div>
        </div>
      )}

    </div>
  );
}
