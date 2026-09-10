import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const photos = [
    { id: '1', src: '/images/gallery-doubles-medalists-girls.jpg' },
    { id: '2', src: '/images/gallery-junior-team-girls-lineup.jpg' },
    { id: '3', src: '/images/gallery-wimbledon-trophy-display.jpg' },
    { id: '4', src: '/images/gallery-usta-league-junior-medalist.jpg' },
    { id: '5', src: '/images/tournament-winners-girls-trophies.jpg' },
    { id: '6', src: '/images/lenny-simpson-camp.jpg' },
    { id: '7', src: '/images/tournament-winners-girls-medals.jpg' },
    { id: '8', src: '/images/tournament-winner-boy-trophy.jpg' },
    { id: '9', src: '/images/simpson-camp-sccta-player-chaperone.jpg' },
    { id: '10', src: '/images/tournament-winner-904-trophy.jpg' },
    { id: '11', src: '/images/simpson-camp-sccta-juniors.jpg' },
    { id: '12', src: '/images/tournament-winners-medals.jpg' },
    { id: '13', src: '/images/simpson-camp-sccta-player-portrait.jpg' },
    { id: '14', src: '/images/sccta-team-celebration.jpg' },
    { id: '15', src: '/images/tournament-winners-clubhouse.jpg' },
    { id: '16', src: '/images/sccta-the-mill-group.jpg' },
    { id: '17', src: '/images/sccta-scholarship-awards.jpg' },
    { id: '18', src: '/images/sccta-clayton-clinic.png' }
  ];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  return (
    <div className="w-full bg-[#050e1a] min-h-screen text-white font-sans selection:bg-[#8cb0bf] selection:text-[#061326]">
      
      {/* Header */}
      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
          Gallery
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-widest font-semibold">
          South Clayton Community Tennis Association
        </p>
      </section>

      {/* Pure Photography Masonry Showcase (Zero Tags, Zero Titles) */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="break-inside-avoid overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#8cb0bf]/60 transition-all duration-300 cursor-pointer group bg-slate-900"
            >
              <img
                src={photo.src}
                alt="SCCTA Photography"
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out block"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal (Clean, No Tags, No Titles) */}
      {selectedPhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
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
              setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Photo Container */}
          <div 
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhotoIndex].src}
              alt="SCCTA Fullscreen Photography"
              className="max-h-[88vh] max-w-full w-auto h-auto rounded-xl sm:rounded-2xl object-contain shadow-2xl select-none"
            />
          </div>
        </div>
      )}

    </div>
  );
}
