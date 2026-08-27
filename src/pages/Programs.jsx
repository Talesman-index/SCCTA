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
  Layers
} from 'lucide-react';
import { BALL_STAGES } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';

export default function Programs({ setActivePage, onOpenProgramFinder, onOpenDonate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeBallStageId, setActiveBallStageId] = useState('red');

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
      image: "/junior-girl.jpg",
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
      image: "/clay-player-portrait.png",
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
      image: "/blue-court-player.jpg",
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
      image: "/doubles-ready-stance.jpg",
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
            src="/junior-girl.jpg" 
            alt="Young player practicing tennis" 
            className="w-full h-full object-cover opacity-25 object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50" />
        </div>

        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0059A6]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#38BDF8] shadow-lg">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm">
              <img src="/logo.png" alt="SCCTA" className="w-full h-full object-contain" />
            </div>
            <span>SCCTA Programs</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
            There's a place on the court <br />
            <span className="text-[#38BDF8]">for everyone.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Whether you're discovering tennis, developing your game, competing in sanctioned tournaments, or returning to the sport, SCCTA provides structured pathways to grow.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenProgramFinder}
              className="px-6 py-3.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(0,89,166,0.4)] active:scale-95"
            >
              Interactive Program Matcher
            </button>
            <button
              onClick={onOpenDonate}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all active:scale-95"
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
                <span className="w-3.5 h-3.5 rounded-sm border border-[#0059A6] text-[#0059A6] flex items-center justify-center text-[9px]">⬡</span>
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
                        ? 'bg-[#0059A6] text-white shadow-md' 
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
                      <div className={`text-[10px] ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
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
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase bg-slate-950/80 backdrop-blur-md text-[#38BDF8] border border-white/15 shadow">
                        Stage {currentStage.number} · {currentStage.ages}
                      </span>
                    </div>

                    {/* Bottom Venue / Schedule Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-white space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-[#38BDF8] font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{currentStage.schedule}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300 text-[11px] truncate">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-[#38BDF8]" />
                        <span>{currentStage.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Detailed Technical Specs & Curriculum */}
                <div className="lg:col-span-6 space-y-6">
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#0059A6] mb-2 border border-blue-100">
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0059A6] shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenProgramFinder}
                      className="px-6 py-3.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs sm:text-sm transition-all shadow-[0_4px_14px_rgba(0,89,166,0.35)] active:scale-95"
                    >
                      Check {currentStage.name} Availability
                    </button>

                    <button
                      onClick={() => setActivePage('contact')}
                      className="text-xs font-bold text-slate-600 hover:text-[#0059A6] py-2 transition-colors"
                    >
                      Ask Coach a Question →
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

      {/* 04. COMPETITIVE DEVELOPMENT */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal className="lg:col-span-6 space-y-6" direction="right">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-3.5 h-3.5 rounded-sm border border-[#0059A6] text-[#0059A6] flex items-center justify-center text-[9px]">⬡</span>
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
                  className="px-6 py-3.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs shadow-[0_4px_14px_rgba(0,89,166,0.35)] transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Explore Tournaments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-6 flex justify-center" direction="left" delay={150}>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 w-full max-w-md h-80 sm:h-[420px] bg-slate-950">
                <img 
                  src="/doubles-ready-stance.jpg" 
                  alt="Junior player in tournament match"
                  className="w-full h-full object-cover opacity-90"
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
                <span className="w-3.5 h-3.5 rounded-sm border border-[#0059A6] text-[#0059A6] flex items-center justify-center text-[9px]">⬡</span>
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
                  onClick={() => setActivePage('impact')}
                  className="px-6 py-3.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs shadow-[0_4px_14px_rgba(0,89,166,0.35)] transition-all active:scale-95 flex items-center gap-2"
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
                  <span className="w-3.5 h-3.5 rounded-sm border border-[#0059A6] text-[#0059A6] flex items-center justify-center text-[9px]">⬡</span>
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
                    <Target className="w-4 h-4 text-[#0059A6] shrink-0" />
                    <span>Adult Beginner 101 Clinics</span>
                  </div>
                  <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                    <Activity className="w-4 h-4 text-[#0059A6] shrink-0" />
                    <span>Cardio Tennis Fitness Drills</span>
                  </div>
                  <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-[#0059A6] shrink-0" />
                    <span>Social Doubles & Round Robins</span>
                  </div>
                  <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                    <Trophy className="w-4 h-4 text-[#0059A6] shrink-0" />
                    <span>NTRP Tournament Prep</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActivePage('contact')}
                    className="px-6 py-3.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs shadow-[0_4px_14px_rgba(0,89,166,0.35)] transition-all active:scale-95 flex items-center gap-2"
                  >
                    <span>Explore Adult Programs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-6 flex justify-center" direction="left" delay={150}>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 w-full max-w-md h-80 sm:h-[420px] bg-slate-950">
                  <img 
                    src="/team-high-five.jpg" 
                    alt="Adults playing tennis with high five" 
                    className="w-full h-full object-cover opacity-95"
                  />
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

    </div>
  );
}
