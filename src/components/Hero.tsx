import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Phone, MessageSquare } from 'lucide-react';

interface HeroProps {
  onMenuClick: () => void;
  onTextClick: () => void;
}

export default function Hero({ onMenuClick, onTextClick }: HeroProps) {
  // Stunning, cozy, high-quality cafe exterior on Unsplash with absolutely no text or fake years
  const bgImg = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=2000";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="The Little Dandelion Cafe Exterior in New Haven's Little Italy"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Semi-transparent elegant dark and warm gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown via-brand-brown/85 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 text-white flex flex-col items-start relative">
        
        {/* Vertical decorative label */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden xl:flex items-center gap-4 text-[#F5F1E8]/75 pointer-events-none">
          <span className="w-16 h-[1px] bg-brand-gold/40"></span>
          <span className="text-[10px] uppercase tracking-[0.35em] font-black">Intimate Little Italy Sanctuary</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Subheading in italic serif */}
          <p className="font-serif italic text-lg sm:text-xl text-brand-gold mb-3 tracking-wide">
            Italian-American Coffee Sanctuary
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-4 drop-shadow-sm leading-[0.85]">
            The Little<br />
            <span className="text-brand-cream/95">Dandelion</span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-xl sm:text-2xl text-brand-gold/90 font-medium tracking-wide mb-5">
            "A cozy Mom & Pop sanctuary in the heart of Little Italy"
          </p>

          <p className="font-sans text-xs sm:text-sm text-brand-cream/80 max-w-xl mb-10 leading-relaxed tracking-wide uppercase">
            Nestled in the historic heart of New Haven’s Little Italy on Wooster Street. Experience artisanal local baking, custom-crafted Italian espressos, and premium neighborhood warmth.
          </p>

          {/* CTA Action Buttons - Direct Call or SMS as requested */}
          <div className="flex flex-wrap items-center gap-4 w-full">
            <button
              onClick={onMenuClick}
              className="px-7 py-3 bg-brand-gold text-brand-brown font-sans text-[11px] uppercase tracking-[0.18em] font-black rounded-xs transition-all duration-300 transform hover:bg-brand-cream hover:text-brand-brown shadow-md flex items-center justify-center cursor-pointer"
            >
              View the Menu
            </button>
            <a
              href="tel:8177930381"
              className="px-6 py-3 bg-brand-cream hover:bg-brand-gold text-brand-brown rounded-xs font-sans text-[11px] uppercase tracking-[0.18em] font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call Us Direct</span>
            </a>
            <button
              onClick={onTextClick}
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-[#F5F1E8]/40 hover:border-white rounded-xs font-sans text-[11px] uppercase tracking-[0.18em] font-bold transition-all duration-300 text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="h-3.5 w-3.5 text-brand-gold" />
              <span>Text Us (SMS)</span>
            </button>
          </div>
        </motion.div>

        {/* Floating Quick Info Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full max-w-2xl bg-[#3D2817]/40 backdrop-blur-md border border-[#D4A574]/30 rounded-xs p-6 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-1 text-brand-gold">
              <MapPin className="h-4.5 w-4.5" />
            </div>
            <div>
              <p className="font-bold text-[9px] text-brand-gold uppercase tracking-[0.2em]">Location</p>
              <p className="font-sans text-xs text-brand-cream/90 mt-1 font-medium">208 Wooster St.</p>
              <p className="text-[10px] text-brand-cream/60">New Haven, CT</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-full bg-brand-gold/20" />
          <div className="flex items-start gap-4">
            <div className="p-1 text-brand-gold font-serif text-base italic font-bold">
              ★
            </div>
            <div>
              <p className="font-bold text-[9px] text-brand-gold uppercase tracking-[0.2em]">Sanctuary Rating</p>
              <p className="font-serif text-base text-brand-cream mt-0.5 italic tracking-wider font-semibold">5.0 / 5.0</p>
              <p className="text-[10px] text-brand-cream/60">Guest Favorite</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-full bg-brand-gold/20" />
          <div className="flex items-start gap-4">
            <div className="p-1 text-brand-gold font-serif text-sm font-semibold">
              •
            </div>
            <div>
              <p className="font-bold text-[9px] text-brand-gold uppercase tracking-[0.2em]">Today's Hours</p>
              <p className="font-sans text-xs text-brand-cream/90 mt-1 font-medium">10:30 AM – 7:00 PM</p>
              <p className="text-[10px] text-brand-cream/60">Closed Monday</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D4A574]/30 pointer-events-none" />
    </section>
  );
}
