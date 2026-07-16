import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Power, RefreshCw, Download, X, Copy, Check, Info } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

export default function AdminBar() {
  const { siteConfig, isAdmin, logoutAdmin, resetToDefault, updateAlertBanner } = useSiteConfig();
  const [showExportModal, setShowExportModal] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isAdmin) return null;

  const handleToggleBanner = () => {
    updateAlertBanner(siteConfig.alertBanner.message, !siteConfig.alertBanner.active);
  };

  const handleCopyConfig = () => {
    const formatted = JSON.stringify(siteConfig, null, 2);
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Premium Top Bar Dashboard */}
      <div className="bg-brand-brown text-[#F5F1E8] border-b border-brand-gold/30 py-3.5 px-4 sticky top-0 z-50 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs">
        {/* Left Side Info */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
          </span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            <span className="font-bold uppercase tracking-[0.15em] text-[10px]">
              Dandelion Live CMS Mode Active
            </span>
          </div>
          <span className="text-white/30 hidden md:inline">|</span>
          <p className="text-[10px] text-brand-cream/80 uppercase tracking-wider hidden md:block">
            Double-click or click text, prices, or hours directly on the page to edit.
          </p>
        </div>

        {/* Right Side Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Banner Toggle Button */}
          <button
            onClick={handleToggleBanner}
            className={`flex items-center gap-1.5 px-3 py-1.5 border ${
              siteConfig.alertBanner.active
                ? 'bg-brand-green/20 border-brand-green text-white'
                : 'bg-transparent border-white/20 text-white/60 hover:text-white'
            } text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer`}
          >
            <Power className="h-3.5 w-3.5" />
            <span>Alert Banner: {siteConfig.alertBanner.active ? 'ON' : 'OFF'}</span>
          </button>

          {/* Export Config Button */}
          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold hover:bg-brand-cream text-brand-brown border border-brand-gold font-sans text-[10px] uppercase tracking-wider font-black transition-all cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export Configuration</span>
          </button>

          {/* Reset Changes Button */}
          <button
            onClick={resetToDefault}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-transparent hover:bg-white/10 border border-white/20 text-white/80 hover:text-white text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Reset Defaults</span>
          </button>

          <span className="text-white/20">|</span>

          {/* Close/Exit Admin Button */}
          <button
            onClick={logoutAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-terracotta/20 hover:bg-brand-terracotta border border-brand-terracotta text-white text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer"
          >
            <X className="h-3.5 w-3.5" />
            <span>Exit Admin</span>
          </button>
        </div>
      </div>

      {/* Export Configuration Modal */}
      <AnimatePresence>
        {showExportModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExportModal(false)}
              className="fixed inset-0 bg-brand-brown/75 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-brand-cream border border-brand-gold/40 max-w-2xl w-full shadow-2xl p-8 rounded-none z-10 text-brand-brown"
            >
              <button
                onClick={() => setShowExportModal(false)}
                className="absolute top-4 right-4 text-brand-brown/50 hover:text-brand-brown p-1 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6">
                <h3 className="font-serif text-2xl font-black uppercase tracking-wider flex items-center gap-2">
                  <Download className="h-6 w-6 text-brand-gold" />
                  Export Site Configuration
                </h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-brand-brown/50 mt-1">
                  How to make your updates permanent in the codebase
                </p>
              </div>

              {/* Informative Instructions */}
              <div className="bg-brand-brown/5 border border-brand-gold/20 p-4 mb-6 flex gap-3 text-xs leading-relaxed">
                <Info className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase text-[10px] tracking-wider mb-1">
                    Real-Time Code Sync Instructions
                  </p>
                  <p className="normal-case text-brand-brown/80 mb-2">
                    Because this is a static React application, changes you make on the screen are stored securely in your browser's local cache. 
                  </p>
                  <p className="normal-case text-brand-brown/80">
                    To apply these changes permanently so that <strong className="text-brand-brown">all internet visitors</strong> see your new prices, text, or schedules, simply copy the JSON code block below and give it to your developer, or send a message to me asking me to: 
                    <strong className="text-brand-brown block font-mono mt-1 bg-white p-1.5 border border-brand-gold/15">
                      "Replace the defaultConfig.ts data with my current edits."
                    </strong>
                  </p>
                </div>
              </div>

              {/* Config Codebox Preview */}
              <div className="relative">
                <div className="absolute top-3 right-3 z-20">
                  <button
                    onClick={handleCopyConfig}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-brown text-brand-cream hover:bg-brand-brown/90 text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-brand-gold" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-brand-brown text-brand-cream p-5 text-xs font-mono rounded-none h-64 overflow-y-auto border border-brand-gold/30">
                  <pre className="whitespace-pre-wrap">{JSON.stringify(siteConfig, null, 2)}</pre>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowExportModal(false)}
                  className="px-6 py-2.5 bg-brand-brown text-brand-cream hover:bg-brand-brown/90 text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
