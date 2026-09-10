import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Trophy, 
  ExternalLink, 
  MapPin, 
  CheckCircle2, 
  Quote, 
  Share2,
  Building2,
  Award,
  Calendar,
  Users,
  ShieldCheck,
  Compass,
  BookOpen,
  Star,
  ArrowRight
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function SimpsonCamp({ setActivePage, onOpenDonate, onOpenProgramFinder }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeDayTab, setActiveDayTab] = useState(0);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const scheduleDays = [
    {
      day: "Day 1",
      number: "01",
      title: "Ali’s Legacy & Humanitarian Trust",
      location: "Muhammad Ali Center · Louisville, KY",
      theme: "Character & Purpose",
      icon: Compass,
      highlight: "Immersive exploration of Muhammad Ali's 6 core principles: Confidence, Conviction, Dedication, Giving, Respect, and Spirituality.",
      details: [
        "Interactive team-building and trust workshops inside the Ali Center galleries",
        "Reflective seminar connecting civil rights heritage with modern student-athlete leadership",
        "Official welcome gala connecting campers and chaperones from 9 Southern states"
      ]
    },
    {
      day: "Day 2",
      number: "02",
      title: "Champions’ Clinic & On-Court Mastery",
      location: "Central Park Tennis Complex",
      theme: "Biomechanics & Strategy",
      icon: Trophy,
      highlight: "High-intensity technical drills and tactical point construction led by national champions and USTA clinicians.",
      details: [
        "Masterclass with USTA Southern leaders and Father-Daughter National Champions",
        "Live-ball rally evaluations, footwork agility stations, and serve mechanics",
        "Mental resilience training: learning to navigate pressure on break points"
      ]
    },
    {
      day: "Day 3",
      number: "03",
      title: "Juneteenth Tournament & Heritage Bowl",
      location: "Petersburg Park & University of Louisville",
      theme: "Competition & Culture",
      icon: BookOpen,
      highlight: "Sanctioned matchplay at the Charles Crawford Tournament combined with African American tennis heritage quiz competitions.",
      details: [
        "Head-to-head matchplay competing with pride and exemplary court etiquette",
        "Juneteenth commemorative ceremony celebrating pioneers of Black tennis history",
        "High-energy collegiate campus tour and academic scholarship information session"
      ]
    },
    {
      day: "Day 4",
      number: "04",
      title: "PTR Workshop & Sportsmanship Gala",
      location: "Louisville Tennis Facilities",
      theme: "Certification & Recognition",
      icon: Award,
      highlight: "Professional coaching workshop with Master Clinician Frank Adams followed by the awards and graduation ceremony.",
      details: [
        "Hands-on coaching pedagogy workshop with PTR Master Clinician Frank Adams",
        "Presentation of Sportsmanship, Leadership, and Academic Dedication trophies",
        "Campers' Leadership Pledge: bringing transformative energy back to Clayton County"
      ]
    }
  ];

  const delegationCards = [
    {
      image: "/images/simpson-camp-sccta-player-chaperone.jpg",
      badge: "Community Mentor & Chaperone",
      badgeStyle: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      title: "Selfless Mentorship & Guidance",
      subtitle: "24/7 Youth Care & Moral Support",
      description: "Heartfelt gratitude to our dedicated SCCTA chaperone who traveled to Louisville, ensuring our youth's well-being, discipline, and emotional encouragement every single hour.",
      takeaways: [
        "Exemplifying Arthur Ashe's ethos of servant leadership",
        "Safe, structured chaperone care across all travel & venues",
        "Fostering camaraderie, daily reflections, and team pride"
      ]
    },
    {
      image: "/images/simpson-camp-sccta-juniors.jpg",
      badge: "Clayton County Athletes",
      badgeStyle: "bg-[#8cb0bf]/20 text-[#8cb0bf] border-[#8cb0bf]/30",
      title: "Integrity & Tenacity on the Court",
      subtitle: "Juneteenth Tournament Competitors",
      description: "Our SCCTA junior student-athletes represented Clayton County against top players from nine Southern states with remarkable poise, sportsmanship, and determination.",
      takeaways: [
        "Fierce competitive drive during the Charles Crawford Memorial draws",
        "Commended by tournament directors for fair line calls and etiquette",
        "Direct clinic coaching from former touring professionals"
      ]
    },
    {
      image: "/images/simpson-camp-sccta-player-portrait.jpg",
      badge: "Future NJTL Scholar-Leader",
      badgeStyle: "bg-amber-400/20 text-amber-300 border-amber-400/30",
      title: "Confidence & Lifelong Growth",
      subtitle: "Off-Court Character & Vision",
      description: "Returning to Clayton County not just with sharper tennis strokes, but with broadened horizons, college aspirations, and the confidence to lead peers in the classroom.",
      takeaways: [
        "Active participation in Ali Center human rights discussions",
        "Lifelong bonds built with peer NJTL scholars across the South",
        "Inspired to mentor younger children at South Clayton clinics"
      ]
    }
  ];

  const partners = [
    { name: "Southern Tennis Foundation", role: "Primary Camp Sponsor", region: "USTA Southern" },
    { name: "Lenny Simpson Foundation", role: "Visionary & Camp Founder", region: "Wilmington, NC" },
    { name: "USTA Southern Section", role: "9-State Governance", region: "Atlanta, GA" },
    { name: "USTA Kentucky", role: "Host Association", region: "Louisville, KY" },
    { name: "Frank Adams (PTR)", role: "Master Clinician / PTR", region: "National Faculty" },
    { name: "Rising Stars & West Louisville TC", role: "Local Host Partners", region: "Louisville, KY" }
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#8cb0bf] selection:text-[#061326]">
      
      {/* ========================================================================= */}
      {/* 01. HERO SECTION (RICH TWO-COLUMN EDITORIAL DISPLAY) */}
      {/* ========================================================================= */}
      <section className="bg-[#050e1a] text-white pt-36 pb-20 relative overflow-hidden border-b border-white/10">
        {/* Background Ambient Glow & Photo Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#0059a6]/25 blur-[120px]" />
          <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#8cb0bf]/15 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Narrative & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#8cb0bf] border border-white/15 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#8cb0bf]" />
                <span>USTA Southern NJTL · Louisville, KY</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
                Honoring Vision, <br />
                <span className="bg-gradient-to-r from-white via-[#8cb0bf] to-[#6f94a4] bg-clip-text text-transparent">
                  Empowering Future Champions.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                South Clayton Community Tennis Association (SCCTA) extends our deepest gratitude to the <strong className="text-white font-semibold">Southern Tennis Foundation</strong>, tennis pioneer <strong className="text-white font-semibold">Lenny Simpson</strong>, <strong className="text-white font-semibold">USTA Southern</strong>, and <strong className="text-white font-semibold">USTA Kentucky</strong> for hosting twenty-seven aspiring young leaders in Louisville, Kentucky.
              </p>

              {/* 4 Metrics Grid with Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#8cb0bf]/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Users className="w-4 h-4 text-[#8cb0bf]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Campers</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-display">27</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Selected Leaders</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Calendar className="w-4 h-4 text-amber-300" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Duration</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-300 font-display">4 Days</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Intensive Camp</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#8cb0bf]/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <MapPin className="w-4 h-4 text-[#8cb0bf]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Territory</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#8cb0bf] font-display">9 States</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">USTA Southern</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-400/40 transition-colors">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Tuition</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">100%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">STF Funded</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a 
                  href="https://www.southerntennisfoundation.org/news/2025-lenny-simpson-njtl-leadership-camp-empowers-future-leaders-in-louisville"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#8cb0bf] hover:bg-[#a2c4d2] text-[#061326] font-bold text-xs shadow-lg transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Read STF Official Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onOpenDonate?.()}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition-all flex items-center gap-2 active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  <span>Sponsor Future Campers</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="px-4 py-3 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Featured Spotlight Card with Lenny Simpson & Campers */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                  <img 
                    src="/images/lenny-simpson-camp.jpg" 
                    alt="Lenny Simpson NJTL Leadership Campers in Louisville, KY" 
                    className="w-full h-full object-cover object-center" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#8cb0bf] border border-white/20 shadow-md">
                      Annual NJTL Delegation
                    </span>
                  </div>

                  {/* Floating Micro-Quote on the Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white">
                    <p className="text-xs italic text-slate-200 leading-snug">
                      “Tennis gives our young people the discipline, dignity, and education to become the champions of tomorrow.”
                    </p>
                    <div className="text-[10px] font-bold text-[#8cb0bf] uppercase tracking-wider mt-1">
                      — Lenny Simpson · Tennis Legend & NJTL Founder
                    </div>
                  </div>
                </div>

                {/* Micro Meta Strip below photo */}
                <div className="p-3 pt-4 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Trophy className="w-3.5 h-3.5 text-amber-300" />
                    <span>Louisville, Kentucky Delegation</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">SCCTA Chapter</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. HISTORICAL CONTEXT / ARTHUR ASHE & LENNY SIMPSON LINEAGE */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#061326] via-[#102A33] to-[#061326] p-6 sm:p-10 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8cb0bf]">
                <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>Historic Lineage & Legacy</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                From Dr. Robert Johnson & Arthur Ashe to South Clayton CTA
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Lenny Simpson was mentored by Dr. Robert Johnson alongside Arthur Ashe in Wilmington, NC, and at age 15 became the youngest male to compete at the U.S. National Championships. Having SCCTA juniors participate in this leadership camp connects Clayton County directly to the roots of African American tennis history.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="text-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-black text-white font-display">1968</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Arthur Ashe US Open</div>
              </div>
              <div className="text-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl font-black text-[#8cb0bf] font-display">NJTL</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">National Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. OUR CLAYTON COUNTY DELEGATION & MENTORS (UPGRADED EDITORIAL CARDS) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>Clayton County Delegation & Mentors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Honoring Our Athletes & Dedicated Chaperone
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We celebrate our South Clayton CTA student-athletes who competed with character in Louisville, and our selfless chaperone whose care and leadership made this transformative journey possible.
            </p>
          </div>

          {/* 3 Detailed Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {delegationCards.map((card, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={idx * 120}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#8cb0bf] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Banner with Tag */}
                  <div className="relative h-64 w-full bg-slate-950 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                    
                    <div className="absolute top-3.5 left-3.5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border backdrop-blur-md ${card.badgeStyle}`}>
                        {card.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <div className="text-xs font-medium text-[#8cb0bf] uppercase tracking-wider">
                        {card.subtitle}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-0.5">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body & Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Key Experience Milestones
                      </div>
                      {card.takeaways.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-700">
                    <span>South Clayton CTA</span>
                    <span className="text-[#0059a6]">Clayton County, GA</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Large Quote Callout */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#8cb0bf]/10 blur-xl pointer-events-none" />
            <Quote className="w-10 h-10 text-[#8cb0bf] mx-auto opacity-70" />
            <p className="text-sm sm:text-base text-slate-800 italic font-medium leading-relaxed max-w-2xl mx-auto">
              “To Mr. Lenny Simpson, the Southern Tennis Foundation, USTA Southern, and USTA Kentucky: your investment in our young leaders proves tennis is far bigger than the boundaries of a court.”
            </p>
            <div className="pt-2">
              <div className="font-extrabold text-xs sm:text-sm text-slate-950 font-display">
                South Clayton Community Tennis Association, Inc.
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                501(c)(3) Nonprofit · Official USTA NJTL Chapter
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. 4-DAY LEADERSHIP JOURNEY (INTERACTIVE TIMELINE & DETAILED AGENDA) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8cb0bf]">
              Camp Journey & Itinerary
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Four Days of Athletics, Heritage & Purpose
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              A meticulously structured 4-day curriculum balancing high-performance tennis instruction with off-court civil rights history and leadership development.
            </p>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {scheduleDays.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeDayTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveDayTab(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all relative ${
                    isActive 
                      ? 'bg-[#061326] text-white border-[#061326] shadow-lg scale-[1.02]' 
                      : 'bg-[#FAF9F5] text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                      isActive ? 'bg-[#8cb0bf] text-[#061326]' : 'bg-slate-200 text-slate-800'
                    }`}>
                      {item.day}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#8cb0bf]' : 'text-slate-400'}`} />
                  </div>
                  <div className={`text-xs font-bold font-display line-clamp-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {item.theme}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Day Detail Display Card */}
          {scheduleDays[activeDayTab] && (
            <div className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm transition-all animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Summary Info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#061326] text-[#8cb0bf]">
                    <span>Stage {scheduleDays[activeDayTab].number}</span>
                    <span>·</span>
                    <span>{scheduleDays[activeDayTab].day}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 leading-tight">
                    {scheduleDays[activeDayTab].title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <MapPin className="w-4 h-4 text-[#0059a6] shrink-0" />
                    <span>{scheduleDays[activeDayTab].location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {scheduleDays[activeDayTab].highlight}
                  </p>
                </div>

                {/* Right: Detailed Itinerary Bullet Points */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Curriculum & Program Highlights</span>
                  </div>

                  <div className="space-y-3.5">
                    {scheduleDays[activeDayTab].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {dIdx + 1}
                        </div>
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Quick 4-Day Complete Overview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {scheduleDays.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveDayTab(idx)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  activeDayTab === idx 
                    ? 'border-[#8cb0bf] bg-white shadow-md ring-2 ring-[#8cb0bf]/20' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-1.5">
                  <span>{item.day}</span>
                  <span className="text-[10px] text-slate-500 truncate max-w-[120px]">{item.location.split('·')[0]}</span>
                </div>
                <div className="font-bold text-sm text-slate-900 font-display line-clamp-1">
                  {item.title}
                </div>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. COMMUNITY PARTNERS & CAMP ORGANIZERS GRID */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#061326] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#8cb0bf] border border-white/10">
              <Building2 className="w-3.5 h-3.5" />
              <span>Camp Organizers & Community Supporters</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
              With Appreciation to the Organizations Behind the Camp
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We extend our heartfelt gratitude to the foundational sponsors and host tennis centers whose resources made this life-changing trip 100% free of charge for participating youth.
            </p>
          </div>

          {/* Partner Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, pIdx) => (
              <div 
                key={pIdx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#8cb0bf]/40 transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-sm text-white font-display">{p.name}</div>
                  <div className="text-xs text-[#8cb0bf] mt-0.5">{p.role}</div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-2 py-1 rounded bg-white/5 border border-white/10">
                  {p.region}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action Banner: Sponsor a Camper */}
          <div className="bg-gradient-to-r from-slate-900 via-[#102A33] to-slate-900 rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8cb0bf]">
                Support Clayton County Youth Tennis
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                Help Us Send More Clayton County Kids to Future Camps
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Your tax-deductible contributions directly fund tournament entry fees, junior racquet loaners, and travel scholarships for youth from underserved neighborhoods across South Clayton.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onOpenDonate?.()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#8cb0bf] hover:bg-[#a2c4d2] text-[#061326] font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 fill-[#061326]" />
                <span>Sponsor a Camper</span>
              </button>
              <button
                onClick={() => setActivePage('programs')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
