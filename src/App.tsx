import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Ambiance from './components/Ambiance';
import Reviews from './components/Reviews';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import SmsModal from './components/SmsModal';
import { Review } from './types';
import { useSiteConfig } from './context/SiteConfigContext';
import AdminBar from './components/AdminBar';
import AdminLoginModal from './components/AdminLoginModal';
import EditableText from './components/EditableText';

// Seed initial authentic reviews from Google
const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Neal Wilkinson',
    rating: 5,
    date: '1 week ago',
    content: 'Such a cool little space and super friendly. We had coffee (which was delicious!) and a banana coconut cookie… Cozy atmosphere and amazing service!',
    isLocalGuide: true,
    tags: ['Amazing Espresso', 'Cozy Decor'],
    avatarColor: 'bg-amber-700'
  },
  {
    id: 'rev-2',
    author: 'Shan Wilkinson',
    rating: 5,
    date: '2 weeks ago',
    content: 'The shop owner was setting up when we walked by and helped us right away… extremely knowledgeable about coffee and the neighborhood. An absolute neighborhood gem!',
    isLocalGuide: true,
    tags: ['Friendly Owner', 'Dog Friendly'],
    avatarColor: 'bg-emerald-700'
  },
  {
    id: 'rev-3',
    author: 'Mike Doherty',
    rating: 5,
    date: '1 month ago',
    content: 'Andrea, the owner is amazing. Super chatty, personable, and welcoming… the love she puts into the coffees is paramount! Highly recommend.',
    isLocalGuide: false,
    tags: ['Friendly Owner', 'Amazing Espresso'],
    avatarColor: 'bg-blue-700'
  },
  {
    id: 'rev-4',
    author: 'Carmella Lippolis',
    rating: 5,
    date: '1 month ago',
    content: 'Absolutely loved this little coffee shop! The staff were incredibly friendly. Such a cozy atmosphere, great service, and mouth-watering pastries from SoNo!',
    isLocalGuide: true,
    tags: ['SoNo Pastries', 'Cozy Decor'],
    avatarColor: 'bg-rose-700'
  },
  {
    id: 'rev-5',
    author: 'Achuthan Panikath',
    rating: 5,
    date: '2 months ago',
    content: 'Highly recommend this cozy neighborhood cafe! Tucked beautifully on Wooster Street. The owner was gracious, generous, and makes an absolute killer macchiato.',
    isLocalGuide: false,
    tags: ['Amazing Espresso', 'Friendly Owner'],
    avatarColor: 'bg-purple-700'
  }
];

export default function App() {
  const { siteConfig, updateAlertBanner } = useSiteConfig();
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [isSmsOpen, setIsSmsOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  
  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddNewReview = (newRevData: Omit<Review, 'id' | 'date'>) => {
    const completeReview: Review = {
      ...newRevData,
      id: 'usr-rev-' + Math.floor(100 + Math.random() * 900),
      date: 'Just now'
    };
    setReviews((prev) => [completeReview, ...prev]);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-brown font-sans selection:bg-brand-gold selection:text-brand-brown antialiased scroll-smooth flex flex-col">
      {/* CMS Top Admin Dashboard */}
      <AdminBar />

      {/* Dynamic Customizable Promo Banner */}
      {siteConfig.alertBanner.active && (
        <div className="bg-brand-gold text-brand-brown py-2.5 px-4 text-center text-[10px] uppercase tracking-[0.2em] font-black relative flex items-center justify-center border-b border-brand-gold-dark/20 z-40">
          <EditableText
            value={siteConfig.alertBanner.message}
            onSave={(newMsg) => updateAlertBanner(newMsg, true)}
            className="w-full text-center"
          />
        </div>
      )}

      {/* Navigation Sticky Glass Bar */}
      <Navbar 
        onTextClick={() => setIsSmsOpen(true)} 
        onAdminClick={() => setIsAdminLoginOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero 
          onMenuClick={() => handleScrollToSection('#menu')}
          onTextClick={() => setIsSmsOpen(true)}
        />

        {/* Story Section */}
        <About />

        {/* Culinary Menu Showcase Section */}
        <Menu />

        {/* Ambient Photographic Gallery & Highlights Section */}
        <Ambiance />

        {/* Dynamic Reviews & Testimonials Score Meters Section */}
        <Reviews 
          reviews={reviews} 
          onSubmitReview={handleAddNewReview} 
        />

        {/* Google Maps Embed Route Planner & Timings Section */}
        <LocationHours onTextClick={() => setIsSmsOpen(true)} />
      </main>

      {/* Footer Directory and Newsletter Form */}
      <Footer 
        onTextClick={() => setIsSmsOpen(true)} 
        onAdminClick={() => setIsAdminLoginOpen(true)}
      />

      {/* Real-time SMS Interactive Contact Modal */}
      <SmsModal isOpen={isSmsOpen} onClose={() => setIsSmsOpen(false)} />

      {/* Admin Passcode Login Modal */}
      <AdminLoginModal isOpen={isAdminLoginOpen} onClose={() => setIsAdminLoginOpen(false)} />
    </div>
  );
}
