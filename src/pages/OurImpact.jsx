import React, { useState } from 'react';
import { 
  Trophy, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { IMPACT_STORIES } from '../data/mockData';
import TextRevealScroll from '../components/TextRevealScroll';
import ScrollReveal from '../components/ScrollReveal';

export default function OurImpact({ setActivePage, onSelectStory, onOpenDonate }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredStories = selectedFilter === 'all' 
    ? IMPACT_STORIES 
    : IMPACT_STORIES.filter(s => s.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  const essayWinner = IMPACT_STORIES.find(s => s.id === 'essay-contest-winner') || IMPACT_STORIES[0];

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* 01. HERO HEADER (WITH PHOTOGRAPHIC BACKGROUND) */}
      <section className="bg-slate-950 text-white pt-36 pb-24 relative overflow-hidden">
        
        {/* Photographic Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/champion-trophy.jpg" 
            alt="Tennis athlete with trophy" 
            className="w-full h-full object-cover opacity-25 object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-[#D4F826]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4F826]" />
            <span>Our Impact & Stories</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
            Bigger than <br />
            <span className="text-[#D4F826]">the scoreboard.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            The most important results aren't always found on a scoreboard. They're found in confidence gained, academic milestones reached, and young people discovering what's possible.
          </p>
        </div>
      </section>

      {/* 02. FEATURED RECOGNITION (GEORGIA ESSAY WINNER) */}
      <section className="py-24 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#D4F826] text-slate-950 shadow-sm">
                  <Award className="w-4 h-4" /> CELEBRATING EXCELLENCE
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white leading-tight">
                  Georgia's USTA Southern Essay Contest Winner
                </h2>

                <div className="text-lg font-bold text-[#D4F826]">
                  {essayWinner.name} · Sectional First Place Champion
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Through SCCTA's Beyond the Baseline writing workshops, Makayla reflected on how Arthur Ashe's vision shaped her perspective on perseverance and equality. Her essay earned 1st place across the state of Georgia.
                </p>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 italic text-xs sm:text-sm text-slate-200 leading-relaxed">
                  “{essayWinner.quote}”
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onSelectStory(essayWinner)}
                    className="px-6 py-3.5 rounded-xl bg-[#D4F826] hover:bg-[#c6ec15] text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
                  >
                    <span>Read Full Story & Essay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/15 w-full max-w-sm h-80 sm:h-[420px] bg-slate-900">
                  <img 
                    src={essayWinner.image} 
                    alt={essayWinner.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 03. IMPACT AREAS (4 PILLARS) */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span className="w-3.5 h-3.5 rounded-sm border border-slate-400 flex items-center justify-center text-[9px]">⬡</span>
              <span>Pillars of Transformation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
              Impact Areas
            </h2>
            <p className="text-slate-600 text-sm">
              How SCCTA creates meaningful, lasting change across Clayton County.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <ScrollReveal delay={100} className="p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200 space-y-4 hover:shadow-xl hover:border-slate-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 text-[#D4F826] flex items-center justify-center font-bold shadow">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold font-display text-slate-950">On the Court</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Players discovering tennis, developing their skills, and experiencing competition through structured USTA and Junior Circuit progression.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150} className="p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200 space-y-4 hover:shadow-xl hover:border-slate-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 text-[#D4F826] flex items-center justify-center font-bold shadow">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold font-display text-slate-950">In the Classroom</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Encouraging academic achievement, study hall habits, reading proficiency, and continuing education through NJTL curriculum.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200 space-y-4 hover:shadow-xl hover:border-slate-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 text-[#D4F826] flex items-center justify-center font-bold shadow">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold font-display text-slate-950">In the Community</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Creating positive, safe environments, healthy peer relationships, and family engagement across Clayton County parks and facilities.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250} className="p-8 rounded-3xl bg-[#FAF9F5] border border-slate-200 space-y-4 hover:shadow-xl hover:border-slate-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 text-[#D4F826] flex items-center justify-center font-bold shadow">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold font-display text-slate-950">For the Future</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supporting youth leadership, college tennis scholarships, career mentorship, and personal development that lasts a lifetime.
              </p>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 04. INDIVIDUAL SPOTLIGHT STORIES */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-3.5 h-3.5 rounded-sm border border-slate-400 flex items-center justify-center text-[9px]">⬡</span>
                <span>Individual Profiles</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight mt-1">
                Voices of SCCTA
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mt-1">
                From academic achievements and scholarships to tournament success and leadership milestones.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {['all', 'spotlight', 'scholarship', 'academic', 'community'].map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                    selectedFilter === f
                      ? 'bg-slate-950 text-[#D4F826] shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {f === 'all' ? 'All Profiles' : f}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, idx) => (
              <ScrollReveal 
                key={story.id} 
                delay={idx * 100}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full bg-slate-950 overflow-hidden group">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-[#D4F826] text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full border border-white/15 shadow">
                      {story.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className="text-2xl font-extrabold font-display text-slate-950">{story.name}</h3>
                    <p className="text-xs font-bold text-[#3B82F6]">{story.achievement}</p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {story.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectStory(story)}
                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-950 hover:text-[#D4F826] text-xs font-bold text-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Read Story & Reflections</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
