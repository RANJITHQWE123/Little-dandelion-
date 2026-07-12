import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Phone, Globe, Compass, CheckCircle, Navigation, Info } from 'lucide-react';

interface RouteInfo {
  landmark: string;
  distance: string;
  time: string;
  coords: { x: number; y: number }[];
  steps: string[];
}

interface LocationHoursProps {
  onTextClick: () => void;
}

export default function LocationHours({ onTextClick }: LocationHoursProps) {
  const [selectedRoute, setSelectedRoute] = useState<string>('yale');

  const routes: Record<string, RouteInfo> = {
    yale: {
      landmark: 'Yale Old Campus',
      distance: '1.1 miles',
      time: '20 mins walk / 5 mins drive',
      coords: [
        { x: 30, y: 35 }, // Yale
        { x: 230, y: 35 }, // Chapel St to Olive St
        { x: 230, y: 200 }, // Olive St to Cafe (Wooster St)
      ],
      steps: [
        'Head east on Chapel Street toward College Street.',
        'Walk past the New Haven Green (approx. 0.4 miles).',
        'Turn right onto Olive Street.',
        'Turn left onto historic Wooster Street.',
        'Arrive at The Little Dandelion on your right (208 Wooster St).'
      ]
    },
    station: {
      landmark: 'Union Station (Amtrak)',
      distance: '1.4 miles',
      time: '25 mins walk / 6 mins drive',
      coords: [
        { x: 120, y: 230 }, // Union Station start (aligned with bottom of State St)
        { x: 120, y: 200 }, // Go up State St to Wooster St
        { x: 230, y: 200 }, // Down Wooster St to Cafe
      ],
      steps: [
        'Head northeast on Union Avenue toward State Street.',
        'Continue straight onto State Street.',
        'Turn right onto Wooster Street under the Little Italy archway.',
        'Continue straight. The Little Dandelion is on your left.'
      ]
    },
    park: {
      landmark: 'Wooster Square Park',
      distance: '0.2 miles',
      time: '4 mins walk',
      coords: [
        { x: 330, y: 90 }, // Wooster Sq Park start on Academy St
        { x: 330, y: 200 }, // Go down Academy St to Wooster St
        { x: 230, y: 200 }, // Turn right on Wooster St to Cafe
      ],
      steps: [
        'Head south on Academy Street from Wooster Square Park.',
        'Turn right onto Wooster Street (past famous Libby’s Pastry).',
        'Walk 1 block. The Little Dandelion is on your left.'
      ]
    }
  };

  const activeRoute = routes[selectedRoute];

  const serviceOptions = [
    'Dine-in (Cozy tables)',
    'Takeout (Online pickup)',
    'Delivery Available',
    'Outdoor Sidewalk Seating',
    'Curbside Pickup option',
    'Onsite Event Bookings'
  ];

  return (
    <section id="visit" className="py-24 bg-white text-brand-brown border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-black text-brand-green block mb-2">Visit Our Sanctuary</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black uppercase tracking-tight text-brand-brown">
            New Haven’s Little Italy
          </h2>
          <div className="h-px w-20 bg-brand-gold mx-auto mt-4 mb-5" />
          <p className="font-sans text-xs uppercase tracking-wider text-brand-brown/60 leading-relaxed">
            Find us located on Wooster Street, New Haven's historic baking and culinary core. Easily accessible from Yale, Wooster Square Park, and I-91.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Hours & Info details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Quick Contact Card */}
            <div className="bg-transparent border border-brand-gold/30 rounded-xs p-6 sm:p-8 shadow-xs">
              <h3 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight mb-6">Contact & Location</h3>
              
              <div className="space-y-4 font-sans text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-brown text-brand-cream rounded-none mt-0.5">
                    <MapPin className="h-4 w-4 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-brand-brown">Our Address</p>
                    <p className="text-brand-brown/75 mt-0.5">208 Wooster St, New Haven, CT 06511-5792</p>
                    <span className="text-[9px] uppercase font-bold text-brand-gold-dark tracking-widest block mt-1">Heart of Little Italy</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-brown text-brand-cream rounded-none mt-0.5">
                    <Phone className="h-4 w-4 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-brand-brown">Call or Text Us</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-1">
                      <a 
                        href="tel:8177930381" 
                        className="bg-brand-brown hover:bg-brand-gold text-white hover:text-brand-brown px-3 py-1 text-[11px] uppercase tracking-wider font-bold transition-all inline-flex items-center gap-1"
                      >
                        (817) 793-0381
                      </a>
                      <span className="text-brand-brown/30 hidden sm:inline">|</span>
                      <button
                        onClick={onTextClick}
                        className="border border-brand-brown/40 hover:bg-brand-brown hover:text-white px-3 py-1 text-[11px] uppercase tracking-wider font-bold transition-all text-brand-brown inline-flex items-center gap-1 cursor-pointer bg-transparent"
                      >
                        Send an SMS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-brand-brown text-[#F5F1E8] rounded-xs p-6 sm:p-8 shadow-sm border border-brand-gold/20">
              <h3 className="font-serif text-lg sm:text-xl font-black uppercase tracking-wider text-brand-gold mb-6 flex items-center gap-2">
                <Clock className="h-4.5 w-4.5" />
                Operating Hours
              </h3>
              
              <div className="space-y-3.5 font-sans text-xs sm:text-sm">
                <div className="flex justify-between items-center border-b border-white/10 pb-2 text-white/50 italic">
                  <span className="font-bold uppercase tracking-wider text-[10px]">Monday</span>
                  <span className="font-bold text-brand-terracotta uppercase tracking-widest text-[9px] bg-brand-terracotta/15 px-2.5 py-0.5 rounded-none">Closed</span>
                </div>
                
                {[
                  { day: 'Tuesday', hours: '10:30 AM – 7:00 PM' },
                  { day: 'Wednesday', hours: '10:30 AM – 7:00 PM' },
                  { day: 'Thursday', hours: '10:30 AM – 7:00 PM' },
                  { day: 'Friday', hours: '10:30 AM – 7:00 PM' },
                  { day: 'Saturday', hours: '10:30 AM – 7:00 PM' },
                  { day: 'Sunday', hours: '10:30 AM – 7:00 PM' },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-bold text-brand-cream uppercase tracking-wider text-[10px]">{row.day}</span>
                    <span className="font-bold text-brand-gold uppercase tracking-wider text-[10px]">{row.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 bg-white/5 rounded-none border border-white/10 flex items-start gap-2.5">
                <Info className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-[10px] uppercase tracking-wider text-brand-cream/80 leading-normal">
                  Our kitchen serves savory hot food and freshly steamed espresso lattes from opening right until closing time at <strong className="text-white">7:00 PM</strong> daily.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Vector Map Route Planner */}
          <div className="lg:col-span-7 bg-transparent border border-brand-gold/30 rounded-xs p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-brand-brown">Interactive Route Finder</h3>
                  <p className="font-sans text-xs text-brand-brown/65 mt-0.5 uppercase tracking-wider">Plot walking and driving routes right to our doorstep.</p>
                </div>
                
                {/* Selector */}
                <div className="flex gap-1 bg-brand-brown/5 p-1 rounded-none self-start border border-brand-gold/20">
                  {Object.keys(routes).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedRoute(key)}
                      className={`px-3 py-1.5 rounded-none font-sans text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                        selectedRoute === key
                          ? 'bg-brand-brown text-[#F5F1E8]'
                          : 'text-brand-brown/60 hover:text-brand-brown'
                      }`}
                    >
                      {key === 'yale' ? 'Yale' : key === 'station' ? 'Union Stn' : 'The Park'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Map Canvas - Vector representation */}
              <div className="relative w-full aspect-[16/10] bg-brand-cream border border-brand-gold/30 rounded-none overflow-hidden shadow-inner">
                {/* Simplified Grid / Streets */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250">
                  {/* Water Body or background lines */}
                  <rect width="400" height="250" fill="#fcfaf6" />
                  
                  {/* Neighborhood Roads (gray bands) */}
                  <line x1="20" y1="35" x2="380" y2="35" stroke="#e8e2d2" strokeWidth="16" strokeLinecap="round" /> {/* Chapel St */}
                  <line x1="20" y1="150" x2="380" y2="150" stroke="#e8e2d2" strokeWidth="16" strokeLinecap="round" /> {/* Grand Ave / St */}
                  <line x1="20" y1="200" x2="380" y2="200" stroke="#e8e2d2" strokeWidth="16" strokeLinecap="round" /> {/* Wooster St */}
                  
                  {/* Vertical Roads */}
                  <line x1="120" y1="20" x2="120" y2="230" stroke="#e8e2d2" strokeWidth="16" strokeLinecap="round" /> {/* State St */}
                  <line x1="230" y1="20" x2="230" y2="230" stroke="#e8e2d2" strokeWidth="16" strokeLinecap="round" /> {/* Olive St */}
                  <line x1="330" y1="20" x2="330" y2="230" stroke="#e8e2d2" strokeWidth="16" strokeLinecap="round" /> {/* Academy St */}

                  {/* Landmark labels */}
                  <text x="35" y="25" fill="#3D2817" fontSize="8" fontFamily="sans-serif" fontWeight="bold" opacity="0.6">YALE OLD CAMPUS</text>
                  <text x="135" y="240" fill="#3D2817" fontSize="8" fontFamily="sans-serif" fontWeight="bold" opacity="0.6">UNION STATION</text>
                  <text x="290" y="80" fill="#3D2817" fontSize="8" fontFamily="sans-serif" fontWeight="bold" opacity="0.6">WOOSTER SQ PARK</text>
                  <text x="200" y="215" fill="#3D2817" fontSize="7" fontFamily="sans-serif" opacity="0.5">WOOSTER ST</text>

                  {/* Wooster Square Park Green block */}
                  <rect x="315" y="45" width="30" height="30" rx="4" fill="#d8e8d0" stroke="#c0d8b8" strokeWidth="1" />
                  
                  {/* Drawing Active Route Path */}
                  {activeRoute.coords.length > 0 && (
                    <polyline
                      points={activeRoute.coords.map(c => `${c.x},${c.y}`).join(' ')}
                      fill="none"
                      stroke="#D4A574"
                      strokeWidth="3.5"
                      strokeDasharray="6 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}

                  {/* Pulse Ring Cafe Anchor */}
                  <circle cx="230" cy="200" r="10" fill="none" stroke="#2D5016" strokeWidth="2" className="animate-ping" style={{ transformOrigin: '230px 200px' }} />
                  <circle cx="230" cy="200" r="4.5" fill="#2D5016" />

                  {/* Landmark Start Pins */}
                  {selectedRoute === 'yale' && <circle cx="30" cy="35" r="4.5" fill="#C85A54" />}
                  {selectedRoute === 'station' && <circle cx="120" cy="230" r="4.5" fill="#C85A54" />}
                  {selectedRoute === 'park' && <circle cx="330" cy="90" r="4.5" fill="#C85A54" />}

                  {/* Cafe Banner Pin Label */}
                  <g transform="translate(202, 168)">
                    <rect width="56" height="18" rx="0" fill="#2D5016" />
                    <text x="28" y="11" fill="#F5F1E8" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">THE DANDELION</text>
                  </g>
                </svg>

                {/* Live Distance Card */}
                <div className="absolute top-4 left-4 bg-brand-brown text-[#F5F1E8] border border-brand-gold/30 px-3 py-2 rounded-none text-[9px] uppercase tracking-wider font-bold shadow-sm flex items-center gap-2">
                  <Compass className="h-3.5 w-3.5 text-brand-gold" />
                  <span>
                    From <strong>{activeRoute.landmark}</strong>: {activeRoute.distance} ({activeRoute.time})
                  </span>
                </div>
              </div>
            </div>

            {/* Directions Steps box */}
            <div className="mt-6 pt-6 border-t border-brand-gold/20">
              <h4 className="font-serif font-black uppercase text-xs tracking-wider text-brand-brown flex items-center gap-1.5 mb-3">
                <Navigation className="h-4.5 w-4.5 text-brand-gold-dark" />
                Step-by-Step Navigation
              </h4>
              <ol className="space-y-2 font-sans text-xs text-brand-brown/80 list-decimal pl-4 leading-relaxed">
                {activeRoute.steps.map((step, idx) => (
                  <li key={idx} className="pl-1.5">{step}</li>
                ))}
              </ol>
            </div>

            {/* Service options Check list */}
            <div className="grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-brand-gold/20">
              {serviceOptions.map((opt) => (
                <div key={opt} className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-brand-brown/75">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-green" />
                  <span>{opt}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
