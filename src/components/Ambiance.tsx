import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, HelpCircle, Heart, Wifi, Coffee, Users } from 'lucide-react';

export default function Ambiance() {
  const interiorImg = "/assets/images/dandelion_cafe_interior_1783628687250.jpg";

  const features = [
    {
      icon: Wifi,
      title: "Perfect for Remote Work",
      desc: "Blazing fast fiber Wi-Fi, plenty of convenient wall sockets, and peaceful, dedicated study nooks."
    },
    {
      icon: Users,
      title: "Vibrant Community Hub",
      desc: "Proud hosts of local neighborhood art shows, poetry open-mics, and live acoustic music sessions."
    },
    {
      icon: Heart,
      title: "100% Dog-Friendly",
      desc: "Bring your furry best friend! We have water bowls, delicious peanut-butter dog biscuits, and a lot of petting."
    },
    {
      icon: Coffee,
      title: "Al Fresco Street Seating",
      desc: "Elegantly set French-style iron bistro tables overlooking historic Wooster Street in New Haven's Little Italy."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-brand-cream text-brand-brown border-b border-brand-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-black text-brand-green block mb-2">Atmosphere & Space</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black uppercase tracking-tight text-brand-brown">
            Your Perfect Escape
          </h2>
          <div className="h-px w-20 bg-brand-gold mx-auto mt-4 mb-5" />
          <p className="font-sans text-xs uppercase tracking-wider text-brand-brown/60 leading-relaxed">
            Step inside our cozy, brick-walled sanctuary. Experience a peaceful morning espresso, an inspiring working afternoon, or a relaxed local community gathering.
          </p>
        </div>

        {/* Dynamic Showcase Toggle replaced by Single Beautiful Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Visual Showcase - Single Beautiful Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-brand-gold/40 shadow-md bg-brand-brown">
              <img
                src={interiorImg}
                alt="Cozy interior of The Little Dandelion Cafe featuring warm brick walls, comfortable seating, and rich neighborhood charm"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Glowing Caption Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-brown/95 backdrop-blur-xs border border-brand-gold/20 rounded-xs p-5 text-brand-cream shadow-md z-10">
                <p className="font-serif font-black text-xs uppercase tracking-widest text-brand-gold">
                  Our Brick & Velvet Sanctuary
                </p>
                <p className="font-sans text-xs text-brand-cream/80 mt-2 leading-relaxed">
                  Vintage records spinning, comfortable velvet armchairs, custom dandelion paintings, and warm neighborhood charm that immediately feels like home.
                </p>
              </div>
            </div>
          </div>

          {/* Copy block & highlight cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-gold block mb-2">A Whimsical Oasis</span>
              <h3 className="font-serif text-3xl font-black uppercase tracking-tight text-brand-brown leading-tight">
                Intimate Ambiance & Artistic Touches
              </h3>
              <p className="font-sans text-xs uppercase tracking-wider text-brand-brown/75 mt-4 leading-relaxed">
                Step inside to discover a cozy New York-style haven gracing the streets of New Haven. Complete with vintage records spinning, mismatched velvet armchairs, custom dandelion paintings on plaster walls, and a warm neighborhood charm that immediately feels like home.
              </p>
            </div>

            {/* Quick highlight facts */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-gold/30">
              <div className="p-4 bg-white border border-brand-gold/25 rounded-xs">
                <span className="font-serif text-xs uppercase tracking-wider font-bold text-brand-brown block">01 / Casual</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-brown/60 block mt-1">Welcoming vibes</span>
              </div>
              <div className="p-4 bg-white border border-brand-gold/25 rounded-xs">
                <span className="font-serif text-xs uppercase tracking-wider font-bold text-brand-brown block">02 / Artistic</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-brown/60 block mt-1">Local exhibits</span>
              </div>
              <div className="p-4 bg-white border border-brand-gold/25 rounded-xs">
                <span className="font-serif text-xs uppercase tracking-wider font-bold text-brand-brown block">03 / Solo Work</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-brown/60 block mt-1">Quiet study spaces</span>
              </div>
              <div className="p-4 bg-white border border-brand-gold/25 rounded-xs">
                <span className="font-serif text-xs uppercase tracking-wider font-bold text-brand-brown block">04 / Dog Love</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-brown/60 block mt-1">Bowls & treats</span>
              </div>
            </div>
          </div>

        </div>

        {/* Experience Bento Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.title}
                className="bg-white p-6 border border-brand-gold/25 hover:border-brand-brown transition-all duration-300 flex flex-col items-start rounded-xs"
              >
                <div className="p-2 border border-brand-gold/30 text-brand-gold-dark rounded-xs mb-4">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-serif font-black uppercase tracking-wider text-xs text-brand-brown mb-2">{item.title}</h4>
                <p className="font-sans text-xs text-brand-brown/70 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
