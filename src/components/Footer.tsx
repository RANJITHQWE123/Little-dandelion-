import React, { useState } from 'react';
import { Mail, ArrowRight, Instagram, MessageSquare, ExternalLink, ShieldCheck, HelpCircle } from 'lucide-react';

interface FooterProps {
  onTextClick: () => void;
}

export default function Footer({ onTextClick }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 6000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-brand-brown text-[#F5F1E8]/70 pt-20 pb-10 border-t border-brand-gold/20 relative overflow-hidden">
      
      {/* Background Accent Graphics */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-72 h-72 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: About short */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif font-black text-xl text-white tracking-tight uppercase">
              The Little Dandelion Café
            </h3>
            <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
              An independent Italian-American sanctuary nestled on historic Wooster Street in New Haven's Little Italy. Proudly serving artisanal baked goods, toasted bagels, and espresso lattes with real local dedication.
            </p>
            <div className="pt-2">
              <span className="text-[9px] tracking-[0.25em] text-brand-gold uppercase font-black">Our Philosophy</span>
              <p className="font-serif italic text-xs text-white/90 mt-1.5 font-medium">“Craft coffee, homemade warmth, and neighborly love.”</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="font-serif font-black text-xs uppercase tracking-widest text-brand-gold">Explore</h4>
            <ul className="space-y-2.5 font-sans text-xs uppercase tracking-wider font-bold">
              {['#menu', '#story', '#experience', '#reviews', '#visit'].map((href) => {
                const label = href === '#menu' ? 'Our Menu' : 
                              href === '#story' ? 'Our Story' : 
                              href === '#experience' ? 'The Experience' : 
                              href === '#reviews' ? 'Guest Reviews' : 'Visit Us';
                return (
                  <li key={href}>
                    <button
                      onClick={() => handleScrollTo(href)}
                      className="hover:text-brand-gold transition-colors duration-200 cursor-pointer text-[10px]"
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Contact quick */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="font-serif font-black text-xs uppercase tracking-widest text-brand-gold">Visit & Reach</h4>
            <div className="space-y-3 font-sans text-[11px] uppercase tracking-wider text-brand-cream/70 leading-relaxed font-bold">
              <p>
                208 Wooster St<br />
                New Haven, CT 06511
              </p>
              <p>
                Call Us:<br />
                <a href="tel:8177930381" className="text-white hover:text-brand-gold transition-colors font-black">(817) 793-0381</a>
              </p>
              <p>
                Text Us (SMS):<br />
                <button 
                  onClick={onTextClick}
                  className="text-white hover:text-brand-gold transition-colors font-black text-left cursor-pointer bg-transparent border-none p-0 inline-block focus:outline-none"
                >
                  Send a Message
                </button>
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter signup */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-black text-xs uppercase tracking-widest text-brand-gold">The Dandelion Circle</h4>
            <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
              Subscribe to stay updated on seasonal items, events, and special promotions. Receive <strong className="text-white">10% off</strong> your next pastry.
            </p>

            {subscribed ? (
              <div className="p-3 bg-brand-green/20 border border-brand-green/30 rounded-none text-brand-gold font-sans text-[11px] uppercase tracking-wider leading-normal">
                Welcome to the family! Check your inbox for your 10% coupon code.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-none py-2.5 pl-3 pr-10 font-sans text-xs text-white placeholder-white/30 focus:outline-none focus:border-brand-gold focus:bg-white/10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-brown rounded-none transition-colors cursor-pointer"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-[10px] text-red-400 font-sans uppercase tracking-wider font-bold">{errorMsg}</p>
                )}
              </form>
            )}

            {/* Social media icons */}
            <div className="flex gap-2 pt-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-white/10 bg-white/5 text-white hover:bg-brand-gold hover:border-brand-gold hover:text-brand-brown transition-all duration-300 rounded-none"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://google.com/business" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-white/10 bg-white/5 text-white hover:bg-brand-gold hover:border-brand-gold hover:text-brand-brown transition-all duration-300 rounded-none"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom footer: Policies & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-wider font-bold text-brand-cream/50">
          <div>
            <p>© 2026 The Little Dandelion Café. All rights reserved. Nestled in New Haven, Connecticut.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" />
              Privacy Policy
            </a>
            <span className="text-white/15">|</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-white/15">|</span>
            <span className="font-sans text-brand-gold">Independent Mom & Pop</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
