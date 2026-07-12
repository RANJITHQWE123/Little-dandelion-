import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, MessageSquare, AlertCircle } from 'lucide-react';

interface SmsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SmsModal({ isOpen, onClose }: SmsModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please tell us your name.');
      return;
    }
    if (!phone.trim()) {
      setError('Please provide your mobile number.');
      return;
    }
    if (!message.trim()) {
      setError('Please write a message.');
      return;
    }

    setIsSending(true);

    // Simulate sending SMS network request
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      // Reset form
      setName('');
      setPhone('');
      setMessage('');
      
      // Auto close after success
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-brown/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-md bg-[#FAF8F5] border border-brand-gold/40 rounded-xs shadow-2xl p-6 sm:p-8 z-10 overflow-hidden text-brand-brown"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-brand-gold/20 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-brand-gold/15 rounded-none text-brand-gold-dark">
                  <MessageSquare className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-serif font-black uppercase text-xs tracking-wider">
                    Text Dandelion Cafe
                  </h3>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-brand-brown/55 mt-0.5">
                    Live SMS channel • (817) 793-0381
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-brand-brown/40 hover:text-brand-brown hover:bg-brand-brown/5 rounded-none transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10 px-4"
              >
                <div className="h-14 w-14 bg-brand-green/10 text-brand-green border border-brand-green/30 rounded-none flex items-center justify-center mb-5 animate-pulse">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h4 className="font-serif font-black uppercase text-sm tracking-wide text-brand-brown">
                  Message Dispatched!
                </h4>
                <p className="font-sans text-xs text-brand-brown/75 mt-3 leading-relaxed max-w-xs">
                  Your message has been sent directly to Andrea. We usually text back within 5 minutes. Grab a seat!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4.5">
                {error && (
                  <div className="p-3 bg-red-50 text-red-700 text-[11px] font-sans border border-red-200 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{error}</span>
                  </div>
                )}

                <p className="font-sans text-xs text-brand-brown/75 leading-relaxed">
                  Type your text message below to reach our barista or owner in real-time. We will reply instantly to your phone.
                </p>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.15em] font-black text-brand-brown/80 block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Rossi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-brand-gold/30 rounded-none font-sans text-xs text-brand-brown focus:outline-none focus:border-brand-brown"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.15em] font-black text-brand-brown/80 block">Mobile Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (817) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-brand-gold/30 rounded-none font-sans text-xs text-brand-brown focus:outline-none focus:border-brand-brown"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.15em] font-black text-brand-brown/80 block">Text Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="e.g. Do you have warm gluten-free bagels or scone options left today?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-white border border-brand-gold/30 rounded-none font-sans text-xs text-brand-brown focus:outline-none focus:border-brand-brown resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 mt-2 bg-brand-brown text-[#F5F1E8] hover:bg-brand-gold hover:text-brand-brown rounded-none font-sans text-[10px] uppercase tracking-[0.2em] font-black flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-md"
                >
                  {isSending ? (
                    <>
                      <div className="h-3.5 w-3.5 border-2 border-[#F5F1E8] border-t-transparent rounded-full animate-spin" />
                      <span>Sending Text...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Send Text Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
