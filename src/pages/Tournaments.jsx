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
  Filter,
  Check,
  X,
  Phone,
  Mail,
  Shield,
  Sparkles,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { UPCOMING_TOURNAMENTS, PAST_TOURNAMENTS, FAQS_TOURNAMENTS } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';

export default function Tournaments({ setActivePage, onOpenTournamentRegister }) {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'past'
  const [filterLevel, setFilterLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEvents, setExpandedEvents] = useState({});
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedTournament, setSelectedTournament] = useState(null);

  const toggleEventCollapse = (id) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const currentTournaments = activeTab === 'upcoming' ? UPCOMING_TOURNAMENTS : PAST_TOURNAMENTS;

  const filteredTournaments = currentTournaments.filter((t) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = t.title.toLowerCase().includes(query) || 
                          t.location.toLowerCase().includes(query) ||
                          (t.divisions && t.divisions.toLowerCase().includes(query));
    const matchesLevel = filterLevel === 'all' || 
                         (filterLevel === 'junior' && t.category === 'junior') ||
                         (filterLevel === 'adult' && t.category === 'adult') ||
                         (filterLevel === 'level6' && t.level.includes('Level 6')) ||
                         (filterLevel === 'level7' && t.level.includes('Level 7'));
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="w-full bg-[#FAF9F5] text-slate-900 font-sans">
      
      {/* ========================================================================= */}
      {/* 01. HERO HEADER */}
      {/* ========================================================================= */}
      <section className="bg-slate-950 text-white pt-36 pb-20 relative overflow-hidden">
        
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sccta-clayton-clinic.png" 
            alt="SCCTA tournament competitors" 
            className="w-full h-full object-cover opacity-25 object-[center_20%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60" />
        </div>

        <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#8cb0bf]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#8cb0bf] shadow-lg">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm">
                <img src="/logo.png" alt="SCCTA" className="w-full h-full object-contain" />
              </div>
              <span>SCCTA Tournament Circuit</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#8cb0bf]" />
              Sanctioned USTA Georgia Events
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Tournaments & <br />
              <span className="text-[#8cb0bf]">Competitive Matchplay.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Official USTA Georgia sanctioned Level 5, 6, 7 tournaments and Junior Circuit round-robins hosted across Clayton County and partner facilities.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#8cb0bf] font-display">6</div>
              <div className="text-xs text-slate-300 font-medium">Upcoming Tournaments</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-display">10</div>
              <div className="text-xs text-slate-300 font-medium">Completed Events in Archive</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">USTA</div>
              <div className="text-xs text-slate-300 font-medium">National Ranking Points</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">All Ages</div>
              <div className="text-xs text-slate-300 font-medium">10U to Adult Open</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. MAIN TOURNAMENTS SECTION WITH AUTHENTIC USTA TABS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top Tabs: UPCOMING TOURNAMENTS | PAST TOURNAMENTS */}
          <div className="flex items-center gap-8 border-b border-slate-200 pb-1">
            <button
              onClick={() => {
                setActiveTab('upcoming');
                setFilterLevel('all');
              }}
              className={`pb-3 text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all relative flex items-center gap-2 ${
                activeTab === 'upcoming' 
                  ? 'text-[#0059a6] border-b-2 border-[#0059a6]' 
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <span>Upcoming Tournaments</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'upcoming' ? 'bg-blue-100 text-[#0059a6]' : 'bg-slate-100 text-slate-500'
              }`}>
                {UPCOMING_TOURNAMENTS.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('past');
                setFilterLevel('all');
              }}
              className={`pb-3 text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all relative flex items-center gap-2 ${
                activeTab === 'past' 
                  ? 'text-[#0059a6] border-b-2 border-[#0059a6]' 
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <span>Past Tournaments</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'past' ? 'bg-blue-100 text-[#0059a6]' : 'bg-slate-100 text-slate-500'
              }`}>
                {PAST_TOURNAMENTS.length}
              </span>
            </button>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search by tournament name, venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#8cb0bf] bg-white shadow-xs"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              {[
                { id: 'all', label: 'All Events' },
                { id: 'junior', label: 'Junior' },
                { id: 'adult', label: 'Adult' },
                { id: 'level7', label: 'Level 7' },
                { id: 'level6', label: 'Level 6' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilterLevel(f.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    filterLevel === f.id
                      ? 'bg-[#102A33] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tournament List (Authentic Clean USTA Card Layout) */}
          <div className="space-y-6">
            {filteredTournaments.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
                <Trophy className="w-12 h-12 text-slate-300 mx-auto" />
                <div className="font-bold text-slate-700 text-base">No tournaments found</div>
                <p className="text-xs text-slate-500">Try adjusting your search or filter options.</p>
              </div>
            ) : (
              filteredTournaments.map((t) => {
                const isExpanded = expandedEvents[t.id] ?? true;
                return (
                  <div 
                    key={t.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 space-y-4"
                  >
                    
                    {/* Top Row: Title & Price */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-1 max-w-2xl">
                        <h3 
                          onClick={() => setSelectedTournament(t)}
                          className="text-lg sm:text-xl font-bold font-display text-[#0059a6] hover:underline cursor-pointer leading-tight"
                        >
                          {t.title}
                        </h3>

                        <div className="text-xs text-slate-600 font-medium">
                          {t.location}
                        </div>

                        <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 pt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{t.date}</span>
                        </div>
                      </div>

                      {/* Price on Top Right */}
                      <div className="text-left sm:text-right shrink-0">
                        <div className="text-lg sm:text-xl font-black font-display text-slate-900">
                          {t.entryFee}
                        </div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">
                          Entry Fee
                        </div>
                      </div>
                    </div>

                    {/* Divisions Tags Area (Collapsible) */}
                    {isExpanded && t.divisionTags && (
                      <div className="pt-2 border-t border-slate-100 space-y-3">
                        
                        {/* Boys */}
                        {t.divisionTags.boys && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 w-12">Boys:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {t.divisionTags.boys.map((b, i) => (
                                <span 
                                  key={i} 
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                                >
                                  <span>{b}</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Girls */}
                        {t.divisionTags.girls && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 w-12">Girls:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {t.divisionTags.girls.map((g, i) => (
                                <span 
                                  key={i} 
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                                >
                                  <span>{g}</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Adult Men */}
                        {t.divisionTags.men && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 w-12">Men:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {t.divisionTags.men.map((m, i) => (
                                <span 
                                  key={i} 
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                                >
                                  <span>{m}</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Adult Women */}
                        {t.divisionTags.women && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 w-12">Women:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {t.divisionTags.women.map((w, i) => (
                                <span 
                                  key={i} 
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                                >
                                  <span>{w}</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Mixed */}
                        {t.divisionTags.mixed && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 w-12">Mixed:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {t.divisionTags.mixed.map((m, i) => (
                                <span 
                                  key={i} 
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                                >
                                  <span>{m}</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Coed (Junior Circuit) */}
                        {t.divisionTags.coed && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 w-12">Co-ed:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {t.divisionTags.coed.map((c, i) => (
                                <span 
                                  key={i} 
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                                >
                                  <span>{c}</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    )}

                    {/* Bottom Row: Hide events, Status, Deadline & Logos */}
                    <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      <div className="space-y-2">
                        {t.divisionTags && (
                          <button
                            onClick={() => toggleEventCollapse(t.id)}
                            className="text-xs font-bold text-[#0059a6] hover:underline flex items-center gap-1"
                          >
                            <span>{isExpanded ? 'Hide events ▲' : 'View events ▼'}</span>
                          </button>
                        )}

                        <div className="flex flex-wrap items-center gap-2.5 text-xs">
                          {/* Status Badge */}
                          <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${
                            t.status === 'REGISTRATIONS OPEN'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : t.status === 'COMPLETED'
                                ? 'bg-slate-100 text-slate-600 border-slate-200'
                                : 'bg-amber-50 text-amber-700 border-amber-200'
                          }`}>
                            {t.status}
                          </span>

                          {/* Deadline */}
                          {t.deadline && (
                            <span className="text-slate-500 font-medium">
                              {t.deadline}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right Action: Logo & Register Button */}
                      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                        {/* Logo Badge */}
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xs">
                            <img 
                              src="/logo.png" 
                              alt="SCCTA" 
                              className="w-full h-full object-contain" 
                            />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 hidden sm:inline">
                            SCCTA
                          </span>
                        </div>

                        {activeTab === 'upcoming' ? (
                          <button
                            onClick={() => setSelectedTournament(t)}
                            className="px-5 py-2.5 rounded-xl bg-[#061326] hover:bg-[#0059a6] text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5"
                          >
                            <span>Tournament Details & Registration</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => setSelectedTournament(t)}
                            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                          >
                            Archive Draw & Results
                          </button>
                        )}
                      </div>

                    </div>

                  </div>
                );
              })
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. OFFICIAL USTA PROMOTIONAL BANNER (AS IN SCREENSHOT) */}
      {/* ========================================================================= */}
      <section className="bg-[#0059a6] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Take USTA everywhere!
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-lg mx-auto">
            Find local tennis programs, camps, upcoming tournaments, and a local USTA League to join.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all"
            >
              <span>Download on the App Store</span>
            </a>
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all"
            >
              <span>Get it on Google Play</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. TOURNAMENT FAQ & PLAYER GUIDELINES */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8cb0bf]">
              Player Handbook
            </span>
            <h2 className="text-3xl font-extrabold font-display text-slate-900">
              Tournament FAQs & Player Guidelines
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_TOURNAMENTS.map((faq, i) => (
              <div 
                key={i}
                className="bg-[#FAF9F5] rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  {expandedFaq === i ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. DETAILED TOURNAMENT MODAL (FACTSHEET & REGISTRATION) */}
      {/* ========================================================================= */}
      {selectedTournament && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp">
            
            {/* Modal Header */}
            <div className="bg-[#061326] p-6 text-white relative">
              <button 
                onClick={() => setSelectedTournament(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8cb0bf] mb-1">
                <Trophy className="w-4 h-4" />
                <span>{selectedTournament.level}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white pr-8">
                {selectedTournament.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-slate-300 mt-2">
                <Calendar className="w-3.5 h-3.5 text-[#8cb0bf]" />
                <span>{selectedTournament.date}</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto">
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Location & Facility
                </div>
                <div className="text-sm font-bold text-slate-900 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#8cb0bf] shrink-0 mt-0.5" />
                  <span>{selectedTournament.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[10px] font-bold uppercase">Entry Fee</div>
                  <div className="text-slate-900 font-extrabold text-sm mt-0.5">{selectedTournament.entryFee}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[10px] font-bold uppercase">Sanctioned By</div>
                  <div className="text-slate-900 font-extrabold text-sm mt-0.5">USTA Georgia / Southern</div>
                </div>
              </div>

              {selectedTournament.deadline && (
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0059a6] shrink-0" />
                  <span>Registration Deadline: {selectedTournament.deadline}</span>
                </div>
              )}

              {/* Divisions breakdown */}
              {selectedTournament.divisionTags && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Age & Division Categories
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                    {selectedTournament.divisionTags.boys && (
                      <div className="flex gap-2">
                        <span className="font-bold text-slate-600">Boys:</span>
                        <span className="text-slate-800">{selectedTournament.divisionTags.boys.join(' · ')}</span>
                      </div>
                    )}
                    {selectedTournament.divisionTags.girls && (
                      <div className="flex gap-2">
                        <span className="font-bold text-slate-600">Girls:</span>
                        <span className="text-slate-800">{selectedTournament.divisionTags.girls.join(' · ')}</span>
                      </div>
                    )}
                    {selectedTournament.divisionTags.men && (
                      <div className="flex gap-2">
                        <span className="font-bold text-slate-600">Men:</span>
                        <span className="text-slate-800">{selectedTournament.divisionTags.men.join(' · ')}</span>
                      </div>
                    )}
                    {selectedTournament.divisionTags.women && (
                      <div className="flex gap-2">
                        <span className="font-bold text-slate-600">Women:</span>
                        <span className="text-slate-800">{selectedTournament.divisionTags.women.join(' · ')}</span>
                      </div>
                    )}
                    {selectedTournament.divisionTags.mixed && (
                      <div className="flex gap-2">
                        <span className="font-bold text-slate-600">Mixed:</span>
                        <span className="text-slate-800">{selectedTournament.divisionTags.mixed.join(' · ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Actions inside Modal */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedTournament(null)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Close
                </button>

                <a
                  href="https://playtennis.usta.com/tournaments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 rounded-xl bg-[#0059a6] hover:bg-[#004a8c] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>Register on USTA PlayTennis</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
