import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Search,
  Zap,
  Phone,
  Mail,
  Shield
} from 'lucide-react';
import { UPCOMING_TOURNAMENTS, FAQS_TOURNAMENTS } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';

export default function Tournaments({ setActivePage, onOpenTournamentRegister }) {
  const [filterLevel, setFilterLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedTournamentDetail, setSelectedTournamentDetail] = useState(null);

  const filteredTournaments = UPCOMING_TOURNAMENTS.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.divisions.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = filterLevel === 'all' || 
                         (filterLevel === 'junior' && (t.level.toLowerCase().includes('junior') || t.level.includes('Level'))) ||
                         (filterLevel === 'adult' && t.level.toLowerCase().includes('adult'));
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* 01. HERO HEADER (WITH PHOTOGRAPHIC BACKGROUND) */}
      <section className="bg-slate-950 text-white pt-36 pb-24 relative overflow-hidden">
        
        {/* Photographic Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sccta-clayton-clinic.png" 
            alt="SCCTA tournament competitors and coaches" 
            className="w-full h-full object-cover opacity-25 object-[center_20%]" 
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
            <span>SCCTA Tournaments</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
            Play. Compete. <br />
            <span className="text-[#8cb0bf]">Grow.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Put your game to the test through SCCTA junior and adult tournament opportunities sanctioned by USTA Georgia and the Southern Section.
          </p>
        </div>
      </section>

      {/* 02. UPCOMING TOURNAMENTS SECTION */}
      <section className="py-24 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
                <span>Sanctioned Matchplay</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight mt-1">
                Upcoming Tournaments
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mt-1">
                View upcoming events, registration deadlines, draws, and tournament details.
              </p>
            </div>

            {/* Filter & Search */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  placeholder="Search tournaments or level..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#8cb0bf] bg-white shadow-xs"
                />
              </div>

              <select 
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#8cb0bf] shadow-xs"
              >
                <option value="all">All Divisions</option>
                <option value="junior">Junior Events</option>
                <option value="adult">Adult Events</option>
              </select>
            </div>
          </ScrollReveal>

          {/* Tournament Cards Grid (Elevated Design) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTournaments.map((t, idx) => (
              <ScrollReveal 
                key={t.id}
                delay={idx * 100}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Photo Header */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={t.image || "/doubles-ready-stance.jpg"} 
                    alt={t.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-[#061326]/85 backdrop-blur-md text-[#8cb0bf] border border-white/15 shadow-sm">
                      {t.level}
                    </span>

                    <span className="px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-blue-600/90 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#8cb0bf] animate-pulse" />
                      {t.status}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5 bg-[#061326]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-white shadow-md">
                    <Calendar className="w-4 h-4 text-[#8cb0bf]" />
                    <span className="text-xs font-extrabold tracking-wide">{t.date}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold font-display text-slate-950 group-hover:text-[#8cb0bf] transition-colors leading-snug">
                        {t.title}
                      </h3>

                      <div className="flex items-start gap-2 text-xs text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-[#8cb0bf] shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-700">{t.location}</span>
                      </div>
                    </div>

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

                    <div className="flex items-center gap-2 text-[11px] font-bold text-blue-800 bg-blue-50/80 px-3 py-2 rounded-lg border border-blue-100">
                      <Clock className="w-3.5 h-3.5 shrink-0 text-[#8cb0bf]" />
                      <span>Deadline: {t.deadline}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedTournamentDetail(t)}
                      className="text-xs font-bold text-slate-600 hover:text-[#8cb0bf] transition-colors py-2"
                    >
                      Fact Sheet & Draws →
                    </button>

                    <button
                      onClick={() => setSelectedTournamentDetail(t)}
                      className="px-5 py-2.5 rounded-xl bg-[#8cb0bf] hover:bg-[#7ba0b0] text-[#061326] font-bold text-xs shadow-[0_2px_10px_rgba(140, 176, 191,0.3)] transition-all active:scale-95 flex items-center gap-1.5"
                    >
                      <span>Register</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 03. TOURNAMENT INFORMATION CENTER & FAQS */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span className="w-3.5 h-3.5 rounded-sm border border-[#8cb0bf] text-[#8cb0bf] flex items-center justify-center text-[9px]">⬡</span>
              <span>Player & Parent Information</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
              Tournament Information Center
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need before match day.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Draws & Schedules', desc: 'Published 48h prior via Match Tennis App & USTA portal.' },
              { title: 'Registration & Entry', desc: 'Secure online entry via USTA Serve Tennis with USTA ID.' },
              { title: 'Tournament Sites', desc: 'Clayton County International Park & Lovejoy Regional Park.' },
              { title: 'Withdrawals & Refunds', desc: 'Full refund prior to deadline. No refunds once draws are published.' },
              { title: 'Late Entries', desc: 'Considered only if main draw spots remain open.' },
              { title: 'Alternate Players', desc: 'Alternates notified in order of entry ranking.' },
              { title: 'Consolation Rounds', desc: 'Guaranteed 2+ matches via First Match Losers Consolation.' },
              { title: 'Code of Conduct', desc: 'Strict sportsmanship enforcement with certified USTA officials.' },
            ].map((topic, i) => (
              <ScrollReveal key={i} delay={i * 50} className="p-6 rounded-3xl bg-[#FAF9F5] border border-slate-200 text-xs space-y-2 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="font-extrabold text-slate-950 font-display flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#8cb0bf] shrink-0" />
                  <span>{topic.title}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{topic.desc}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto pt-6 space-y-4">
            <h3 className="text-2xl font-extrabold font-display text-slate-950 text-center mb-6">
              Frequently Asked Questions
            </h3>

            {FAQS_TOURNAMENTS.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#8cb0bf] shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Pop-up detail modal */}
      {selectedTournamentDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
            <div className="bg-[#061326] p-8 text-white relative">
              <button 
                onClick={() => setSelectedTournamentDetail(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                ✕
              </button>
              <div className="text-[10px] font-bold text-[#8cb0bf] uppercase tracking-wider mb-1">
                {selectedTournamentDetail.level}
              </div>
              <h3 className="text-2xl font-extrabold font-display">{selectedTournamentDetail.title}</h3>
            </div>
            
            <div className="p-8 space-y-5 text-xs text-slate-700">
              <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div><strong>Dates:</strong> {selectedTournamentDetail.date}</div>
                <div><strong>Location:</strong> {selectedTournamentDetail.location}</div>
                <div><strong>Divisions:</strong> {selectedTournamentDetail.divisions}</div>
                <div><strong>Entry Fee:</strong> {selectedTournamentDetail.entryFee}</div>
                <div className="text-blue-800 font-bold"><strong>Deadline:</strong> {selectedTournamentDetail.deadline}</div>
              </div>

              <p className="leading-relaxed text-slate-600">
                Registration is processed securely via USTA Serve Tennis and Match Tennis App. You will need an active USTA account to enter.
              </p>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTournamentDetail(null)}
                  className="w-1/3 py-3 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
                <a
                  href="https://playtennis.usta.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-2/3 py-3 rounded-xl bg-[#8cb0bf] hover:bg-[#7ba0b0] text-[#061326] font-bold text-center flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(140, 176, 191,0.35)]"
                >
                  <span>Proceed to USTA Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
