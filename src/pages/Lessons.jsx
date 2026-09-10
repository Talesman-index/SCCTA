import React, { useState } from 'react';
import { 
  CreditCard, 
  User, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  DollarSign, 
  Heart, 
  Info, 
  Phone, 
  Mail, 
  Check, 
  X,
  Trophy,
  Activity
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Lessons({ setActivePage, onOpenDonate }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bookingStep, setBookingStep] = useState('select'); // 'select' | 'details' | 'confirmed'
  const [formData, setFormData] = useState({
    playerName: '',
    playerAge: '',
    contactName: '',
    email: '',
    phone: '',
    venue: 'Clayton County International Park Tennis Center',
    dayTime: 'Tuesday & Thursday 4:30 PM - 5:30 PM',
    notes: '',
    paymentMethod: 'square' // 'square' | 'on-court'
  });

  const products = [
    {
      id: 'group-lesson',
      title: 'Pay for Lesson',
      subtitle: 'Group Development Clinic',
      price: '22.00',
      priceNum: 22,
      period: 'per session',
      badge: 'Most Popular',
      badgeColor: 'bg-[#8cb0bf] text-[#061326]',
      image: '/images/course-group-lesson.jpg',
      description: 'Progressive group session focusing on active footwork, point construction, live-ball rally drills, and matchplay fundamentals.',
      features: [
        '60 minutes of high-energy structured coaching',
        'Red, Orange, Green & Yellow ball groups (ages 4–18)',
        'Low student-to-coach ratio for personalized attention',
        'Complimentary junior racquet loaners provided'
      ],
      cta: 'Book & Pay $22.00'
    },
    {
      id: 'private-lesson',
      title: 'Private Lesson',
      subtitle: '1-on-1 Personalized Coaching',
      price: '40.00',
      priceNum: 40,
      period: 'per hour',
      badge: 'Individualized Mastery',
      badgeColor: 'bg-amber-400 text-slate-950',
      image: '/images/course-private-lesson.jpg',
      description: 'Dedicated one-on-one master instruction tailored to the player’s specific technical biomechanics, serve mechanics, and tactical strategy.',
      features: [
        'Full 60 minutes with dedicated certified SCCTA Coach',
        'Instant high-speed video stroke review & biomechanics',
        'Custom tournament strategy & mental toughness drills',
        'Open to all ages (Juniors & Adult Competitors)'
      ],
      cta: 'Book & Pay $40.00'
    }
  ];

  const packages = [
    {
      title: '4-Lesson Group Clinic Pass',
      sessions: '4 Group Lessons',
      price: '$80.00',
      savings: 'Save $8 vs drop-in rate',
      details: 'Valid for any 4 weekday or Saturday clinics within 6 weeks.'
    },
    {
      title: '4-Session Private Coaching Pass',
      sessions: '4 One-on-One Hours',
      price: '$150.00',
      savings: 'Save $10 on private mastery',
      details: 'Flexible scheduling directly with head professional.'
    },
    {
      title: 'Youth Full Season Sponsorship',
      sessions: 'Complete Clinic + Gear',
      price: '$180.00',
      savings: 'Community Impact Gift',
      details: 'Provides a junior player with a racquet, bag, clinic season, and tournament registration.'
    }
  ];

  const handleStartBooking = (product) => {
    setSelectedProduct(product);
    setBookingStep('details');
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setBookingStep('confirmed');
  };

  const resetModal = () => {
    setSelectedProduct(null);
    setBookingStep('select');
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* ========================================================================= */}
      {/* 01. HERO HEADER */}
      {/* ========================================================================= */}
      <section className="bg-slate-950 text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/course-private-lesson.jpg" 
            alt="SCCTA Tennis Instruction and Lessons" 
            className="w-full h-full object-cover opacity-20 object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60" />
        </div>

        <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#8cb0bf]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          


          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Tennis Lessons & <br />
              <span className="text-[#8cb0bf]">Player Development.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Professional, affordable tennis instruction for juniors and adults across Clayton County. Register, book your court time, or make a contribution directly online.
            </p>
          </div>

          {/* Quick Features Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black font-display text-white">$22.00</div>
              <div className="text-xs text-slate-300 font-medium">Group Lesson Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black font-display text-[#8cb0bf]">$40.00</div>
              <div className="text-xs text-slate-300 font-medium">Private 1-on-1 Coaching</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black font-display text-emerald-400">Square</div>
              <div className="text-xs text-slate-300 font-medium">Secure Checkout</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black font-display text-amber-300">All Ages</div>
              <div className="text-xs text-slate-300 font-medium">Beginners to Advanced</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. CORE 3 PRICING & BOOKING CARDS (MATCHING SQUARE CATALOG) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8cb0bf]/20 text-[#061326]">
              <Sparkles className="w-3.5 h-3.5 text-[#8cb0bf]" />
              Book & Pay Online
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
              Choose Your Lesson Format
            </h2>
            <p className="text-slate-600 text-sm">
              Instant registration and lesson booking processed securely via Square.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {products.map((p, idx) => (
              <ScrollReveal 
                key={p.id}
                delay={idx * 120}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#8cb0bf] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Banner with floating badge */}
                  <div className="relative h-48 sm:h-56 w-full bg-slate-900 overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      style={{ objectPosition: 'center 15%' }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    
                    <div className="absolute top-3.5 left-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-white font-display text-2xl sm:text-3xl font-black flex items-baseline gap-1">
                        <span>${p.price}</span>
                        <span className="text-xs text-slate-300 font-sans font-normal">{p.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-slate-950 group-hover:text-[#8cb0bf] transition-colors">
                        {p.title}
                      </h3>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">
                        {p.subtitle}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      {p.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8cb0bf] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Booking Button */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => handleStartBooking(p)}
                    className="w-full py-3 px-4 rounded-xl bg-[#102A33] hover:bg-[#173B4A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 group-hover:bg-[#8cb0bf] group-hover:text-[#061326]"
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. VALUE PASSES & PACKAGES */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Cost Savings & Bundles
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900">
                Multi-Lesson Packages
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Save on frequent training by locking in monthly pass rates. All packages can be used flexibly at any SCCTA court location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div 
                key={pkg.title}
                className="bg-[#FAF9F5] p-7 rounded-3xl border border-slate-200 space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                    {pkg.savings}
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    {pkg.title}
                  </h3>
                  <div className="text-2xl font-extrabold text-slate-950 font-display">
                    {pkg.price}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {pkg.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">{pkg.sessions}</span>
                  <button
                    onClick={() => handleStartBooking({
                      id: pkg.title.toLowerCase().replace(/\s+/g, '-'),
                      title: pkg.title,
                      subtitle: pkg.sessions,
                      price: pkg.price.replace('$', ''),
                      priceNum: parseFloat(pkg.price.replace('$', '')),
                      period: 'package',
                      image: '/images/course-group-lesson.jpg'
                    })}
                    className="text-xs font-bold text-[#8cb0bf] hover:text-[#6f94a4] transition-colors flex items-center gap-1"
                  >
                    <span>Purchase Pass</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. COURT VENUES & SCHEDULE DETAILS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#061326] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8cb0bf]">
              Training Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Where We Practice & Play
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              State-of-the-art hard courts in Clayton County equipped with tournament lighting and warm-up areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Venue 1 */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8cb0bf]/20 text-[#8cb0bf] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white">
                    Clayton County International Park Tennis Center
                  </h3>
                  <div className="text-xs text-slate-400">
                    2300 Hwy 138 SE, Jonesboro, GA 30236
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Tuesday & Thursday Clinics:</span>
                  <span>4:30 PM – 7:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Saturday Junior Matchplay:</span>
                  <span>9:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Private Lessons:</span>
                  <span>By Appointment (Flexible)</span>
                </div>
              </div>
            </div>

            {/* Venue 2 */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8cb0bf]/20 text-[#8cb0bf] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white">
                    Lovejoy Regional Park Courts
                  </h3>
                  <div className="text-xs text-slate-400">
                    Lovejoy Community Courts, Hampton, GA
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Wednesday Grassroots:</span>
                  <span>5:00 PM – 6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Saturday Morning Drills:</span>
                  <span>10:30 AM – 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Racquet Equipment:</span>
                  <span>Provided on-site for free</span>
                </div>
              </div>
            </div>

          </div>

          {/* Need assistance row */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-[#8cb0bf] shrink-0" />
              <span>Questions regarding class placement, weather cancellations, or private coaching hours?</span>
            </div>
            <div className="flex items-center gap-4 text-white font-semibold">
              <a href="tel:770-872-0921" className="hover:text-[#8cb0bf] transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#8cb0bf]" />
                <span>770-872-0921</span>
              </a>
              <a href="mailto:scccta1@gmail.com" className="hover:text-[#8cb0bf] transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#8cb0bf]" />
                <span>scccta1@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. INTERACTIVE BOOKING & PAYMENT DRAWER / MODAL */}
      {/* ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp">
            
            {/* Modal Header */}
            <div className="bg-[#061326] p-6 text-white relative">
              <button 
                onClick={resetModal}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8cb0bf] mb-1">
                <CreditCard className="w-4 h-4" />
                <span>Square Checkout & Registration</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white">
                {selectedProduct.title}
              </h3>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black font-display text-[#8cb0bf]">
                  ${selectedProduct.price}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  USD · Powered by Square
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              
              {bookingStep === 'details' && (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Player Full Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={formData.playerName}
                        onChange={(e) => setFormData({...formData, playerName: e.target.value})}
                        placeholder="e.g. Jordan Smith"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Player Age / Level *
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={formData.playerAge}
                        onChange={(e) => setFormData({...formData, playerAge: e.target.value})}
                        placeholder="e.g. 11 yrs · Orange Ball"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Parent / Contact Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(770) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address (for Square Receipt) *
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="receipt@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Preferred Court Location
                    </label>
                    <select
                      value={formData.venue}
                      onChange={(e) => setFormData({...formData, venue: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#8cb0bf] focus:outline-none bg-white"
                    >
                      <option value="Clayton County International Park Tennis Center">
                        Clayton County International Park Tennis Center
                      </option>
                      <option value="Lovejoy Regional Park Courts">
                        Lovejoy Regional Park Courts, Hampton
                      </option>
                    </select>
                  </div>

                  {/* Payment Mode Selector */}
                  <div className="pt-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Payment Processing
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div 
                        onClick={() => setFormData({...formData, paymentMethod: 'square'})}
                        className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 text-xs transition-all ${
                          formData.paymentMethod === 'square'
                            ? 'border-[#8cb0bf] bg-blue-50 text-slate-950 font-bold ring-1 ring-[#8cb0bf]'
                            : 'border-slate-200 text-slate-600'
                        }`}
                      >
                        <CreditCard className="w-4 h-4 text-[#8cb0bf]" />
                        <span>Square Card Payment</span>
                      </div>

                      <div 
                        onClick={() => setFormData({...formData, paymentMethod: 'on-court'})}
                        className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 text-xs transition-all ${
                          formData.paymentMethod === 'on-court'
                            ? 'border-[#8cb0bf] bg-blue-50 text-slate-950 font-bold ring-1 ring-[#8cb0bf]'
                            : 'border-slate-200 text-slate-600'
                        }`}
                      >
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        <span>Pay on Court (Square / Cash)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={resetModal}
                      className="px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-xl bg-[#061326] hover:bg-[#102A33] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Confirm & Pay ${selectedProduct.price}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {bookingStep === 'confirmed' && (
                <div className="text-center py-6 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <h4 className="text-2xl font-extrabold font-display text-slate-900">
                    Registration Received!
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.contactName || 'Player'}</strong>. Your spot for <strong className="text-slate-900">{selectedProduct.title} (${selectedProduct.price})</strong> has been reserved at <strong className="text-slate-900">{formData.venue}</strong>.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1.5 max-w-sm mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Player:</span>
                      <span className="font-bold text-slate-900">{formData.playerName || 'Registered Player'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Payment:</span>
                      <span className="font-bold text-emerald-600">${selectedProduct.price} ({formData.paymentMethod === 'square' ? 'Square Online' : 'On-Court Pay'})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Confirmation Sent To:</span>
                      <span className="font-bold text-slate-900 truncate max-w-[180px]">{formData.email || 'your email'}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={resetModal}
                      className="w-full py-3 rounded-xl bg-[#102A33] hover:bg-[#173B4A] text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Done & Return to Lessons
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
