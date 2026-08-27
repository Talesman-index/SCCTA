import React, { useState } from 'react';
import { X, Check, Heart, Sparkles, Trophy, Calendar, MapPin, DollarSign, User, Mail, Phone, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { DONATION_TIERS, BALL_STAGES } from '../data/mockData';

// 1. DONATION MODAL
export function DonationModal({ isOpen, onClose }) {
  const [selectedTier, setSelectedTier] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [step, setStep] = useState('select'); // 'select' | 'details' | 'success'
  const [donorData, setDonorData] = useState({ name: '', email: '', dedication: '' });

  if (!isOpen) return null;

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : selectedTier;

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header Banner */}
        <div className="bg-[#061326] p-7 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-1">
            <img src="/logo.png" alt="SCCTA" className="w-4 h-4 object-contain" />
            <span>501(c)(3) Community Support</span>
          </div>
          <h3 className="text-2xl font-extrabold font-display text-white">
            Support SCCTA Youth Tennis
          </h3>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Every dollar empowers youth in Clayton County with racquets, court time, and academic mentorship.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {step === 'select' && (
            <div className="space-y-5">
              {/* Frequency Toggle */}
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setIsRecurring(false)}
                  className={`py-2.5 text-xs font-bold rounded-lg transition-all ${
                    !isRecurring ? 'bg-[#0059A6] text-white shadow-sm' : 'text-slate-600'
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setIsRecurring(true)}
                  className={`py-2.5 text-xs font-bold rounded-lg transition-all ${
                    isRecurring ? 'bg-[#0059A6] text-white shadow-sm' : 'text-slate-600'
                  }`}
                >
                  Monthly Supporter
                </button>
              </div>

              {/* Preset Tiers */}
              <div className="grid grid-cols-2 gap-3">
                {DONATION_TIERS.map((tier) => (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selectedTier === tier.amount && !customAmount
                        ? 'border-[#0059A6] bg-blue-50/60 ring-2 ring-[#0059A6]'
                        : 'border-slate-200 hover:border-blue-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black font-display text-xl text-[#0059A6]">${tier.amount}</span>
                      {tier.popular && (
                        <span className="text-[10px] uppercase font-bold bg-[#0059A6] text-white px-2 py-0.5 rounded-full shadow-xs">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-medium text-slate-600 line-clamp-2">
                      {tier.title}
                    </p>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Or enter a custom amount</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                  <input
                    type="number"
                    min="5"
                    placeholder="Other Amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 text-xs font-bold focus:ring-2 focus:ring-[#0059A6]"
                  />
                </div>
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={() => setStep('details')}
                className="w-full py-3.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs shadow-[0_4px_14px_rgba(0,89,166,0.35)] transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Continue (${currentAmount})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleDonateSubmit} className="space-y-4">
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#0059A6]">${currentAmount} {isRecurring ? '/ month' : 'One-Time'}</span>
                  <p className="text-[11px] text-slate-500">Tax-deductible contribution</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('select')}
                  className="text-xs text-[#0059A6] font-bold hover:underline"
                >
                  Change
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={donorData.name}
                  onChange={(e) => setDonorData({ ...donorData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0059A6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email (for 501c3 tax receipt)</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={donorData.email}
                  onChange={(e) => setDonorData({ ...donorData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0059A6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Optional Dedication or Note</label>
                <input
                  type="text"
                  placeholder="In honor of... or general scholarship"
                  value={donorData.dedication}
                  onChange={(e) => setDonorData({ ...donorData, dedication: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0059A6]"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('select')}
                  className="w-1/3 py-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white text-xs font-bold shadow-[0_4px_14px_rgba(0,89,166,0.35)] transition-all active:scale-95"
                >
                  Complete Donation
                </button>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#0059A6] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-2xl font-extrabold font-display text-slate-950">Thank You, {donorData.name || 'Generous Donor'}!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Your contribution of <strong>${currentAmount}</strong> directly empowers youth in Clayton County. A formal 501(c)(3) tax receipt has been generated and sent to <strong>{donorData.email || 'your email'}</strong>.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white text-xs font-bold shadow transition-all active:scale-95"
              >
                Close Window
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// 2. PROGRAM FINDER WIZARD MODAL (HUMAN-CRAFTED ATHLETIC MATCHER)
export function ProgramFinderModal({ isOpen, onClose, onSelectProgram }) {
  const [step, setStep] = useState(1);
  const [ageGroup, setAgeGroup] = useState('');
  const [experience, setExperience] = useState('');
  const [goal, setGoal] = useState('');

  if (!isOpen) return null;

  const handleFinish = () => {
    onClose();
    if (ageGroup === 'adult') {
      onSelectProgram('programs');
    } else if (experience === 'competitive' || goal === 'tournaments') {
      onSelectProgram('tournaments');
    } else {
      onSelectProgram('programs');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#061326] p-7 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 text-[#38BDF8] text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
            <img src="/logo.png" alt="SCCTA" className="w-4 h-4 object-contain" />
            <span>SCCTA Interactive Matcher · Step {step} of 3</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Find the Perfect Tennis Program
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            Answer 3 quick questions to discover your personalized clinic & mentorship pathway.
          </p>

          {/* Progress Indicator Bar */}
          <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
            <div 
              className="bg-[#38BDF8] h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Wizard Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-extrabold text-base text-slate-950 font-display">
                  1. Who is taking the court?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">Select the player's age bracket:</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'red', label: 'Ages 4–8', tag: 'Red Ball', desc: 'Mini-court agility & hand-eye fun', color: '#EF4444' },
                  { id: 'orange', label: 'Ages 8–10', tag: 'Orange Ball', desc: '60-ft court with rally shapes', color: '#F97316' },
                  { id: 'green', label: 'Ages 10–12', tag: 'Green Ball', desc: 'Full court stroke preparation', color: '#22C55E' },
                  { id: 'yellow', label: 'Ages 12–18', tag: 'Yellow Ball', desc: 'Full regulation & junior competition', color: '#EAB308' },
                  { id: 'adult', label: 'Adults (18+)', tag: 'Clinics & Leagues', desc: 'Beginners, cardio & doubles', color: '#0059A6', fullWidth: true },
                ].map((item) => {
                  const isSelected = ageGroup === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAgeGroup(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 ${item.fullWidth ? 'sm:col-span-2' : ''} ${
                        isSelected 
                          ? 'border-[#0059A6] bg-[#0059A6] text-white shadow-lg scale-[1.01]' 
                          : 'border-slate-200 hover:border-blue-300 bg-[#FAF9F5]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="font-extrabold text-sm">{item.label}</span>
                        </div>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-[#38BDF8]' : 'bg-white border border-slate-200 text-slate-700'}`}>
                          {item.tag}
                        </span>
                      </div>
                      <div className={`text-xs ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                        {item.desc}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                disabled={!ageGroup}
                onClick={() => setStep(2)}
                className="w-full mt-4 py-4 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(0,89,166,0.35)] disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center gap-2"
              >
                <span>Continue to Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-extrabold text-base text-slate-950 font-display">
                  2. What is the player's experience level?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">Helps us place you in the right skill tier:</p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: 'none', label: 'Brand New Beginner', desc: 'First time holding a racquet or learning fundamentals' },
                  { id: 'some', label: 'Recreational & Intermediate', desc: 'Can rally comfortably and knows basic rules and scoring' },
                  { id: 'competitive', label: 'Competitive Athlete', desc: 'Plays Junior Circuit, JTT, high school varsity, or tournaments' },
                ].map((item) => {
                  const isSelected = experience === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setExperience(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isSelected 
                          ? 'border-[#0059A6] bg-[#0059A6] text-white shadow-lg' 
                          : 'border-slate-200 hover:border-blue-300 bg-[#FAF9F5]'
                      }`}
                    >
                      <div className="font-extrabold text-sm mb-0.5">{item.label}</div>
                      <div className={`text-xs ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                        {item.desc}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={!experience}
                  onClick={() => setStep(3)}
                  className="w-2/3 py-3.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(0,89,166,0.35)] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-extrabold text-base text-slate-950 font-display">
                  3. What is your primary focus?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">We tailor the session pathway to your ambitions:</p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: 'fun', label: 'Have Fun & Build Athletic Confidence', desc: 'Weekly clinics, positive coaches and healthy sportsmanship' },
                  { id: 'academics', label: 'Tennis + Beyond the Baseline Academic Mentoring', desc: 'Mandatory study halls, USTA essay workshops and tutor support' },
                  { id: 'tournaments', label: 'Sanctioned Competition & Junior Rankings', desc: 'USTA Level 5–7 tournament draws, Junior Team Tennis & matchplay' },
                ].map((item) => {
                  const isSelected = goal === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isSelected 
                          ? 'border-[#0059A6] bg-[#0059A6] text-white shadow-lg' 
                          : 'border-slate-200 hover:border-blue-300 bg-[#FAF9F5]'
                      }`}
                    >
                      <div className="font-extrabold text-sm mb-0.5">{item.label}</div>
                      <div className={`text-xs ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                        {item.desc}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-3.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={!goal}
                  onClick={handleFinish}
                  className="w-2/3 py-3.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(0,89,166,0.35)] disabled:opacity-30 flex items-center justify-center gap-2"
                >
                  <span>View Recommended Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// 3. STORY DETAIL SPOTLIGHT MODAL
export function StoryModal({ story, onClose }) {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Top Image Banner */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-950 shrink-0">
          <img src={story.image} alt={story.name} className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
            <span className="text-[10px] font-extrabold uppercase bg-[#0059A6] text-white px-2.5 py-1 rounded-full shadow border border-blue-400/30">
              {story.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">{story.name}</h3>
            <p className="text-xs text-blue-200">{story.achievement}</p>
          </div>
        </div>

        {/* Scrollable Story Content */}
        <div className="p-6 sm:p-8 space-y-5 overflow-y-auto">
          {story.quote && (
            <blockquote className="p-5 rounded-2xl bg-blue-50/60 border-l-4 border-[#0059A6] text-xs sm:text-sm italic text-slate-800 leading-relaxed font-medium">
              “{story.quote}”
            </blockquote>
          )}

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h4 className="font-bold text-sm text-slate-950 font-display">The Journey</h4>
            <p>{story.fullStory || story.excerpt}</p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              National Junior Tennis & Learning · Clayton County, GA
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs shadow transition-all active:scale-95"
            >
              Close Story
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

