import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  Building2, 
  Check, 
  ArrowRight,
  Sparkles,
  Trophy,
  Crown
} from 'lucide-react';
import { DONATION_TIERS } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';

export default function GetInvolved({ setActivePage, onOpenDonate }) {
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerRole, setVolunteerRole] = useState('court');

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* 01. HERO HEADER (WITH PHOTOGRAPHIC BACKGROUND) */}
      <section className="bg-slate-950 text-white pt-36 pb-24 relative overflow-hidden">
        
        {/* Photographic Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/team-high-five.jpg" 
            alt="Tennis team celebration" 
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
            <span>Get Involved</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
            Be part of their <br />
            <span className="text-[#38BDF8]">next opportunity.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            You don't have to be on the court to make an impact. Your support helps SCCTA create meaningful tennis, educational, and development opportunities for youth across Clayton County.
          </p>
        </div>
      </section>

      {/* 02. THREE WAYS TO ENGAGE */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Donate */}
            <ScrollReveal delay={100} className="bg-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0059A6] text-white flex items-center justify-center shadow-md shadow-blue-900/20">
                  <Heart className="w-7 h-7 fill-white text-white" />
                </div>
                <h3 className="text-3xl font-extrabold font-display text-slate-950">Donate</h3>
                <div className="text-xs font-bold text-[#0059A6] uppercase tracking-wider">Give opportunity.</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your tax-deductible contribution directly funds youth clinics, tournament entry fees, equipment sets, and tutoring labs.
                </p>
              </div>

              <button
                onClick={onOpenDonate}
                className="w-full py-3.5 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs shadow-[0_4px_14px_rgba(0,89,166,0.35)] transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Donate Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </ScrollReveal>

            {/* Volunteer */}
            <ScrollReveal delay={200} className="bg-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0059A6] text-white flex items-center justify-center shadow-md shadow-blue-900/20">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold font-display text-slate-950">Volunteer</h3>
                <div className="text-xs font-bold text-[#0059A6] uppercase tracking-wider">Give your time.</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Support weekend youth clinics, matchday tournament desk operations, after-school tutoring, and community outreach.
                </p>
              </div>

              <a
                href="#volunteer-section"
                className="w-full py-3.5 rounded-xl bg-white border border-slate-300 text-slate-950 font-bold text-xs text-center block hover:border-[#0059A6] hover:text-[#0059A6] hover:bg-blue-50/50 transition-all shadow-xs"
              >
                Become a Volunteer →
              </a>
            </ScrollReveal>

            {/* Partner */}
            <ScrollReveal delay={300} className="bg-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0059A6] text-white flex items-center justify-center shadow-md shadow-blue-900/20">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold font-display text-slate-950">Partner With Us</h3>
                <div className="text-xs font-bold text-[#0059A6] uppercase tracking-wider">Community Alliances.</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We welcome local businesses, school districts, and foundations to sponsor courts, events, and academic scholarships.
                </p>
              </div>

              <button
                onClick={() => setActivePage('contact')}
                className="w-full py-3.5 rounded-xl bg-white border border-slate-300 text-slate-950 font-bold text-xs text-center block hover:border-[#0059A6] hover:text-[#0059A6] hover:bg-blue-50/50 transition-all shadow-xs"
              >
                Become a Partner →
              </button>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 03. DONATION IMPACT TIERS */}
      <section className="py-24 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span className="w-3.5 h-3.5 rounded-sm border border-[#0059A6] text-[#0059A6] flex items-center justify-center text-[9px]">⬡</span>
              <span>Transparent 501(c)(3) Giving</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
              Where Your Donation Goes
            </h2>
            <p className="text-slate-600 text-sm">
              South Clayton Community Tennis Association is a 501(c)(3) nonprofit. Contributions are tax-deductible.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DONATION_TIERS.map((tier, idx) => (
              <ScrollReveal 
                key={tier.amount}
                delay={idx * 100}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="text-4xl font-black font-display text-[#0059A6]">
                    ${tier.amount}
                  </div>
                  <h4 className="font-extrabold text-base text-slate-950">{tier.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{tier.description}</p>
                </div>

                <button
                  onClick={onOpenDonate}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-[#0059A6] hover:text-white text-slate-950 font-bold text-xs transition-all shadow-xs"
                >
                  Sponsor ${tier.amount}
                </button>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 04. VOLUNTEER REGISTRATION FORM */}
      <section id="volunteer-section" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <ScrollReveal className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span className="w-3.5 h-3.5 rounded-sm border border-[#0059A6] text-[#0059A6] flex items-center justify-center text-[9px]">⬡</span>
              <span>Join Our Volunteer Corps</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight">
              Volunteer With SCCTA
            </h2>
            <p className="text-slate-600 text-sm">
              Whether you have 2 hours a month or want to assist every Saturday, we welcome your support!
            </p>
          </ScrollReveal>

          {volunteerSubmitted ? (
            <div className="bg-slate-50 border border-slate-200 p-8 sm:p-12 rounded-3xl text-center space-y-4">
              <div className="w-14 h-14 bg-[#0059A6] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-extrabold font-display text-slate-950">Thank you for signing up!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Our volunteer coordinator will review your preferences and contact you via email regarding upcoming clinic orientations and tournament desk assignments.
              </p>
            </div>
          ) : (
            <ScrollReveal className="bg-[#FAF9F5] p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setVolunteerSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#0059A6] shadow-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#0059A6] shadow-xs" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#0059A6] shadow-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#0059A6] shadow-xs" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Area of Interest</label>
                  <select 
                    value={volunteerRole}
                    onChange={(e) => setVolunteerRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:ring-2 focus:ring-[#0059A6] shadow-xs"
                  >
                    <option value="court">On-Court Clinic Assistant (Ball feeding, rally partner)</option>
                    <option value="desk">Tournament Desk & Scorekeeper (Peggy Ballou / Match App team)</option>
                    <option value="tutor">Academic Tutor & Mentorship (Beyond the Baseline reading/math)</option>
                    <option value="hospitality">Event Logistics & Hospitality</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0059A6] hover:bg-[#004785] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(0,89,166,0.35)] transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Submit Volunteer Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </ScrollReveal>
          )}

        </div>
      </section>

    </div>
  );
}
