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
  AlertCircle,
  FileText
} from 'lucide-react';
import { UPCOMING_TOURNAMENTS, PAST_TOURNAMENTS, FAQS_TOURNAMENTS } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';

export default function Tournaments({ setActivePage, onOpenTournamentRegister }) {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'past'
  const [filterLevel, setFilterLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEvents, setExpandedEvents] = useState({}); // Default: all cards collapsed
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedTournament, setSelectedTournament] = useState(null);

  const toggleEventCollapse = (id) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = () => {
    const allExpanded = {};
    filteredTournaments.forEach(t => {
      allExpanded[t.id] = true;
    });
    setExpandedEvents(allExpanded);
  };

  const handleCollapseAll = () => {
    setExpandedEvents({});
  };

  const currentTournaments = activeTab === 'upcoming' ? UPCOMING_TOURNAMENTS : PAST_TOURNAMENTS;

  // Dynamic counts for current tab
  const counts = {
    all: currentTournaments.length,
    level7: currentTournaments.filter(t => (t.level || '').toLowerCase().includes('level 7') || (t.title || '').toLowerCase().includes('level 7')).length,
    level6: currentTournaments.filter(t => (t.level || '').toLowerCase().includes('level 6') || (t.title || '').toLowerCase().includes('level 6')).length,
    circuit: currentTournaments.filter(t => (t.level || '').toLowerCase().includes('circuit') || (t.title || '').toLowerCase().includes('circuit')).length,
    junior: currentTournaments.filter(t => t.category === 'junior').length,
    adult: currentTournaments.filter(t => t.category === 'adult' || (t.level || '').toLowerCase().includes('adult')).length,
  };

  const filterOptions = [
    { id: 'all', label: 'All Events', count: counts.all },
    ...(counts.level7 > 0 ? [{ id: 'level7', label: 'Level 7', count: counts.level7 }] : []),
    ...(counts.level6 > 0 ? [{ id: 'level6', label: 'Level 6', count: counts.level6 }] : []),
    ...(counts.circuit > 0 ? [{ id: 'circuit', label: 'Junior Circuit', count: counts.circuit }] : []),
    ...(counts.adult > 0 ? [{ id: 'adult', label: 'Adult Open', count: counts.adult }] : []),
    ...(counts.junior > 0 && counts.adult > 0 ? [{ id: 'junior', label: 'Junior', count: counts.junior }] : []),
  ];

  const filteredTournaments = currentTournaments.filter((t) => {
    // 1. Search Query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const titleMatch = (t.title || '').toLowerCase().includes(q);
      const locationMatch = (t.location || '').toLowerCase().includes(q);
      const divisionsMatch = (t.divisions || '').toLowerCase().includes(q);
      const levelMatch = (t.level || '').toLowerCase().includes(q);
      const dateMatch = (t.date || '').toLowerCase().includes(q);
      
      let tagMatch = false;
      if (t.divisionTags) {
        const allTags = [
          ...(t.divisionTags.boys || []),
          ...(t.divisionTags.girls || []),
          ...(t.divisionTags.men || []),
          ...(t.divisionTags.women || []),
          ...(t.divisionTags.mixed || []),
          ...(t.divisionTags.coed || []),
        ];
        tagMatch = allTags.some(tag => tag.toLowerCase().includes(q));
      }

      if (!titleMatch && !locationMatch && !divisionsMatch && !levelMatch && !dateMatch && !tagMatch) {
        return false;
      }
    }

    // 2. Filter level
    if (filterLevel === 'all') return true;
    if (filterLevel === 'level7') {
      return (t.level || '').toLowerCase().includes('level 7') || (t.title || '').toLowerCase().includes('level 7');
    }
    if (filterLevel === 'level6') {
      return (t.level || '').toLowerCase().includes('level 6') || (t.title || '').toLowerCase().includes('level 6');
    }
    if (filterLevel === 'circuit') {
      return (t.level || '').toLowerCase().includes('circuit') || (t.title || '').toLowerCase().includes('circuit');
    }
    if (filterLevel === 'junior') {
      return t.category === 'junior';
    }
    if (filterLevel === 'adult') {
      return t.category === 'adult' || (t.level || '').toLowerCase().includes('adult');
    }
    return true;
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
                setExpandedEvents({});
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
                setExpandedEvents({});
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

          {/* Search & Dynamic Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search by name, division (10U, 12U), venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#8cb0bf] bg-white shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dynamic Filter Pills with Live Match Counts */}
            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              {filterOptions.map((f) => {
                const isActive = filterLevel === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilterLevel(f.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#102A33] text-white shadow-xs ring-1 ring-white/20'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span>{f.label}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {f.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary Bar & Global Details Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 pt-1 pb-1 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">
                Showing {filteredTournaments.length} tournament{filteredTournaments.length !== 1 ? 's' : ''}
              </span>
              {(filterLevel !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setFilterLevel('all');
                    setSearchQuery('');
                  }}
                  className="text-xs font-bold text-[#0059a6] hover:underline flex items-center gap-1 ml-1"
                >
                  <X className="w-3 h-3" />
                  <span>Clear filters</span>
                </button>
              )}
            </div>

            {filteredTournaments.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleExpandAll}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                  <span>Show All Details</span>
                </button>
                <button
                  type="button"
                  onClick={handleCollapseAll}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                  <span>Hide All Details</span>
                </button>
              </div>
            )}
          </div>

          {/* Tournament List (2-Column Grid with Photographic Header Cards) */}
          <div>
            {filteredTournaments.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
                <Trophy className="w-12 h-12 text-slate-300 mx-auto" />
                <div className="font-bold text-slate-700 text-base">No tournaments found</div>
                <p className="text-xs text-slate-500">Try adjusting your search or filter options.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {filteredTournaments.map((t) => {
                  const isExpanded = Boolean(expandedEvents[t.id]);
                  return (
                    <div 
                      key={t.id}
                      className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                    >
                      {/* Photo Header Banner (Centered & Fully Visible Without Cropping) */}
                      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 shrink-0 flex items-center justify-center">
                        {/* Ambient Blurred Background to Fill Edges Naturally */}
                        <img 
                          src={t.image || '/images/tournament-winner-boy-trophy.jpg'} 
                          alt="" 
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-125 pointer-events-none" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/50 pointer-events-none" />

                        {/* Centered Main Photo (Entire Subject, Faces & Trophies Fully Intact) */}
                        <img 
                          src={t.image || '/images/tournament-winner-boy-trophy.jpg'} 
                          alt={t.title} 
                          className="relative z-1 h-full w-auto max-w-full object-contain mx-auto group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-2xl" 
                        />

                        {/* Top-Left: Level Badge */}
                        <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-md bg-slate-950/75 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                          {t.level || 'USTA Tournament'}
                        </div>

                        {/* Top-Right: Registration Status Badge */}
                        <div className="absolute top-3.5 right-3.5 z-10 px-3 py-1 rounded-md bg-slate-950/75 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            t.status === 'REGISTRATIONS OPEN' 
                              ? 'bg-emerald-400 animate-pulse' 
                              : t.status === 'COMPLETED'
                                ? 'bg-slate-400'
                                : 'bg-amber-400'
                          }`} />
                          <span>{t.status}</span>
                        </div>

                        {/* Bottom-Left: Calendar Date Pill */}
                        <div className="absolute bottom-3.5 left-3.5 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-sm">
                          <Calendar className="w-3.5 h-3.5 text-[#8cb0bf]" />
                          <span>{t.date}</span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-3.5">
                          {/* Title */}
                          <h3 
                            onClick={() => setSelectedTournament(t)}
                            className="text-lg sm:text-xl font-bold font-display text-slate-900 hover:text-[#0059a6] cursor-pointer transition-colors leading-tight line-clamp-2"
                          >
                            {t.title}
                          </h3>

                          {/* Venue Location */}
                          <div className="flex items-start gap-1.5 text-xs text-slate-500 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{t.location}</span>
                          </div>

                          {/* 2-Column Specs: Divisions & Entry Fee */}
                          <div className="grid grid-cols-2 gap-3 bg-slate-50/80 border border-slate-200/80 rounded-xl p-3.5">
                            <div className="min-w-0">
                              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                DIVISIONS
                              </div>
                              <div className="text-xs font-bold text-slate-800 truncate" title={t.divisions}>
                                {t.divisions || 'Open Draws'}
                              </div>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                ENTRY FEE
                              </div>
                              <div className="text-xs font-bold text-slate-900">
                                {t.entryFee}
                              </div>
                            </div>
                          </div>

                          {/* Collapsible Division Details */}
                          {t.divisionTags && (
                            <div className="space-y-2">
                              <button
                                type="button"
                                onClick={() => toggleEventCollapse(t.id)}
                                className="text-xs font-bold text-[#0059a6] hover:underline inline-flex items-center gap-1"
                              >
                                <span>{isExpanded ? 'Hide category details' : 'Show details (Boys, Girls...)'}</span>
                                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                              </button>

                              {isExpanded && (
                                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2.5 text-xs animate-in fade-in duration-200">
                                  {t.divisionTags.boys && (
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="font-bold text-slate-600 text-[11px] w-12">Boys:</span>
                                      <div className="flex flex-wrap gap-1.5">
                                        {t.divisionTags.boys.map((b, i) => (
                                          <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-xs">
                                            {b}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {t.divisionTags.girls && (
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="font-bold text-slate-600 text-[11px] w-12">Girls:</span>
                                      <div className="flex flex-wrap gap-1.5">
                                        {t.divisionTags.girls.map((g, i) => (
                                          <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-xs">
                                            {g}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {t.divisionTags.men && (
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="font-bold text-slate-600 text-[11px] w-12">Men:</span>
                                      <div className="flex flex-wrap gap-1.5">
                                        {t.divisionTags.men.map((m, i) => (
                                          <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-xs">
                                            {m}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {t.divisionTags.women && (
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="font-bold text-slate-600 text-[11px] w-12">Women:</span>
                                      <div className="flex flex-wrap gap-1.5">
                                        {t.divisionTags.women.map((w, i) => (
                                          <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-xs">
                                            {w}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {t.divisionTags.mixed && (
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="font-bold text-slate-600 text-[11px] w-12">Mixed:</span>
                                      <div className="flex flex-wrap gap-1.5">
                                        {t.divisionTags.mixed.map((m, i) => (
                                          <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-xs">
                                            {m}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {t.divisionTags.coed && (
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="font-bold text-slate-600 text-[11px] w-12">Co-ed:</span>
                                      <div className="flex flex-wrap gap-1.5">
                                        {t.divisionTags.coed.map((c, i) => (
                                          <span key={i} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-xs">
                                            {c}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Registration Deadline Banner */}
                          <div className="bg-blue-50/50 border border-blue-100 rounded-xl px-3.5 py-2.5 flex items-center gap-2 text-xs font-medium text-slate-600">
                            <FileText className="w-3.5 h-3.5 text-[#0059a6] shrink-0" />
                            <span className="truncate">
                              {t.deadline ? `Registration Deadline: ${t.deadline}` : 'Registration Deadline: Completed event'}
                            </span>
                          </div>
                        </div>

                        {/* Card Action Footer */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                          <button
                            onClick={() => setSelectedTournament(t)}
                            className="text-xs font-bold text-slate-700 hover:text-[#0059a6] flex items-center gap-1.5 transition-colors"
                          >
                            <span>Fact Sheet & Draws</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          {activeTab === 'upcoming' ? (
                            <button
                              onClick={() => setSelectedTournament(t)}
                              className="px-4 py-2.5 rounded-xl bg-[#102A33] hover:bg-[#1a3f4e] text-white text-xs font-extrabold shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
                            >
                              <span>Register on USTA</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </button>
                          ) : (
                            <button
                              onClick={() => setSelectedTournament(t)}
                              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                            >
                              Archive & Results
                            </button>
                          )}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
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
