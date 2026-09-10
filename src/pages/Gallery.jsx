import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Trophy, 
  Users, 
  MapPin, 
  Calendar, 
  Filter, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Heart,
  Camera
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Gallery({ setActivePage, onOpenDonate }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'tournaments', label: 'Tournaments & Medals' },
    { id: 'youth', label: 'Youth & Clinics' },
    { id: 'leadership', label: 'Leadership & Heritage' },
    { id: 'community', label: 'Community & Teams' }
  ];

  const photos = [
    {
      id: 'gallery-doubles-medalists-girls',
      src: '/images/gallery-doubles-medalists-girls.jpg',
      title: 'Doubles Finalists & City Champions',
      category: 'tournaments',
      categoryLabel: 'Tournaments & Medals',
      location: 'City Championship Courts · Atlanta Metro',
      aspect: 'tall',
      caption: 'SCCTA junior competitors proudly displaying their championship medals after a thrilling doubles tournament performance.'
    },
    {
      id: 'gallery-junior-team-girls-lineup',
      src: '/images/gallery-junior-team-girls-lineup.jpg',
      title: 'Rising Stars Junior Team Lineup',
      category: 'youth',
      categoryLabel: 'Youth & Clinics',
      location: 'USTA League Championship Courts',
      aspect: 'wide',
      caption: 'Young SCCTA athletes standing side-by-side with their medals in front of the official USTA championship banner.'
    },
    {
      id: 'gallery-wimbledon-trophy-display',
      src: '/images/gallery-wimbledon-trophy-display.jpg',
      title: 'Inspiring Grand Slam Ambitions',
      category: 'leadership',
      categoryLabel: 'Leadership & Heritage',
      location: 'Wimbledon Championship Showcase',
      aspect: 'tall',
      caption: 'Connecting grassroots dedication with the pinnacle of tennis greatness: the historic Wimbledon Championship trophies.'
    },
    {
      id: 'gallery-usta-league-junior-medalist',
      src: '/images/gallery-usta-league-junior-medalist.jpg',
      title: 'USTA League Junior Champion',
      category: 'tournaments',
      categoryLabel: 'Tournaments & Medals',
      location: 'USTA League Championship Stage',
      aspect: 'tall',
      caption: 'Gold medal pride beside the official "USTA League Played Here" banner celebrating milestone match victories.'
    },
    {
      id: 'tournament-winners-girls-trophies',
      src: '/images/tournament-winners-girls-trophies.jpg',
      title: 'Junior Circuit Trophy Ceremony',
      category: 'tournaments',
      categoryLabel: 'Tournaments & Medals',
      location: 'Clayton County Tennis Center',
      aspect: 'square',
      caption: 'Top division champions and finalists honored with commemorative silver cups and tournament honors.'
    },
    {
      id: 'lenny-simpson-camp',
      src: '/images/lenny-simpson-camp.jpg',
      title: 'Lenny Simpson NJTL Leadership Camp',
      category: 'leadership',
      categoryLabel: 'Leadership & Heritage',
      location: 'Louisville, KY · USTA Southern',
      aspect: 'wide',
      caption: 'Official 27-camper delegation from 9 Southern states uniting with legend Lenny Simpson for 4 days of athletic and leadership excellence.'
    },
    {
      id: 'tournament-winners-girls-medals',
      src: '/images/tournament-winners-girls-medals.jpg',
      title: 'Level 6 Open Medalists',
      category: 'tournaments',
      categoryLabel: 'Tournaments & Medals',
      location: 'Hudlow Tennis Center',
      aspect: 'square',
      caption: 'Singles and doubles contenders honored on the podium for grit, technical mastery, and exceptional sportsmanship.'
    },
    {
      id: 'tournament-winner-boy-trophy',
      src: '/images/tournament-winner-boy-trophy.jpg',
      title: 'Singles Champion Trophy Lift',
      category: 'tournaments',
      categoryLabel: 'Tournaments & Medals',
      location: 'Clayton County Tennis Center',
      aspect: 'square',
      caption: 'Celebrating personal milestone victories in sanctioned junior tournament draws across Clayton County.'
    },
    {
      id: 'simpson-camp-sccta-player-chaperone',
      src: '/images/simpson-camp-sccta-player-chaperone.jpg',
      title: 'Dedicated Chaperone & Mentorship',
      category: 'leadership',
      categoryLabel: 'Leadership & Heritage',
      location: 'Louisville, KY',
      aspect: 'square',
      caption: 'Selfless SCCTA volunteer chaperone ensuring 24/7 care, guidance, and moral support for our young athletes.'
    },
    {
      id: 'tournament-winner-904-trophy',
      src: '/images/tournament-winner-904-trophy.jpg',
      title: 'NextGen Round Robin Winner',
      category: 'tournaments',
      categoryLabel: 'Tournaments & Medals',
      location: 'Clayton County Tennis Center',
      aspect: 'square',
      caption: 'Unbeaten tournament round-robin performance earning top divisional honors and ranking points.'
    },
    {
      id: 'simpson-camp-sccta-juniors',
      src: '/images/simpson-camp-sccta-juniors.jpg',
      title: 'Juneteenth Tournament Competitors',
      category: 'leadership',
      categoryLabel: 'Leadership & Heritage',
      location: 'Petersburg Park Courts · Louisville, KY',
      aspect: 'square',
      caption: 'SCCTA athletes representing Clayton County with integrity in the Charles Crawford Juneteenth competition.'
    },
    {
      id: 'tournament-winners-medals',
      src: '/images/tournament-winners-medals.jpg',
      title: 'Hudlow Jr. Championship Podium',
      category: 'tournaments',
      categoryLabel: 'Tournaments & Medals',
      location: 'Norcross, GA',
      aspect: 'square',
      caption: 'Recognizing outstanding junior tournament sportsmanship and competitive resilience.'
    },
    {
      id: 'simpson-camp-sccta-player-portrait',
      src: '/images/simpson-camp-sccta-player-portrait.jpg',
      title: 'Future NJTL Scholar-Leader',
      category: 'leadership',
      categoryLabel: 'Leadership & Heritage',
      location: 'Louisville, KY',
      aspect: 'square',
      caption: 'Embodying Arthur Ashe’s timeless vision of academic achievement and athletic character.'
    },
    {
      id: 'sccta-team-celebration',
      src: '/images/sccta-team-celebration.jpg',
      title: 'End-of-Season Team Celebration',
      category: 'community',
      categoryLabel: 'Community & Teams',
      location: 'Clayton International Park',
      aspect: 'wide',
      caption: 'Coaches, families, and community partners celebrating another transformative year of youth tennis in South Clayton.'
    },
    {
      id: 'tournament-winners-clubhouse',
      src: '/images/tournament-winners-clubhouse.jpg',
      title: 'Clubhouse Championship Gathering',
      category: 'community',
      categoryLabel: 'Community & Teams',
      location: 'Clayton County Tennis Clubhouse',
      aspect: 'square',
      caption: 'Gathering of finalists, parents, and coaches for the ceremonial trophy presentations.'
    },
    {
      id: 'sccta-the-mill-group',
      src: '/images/sccta-the-mill-group.jpg',
      title: 'The Mill Junior Academy Squad',
      category: 'youth',
      categoryLabel: 'Youth & Clinics',
      location: 'Lovejoy Regional Park Courts',
      aspect: 'wide',
      caption: 'Youth academy group developing live-ball rally consistency, active footwork, and teamwork.'
    },
    {
      id: 'sccta-scholarship-awards',
      src: '/images/sccta-scholarship-awards.jpg',
      title: 'Scholarship & Educational Awards',
      category: 'community',
      categoryLabel: 'Community & Teams',
      location: 'Clayton County Community Center',
      aspect: 'wide',
      caption: 'Empowering promising student-athletes with academic stipends, gear grants, and tournament support.'
    },
    {
      id: 'sccta-clayton-clinic',
      src: '/images/sccta-clayton-clinic.png',
      title: 'Saturday Grassroots Clinic',
      category: 'youth',
      categoryLabel: 'Youth & Clinics',
      location: 'Clayton County International Park',
      aspect: 'wide',
      caption: 'High-energy community clinics introducing local children to the lifelong joy of tennis.'
    }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeFilter);

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

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <div className="w-full bg-[#FAF9F5] text-slate-900 font-sans selection:bg-[#8cb0bf] selection:text-[#061326]">
      
      {/* ========================================================================= */}
      {/* 01. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="bg-[#061326] text-white pt-36 pb-20 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#0059a6]/25 blur-[100px]" />
          <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#8cb0bf]/15 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#8cb0bf] border border-white/15 backdrop-blur-md">
            <Camera className="w-3.5 h-3.5 text-[#8cb0bf]" />
            <span>SCCTA Community Moments & Triumphs</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight max-w-4xl mx-auto">
            Capturing Excellence, <br />
            <span className="bg-gradient-to-r from-white via-[#8cb0bf] to-[#6f94a4] bg-clip-text text-transparent">
              Character & Champions.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore moments of joy, competitive breakthroughs, and camaraderie from our youth clinics, USTA tournaments, leadership camps, and community milestones across Clayton County.
          </p>

          {/* Quick Metrics */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Sanctioned Tournament Victories</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#8cb0bf]" />
              <span>Hundreds of Youth Empowered</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Official USTA NJTL Chapter</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. GALLERY FILTER BAR & PHOTO GRID */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Filter Chips Bar */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#061326] text-[#8cb0bf] shadow-md scale-105 border border-[#8cb0bf]/40' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Photos Count Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
            <span>Showing <strong>{filteredPhotos.length}</strong> photographs</span>
            <span className="text-[11px] text-slate-400">Click any photograph to view high-resolution</span>
          </div>

          {/* Dynamic Grid Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {filteredPhotos.map((photo, idx) => (
              <ScrollReveal 
                key={photo.id}
                delay={(idx % 6) * 70}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
              >
                <div 
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className="relative overflow-hidden bg-slate-900"
                >
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />

                  {/* Gradient Vignette on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-xs">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  {/* Top Right Zoom Icon */}
                  <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#8cb0bf] font-semibold">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="line-clamp-1">{photo.location}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#8cb0bf] transition-colors leading-snug line-clamp-1">
                      {photo.title}
                    </h3>
                  </div>
                </div>

                {/* Card Caption Footer */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {photo.caption}
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#0059a6]">
                    <span>South Clayton CTA</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View Full Photo →
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. CALL TO ACTION / CONTRIBUTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#061326] text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#8cb0bf]">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Support the Next Generation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Help Us Capture More Championship Moments
          </h2>

          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Every dollar donated provides a child with a tennis racquet, free clinic instruction, and the chance to represent Clayton County in sanctioned tournaments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenDonate?.()}
              className="px-6 py-3.5 rounded-xl bg-[#8cb0bf] hover:bg-[#a2c4d2] text-[#061326] font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 fill-[#061326]" />
              <span>Donate to SCCTA</span>
            </button>
            <button
              onClick={() => setActivePage('programs')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all active:scale-95"
            >
              <span>Explore Programs & Clinics</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. LIGHTBOX MODAL WITH FULLSCREEN PREVIEW & CONTROLS */}
      {/* ========================================================================= */}
      {currentPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-[#061326] rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col max-h-[92vh] animate-scaleUp">
            
            {/* Lightbox Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 text-white bg-black/40">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#8cb0bf] text-[#061326]">
                  {currentPhoto.categoryLabel}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedPhotoIndex + 1} of {filteredPhotos.length}
                </span>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Container with Navigation Arrows */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[480px]">
              <img 
                src={currentPhoto.src} 
                alt={currentPhoto.title}
                className="max-h-[68vh] w-auto max-w-full object-contain mx-auto select-none" 
              />

              {/* Prev Button */}
              <button
                onClick={() => setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Caption Footer */}
            <div className="p-5 sm:p-6 bg-slate-950 text-white border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  {currentPhoto.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#8cb0bf]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentPhoto.location}</span>
                </div>
                <p className="text-xs text-slate-300 max-w-2xl pt-1">
                  {currentPhoto.caption}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span>Use keyboard ← / → to navigate</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
