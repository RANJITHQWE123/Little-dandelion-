import React, { useState } from 'react';
import { Coffee, Phone, MessageSquare, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  onTextClick: () => void;
}

export default function Navbar({ onTextClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Our Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'The Experience', href: '#experience' },
    { name: 'Guest Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-brand-gold/20 py-3.5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Info Tag */}
          <div className="flex items-center gap-6">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="bg-brand-brown text-[#F5F1E8] p-2 rounded-xs group-hover:bg-brand-gold group-hover:text-brand-brown transition-all duration-300">
                <Coffee className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="font-serif font-black text-lg md:text-xl text-brand-brown uppercase tracking-tight flex items-center gap-1.5 leading-none">
                  The Little Dandelion
                </span>
                <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-brand-gold-dark -mt-0.5 hidden sm:block">
                  Little Italy • New Haven
                </p>
              </div>
            </div>

            <div className="hidden lg:block h-6 w-px bg-brand-gold/25" />
            
            <span className="hidden lg:inline-block text-[9px] uppercase tracking-[0.2em] font-bold text-brand-green">
              Cozy Neighborhood Sanctuary
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-brand-brown/80 hover:text-brand-gold transition-colors duration-200 cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Right Phone / SMS Contact buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:8177930381"
              className="flex items-center gap-2 bg-brand-brown hover:bg-brand-gold text-[#F5F1E8] hover:text-brand-brown px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-bold rounded-xs transition-all duration-300 shadow-xs cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onTextClick}
              className="flex items-center gap-2 border border-brand-brown/30 hover:border-brand-brown hover:bg-brand-brown/5 text-brand-brown px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-bold rounded-xs transition-all duration-300 cursor-pointer bg-transparent"
            >
              <MessageSquare className="h-3.5 w-3.5 text-brand-gold" />
              <span>Text SMS</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:8177930381"
              className="p-2 bg-brand-brown text-[#F5F1E8] rounded-xs shadow-xs"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-brown hover:text-brand-gold transition-colors duration-200"
            >
              {isOpen ? <X className="h-5.5 w-5.5" /> : <MenuIcon className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F5]/98 backdrop-blur-md border-b border-brand-brown/10 absolute top-full left-0 right-0 shadow-lg py-6 px-4 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="font-sans text-left text-lg font-medium text-brand-brown py-2 border-b border-brand-brown/5"
              >
                {link.name}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <a
                href="tel:8177930381"
                className="text-center py-3 bg-brand-brown text-[#F5F1E8] rounded-xs font-sans text-xs font-bold shadow-md flex items-center justify-center gap-1.5"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => { setIsOpen(false); onTextClick(); }}
                className="text-center py-3 bg-transparent border border-brand-brown/30 rounded-xs font-sans text-xs font-bold text-brand-brown flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 text-brand-gold" />
                <span>Send SMS</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
