import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle, Award, Sparkles, Plus, Send, AlertCircle, X } from 'lucide-react';
import { Review } from '../types';

interface ReviewsProps {
  reviews: Review[];
  onSubmitReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

export default function Reviews({ reviews, onSubmitReview }: ReviewsProps) {
  const [showForm, setShowForm] = useState(false);
  const [successToast, setSuccessToast] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [isLocalGuide, setIsLocalGuide] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Available review tags
  const AVAILABLE_TAGS = ['Friendly Owner', 'Amazing Espresso', 'SoNo Pastries', 'Cozy Decor', 'Dog Friendly', 'Perfect Workspace'];

  // Calculate review stats dynamically based on current reviews state
  const totalReviewsCount = reviews.length;
  const ratingSum = reviews.reduce((sum, rev) => sum + rev.rating, 0);
  const averageRating = (ratingSum / totalReviewsCount).toFixed(1);

  // Calculate counts for each star level (5 down to 1)
  const starCounts = [5, 4, 3, 2, 1].map((starLevel) => {
    const count = reviews.filter((r) => r.rating === starLevel).length;
    const percentage = totalReviewsCount > 0 ? (count / totalReviewsCount) * 100 : 0;
    return { stars: starLevel, count, percentage };
  });

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!content.trim()) {
      setErrorMessage('Please write a brief comment about your experience.');
      return;
    }

