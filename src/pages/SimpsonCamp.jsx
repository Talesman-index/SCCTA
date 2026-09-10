import React, { useState } from 'react';
import { 
  Award, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  CheckCircle2, 
  Star, 
  BookOpen, 
  ShieldCheck, 
  Compass, 
  Quote, 
  Share2,
  BookmarkCheck,
  Building2,
  ChevronRight
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function SimpsonCamp({ setActivePage, onOpenDonate, onOpenProgramFinder }) {
  const [activeTab, setActiveTab] = useState('all');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const scheduleDays = [
    {
      day: "Day 1",
      title: "Arrival, Ali’s Legacy & Trust Building",
      location: "University of Louisville & Muhammad Ali Center",
      summary: "Campers arrived at the University of Louisville dormitories and immediately visited the legendary Muhammad Ali Center. Exploring Ali's foundational principles—self-belief, dedication, and community service—set an empowering tone. That evening, participants joined high-energy team-building games and Red Ball Tennis at the Kentucky Center for the Performing Arts, led by USTA Southern Community Tennis Director Andrew Feldman.",
      highlight: "Explored Ali’s core humanitarian values & engaged in leadership challenges designed to build trust and open communication."
    },
    {
      day: "Day 2",
      title: "Kentucky Heritage & Champions’ Challenge",
      location: "Kentucky Horse Park & Central Park Courts",
      summary: "Participants traveled to the Kentucky Horse Park for the Hall of Champions and Parade of Breeds, discovering the cultural and historical legacy of Kentucky equestrian traditions. In the afternoon, campers took to the courts at Central Park for tennis drills and friendly matchplay, highlighted by an inspiring challenge from USTA Southern Treasurer John Herring and his daughter Kennedy Herring (reigning USTA Father-Daughter national champions).",
      highlight: "Demonstrated the tangible benefits of teamwork, intense focus, and cross-generational dedication on the court."
    },
    {
      day: "Day 3",
      title: "Juneteenth Tournament & Heritage Quiz Bowl",
      location: "Petersburg Park & University of Louisville",
      summary: "Campers competed in the celebrated Charles Crawford Juneteenth Annual Tennis Tournament at Petersburg Park. Later, participants toured the University of Louisville campus and tested their knowledge in the Juneteenth Heritage Quiz Bowl—an educational team contest where Team Gray triumphed to capture the camp team championship.",
      highlight: "Celebrated African American history, athletic perseverance, and Juneteenth pride in a spirited intellectual and tennis competition."
    },
    {
      day: "Day 4",
      title: "PTR Coaching Masterclass & Sportsmanship Honors",
      location: "Louisville Tennis Facilities",
      summary: "Campers participated in an exclusive PTR Assistant Coach Workshop led by Frank Adams—PTR International Master Tennis Professional, Black Tennis Hall of Famer, and former NJTL standout. The camp concluded with an awards ceremony celebrating the values, discipline, and character exemplified by all participants throughout the week.",
      highlight: "Julius Brown Jr. and Hadassah Dorius received the Sportsmanship Awards, new racquets, and signed copies of Lenny Simpson’s autobiography."
    }
  ];

  const honorees = [
    {
      category: "Foundational Benefactor",
      name: "Southern Tennis Foundation (STF)",
      role: "Lead Sponsor & Funding Champion",
      description: "Generously funded the entire four-day camp experience, opening doors of education, wellness, and elite mentorship to young athletes from under-resourced communities.",
      badge: "Primary Benefactor"
    },
    {
      category: "Inspirational Namesake",
      name: "Lenny Simpson",
      role: "Tennis Legend, Author & NJTL Pioneer",
      description: "Former touring pro, Black Tennis pioneer, and author of 'In the Shadow of Tennis Legends'. His lifelong dedication to youth mentorship continues to guide and inspire.",
      badge: "Camp Inspiration"
    },
    {
      category: "USTA Southern Leadership",
      name: "Andrew Feldman & John Herring",
      role: "Director of Community Tennis & USTA Southern Treasurer",
      description: "Led high-energy on-court clinics and leadership exercises. John and daughter Kennedy Herring demonstrated championship teamwork.",
      badge: "USTA Southern"
    },
    {
      category: "USTA Kentucky Executive Team",
      name: "Jason Miller, Ph.D. & Staff",
      role: "Maddie Henning, Leslie Strahl & LJ Allara",
      description: "Flawlessly organized local venues, logistics, marketing, and volunteer operations to deliver a world-class experience for campers.",
      badge: "USTA Kentucky"
    },
    {
      category: "Master Tennis Clinician",
      name: "Frank Adams",
      role: "PTR International Master Pro & Hall of Famer",
      description: "Conducted the certified PTR Assistant Coach Workshop, passing forward decades of elite tennis craft to the next generation.",
      badge: "Master Coaching"
    },
    {
      category: "Community Partners & Hosts",
      name: "Rising Stars NJTL & West Louisville TC",
      role: "Bruce Stone, Charles Crawford & Dr. Aretha Fuqua",
      description: "Hosted the Charles Crawford Juneteenth Tournament and provided vital grassroots support along with Louisville Tourism and USTA Foundation.",
      badge: "Grassroots Champions"
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* ========================================================================= */}
      {/* 01. HERO SECTION WITH IMAGE & REFINED OVERLAY */}
      {/* ========================================================================= */}
      <section className="bg-slate-950 text-white pt-36 pb-20 relative overflow-hidden">
        
        {/* Photographic Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/lenny-simpson-camp.jpg" 
            alt="Lenny Simpson NJTL Leadership Campers in Louisville, KY" 
            className="w-full h-full object-cover opacity-25 object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#8cb0bf]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Top Badges & Tagline */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#8cb0bf] shadow-lg">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm">
                <img src="/logo.png" alt="SCCTA" className="w-full h-full object-contain" />
              </div>
              <span>SCCTA Tribute & Gratitude</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              2025 Lenny Simpson NJTL Leadership Camp
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#8cb0bf]" />
              Louisville, Kentucky
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]">
              Honoring Vision, Leadership & <br />
              <span className="text-[#8cb0bf]">Empowering Future Champions.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              South Clayton Community Tennis Association (SCCTA) extends our deepest appreciation to the <strong className="text-white font-semibold">Southern Tennis Foundation</strong>, tennis legend <strong className="text-white font-semibold">Lenny Simpson</strong>, <strong className="text-white font-semibold">USTA Southern</strong>, and <strong className="text-white font-semibold">USTA Kentucky</strong> for hosting twenty-seven aspiring young leaders for an unforgettable four-day journey of purpose, athletics, and heritage.
            </p>
          </div>

          {/* Quick Metrics & Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#8cb0bf] font-display">27</div>
              <div className="text-xs text-slate-300 font-medium">Young Leaders Selected</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-display">4 Days</div>
              <div className="text-xs text-slate-300 font-medium">Intensive Mentorship</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#8cb0bf] font-display">9 States</div>
              <div className="text-xs text-slate-300 font-medium">Across USTA Southern</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">100%</div>
              <div className="text-xs text-slate-300 font-medium">Foundation Funded</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="https://www.southerntennisfoundation.org/news/2025-lenny-simpson-njtl-leadership-camp-empowers-future-leaders-in-louisville"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#8cb0bf] hover:bg-[#a2c4d2] text-[#061326] font-bold text-xs sm:text-sm shadow-xl transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Read Southern Tennis Foundation Article</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyLink}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <Share2 className="w-4 h-4 text-[#8cb0bf]" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Tribute'}</span>
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. OFFICIAL SCCTA LETTER OF GRATITUDE */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9F5] border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-slate-200/80 relative">
            <div className="absolute top-6 right-8 text-slate-100 select-none pointer-events-none hidden sm:block">
              <Quote className="w-24 h-24 stroke-1 text-slate-200/60" />
            </div>

            <div className="space-y-6 relative z-10">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#061326] text-[#8cb0bf] flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#8cb0bf] block">
                    Statement of Appreciation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                    Thank You, Southern Tennis Foundation & Camp Mentors
                  </h2>
                </div>
              </div>

              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pt-2">
                <p>
                  As an official USTA/NJTL chapter dedicated to youth development across Clayton County, Georgia, <strong className="text-slate-900 font-semibold">South Clayton Community Tennis Association (SCCTA)</strong> celebrates programs that prove tennis is far bigger than what happens between the painted lines of a court.
                </p>

                <p>
                  The <strong className="text-slate-900 font-semibold">2025 Lenny Simpson NJTL Leadership Camp</strong> embodies the very spirit of Arthur Ashe and the National Junior Tennis & Learning network. By removing financial hurdles and curating a four-day immersive experience in Louisville, Kentucky, the <strong className="text-slate-900 font-semibold">Southern Tennis Foundation (STF)</strong> gave twenty-seven aspiring young leaders an unmatched platform to grow.
                </p>

                <p>
                  From walking through the hall of conviction at the <strong className="text-slate-900 font-semibold">Muhammad Ali Center</strong>, to learning the equestrian history of Kentucky, to competing with dignity at the <strong className="text-slate-900 font-semibold">Charles Crawford Juneteenth Annual Tennis Tournament</strong>, these young players were shown what it means to lead with character, resilience, and compassion.
                </p>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 italic text-sm leading-relaxed my-4">
                  “To Mr. Lenny Simpson, the board and staff of the Southern Tennis Foundation, USTA Southern, and USTA Kentucky: your investment in our young people creates ripples that will inspire our courts, schools, and communities for decades to come. On behalf of SCCTA’s coaches, athletes, and families, thank you from the bottom of our hearts.”
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm font-display">
                      South Clayton Community Tennis Association, Inc.
                    </div>
                    <div className="text-xs text-slate-500">
                      501(c)(3) Non-Profit & USTA / NJTL Chapter · Clayton County, Georgia
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActivePage('about')}
                      className="text-xs font-bold text-[#8cb0bf] hover:text-[#6f94a4] transition-colors flex items-center gap-1"
                    >
                      <span>About SCCTA Mission</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. THE 4-DAY LEADERSHIP JOURNEY (INTERACTIVE TIMELINE) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#8cb0bf]/15 text-[#061326] border border-[#8cb0bf]/30">
              <Compass className="w-4 h-4 text-[#8cb0bf]" />
              Day-by-Day Experience
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
              Four Days That Shaped Future Leaders
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every hour was thoughtfully curated to combine athletic mastery, historical reflection, teamwork, and character development.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scheduleDays.map((item, idx) => (
              <ScrollReveal 
                key={item.day}
                direction="up" 
                delay={idx * 100}
                className="bg-[#FBFBFA] rounded-3xl p-7 sm:p-9 border border-slate-200 hover:border-[#8cb0bf] hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#061326] text-white">
                      {item.day}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8cb0bf]" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 group-hover:text-[#8cb0bf] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <div className="flex items-start gap-2.5 text-xs font-semibold text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                    <BookmarkCheck className="w-4 h-4 text-[#8cb0bf] shrink-0 mt-0.5" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. SPOTLIGHT ON SPORTSMANSHIP & AWARDS */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#061326] text-white relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#8cb0bf]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#8cb0bf] text-[#061326]">
              <Trophy className="w-4 h-4" />
              Excellence & Sportsmanship
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Recognizing Outstanding Camper Leaders
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Honoring the youth who exemplified the principles of Arthur Ashe, Lenny Simpson, and the NJTL network through sportsmanship, teamwork, and leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Awardee 1 */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#8cb0bf]/50 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center">
                  <Star className="w-6 h-6 fill-current" />
                </div>

                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Sportsmanship Award Honoree
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-1">
                    Julius Brown Jr.
                  </h3>
                  <div className="text-xs text-[#8cb0bf] font-medium">
                    A’s & Aces NJTL · New Orleans, LA
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Honored with a brand-new tennis racquet and a personalized, signed copy of Lenny Simpson's autobiography for exemplifying positive leadership, integrity, and humility on and off the court.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#8cb0bf]" />
                <span>Autographed Book & New Racquet</span>
              </div>
            </div>

            {/* Awardee 2 */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#8cb0bf]/50 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center">
                  <Star className="w-6 h-6 fill-current" />
                </div>

                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Sportsmanship Award Honoree
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-1">
                    Hadassah Dorius
                  </h3>
                  <div className="text-xs text-[#8cb0bf] font-medium">
                    James Lewis NJTL · Birmingham, AL
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Recognized for embodying the spirit of community, mutual encouragement, and tireless court tenacity. Awarded a new performance racquet and signed copy of *In the Shadow of Tennis Legends*.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#8cb0bf]" />
                <span>Autographed Book & New Racquet</span>
              </div>
            </div>

            {/* Team Champions */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#8cb0bf]/50 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8cb0bf]/20 border border-[#8cb0bf]/30 text-[#8cb0bf] flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-xs font-bold text-[#8cb0bf] uppercase tracking-wider">
                    Overall Camp & Quiz Bowl Champions
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-1">
                    Team Gray
                  </h3>
                  <div className="text-xs text-slate-300 font-medium">
                    Juneteenth Heritage Quiz Bowl Champions
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Showcased outstanding historical knowledge, quick recall, and flawless team communication during the Juneteenth Heritage Quiz Bowl at the University of Louisville to claim top overall team honors.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#8cb0bf]" />
                <span>Overall Camp Team Championship</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. THE GRATITUDE WALL: PARTNERS & ORGANIZERS */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
              <Building2 className="w-4 h-4 text-[#8cb0bf]" />
              The Community of Gratitude
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
              Special Thanks to the Champions Behind the Camp
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              It takes an entire community of dedicated administrators, visionary foundations, coaches, and chaperones to make life-changing youth camps possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honorees.map((item, idx) => (
              <ScrollReveal 
                key={item.name}
                direction="up" 
                delay={idx * 80}
                className="bg-[#FAF9F5] rounded-3xl p-7 border border-slate-200 hover:border-[#8cb0bf] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8cb0bf]">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                    {item.name}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500">
                    {item.role}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Full Roll of Acknowledgments */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-slate-700 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 font-display">
              Additional Acknowledgments & Community Partners
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We also express gratitude to members of the <strong className="text-slate-900 font-semibold">USTA Kentucky Board</strong>: <span className="font-semibold text-slate-800">RC Scheinler</span> (Board President), <span className="font-semibold text-slate-800">Sonya Harward</span> (Vice President), and <span className="font-semibold text-slate-800">Leony Barroso</span> (Immediate Past President). Special thanks go to <span className="font-semibold text-slate-800">Christy Herring</span> (Executive Director, Bluegrass Tennis Association), <span className="font-semibold text-slate-800">Bruce Stone</span> and <span className="font-semibold text-slate-800">Charles Crawford</span> (Rising Stars of Kentucky NJTL), <span className="font-semibold text-slate-800">Dr. Aretha Fuqua</span> (West Louisville Tennis Club), <span className="font-semibold text-slate-800">Luz Orbaiz</span>, <span className="font-semibold text-slate-800">Courtney Ray</span>, and <span className="font-semibold text-slate-800">Brad Knapp</span> (Louisville Tourism), and the <strong className="text-slate-900 font-semibold">USTA Foundation</strong> for their continuous commitment to youth empowerment.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. CALL TO ACTION: SCCTA NJTL PATHWAY */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-[#061326] to-[#102A33] rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#8cb0bf]/20 text-[#8cb0bf] border border-[#8cb0bf]/30">
                <Sparkles className="w-3.5 h-3.5" />
                Join the SCCTA NJTL Family
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
                Empowering Clayton County Youth On & Off the Court
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                SCCTA provides youth across Clayton County with structured tennis development, character education, tournament sponsorships, and collegiate scholarship pathways.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => onOpenProgramFinder?.()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#8cb0bf] hover:bg-[#a2c4d2] text-[#061326] font-bold text-xs sm:text-sm shadow-xl transition-all active:scale-95 text-center"
              >
                Find a Junior Program
              </button>

              <button
                onClick={() => onOpenDonate?.()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all active:scale-95 text-center"
              >
                Sponsor an NJTL Player
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
