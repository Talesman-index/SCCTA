import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  Users, 
  Heart, 
  Calendar, 
  MapPin, 
  Award, 
  Play, 
  CheckCircle2, 
  ArrowUpRight, 
  Phone, 
  Mail, 
  ChevronRight, 
  ChevronLeft, 
  Shield, 
  TrendingUp, 
  Target, 
  Flag, 
  Clock, 
  Activity, 
  Zap, 
  ExternalLink, 
  Flame,
  GraduationCap,
  Quote
} from 'lucide-react';
import { BALL_STAGES, UPCOMING_TOURNAMENTS, IMPACT_STORIES, TEAM_MEMBERS } from '../data/mockData';
import TextRevealScroll from '../components/TextRevealScroll';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import StackedProgramCards from '../components/StackedProgramCards';
import { useScrollPosition } from '../hooks/useParallax';

export default function Home({ setActivePage, onOpenDonate, onOpenProgramFinder, onSelectStory }) {
  const [activeBallTab, setActiveBallTab] = useState('red');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [tournamentFilter, setTournamentFilter] = useState('all');
  const scrollY = useScrollPosition();

  const testimonials = [
    {
      name: "Ashley B. Cooke & Isaiah Kendrick",
      role: "SCCTA NJTL College Scholarship Awardees",
      image: "/images/sccta-scholarship-awards.jpg",
      quote: "SCCTA gave us the foundation to excel in our studies and compete with integrity. The NJTL scholarships and mentorship provided through South Clayton Community Tennis have opened doors for our collegiate and career journeys."
    },
    {
      name: "Marcus Johnson & The Mill Juniors",
      role: "Junior Circuit Clinic Champions",
      image: "/images/sccta-the-mill-juniors.jpg",
      quote: "The coaches at SCCTA believed in us before we even knew how to hold a racquet properly. Climbing through the ball progression clinics at The Mill transformed our game, confidence, and passion for the sport."
    },
    {
      name: "Clayton County Connected Team",
      role: "Community Grassroots Clinic Program",
      image: "/images/sccta-clayton-team.jpg",
      quote: "SCCTA is family. Providing racquets, bags, and structured coaching to over 100 juniors across Clayton County ensures every child gets the chance to experience the joy of tennis."
    }
  ];

  const currentTestimonial = testimonials[currentTestimonialIndex];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const programStack = [
    {
      id: "junior-camp",
      title: "Junior Tennis Development & Camps",
      subtitle: "For young players ready to move from basic training into structured, competitive development and matchplay mastery.",
      image: "/images/sccta-the-mill-juniors.jpg",
      badge: "Ages 4–18 · Progressive Pathway",
      features: [
        { icon: Target, label: "Age group: 4 to 18 years (Red, Orange, Green & Yellow Ball)" },
        { icon: Flag, label: "Technique, footwork movement and point construction" },
        { icon: Clock, label: "8 hours of high intensity training & tutoring weekly" },
        { icon: Activity, label: "Coach-led sessions & live-ball competitive drills" }
      ],
      ctaText: "Enroll in Junior Clinic",
      colorAccent: "#8cb0bf"
    },
    {
      id: "competitive-circuit",
      title: "Competitive Matchplay & Junior Circuit",
      subtitle: "Sanctioned tournament preparation, Junior Team Tennis (JTT), and sectional championship training for ambitious junior athletes.",
      image: "/images/sccta-clayton-clinic.png",
      badge: "Ages 10–18 · Sanctioned Competition",
      features: [
        { icon: Trophy, label: "USTA Level 5–7 tournaments & Junior Circuit non-elimination" },
        { icon: Zap, label: "Point construction, serve & return depth under pressure" },
        { icon: Clock, label: "10+ hours of matchplay, tactical video analysis & conditioning" },
        { icon: Activity, label: "State ranking point optimization with certified coaches" }
      ],
      ctaText: "Join Competitive Circuit",
      colorAccent: "#8cb0bf"
    },
    {
      id: "beyond-baseline",
      title: "Beyond the Baseline Tutoring & Mentorship",
      subtitle: "Connecting tennis and education through academic study halls, Arthur Ashe writing workshops, and college scholarship pathways.",
      image: "/images/sccta-scholarship-awards.jpg",
      badge: "NJTL Academic Labs · All Ages",
      features: [
        { icon: BookOpen, label: "Weekly mandatory study hall & homework tutoring before practice" },
        { icon: Award, label: "Annual USTA Southern Essay Writing Competition workshops" },
        { icon: GraduationCap, label: "NCAA eligibility guidance, SAT prep & college recruiting" },
        { icon: Users, label: "1-on-1 mentorship with certified educators & senior referees" }
      ],
      ctaText: "Explore Academic Labs",
      colorAccent: "#8cb0bf"
    },
    {
      id: "adult-tennis",
      title: "Adult Tennis Clinics & Community Leagues",
      subtitle: "Welcoming programs for adult beginners, cardio fitness enthusiasts, and competitive doubles players across Clayton County.",
      image: "/images/sccta-clayton-team.jpg",
      badge: "Adults · Beginner to 4.5 NTRP",
      features: [
        { icon: Target, label: "Adult Beginner 101 fundamentals & stroke mechanics" },
        { icon: Activity, label: "Cardio tennis sessions for high-energy fitness & footwork" },
        { icon: Trophy, label: "Clayton County Community Adult Doubles Classic entry" },
        { icon: Users, label: "Social round-robins, mixed doubles & community networking" }
      ],
      ctaText: "Join Adult Program",
      colorAccent: "#8cb0bf"
    }
  ];

  const filteredTournaments = tournamentFilter === 'all' 
    ? UPCOMING_TOURNAMENTS 
    : tournamentFilter === 'junior' 
      ? UPCOMING_TOURNAMENTS.filter(t => t.divisions.toLowerCase().includes('junior') || t.divisions.toLowerCase().includes('boys'))
      : UPCOMING_TOURNAMENTS.filter(t => t.level.toLowerCase().includes('adult') || t.title.toLowerCase().includes('adult'));

  return (
    <div className="w-full bg-white text-slate-900 overflow-hidden font-sans">
      
      {/* ========================================================================= */}
      {/* 01. HERO SECTION (WITH SILKY PARALLAX TRANSLATION) */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex items-end pb-16 sm:pb-24 pt-32 overflow-hidden bg-slate-950">
        
        {/* Parallax Hero Background Image */}
        <div 
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${Math.min(scrollY * 0.18, 120)}px, 0) scale(${1 + Math.min(scrollY * 0.0003, 0.05)})`,
            transition: 'transform 0.1s linear'
          }}
        >
          <img 
            src="/images/sccta-hero-actual.png" 
            alt="South Clayton Community Tennis Association Clayton Connected Team at Parks and Recreation" 
            className="w-full h-full object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
        </div>

        {/* Content Aligned to Bottom-Left with Staggered Entry */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-6">
            
            {/* Official SCCTA Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#8cb0bf] shadow-lg">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm">
                <img src="/logo.png" alt="SCCTA Logo" className="w-full h-full object-contain" />
              </div>
              <span>Official USTA / NJTL Chapter</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.08]">
              Structured training <br />
              for serious players.
            </h1>

            <p className="text-sm sm:text-base text-slate-200/90 font-normal leading-relaxed max-w-lg">
              Train with internationally certified coaches in focused sessions designed to improve your game. SCCTA empowers young people through tennis, education, and mentorship in Clayton County.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenProgramFinder}
                className="px-6 py-3 rounded-xl bg-[#8cb0bf] hover:bg-[#7ba0b0] text-[#061326] font-bold text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(140, 176, 191,0.45)] hover:shadow-[0_6px_25px_rgba(140, 176, 191,0.6)] active:scale-95 flex items-center gap-2"
              >
                <span>Find a Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActivePage('tournaments')}
                className="inline-flex items-center gap-2 text-white hover:text-[#8cb0bf] text-xs sm:text-sm font-semibold transition-colors py-3 px-2"
              >
                <span>View Tournaments</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute bottom-6 right-6 z-10 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-slate-950 text-xs font-bold shadow-xl border border-slate-200">
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-xs">
            <img src="/logo.png" alt="SCCTA" className="w-full h-full object-contain" />
          </div>
          <span className="text-[#8cb0bf] font-extrabold">SCCTA Tennis Academy</span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. ABOUT SECTION WITH REVEALED TEXT & ANIMATED NUMBER COUNTERS */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white relative border-b border-slate-200">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex justify-end">
          <button
            onClick={() => setActivePage('contact')}
            className="px-4 py-2 rounded-xl bg-[#8cb0bf] text-[#061326] text-xs font-bold hover:bg-[#769dae] transition-all shadow-sm active:scale-95"
          >
            Contact Us
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            <ScrollReveal className="lg:col-span-5 space-y-4" direction="right">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-4 h-4 rounded-full bg-blue-100 text-[#8cb0bf] flex items-center justify-center">
                  <Activity className="w-2.5 h-2.5" />
                </span>
                <span>About SCCTA</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.1]">
                Clayton County's #1 Tennis Academy
              </h2>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7 space-y-12" direction="left" delay={150}>
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-semibold leading-snug">
                <TextRevealScroll 
                  text="At SCCTA, training is built around structure, not repetition. Our coaches bring international and USTA experience into a focused training environment, designed for serious game improvement. Players train within a system that prioritizes precision and discipline at every stage."
                />
              </div>

              {/* 3 Animated Metric Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-slate-100">
                <div className="space-y-1.5">
                  <div className="text-4xl sm:text-5xl font-black font-display text-[#8cb0bf]">
                    <AnimatedCounter end="120" suffix="+" />
                  </div>
                  <div className="font-extrabold text-xs text-slate-900">Active Players</div>
                  <p className="text-xs text-slate-500 leading-normal">Across development and competitive programs</p>
                </div>

                <div className="space-y-1.5">
                  <div className="text-4xl sm:text-5xl font-black font-display text-[#8cb0bf]">
                    <AnimatedCounter end="6" suffix="+" />
                  </div>
                  <div className="font-extrabold text-xs text-slate-900">Certified Coaches</div>
                  <p className="text-xs text-slate-500 leading-normal">Certified and experienced in player development</p>
                </div>

                <div className="space-y-1.5">
                  <div className="text-4xl sm:text-5xl font-black font-display text-[#8cb0bf]">
                    <AnimatedCounter end="85" suffix="%" />
                  </div>
                  <div className="font-extrabold text-xs text-slate-900">Player Retention Rate</div>
                  <p className="text-xs text-slate-500 leading-normal">Players who continue training long-term training.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. OUR PROGRAMS WITH STACKED CARDS SCROLL EFFECT */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FAF9F5] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
                <span>Our Programs</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.08]">
                Programs built for how players actually improve
              </h2>
            </div>
            
            <div className="lg:col-span-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our programs are designed to match your current level and build toward the next through structured sessions, expert coaching, and supportive community.
            </div>
          </ScrollReveal>

          {/* STACKED CARDS CONTAINER WITH DYNAMIC PEELING & DEPTH */}
          <div className="pt-6">
            <StackedProgramCards 
              programs={programStack}
              onOpenProgramFinder={onOpenProgramFinder}
              setActivePage={setActivePage}
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. BENEFITS BENTO GRID (WITH SCROLL REVEALS) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
              <span>Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-tight">
              Why serious players choose SCCTA
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            <ScrollReveal className="lg:col-span-8" delay={100}>
              <div className="relative rounded-3xl overflow-hidden shadow-sm h-80 sm:h-96 group bg-slate-950">
                <img 
                  src="/images/sccta-the-mill-group.jpg" 
                  alt="Clayton County community junior tennis team at The Mill" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 object-[center_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-6 left-6 w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#8cb0bf]" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Clayton County Community Courts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                    You train on the same surfaces you compete on. No adjustments, no excuses on match day.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-4" delay={200}>
              <div className="bg-gradient-to-br from-[#8cb0bf] to-[#64899b] text-white rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-md h-full">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#8cb0bf]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Structured training
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Every session follows a defined progression, building the right technical skills.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-4" delay={250}>
              <div className="bg-gradient-to-br from-[#061326] to-[#0B254D] text-white rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-md h-full border border-blue-900/30">
                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md text-[#8cb0bf] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Mentorship beyond the court
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Academic study halls, Arthur Ashe writing workshops, and college readiness mentorship.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-8" delay={300}>
              <div className="relative rounded-3xl overflow-hidden shadow-sm h-80 sm:h-96 group bg-slate-950">
                <img 
                  src="/images/sccta-clayton-clinic.png" 
                  alt="Clayton Connected tennis clinic athletes and coaches" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-6 left-6 w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#8cb0bf]" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Sanctioned Tournament Matchplay
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                    Regular competitive experience through Junior Team Tennis and USTA Georgia championship events.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. TESTIMONIALS SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <Quote className="w-3.5 h-3.5 text-[#8cb0bf]" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950">
              Hear it from the champions at SCCTA
            </h2>
            <p className="text-slate-600 text-sm">
              Real players. Real courts. Real results.
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative" delay={150}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-md h-72 sm:h-96 bg-slate-100">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  onClick={prevTestimonial}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all shadow-md"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all shadow-md"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <blockquote className="text-lg sm:text-2xl font-display font-medium text-slate-900 leading-relaxed">
                  “{currentTestimonial.quote}”
                </blockquote>

                <div className="pt-4 border-t border-slate-100 space-y-0.5">
                  <div className="font-bold text-lg text-slate-950 font-display">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-xs font-semibold text-[#8cb0bf]">
                    {currentTestimonial.role}
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. REDESIGNED ELEVATED TOURNAMENTS & MATCHDESK HUB */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
                <span>SCCTA Matchdesk & Circuit</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.08]">
                Upcoming Tournaments & Events
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Sanctioned USTA Georgia tournaments, Junior Circuit events, and adult championships in Clayton County.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
              {[
                { id: 'all', label: 'All Tournaments' },
                { id: 'junior', label: 'Junior Circuit' },
                { id: 'adult', label: 'Adult Doubles' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setTournamentFilter(f.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    tournamentFilter === f.id
                      ? 'bg-[#8cb0bf] text-[#061326] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* 2x2 High-Impact Tournament Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTournaments.map((t, idx) => (
              <ScrollReveal 
                key={t.id}
                delay={idx * 100}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Photo & Overlay Area */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={t.image || "/doubles-ready-stance.jpg"} 
                    alt={t.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  {/* Top Floating Glass Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-[#061326]/85 backdrop-blur-md text-[#8cb0bf] border border-white/15 shadow-sm">
                      {t.level}
                    </span>

                    <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold backdrop-blur-md flex items-center gap-1.5 shadow-sm ${
                      t.status === 'Registration Open' 
                        ? 'bg-blue-600/90 text-white' 
                        : 'bg-white/20 text-white border border-white/10'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${t.status === 'Registration Open' ? 'bg-[#8cb0bf] animate-pulse' : 'bg-slate-300'}`} />
                      {t.status}
                    </span>
                  </div>

                  {/* Prominent Date Tag in Bottom Corner */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5 bg-[#061326]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-white shadow-md">
                    <Calendar className="w-4 h-4 text-[#8cb0bf]" />
                    <span className="text-xs font-extrabold tracking-wide">{t.date}</span>
                  </div>
                </div>

                {/* Card Information Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Title & Venue */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold font-display text-slate-950 group-hover:text-[#8cb0bf] transition-colors leading-snug">
                        {t.title}
                      </h3>

                      <div className="flex items-start gap-2 text-xs text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-[#8cb0bf] shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-700">{t.location}</span>
                      </div>
                    </div>

                    {/* Spec Pills Row */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                        <div className="text-[10px] font-bold uppercase text-slate-400">Divisions</div>
                        <div className="font-bold text-slate-900 truncate">{t.divisions}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                        <div className="text-[10px] font-bold uppercase text-slate-400">Entry Fee</div>
                        <div className="font-bold text-slate-900 truncate">{t.entryFee}</div>
                      </div>
                    </div>

                    {/* Deadline urgency note */}
                    <div className="flex items-center gap-2 text-[11px] font-bold text-blue-800 bg-blue-50/80 px-3 py-2 rounded-lg border border-blue-100">
                      <Clock className="w-3.5 h-3.5 shrink-0 text-[#8cb0bf]" />
                      <span>Registration Deadline: {t.deadline}</span>
                    </div>

                  </div>

                  {/* Actions Bar (Brand Blue CTA + Minimal Link) */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActivePage('tournaments')}
                      className="text-xs font-bold text-slate-600 hover:text-[#8cb0bf] transition-colors py-2"
                    >
                      Fact Sheet & Draws →
                    </button>

                    <button
                      onClick={() => setActivePage('tournaments')}
                      className="px-5 py-2.5 rounded-xl bg-[#8cb0bf] hover:bg-[#7ba0b0] text-[#061326] font-bold text-xs shadow-[0_2px_10px_rgba(140, 176, 191,0.3)] transition-all active:scale-95 flex items-center gap-1.5"
                    >
                      <span>Register on USTA</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="bg-[#061326] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10" delay={150}>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-[#8cb0bf]">
                Need assistance before match day?
              </div>
              <div className="font-bold text-base sm:text-lg text-white">
                Contact Tournament Administrator Peggy Ballou & Match Desk
              </div>
              <div className="text-xs text-slate-300">
                Phone: 404-386-4009 · Email: sccta.jr.tournament@gmail.com
              </div>
            </div>

            <button
              onClick={() => setActivePage('tournaments')}
              className="px-6 py-3 rounded-xl bg-[#8cb0bf] hover:bg-[#7ba0b0] text-[#061326] font-bold text-xs whitespace-nowrap shadow-[0_4px_14px_rgba(140, 176, 191,0.4)] transition-all active:scale-95 shrink-0"
            >
              View Full Tournament Desk Guide →
            </button>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-28 bg-[#061326] text-white text-center relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8cb0bf]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8cb0bf]/15 rounded-full blur-3xl pointer-events-none" />

        <ScrollReveal className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <div className="flex justify-center mb-2">
            <div className="p-3 rounded-2xl bg-white shadow-2xl ring-4 ring-white/20 inline-flex items-center justify-center">
              <img src="/logo.png" alt="SCCTA Official Logo" className="w-14 h-14 object-contain" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-6xl font-black font-display text-white tracking-tight">
            The next opportunity <br />
            <span className="text-[#8cb0bf]">starts here.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you're picking up a racquet for the first time, looking for sanctioned competition, or ready to support the next generation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenProgramFinder}
              className="px-8 py-3.5 rounded-xl bg-[#8cb0bf] hover:bg-[#7ba0b0] text-[#061326] font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(140, 176, 191,0.45)] hover:shadow-[0_6px_25px_rgba(140, 176, 191,0.6)] transition-all active:scale-95"
            >
              Find a Program
            </button>
            <button
              onClick={onOpenDonate}
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all active:scale-95"
            >
              Support SCCTA
            </button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