    // Avatar colors to assign randomly
    const avatarColors = ['bg-orange-600', 'bg-brand-gold', 'bg-brand-green', 'bg-brand-terracotta', 'bg-brand-brown', 'bg-purple-600'];
    const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];

    onSubmitReview({
      author: name.trim(),
      rating: rating,
      content: content.trim(),
      isLocalGuide: isLocalGuide,
      tags: selectedTags,
      avatarColor: randomColor,
    });

    // Reset form & close immediately for instant feedback
    setName('');
    setRating(5);
    setContent('');
    setIsLocalGuide(false);
    setSelectedTags([]);
    setShowForm(false);
    
    // Trigger delightful floating success toast
    setSuccessToast(true);
    setTimeout(() => {
      setSuccessToast(false);
    }, 5000);
  };

  return (
    <section id="reviews" className="py-24 bg-white text-brand-brown border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-black text-brand-green block mb-2">Guestbook & Community</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black uppercase tracking-tight text-brand-brown">
            Loved by Coffee Enthusiasts
          </h2>
          <div className="h-px w-20 bg-brand-gold mx-auto mt-4 mb-5" />
          <p className="font-sans text-xs uppercase tracking-wider text-brand-brown/60 leading-relaxed">
            We are deeply grateful for the community we have built together. Read what our neighbors and travelers from across New Haven are saying.
          </p>
        </div>

        {/* Rating Breakdown & Stats Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-transparent border border-brand-gold/30 rounded-xs p-6 sm:p-8 mb-14 shadow-xs">
          
          {/* Average Display */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 sm:border-r border-brand-gold/20">
            <span className="font-serif text-[10px] uppercase tracking-[0.2em] text-brand-gold-dark font-black mb-1">Overall Guest Rating</span>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-6xl sm:text-7xl font-black text-brand-brown leading-none">5.0</span>
              <span className="font-sans text-xs uppercase tracking-widest text-brand-brown/55 font-bold">/ 5.0 Rating</span>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="h-4 w-4 text-brand-gold fill-brand-gold"
                />
              ))}
            </div>
            <p className="font-sans text-xs text-brand-brown/70 mt-3 leading-relaxed italic max-w-sm">
              Highly rated for our warm welcoming vibes, delicious freshly baked SoNo pastries, custom lattes, and dog-friendly neighborhood spirit.
            </p>
          </div>

          {/* CTA Submit Review */}
          <div className="flex flex-col items-center justify-center text-center p-4">
            <div className="border border-brand-gold/30 p-2.5 rounded-none text-brand-gold mb-3">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <h4 className="font-serif font-black uppercase tracking-wider text-xs text-brand-brown">Visited Us?</h4>
            <p className="font-sans text-[10px] uppercase tracking-wider text-brand-brown/65 mt-2 leading-relaxed max-w-[220px] mx-auto italic">
              We'd love to hear your thoughts on our latte art, toasted bagels, or cozy atmosphere.
            </p>
            <button
              onClick={() => { setShowForm(!showForm); setSuccessMessage(''); setErrorMessage(''); }}
              className="mt-5 px-6 py-3 bg-brand-brown text-[#F5F1E8] hover:bg-brand-gold hover:text-brand-brown rounded-xs font-sans text-[10px] uppercase tracking-[0.15em] font-black flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Write a Review</span>
            </button>
          </div>

        </div>

        {/* Sliding Submit Review Form Container */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-12 bg-brand-cream/45 border border-brand-gold/30 rounded-xs shadow-xs"
            >
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                <h3 className="font-serif text-lg font-black uppercase tracking-tight text-brand-brown pb-3 border-b border-brand-gold/20 flex items-center gap-2">
                  <Sparkles className="h-4.5 w-4.5 text-brand-gold" />
                  Write Your Guest Review
                </h3>

                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-700 text-[11px] font-sans rounded-none border border-red-200 flex items-center gap-2">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {successMessage && (
                  <div className="p-3 bg-brand-green/10 text-brand-green font-sans rounded-none border border-brand-green/20 flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5" />
                    <span>{successMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.15em] font-black text-brand-brown/85">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Maria Rossi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-brand-gold/30 rounded-xs font-sans text-xs text-brand-brown focus:outline-none focus:border-brand-brown"
                    />
                  </div>

                  {/* Rating Selector */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.15em] font-black text-brand-brown/85 block">Rating</label>
                    <div className="flex items-center gap-1 mt-1.5">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => setRating(starValue)}
                          className="p-1 hover:scale-105 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`h-5 w-5 ${
                              starValue <= rating ? 'text-brand-gold fill-brand-gold' : 'text-brand-brown/20'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Local Guide Checkbox */}
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    id="localguide"
                    checked={isLocalGuide}
                    onChange={(e) => setIsLocalGuide(e.target.checked)}
                    className="h-4 w-4 rounded-none border-brand-gold/35 text-brand-brown focus:ring-brand-gold"
                  />
                  <label htmlFor="localguide" className="font-sans text-[11px] uppercase tracking-wider font-semibold text-brand-brown/75 cursor-pointer">
                    I have a Google "Local Guide" badge
                  </label>
                </div>

                {/* Tag Selection */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] font-black text-brand-brown/85 block">What did you love most? (Select multiple)</label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {AVAILABLE_TAGS.map((tag) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleTagToggle(tag)}
                          className={`px-3 py-1.5 rounded-none font-sans text-[9px] font-bold tracking-wide uppercase border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-brand-brown text-[#F5F1E8] border-brand-brown font-black'
                              : 'bg-white text-brand-brown/70 border-brand-gold/30 hover:bg-brand-cream/30'
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Content input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] font-black text-brand-brown/85 block">Your Comment</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your perfect latte art, the friendly service, or our homemade sweets..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-4 bg-white border border-brand-gold/30 rounded-xs font-sans text-xs text-brand-brown focus:outline-none focus:border-brand-brown"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-5 py-2.5 border border-brand-brown/20 rounded-xs font-sans text-[10px] uppercase tracking-[0.15em] font-bold text-brand-brown/70 hover:bg-brand-brown/5 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-brown rounded-xs font-sans text-[10px] uppercase tracking-[0.15em] font-bold flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Toast Banner */}
        <AnimatePresence>
          {successToast && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="mb-8 p-4 bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-wider flex items-center justify-between rounded-none shadow-xs"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5" />
                <span>Thank you! Your review has been published instantly below.</span>
              </div>
              <button 
                onClick={() => setSuccessToast(false)} 
                className="text-brand-green/60 hover:text-brand-green cursor-pointer p-1"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              key={rev.id}
              className="bg-transparent border border-brand-gold/25 hover:border-brand-brown rounded-xs p-6 shadow-sm flex flex-col justify-between h-full group transition-all duration-300"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-4.5">
                  <div className="flex items-center gap-3">
                    {/* Rounded User Avatar icon holder */}
                    <div className={`h-10 w-10 rounded-none ${rev.avatarColor || 'bg-brand-brown'} text-[#F5F1E8] flex items-center justify-center font-serif font-black text-xs border border-brand-gold/20 shadow-xs`}>
                      {rev.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-serif font-black uppercase text-xs tracking-wider text-brand-brown flex items-center gap-1.5">
                        {rev.author}
                        {rev.isLocalGuide && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-none bg-brand-gold/20 text-brand-gold-dark font-sans text-[8px] font-bold uppercase tracking-wider">
                            <CheckCircle className="h-2 w-2 text-brand-gold-dark" />
                            Guide
                          </span>
                        )}
                      </h4>
                      <p className="font-sans text-[9px] uppercase tracking-wider text-brand-brown/50 mt-1">{rev.date}</p>
                    </div>
                  </div>

                  {/* Star Score */}
                  <div className="flex items-center gap-0.5 bg-brand-gold/10 border border-brand-gold/15 px-2 py-1 rounded-none">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`h-2.5 w-2.5 ${
                          s <= rev.rating ? 'text-brand-gold fill-brand-gold' : 'text-brand-brown/15'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text content */}
                <p className="font-sans text-xs sm:text-sm text-brand-brown/80 leading-relaxed italic">
                  “{rev.content}”
                </p>
              </div>

              {/* Tags displayed at the bottom of the card */}
              {rev.tags && rev.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-5 pt-4 border-t border-brand-gold/20">
                  {rev.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-brand-brown/5 text-brand-brown/65 font-sans text-[8px] font-bold rounded-none uppercase tracking-widest border border-brand-brown/5">
                      # {t}
                    </span>
                  ))}
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
