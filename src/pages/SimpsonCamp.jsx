import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Trophy, 
  ExternalLink, 
  MapPin, 
  CheckCircle2, 
  Quote, 
  Share2,
  Building2,
  Award
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function SimpsonCamp({ setActivePage, onOpenDonate, onOpenProgramFinder }) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const scheduleDays = [
    {
      day: "Day 1",
      title: "Ali’s Legacy & Trust Building",
      location: "Muhammad Ali Center",
      highlight: "Explored humanitarian values and engaged in team leadership challenges."
    },
    {
      day: "Day 2",
      title: "Champions’ Challenge on Court",
      location: "Central Park Courts",
      highlight: "Clinics with USTA Southern leaders and Father-Daughter National Champions."
    },
    {
      day: "Day 3",
      title: "Juneteenth Tournament & Quiz Bowl",
      location: "Petersburg Park & Univ. of Louisville",
      highlight: "Competed in Charles Crawford Tournament; celebrated African American history."
    },
    {
      day: "Day 4",
      title: "PTR Workshop & Sportsmanship Awards",
      location: "Louisville Tennis Facilities",
      highlight: "PTR workshop with Master Clinician Frank Adams and sportsmanship honors."
    }
  ];

  const delegationCards = [
    {
      image: "/images/simpson-camp-sccta-player-chaperone.jpg",
      badge: "Dedicated Chaperone",
      title: "Mentorship & Guidance",
      description: "Heartfelt appreciation to our dedicated chaperone who traveled to Louisville, caring for our youth and exemplifying Arthur Ashe's selfless leadership."
    },
    {
      image: "/images/simpson-camp-sccta-juniors.jpg",
      badge: "Clayton County Athletes",
      title: "Integrity on the Court",
      description: "Our SCCTA players represented Clayton County with skill, perseverance, and outstanding sportsmanship during the Juneteenth competition."
    },
    {
      image: "/images/simpson-camp-sccta-player-portrait.jpg",
      badge: "Future NJTL Leader",
      title: "Confidence & Lifelong Growth",
      description: "Returning to Clayton County with lifelong friendships, new technical mastery, and inspiration to achieve on court and in the classroom."
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* ========================================================================= */}
      {/* 01. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="bg-slate-950 text-white pt-36 pb-16 relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Honoring Vision, Leadership & <br />
              <span className="text-[#8cb0bf]">Empowering Future Champions.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              South Clayton Community Tennis Association (SCCTA) extends our gratitude to the <strong className="text-white font-semibold">Southern Tennis Foundation</strong>, tennis legend <strong className="text-white font-semibold">Lenny Simpson</strong>, <strong className="text-white font-semibold">USTA Southern</strong>, and <strong className="text-white font-semibold">USTA Kentucky</strong> for hosting twenty-seven aspiring young leaders in Louisville, Kentucky.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10 max-w-4xl">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-[#8cb0bf] font-display">27</div>
              <div className="text-xs text-slate-300">Camper Leaders</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-300 font-display">4 Days</div>
              <div className="text-xs text-slate-300">Intensive Training</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-[#8cb0bf] font-display">9 States</div>
              <div className="text-xs text-slate-300">USTA Southern</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-white font-display">100%</div>
              <div className="text-xs text-slate-300">Foundation Funded</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="https://www.southerntennisfoundation.org/news/2025-lenny-simpson-njtl-leadership-camp-empowers-future-leaders-in-louisville"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#8cb0bf] hover:bg-[#a2c4d2] text-[#061326] font-bold text-xs shadow-lg transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>Read STF Official Article</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyLink}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5 text-[#8cb0bf]" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Tribute'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. OUR CLAYTON COUNTY DELEGATION & STATEMENT OF GRATITUDE */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header & Quote Block */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>Clayton County Delegation & Mentors</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900">
              Thank You to Our Players & Chaperone
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We celebrate our South Clayton CTA student-athletes who competed with character in Louisville, and our selfless chaperone whose care and leadership made this transformative experience possible.
            </p>
          </div>

          {/* 3 Real Photographs Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {delegationCards.map((card, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={idx * 100}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 w-full bg-slate-950 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#061326]/90 backdrop-blur-md text-[#8cb0bf] border border-white/20 shadow">
                        {card.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold font-display text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>South Clayton CTA · Clayton County, GA</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Statement Quote Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center max-w-4xl mx-auto space-y-3">
            <Quote className="w-8 h-8 text-[#8cb0bf] mx-auto opacity-70" />
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              “To Mr. Lenny Simpson, the Southern Tennis Foundation, USTA Southern, and USTA Kentucky: your investment in our young leaders proves tennis is far bigger than the boundaries of a court.”
            </p>
            <div className="font-extrabold text-xs text-slate-900 font-display">
              South Clayton Community Tennis Association, Inc. · 501(c)(3) NJTL Chapter
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. 4-DAY LEADERSHIP HIGHLIGHTS */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8cb0bf]">
              Camp Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Four Days of Athletics, Heritage & Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scheduleDays.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF9F5] p-5 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#061326] text-white">
                      {item.day}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#8cb0bf]" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. PARTNERS & CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#061326] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Gratitude summary */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#8cb0bf] border border-white/10">
              <Building2 className="w-3.5 h-3.5" />
              <span>Gratitude to Camp Organizers & Hosts</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              With Appreciation to the Community Behind the Camp
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Special recognition to <strong className="text-white">Lenny Simpson</strong>, <strong className="text-white">Southern Tennis Foundation</strong>, <strong className="text-white">USTA Southern</strong>, <strong className="text-white">USTA Kentucky</strong>, Clinician <strong className="text-white">Frank Adams (PTR)</strong>, and host partners <strong className="text-white">Rising Stars NJTL</strong> & <strong className="text-white">West Louisville TC</strong>.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-slate-900 to-[#102A33] rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                Help Us Send More Clayton County Youth to Future Camps
              </h3>
              <p className="text-xs text-slate-300 max-w-lg">
                Your donations sponsor tournament travel grants, equipment loaners, and leadership camp scholarships for underserved youth.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenDonate?.()}
                className="px-5 py-2.5 rounded-xl bg-[#8cb0bf] hover:bg-[#a2c4d2] text-[#061326] font-bold text-xs shadow-lg transition-all active:scale-95"
              >
                Sponsor a Camper
              </button>
              <button
                onClick={() => setActivePage('programs')}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition-all active:scale-95"
              >
                Explore Programs
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
