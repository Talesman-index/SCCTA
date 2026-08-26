import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Trophy 
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'Programs',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* 01. HERO HEADER (WITH PHOTOGRAPHIC BACKGROUND) */}
      <section className="bg-slate-950 text-white pt-36 pb-24 relative overflow-hidden">
        
        {/* Photographic Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/aerial-court.jpg" 
            alt="Tennis courts overview" 
            className="w-full h-full object-cover opacity-25 object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-[#D4F826]">
            <Mail className="w-3.5 h-3.5 text-[#D4F826]" />
            <span>Contact SCCTA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
            Let's <span className="text-[#D4F826]">connect.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Questions about youth clinics, tournament registration, draws, volunteering, or partnerships? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* 02. INQUIRY DIRECTORY & CONTACT FORM */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Inquiries */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* General Inquiries */}
              <ScrollReveal delay={100} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-slate-950 text-[#D4F826] flex items-center justify-center font-bold shadow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-950 font-display text-lg">General Inquiries</h3>
                    <p className="text-xs text-slate-500">South Clayton Community Tennis Association, Inc.</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                    <span>Clayton County, Georgia</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-900 shrink-0" />
                    <a href="mailto:scccta1@gmail.com" className="text-slate-900 font-bold hover:text-[#3B82F6] transition-colors">
                      scccta1@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-900 shrink-0" />
                    <a href="tel:770-872-0921" className="text-slate-900 font-bold hover:text-[#3B82F6] transition-colors">
                      770-872-0921
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Tournament Inquiries */}
              <ScrollReveal delay={200} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-slate-950 text-[#D4F826] flex items-center justify-center font-bold shadow">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-950 font-display text-lg">Tournament Desk</h3>
                    <p className="text-xs text-slate-500">Registration, draws, withdrawals & desk</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  For tournament schedules, draws, and matchday desk operations:
                </p>

                <div className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-900 shrink-0" />
                    <a href="mailto:sccta.jr.tournament@gmail.com" className="text-slate-900 font-bold hover:text-[#3B82F6] transition-colors">
                      sccta.jr.tournament@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-900 shrink-0" />
                    <a href="tel:404-386-4009" className="text-slate-900 font-bold hover:text-[#3B82F6] transition-colors">
                      404-386-4009
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Facilities Note */}
              <ScrollReveal delay={300} className="bg-slate-950 text-white p-7 rounded-3xl space-y-2 text-xs shadow-lg">
                <div className="font-extrabold text-[#D4F826] uppercase tracking-wider text-[10px]">
                  Host Facilities
                </div>
                <div className="font-extrabold text-sm font-display">Clayton County International Park Tennis Center</div>
                <p className="text-slate-300 leading-relaxed">
                  2300 Hwy 138 SE, Jonesboro, GA 30236 & Lovejoy Regional Park Courts.
                </p>
              </ScrollReveal>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm" delay={150}>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Fill out the form below and our team will get back to you within 24–48 hours.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-slate-950 text-[#D4F826] rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 font-display">Message Sent!</h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting SCCTA. We have received your inquiry regarding <strong>{formData.interest}</strong> and will follow up with you at <strong>{formData.email}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          interest: 'Programs',
                          message: ''
                        });
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">First Name</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-slate-900 shadow-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-slate-900 shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-slate-900 shadow-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-slate-900 shadow-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">I'm interested in:</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:ring-2 focus:ring-slate-900 shadow-xs"
                      >
                        <option value="Programs">Youth or Adult Tennis Programs</option>
                        <option value="Tournaments">Tournament Registration & Draws</option>
                        <option value="Volunteering">Volunteering & Tutoring</option>
                        <option value="Partnerships">Community Partnerships & Sponsorships</option>
                        <option value="Donations">Donations & 501(c)(3) Giving</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                      <textarea
                        rows="4"
                        required
                        placeholder="How can we assist you or your family?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-slate-900 shadow-xs"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-slate-950 text-[#D4F826] font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}

              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
