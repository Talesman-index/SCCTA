import React, { useState } from 'react';
import { 
  Sparkles, 
  Trophy, 
  BookOpen, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Calendar, 
  ArrowUpRight,
  Target,
  Zap,
  GraduationCap,
  Shield,
  Activity,
  Layers,
  CreditCard,
  DollarSign,
  Check,
  X,
  ShieldCheck,
  Heart,
  Info,
  Phone,
  Mail
} from 'lucide-react';
import { BALL_STAGES } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';

export default function Programs({ setActivePage, onOpenProgramFinder, onOpenDonate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeBallStageId, setActiveBallStageId] = useState('red');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bookingStep, setBookingStep] = useState('select'); // 'select' | 'details' | 'confirmed'
  const [formData, setFormData] = useState({
    playerName: '',
    playerAge: '',
    contactName: '',
    email: '',
    phone: '',
    venue: 'Clayton County International Park Tennis Center',
    dayTime: 'Tuesday & Thursday 4:30 PM - 5:30 PM',
    notes: '',
    paymentMethod: 'square' // 'square' | 'on-court'
  });

  const lessonProducts = [
    {
      id: 'group-lesson',
      title: 'Pay for Lesson',
      subtitle: 'Group Development Clinic',
      price: '22.00',
      priceNum: 22,
      period: 'per session',
      badge: 'Group Program',
      badgeColor: 'bg-[#8cb0bf] text-[#061326]',
      image: '/images/course-group-lesson.jpg',
      description: 'Progressive group session focusing on active footwork, point construction, live-ball rally drills, and matchplay fundamentals.',
      features: [
        '60 minutes of high-energy structured coaching',
        'Red, Orange, Green & Yellow ball groups (ages 4–18)',
        'Low student-to-coach ratio for personalized attention',
        'Complimentary junior racquet loaners provided'
      ],
      cta: 'Book & Pay $22.00'
    },
    {
      id: 'private-lesson',
      title: 'Private Lesson',
      subtitle: '1-on-1 Personalized Coaching',
      price: '40.00',
      priceNum: 40,
      period: 'per hour',
      badge: 'Individualized Mastery',
      badgeColor: 'bg-amber-400 text-slate-950',
      image: '/images/course-private-lesson.jpg',
      description: 'Dedicated one-on-one master instruction tailored to the player’s specific technical biomechanics, serve mechanics, and tactical strategy.',
      features: [
        'Full 60 minutes with dedicated certified SCCTA Coach',
        'Instant high-speed video stroke review & biomechanics',
        'Custom tournament strategy & mental toughness drills',
        'Open to all ages (Juniors & Adult Competitors)'
      ],
      cta: 'Book & Pay $40.00'
    }
  ];

  const handleStartBooking = (product) => {
    setSelectedProduct(product);
    setBookingStep('details');
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setBookingStep('confirmed');
  };

  const resetBookingModal = () => {
    setSelectedProduct(null);
    setBookingStep('select');
  };

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'youth', label: 'Youth Tennis Pathway' },
    { id: 'competitive', label: 'Competitive & JTT' },
    { id: 'education', label: 'Education & Mentoring' },
    { id: 'adult', label: 'Adult Tennis & Leagues' },
  ];

  const ballStageDetails = {
    red: {
      id: "red",
      name: "Red Ball Foundations",
      number: "01",
      ages: "Ages 4–8",
      court: "36' x 18' (Mini Court)",
      ball: "75% Slower & Lower Bounce Foam/Felt",
      racquet: "19\" – 23\" Junior Ultra-Light",
      schedule: "Saturdays 9:00 AM – 10:30 AM",
      venue: "Lovejoy Regional & Clayton County Complex",
      headline: "Start rallying on Day 1. Zero frustration, pure athletic joy.",
      description: "Designed so young beginners experience immediate success. Scaled-down courts and slower-bouncing red balls allow kids to play real rallies from their very first hour.",
      image: "/images/sccta-the-mill-juniors.jpg",
      color: "#EF4444",
      bgGradient: "from-red-500/10 via-red-500/5 to-transparent",
      skills: ["Hand-eye tracking & agility", "Basic rally contact point", "Serving over the mini-net", "Fun team games & coordination"]
    },
    orange: {
      id: "orange",
      name: "Orange Ball Development",
      number: "02",
      ages: "Ages 8–10",
      court: "60' x 21' (3/4 Court)",
      ball: "50% Slower than Standard Yellow",
      racquet: "23\" – 25\" Junior Composite",
      schedule: "Tue & Thu 4:30 PM – 6:00 PM",
      venue: "Clayton County International Park Tennis Center",
      headline: "Expand the court. Build tactical depth and swing shapes.",
      description: "Players transition to a 60-foot court, learning topspin fundamentals, directional control, serve consistency, and basic singles/doubles positioning.",
      image: "/images/sccta-clayton-clinic.png",
      color: "#F97316",
      bgGradient: "from-orange-500/10 via-orange-500/5 to-transparent",
      skills: ["Topspin swing paths", "Directional rally placement", "Point construction & footwork", "First competitive mini-matchplay"]
    },
    green: {
      id: "green",
      name: "Green Ball Intermediate",
      number: "03",
      ages: "Ages 10–12",
      court: "78' x 27' (Full Regulation Court)",
      ball: "25% Slower Bounce Compression",
      racquet: "25\" – 26\" Performance Junior",
      schedule: "Mon & Wed 5:00 PM – 6:30 PM",
      venue: "Clayton County Tennis Center",
      headline: "Full-court mastery. Transition into sanctioned junior play.",
      description: "Played on the full 78-foot regulation court with green-dot balls that stay in the ideal strike zone. Prepares juniors for sanctioned USTA Junior Circuit and JTT matches.",
      image: "/images/sccta-the-mill-group.jpg",
      color: "#22C55E",
      bgGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      skills: ["Full-court footwork recovery", "Tactical depth & spin variation", "Mental composure under pressure", "Junior Circuit tournament entry"]
    },
    yellow: {
      id: "yellow",
      name: "Yellow Ball Performance",
      number: "04",
      ages: "Ages 12–18+",
      court: "78' x 27' / 36' (Full Regulation)",
      ball: "100% Regulation Tour Spec",
      racquet: "26\" – 27\"+ Adult Performance",
      schedule: "Daily Afternoon Elite Squads",
      venue: "SCCTA High-Performance Hub",
      headline: "The complete tournament game. College readiness & varsity.",
      description: "Full speed regulation tennis tailored for tournament competitors, high school varsity leaders, and players preparing for college tennis scholarship opportunities.",
      image: "/images/sccta-clayton-team.jpg",
      color: "#EAB308",
      bgGradient: "from-[#EAB308]/10 via-[#EAB308]/5 to-transparent",
      skills: ["Aggressive weapon development", "USTA Level 5–7 sectionals", "Match video strategy analysis", "NCAA recruiting portfolio"]
    }
  };

  const currentStage = ballStageDetails[activeBallStageId];

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* 01. HERO HEADER (WITH PHOTOGRAPHIC BACKGROUND) */}
      <section className="bg-slate-950 text-white pt-36 pb-24 relative overflow-hidden">
        
        {/* Photographic Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sccta-the-mill-juniors.jpg" 
            alt="Young player practicing tennis at SCCTA" 
            className="w-full h-full object-cover opacity-25 object-[center_35%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50" />
        </div>

        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8cb0bf]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#8cb0bf] shadow-lg">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm">
              <img src="/logo.png" alt="SCCTA" className="w-full h-full object-contain" />
            </div>
            <span>SCCTA Programs</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
            There's a place on the court <br />
            <span className="text-[#8cb0bf]">for everyone.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Whether you're discovering tennis, developing your game, competing in sanctioned tournaments, or returning to the sport, SCCTA provides structured pathways to grow.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenProgramFinder}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#061326] font-extrabold text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] active:scale-95"
            >
              Interactive Program Matcher
            </button>
            <a
              href="#lessons-coaching"
              className="px-5 py-3.5 rounded-xl bg-[#8cb0bf] hover:bg-[#a2c4d2] text-[#061326] font-extrabold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <span>Private Lessons & Clinics</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenDonate}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all active:scale-95"
            >
              Sponsor a Youth Player
            </button>
          </div>
        </div>
      </section>

      {/* 03. REDESIGNED YOUTH PATHWAY: INTERACTIVE BALL PROGRESSION HUB */}
      <section className="py-24 bg-[#FAF9F5] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Section Header */}
            <ScrollReveal className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
                <span>USTA Progressive Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
                Youth Ball Progression Hub
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Age-tailored ball compression and court dimensions ensure kids build real technique without developing bad habits. Click a stage to explore the specifications:
              </p>
            </ScrollReveal>

            {/* Tactile Ball Stage Switcher Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs">
              {[
                { id: 'red', label: 'Red Ball', subtitle: 'Ages 4–8 · 36\' Court', color: '#EF4444' },
                { id: 'orange', label: 'Orange Ball', subtitle: 'Ages 8–10 · 60\' Court', color: '#F97316' },
                { id: 'green', label: 'Green Ball', subtitle: 'Ages 10–12 · Full Court', color: '#22C55E' },
                { id: 'yellow', label: 'Yellow Ball', subtitle: 'Ages 12+ · Regulation', color: '#EAB308' },
              ].map((stage) => {
                const isActive = activeBallStageId === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveBallStageId(stage.id)}
                    className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-3 ${
                      isActive 
                        ? 'bg-[#102A33] text-white shadow-md' 
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span 
                      className="w-4 h-4 rounded-full shrink-0 shadow-xs" 
                      style={{ backgroundColor: stage.color }} 
                    />
                    <div>
                      <div className="font-extrabold font-display text-sm leading-tight">
                        {stage.label}
                      </div>
                      <div className={`text-[10px] ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {stage.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Immersive Showcase Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* Left: Photographic Immersion with Specs Overlay */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="relative rounded-3xl overflow-hidden shadow-md h-80 sm:h-[440px] bg-slate-950 group">
                    <img 
                      src={currentStage.image} 
                      alt={currentStage.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Top Floating Stage Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase bg-slate-950/80 backdrop-blur-md text-[#8cb0bf] border border-white/15 shadow">
                        Stage {currentStage.number} · {currentStage.ages}
                      </span>
                    </div>

                    {/* Bottom Venue / Schedule Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-white space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-[#8cb0bf] font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{currentStage.schedule}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300 text-[11px] truncate">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-[#8cb0bf]" />
                        <span>{currentStage.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Detailed Technical Specs & Curriculum */}
                <div className="lg:col-span-6 space-y-6">
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#8cb0bf] mb-2 border border-blue-100">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentStage.color }} />
                      <span>{currentStage.ages}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 leading-tight">
                      {currentStage.name}
                    </h3>
                    
                    <p className="text-sm font-semibold text-slate-800 mt-2">
                      “{currentStage.headline}”
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {currentStage.description}
                    </p>
                  </div>

                  {/* 4 Technical Gear Spec Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5">
                      <div className="text-[10px] font-bold uppercase text-slate-400">Court Size</div>
                      <div className="font-bold text-slate-900">{currentStage.court}</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5">
                      <div className="text-[10px] font-bold uppercase text-slate-400">Ball Physics</div>
                      <div className="font-bold text-slate-900">{currentStage.ball}</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5">
                      <div className="text-[10px] font-bold uppercase text-slate-400">Racquet Recommendation</div>
                      <div className="font-bold text-slate-900">{currentStage.racquet}</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5">
                      <div className="text-[10px] font-bold uppercase text-slate-400">Supervision</div>
                      <div className="font-bold text-slate-900">Certified USTA Coaches</div>
                    </div>
                  </div>

                  {/* Skills Checklist */}
                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-900">Key Development Milestones:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {currentStage.skills.map((s, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8cb0bf] shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onOpenProgramFinder}
                      className="px-6 py-3.5 rounded-xl bg-[#102A33] hover:bg-[#173B4A] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#102A33]/20 active:scale-95"
                    >
                      Check Availability
                    </button>

                    <button
                      onClick={() => handleStartBooking(lessonProducts[0])}
                      className="px-5 py-3.5 rounded-xl bg-[#8cb0bf] hover:bg-[#a2c4d2] text-[#061326] font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                    >
                      Book & Pay ($22)
                    </button>

                    <button
                      onClick={() => setActivePage('contact')}
                      className="text-xs font-bold text-slate-600 hover:text-[#8cb0bf] py-2 transition-colors ml-1"
                    >
                      Ask Coach →
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

      {/* ========================================================================= */}
      {/* 03B. LESSONS & COACHING: PRIVATE LESSONS, GROUP CLINICS & VALUE PASSES */}
      {/* ========================================================================= */}
      <section id="lessons-coaching" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8cb0bf]/20 text-[#061326]">
              <Sparkles className="w-3.5 h-3.5 text-[#8cb0bf]" />
              Lessons & Player Instruction
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
              Private Lessons & Group Clinics
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tailored 1-on-1 coaching, high-energy group clinics, and flexible monthly passes with certified SCCTA professionals. Instant booking and secure checkout powered by Square.
            </p>
          </div>

          {/* Core Lesson Pricing Cards (Pay for Lesson $22 & Private Lesson $40) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {lessonProducts.map((p, idx) => (
              <ScrollReveal 
                key={p.id}
                delay={idx * 120}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#8cb0bf] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Header: Badge & Subtitle */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-xs ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {p.subtitle}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h3 className="text-2xl font-bold font-display text-slate-950 group-hover:text-[#0059a6] transition-colors">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black font-display text-slate-900">${p.price}</span>
                      <span className="text-xs text-slate-500 font-medium">{p.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Features List */}
                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    {p.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#8cb0bf] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Booking Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => handleStartBooking(p)}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#102A33] hover:bg-[#173B4A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 group-hover:bg-[#8cb0bf] group-hover:text-[#061326]"
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 04. COMPETITIVE DEVELOPMENT */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal className="lg:col-span-6 space-y-6" direction="right">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
                <span>Sanctioned Tournament Play</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
                Competitive Development
              </h2>
              <div className="text-lg font-bold text-slate-900">Take your game further.</div>
              <p className="text-slate-600 text-sm leading-relaxed">
                For players ready for competition, SCCTA provides opportunities to gain meaningful match experience through Junior Team Tennis, Junior Circuit trophy events, and sanctioned sectional tournaments.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-800 pt-2">
                <span className="px-3.5 py-1.5 bg-[#FAF9F5] border border-slate-200 rounded-xl shadow-xs">Junior Circuit</span>
                <span className="px-3.5 py-1.5 bg-[#FAF9F5] border border-slate-200 rounded-xl shadow-xs">Junior Team Tennis (JTT)</span>
                <span className="px-3.5 py-1.5 bg-[#FAF9F5] border border-slate-200 rounded-xl shadow-xs">USTA Level 5/6 Tournaments</span>
                <span className="px-3.5 py-1.5 bg-[#FAF9F5] border border-slate-200 rounded-xl shadow-xs">Match Play Film Analysis</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActivePage('tournaments')}
                  className="px-6 py-3.5 rounded-xl bg-[#102A33] hover:bg-[#173B4A] text-white font-bold text-xs shadow-md shadow-[#102A33]/20 transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Explore Tournaments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-6 flex justify-center" direction="left" delay={150}>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 w-full max-w-md h-80 sm:h-[440px] bg-slate-950">
                <img 
                  src="/images/junior-competitive-coaching.jpg" 
                  alt="SCCTA junior competitive coaching session on court"
                  className="w-full h-full object-cover object-[center_40%] hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 05. EDUCATION & MENTORING */}
      <section className="py-24 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal className="lg:col-span-6 order-2 lg:order-1 flex justify-center" direction="right">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 w-full max-w-md space-y-4 shadow-sm">
                <h3 className="text-xl font-extrabold text-slate-950 font-display">
                  Beyond the Baseline Core Pillars
                </h3>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-xs">
                    <strong className="text-slate-950 block font-bold mb-1">Academic Study Hall & Tutoring</strong>
                    Mandatory weekly homework check and peer tutoring labs before entering the court.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-xs">
                    <strong className="text-slate-950 block font-bold mb-1">USTA Southern Essay Contests</strong>
                    Annual writing competitions honoring Arthur Ashe's legacy of character and education.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-xs">
                    <strong className="text-slate-950 block font-bold mb-1">College & Scholarship Pathways</strong>
                    Assistance with NCAA eligibility, SAT prep, resume workshops, and campus visits.
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-6 order-1 lg:order-2 space-y-6" direction="left" delay={150}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
                <span>Holistic Growth</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
                Education & Mentoring
              </h2>
              <div className="text-lg font-bold text-slate-900">Development doesn't stop at the court.</div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our commitment to young people extends beyond tennis. Through mentoring, education, and leadership development, SCCTA encourages players to pursue academic excellence, college degrees, and lifelong opportunities.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setActivePage('about')}
                  className="px-6 py-3.5 rounded-xl bg-[#102A33] hover:bg-[#173B4A] text-white font-bold text-xs shadow-md shadow-[#102A33]/20 transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Read Student Stories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 06. ADULT TENNIS */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <ScrollReveal className="lg:col-span-6 space-y-6" direction="right">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
                  <span>Community Clinics & Leagues</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
                  Adult Tennis
                </h2>
                <div className="text-lg font-bold text-slate-900">It's never too late to play.</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our adult programs create welcoming opportunities for beginners and developing players to learn the game, stay active, improve their strokes, and become part of the local tennis community.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-800 pt-2">
                  <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                    <Target className="w-4 h-4 text-[#8cb0bf] shrink-0" />
                    <span>Adult Beginner 101 Clinics</span>
                  </div>
                  <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                    <Activity className="w-4 h-4 text-[#8cb0bf] shrink-0" />
                    <span>Cardio Tennis Fitness Drills</span>
                  </div>
                  <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-[#8cb0bf] shrink-0" />
                    <span>Social Doubles & Round Robins</span>
                  </div>
                  <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                    <Trophy className="w-4 h-4 text-[#8cb0bf] shrink-0" />
                    <span>NTRP Tournament Prep</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActivePage('contact')}
                    className="px-6 py-3.5 rounded-xl bg-[#102A33] hover:bg-[#173B4A] text-white font-bold text-xs shadow-md shadow-[#102A33]/20 transition-all active:scale-95 flex items-center gap-2"
                  >
                    <span>Explore Adult Programs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-6 flex justify-center" direction="left" delay={150}>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 w-full max-w-md h-80 sm:h-[420px] bg-slate-950">
                  <img 
                    src="/images/sccta-clayton-team.jpg" 
                    alt="Community tennis clinic players" 
                    className="w-full h-full object-cover opacity-95 object-[center_30%]"
                  />
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

      {/* ========================================================================= */}
      {/* 07. INTERACTIVE LESSON BOOKING & SQUARE CHECKOUT MODAL */}
      {/* ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn font-sans">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp">
            
            {/* Modal Header */}
            <div className="bg-[#061326] p-6 text-white relative">
              <button 
                onClick={resetBookingModal}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8cb0bf] mb-1">
                <CreditCard className="w-4 h-4" />
                <span>Square Checkout & Registration</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white">
                {selectedProduct.title}
              </h3>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black font-display text-[#8cb0bf]">
                  ${selectedProduct.price}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  USD · Powered by Square
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              
              {bookingStep === 'details' && (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Player Full Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={formData.playerName}
                        onChange={(e) => setFormData({...formData, playerName: e.target.value})}
                        placeholder="e.g. Jordan Smith"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Player Age / Level *
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={formData.playerAge}
                        onChange={(e) => setFormData({...formData, playerAge: e.target.value})}
                        placeholder="e.g. 11 yrs · Orange Ball"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Parent / Contact Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(770) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address (for Square Receipt) *
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="receipt@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Preferred Court Location
                    </label>
                    <select
                      value={formData.venue}
                      onChange={(e) => setFormData({...formData, venue: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none bg-white"
                    >
                      <option value="Clayton County International Park Tennis Center">
                        Clayton County International Park Tennis Center
                      </option>
                      <option value="Lovejoy Regional Park Courts">
                        Lovejoy Regional Park Courts, Hampton
                      </option>
                    </select>
                  </div>

                  {/* Payment Mode Selector */}
                  <div className="pt-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Payment Processing
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div 
                        onClick={() => setFormData({...formData, paymentMethod: 'square'})}
                        className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 text-xs transition-all ${
                          formData.paymentMethod === 'square'
                            ? 'border-[#8cb0bf] bg-blue-50 text-slate-950 font-bold ring-1 ring-[#8cb0bf]'
                            : 'border-slate-200 text-slate-600'
                        }`}
                      >
                        <CreditCard className="w-4 h-4 text-[#8cb0bf]" />
                        <span>Square Card Payment</span>
                      </div>

                      <div 
                        onClick={() => setFormData({...formData, paymentMethod: 'on-court'})}
                        className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 text-xs transition-all ${
                          formData.paymentMethod === 'on-court'
                            ? 'border-[#8cb0bf] bg-blue-50 text-slate-950 font-bold ring-1 ring-[#8cb0bf]'
                            : 'border-slate-200 text-slate-600'
                        }`}
                      >
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        <span>Pay on Court (Square / Cash)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={resetBookingModal}
                      className="px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-xl bg-[#061326] hover:bg-[#102A33] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Confirm & Pay ${selectedProduct.price}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {bookingStep === 'confirmed' && (
                <div className="text-center py-6 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <h4 className="text-2xl font-extrabold font-display text-slate-900">
                    Registration Received!
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.contactName || 'Player'}</strong>. Your spot for <strong className="text-slate-900">{selectedProduct.title} (${selectedProduct.price})</strong> has been reserved at <strong className="text-slate-900">{formData.venue}</strong>.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1.5 max-w-sm mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Player:</span>
                      <span className="font-bold text-slate-900">{formData.playerName || 'Registered Player'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Payment:</span>
                      <span className="font-bold text-emerald-600">${selectedProduct.price} ({formData.paymentMethod === 'square' ? 'Square Online' : 'On-Court Pay'})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Confirmation Sent To:</span>
                      <span className="font-bold text-slate-900 truncate max-w-[180px]">{formData.email || 'your email'}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={resetBookingModal}
                      className="w-full py-3 rounded-xl bg-[#102A33] hover:bg-[#173B4A] text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Done & Return to Programs
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
