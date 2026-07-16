import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, X, Sparkles, HelpCircle } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminLoginModal({ isOpen, onClose }: AdminLoginModalProps) {
  const { loginAdmin } = useSiteConfig();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    const isSuccess = loginAdmin(passcode);
    if (isSuccess) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setPasscode('');
        onClose();
      }, 1200);
    } else {
      setError(true);
      setPasscode('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-brown/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative bg-brand-cream border border-brand-gold/40 max-w-md w-full shadow-2xl p-8 rounded-none z-10 text-brand-brown"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-brown/50 hover:text-brand-brown p-1 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex p-3 bg-brand-brown/5 border border-brand-gold/30 rounded-none mb-3">
                {success ? (
                  <Unlock className="h-6 w-6 text-brand-gold animate-bounce" />
                ) : (
                  <Lock className="h-6 w-6 text-brand-brown" />
                )}
              </div>
              <h3 className="font-serif text-2xl font-black uppercase tracking-wider text-brand-brown">
                {success ? 'Access Granted' : 'Admin Authorization'}
              </h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-brand-brown/50 mt-1">
                Enter passcode to unlock Live editing
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-brand-brown/70 mb-1.5">
                  Passcode
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    if (error) setError(false);
                  }}
                  className={`w-full px-4 py-3 bg-white border ${
                    error ? 'border-brand-terracotta' : 'border-brand-gold/30 focus:border-brand-brown'
                  } text-sm font-mono focus:outline-none transition-all placeholder-brand-brown/25 text-center`}
                  autoFocus
                  disabled={success}
                />
                
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-terracotta text-[10px] uppercase tracking-wider font-bold mt-2 text-center"
                  >
                    Incorrect passcode. Try again.
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={success}
                className="w-full py-3 bg-brand-brown hover:bg-brand-brown/90 text-brand-cream text-[10px] uppercase tracking-[0.2em] font-black transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {success ? (
                  <>
                    <Sparkles className="h-4 w-4 text-brand-gold animate-spin" />
                    <span>Activating Edit Mode...</span>
                  </>
                ) : (
                  <span>Verify Authorization</span>
                )}
              </button>
            </form>

            {/* Client Instructions Info Card */}
            <div className="mt-8 pt-6 border-t border-brand-gold/20 bg-brand-cream/50 text-[11px] text-brand-brown/70 leading-relaxed space-y-2">
              <div className="flex gap-2 items-start">
                <HelpCircle className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase text-[9px] tracking-wider text-brand-brown">How Live Editing Works:</p>
                  <p className="normal-case mt-1 text-brand-brown/60">
                    Once authorized, you can directly click on any item name, price, story paragraph, or opening hour on the website to edit it live on the page!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
