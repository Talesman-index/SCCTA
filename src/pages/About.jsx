import React from 'react';
import { 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Heart, 
  Users, 
  BookOpen, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  Mail,
  Zap,
  Target,
  GraduationCap,
  Calendar,
  Phone,
  Activity
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';
import TextRevealScroll from '../components/TextRevealScroll';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';

export default function About({ setActivePage, onOpenProgramFinder }) {
  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* 01. HERO HEADER (WITH PHOTOGRAPHIC BACKGROUND) */}
      <section className="bg-slate-950 text-white pt-36 pb-24 relative overflow-hidden">
        
        {/* Photographic Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sccta-the-mill-group.jpg" 
            alt="SCCTA community tennis players and coaches" 
            className="w-full h-full object-cover opacity-30 object-[center_35%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50" />
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8cb0bf]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#8cb0bf] shadow-lg">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm">
              <img src="/logo.png" alt="SCCTA" className="w-full h-full object-contain" />
            </div>
            <span>About SCCTA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
            Tennis with a purpose. <br />
            <span className="text-slate-400 font-normal">Building opportunity through the game.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            South Clayton Community Tennis Association (SCCTA) is a community-based 501(c)(3) nonprofit and USTA/NJTL chapter dedicated to connecting tennis, education, and youth development across Clayton County, Georgia.
          </p>
        </div>
      </section>

      {/* 02. OUR MISSION WITH SCROLL REVEAL & NUMBERS */}
      <section className="py-24 sm:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <ScrollReveal className="lg:col-span-5 space-y-4" direction="right">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
                <span>Our Mission & Vision</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 leading-tight">
                Empowering the next generation on and off the court.
              </h2>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7 space-y-10" direction="left" delay={150}>
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-semibold leading-snug">
                <TextRevealScroll 
                  text="Our mission is to make tennis accessible while using the sport to encourage education, confidence, discipline, leadership, and lifelong growth. We believe every young person deserves the opportunity to learn, compete, grow, and imagine a bigger future."
                />
              </div>

              {/* Mission stats grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black font-display text-[#8cb0bf]">
                    <AnimatedCounter end="15" suffix="+" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Years in Clayton County</div>
                  <p className="text-[11px] text-slate-500">Continuous community tennis & mentoring outreach</p>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black font-display text-[#8cb0bf]">
                    <AnimatedCounter end="100" suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Non-Profit Giving</div>
                  <p className="text-[11px] text-slate-500">Every donation directly funds youth clinics & gear</p>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black font-display text-[#8cb0bf]">
                    <AnimatedCounter end="250" suffix="+" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Youth Impacted</div>
                  <p className="text-[11px] text-slate-500">Annual participants across all 4 ball stages</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 03. OUR APPROACH (4 PILLARS BENTO GRID) */}
      <section className="py-24 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
              <span>Our Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
              Our 4-Pillar Approach
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A comprehensive system designed to build complete athletes and confident leaders.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tennis */}
            <ScrollReveal delay={100} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#8cb0bf] text-[#061326] flex items-center justify-center font-bold shadow-md shadow-blue-900/20">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-slate-950">Tennis</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Create accessible opportunities to discover, learn, and compete in the sport through age-appropriate ball stages and sanctioned events.
                </p>
              </div>
              <div className="text-[10px] font-extrabold text-[#8cb0bf] uppercase tracking-wider">Pillar 01</div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal delay={150} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#8cb0bf] text-[#061326] flex items-center justify-center font-bold shadow-md shadow-blue-900/20">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-slate-950">Education</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Encourage academic achievement, study hall habits, and college readiness guidance to open collegiate pathways.
                </p>
              </div>
              <div className="text-[10px] font-extrabold text-[#8cb0bf] uppercase tracking-wider">Pillar 02</div>
            </ScrollReveal>

            {/* Mentorship */}
            <ScrollReveal delay={200} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#8cb0bf] text-[#061326] flex items-center justify-center font-bold shadow-md shadow-blue-900/20">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-slate-950">Mentorship</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide positive adult guidance, peer models, and emotional support during vital stages of adolescent growth.
                </p>
              </div>
              <div className="text-[10px] font-extrabold text-[#8cb0bf] uppercase tracking-wider">Pillar 03</div>
            </ScrollReveal>

            {/* Leadership */}
            <ScrollReveal delay={250} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#8cb0bf] text-[#061326] flex items-center justify-center font-bold shadow-md shadow-blue-900/20">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-slate-950">Leadership</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use matchplay pressure to teach accountability, emotional regulation, teamwork, resilience, and character.
                </p>
              </div>
              <div className="text-[10px] font-extrabold text-[#8cb0bf] uppercase tracking-wider">Pillar 04</div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 04. NJTL ARTHUR ASHE LEGACY */}
      <section className="py-24 bg-[#061326] text-white relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#8cb0bf] bg-white/10 border border-white/15">
            PART OF SOMETHING BIGGER
          </span>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Tennis. Education. Community.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            SCCTA is proud to be an active chapter of the National Junior Tennis & Learning (NJTL) network, co-founded by Arthur Ashe to use tennis and education to transform young lives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left text-xs">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="font-bold text-sm text-[#8cb0bf]">Arthur Ashe Legacy</div>
              <p className="text-slate-300 leading-relaxed">Instilling values of character, academic discipline, and social responsibility on and off the court.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="font-bold text-sm text-[#8cb0bf]">USTA Foundation Resources</div>
              <p className="text-slate-300 leading-relaxed">College scholarships, essay contest grants, and national player pathways for Clayton County youth.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="font-bold text-sm text-[#8cb0bf]">Clayton County Outreach</div>
              <p className="text-slate-300 leading-relaxed">Bringing certified tennis instruction to local parks, public courts, and public schools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. COMMUNITY LEADERSHIP & OPERATIONS HUB */}
      <section className="py-24 sm:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
              <span>Rooted in Clayton County</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
              A Community-Driven Mission
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              SCCTA is powered by certified directors, tournament administrators, officials, educators, and volunteers dedicated to creating opportunities for local youth.
            </p>
          </ScrollReveal>

          {/* 6 Community Leadership & Operational Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tournament Operations & Direction",
                lead: "Conrad Cooke & Peggy Ballou",
                role: "USTA Sanctioned Events",
                desc: "Overseeing seamless tournament draws, match check-in, on-court scheduling, and athlete support across all SCCTA circuit competitions.",
                badge: "Operations",
                contact: "sccta.jr.tournament@gmail.com",
                icon: Trophy
              },
              {
                title: "Junior Pathway & Coaching",
                lead: "Certified Coaching Staff",
                role: "Red, Orange, Green & Yellow Ball",
                desc: "International and USTA certified instructors delivering structured biomechanics, footwork agility, and rally discipline tailored by age.",
                badge: "Player Development",
                contact: "scccta1@gmail.com",
                icon: Target
              },
              {
                title: "NJTL Academic Tutoring & Labs",
                lead: "Beyond the Baseline Mentors",
                role: "Study Hall & Essay Workshops",
                desc: "Certified educators offering homework help, Arthur Ashe writing mentorship, and collegiate scholarship prep before court training.",
                badge: "Education",
                contact: "scccta1@gmail.com",
                icon: BookOpen
              },
              {
                title: "USTA Officiating & Fair Play",
                lead: "Ingrid Abram & Official Staff",
                role: "Certified Tournament Referees",
                desc: "Certified officials enforcing fair play, sportsmanship standards, and rule adherence for junior circuit and sectional tournaments.",
                badge: "Officiating",
                contact: "scccta1@gmail.com",
                icon: ShieldCheck
              },
              {
                title: "Match Tennis App & Junior Tech",
                lead: "Ashley Cooke",
                role: "Live Digital Match Desk",
                desc: "Coordinating digital court assignments, live score updates, and amplifying the student-athlete experience across Georgia tennis.",
                badge: "Technology",
                contact: "sccta.jr.tournament@gmail.com",
                icon: Zap
              },
              {
                title: "Volunteer & Community Corps",
                lead: "Clayton County Families & Allies",
                role: "Grassroots Support",
                desc: "Dedicated parents, alumni, and volunteers who support court preparation, weekend hospitality, and after-school tennis outreach.",
                badge: "Community",
                contact: "scccta1@gmail.com",
                icon: Users
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <ScrollReveal 
                  key={idx}
                  delay={idx * 60}
                  className="bg-[#FAF9F5] rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#8cb0bf] text-[#061326] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6 text-white" />
                      </div>

                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-white border border-slate-200 text-slate-700 shadow-xs">
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold font-display text-slate-950 group-hover:text-[#8cb0bf] transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <div className="text-xs font-bold text-slate-600 mt-1">
                        {pillar.lead} · <span className="text-[#8cb0bf]">{pillar.role}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80">
                    <a 
                      href={`mailto:${pillar.contact}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#8cb0bf] transition-colors py-1"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pillar.contact}</span>
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 06. CTA */}
      <section className="py-24 bg-[#061326] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#8cb0bf]/20 rounded-full blur-3xl pointer-events-none" />
        <ScrollReveal className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <div className="flex justify-center mb-2">
            <div className="p-3 rounded-2xl bg-white shadow-2xl ring-4 ring-white/20 inline-flex items-center justify-center">
              <img src="/logo.png" alt="SCCTA" className="w-12 h-12 object-contain" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            One community. One mission. <br />
            <span className="text-[#8cb0bf]">More opportunities.</span>
          </h2>
          <div className="pt-2">
            <button
              onClick={() => setActivePage('programs')}
              className="px-8 py-3.5 rounded-xl bg-[#8cb0bf] hover:bg-[#7ba0b0] text-[#061326] font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(140, 176, 191,0.4)] transition-all active:scale-95"
            >
              Explore Our Programs →
            </button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
