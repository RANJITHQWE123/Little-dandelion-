import React from 'react';
import { Heart, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const artworkImg = "/src/assets/images/daughter_dandelion_art_1783625856484.jpg";

  return (
    <section id="story" className="py-24 bg-brand-cream text-brand-brown border-b border-brand-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Overtitle */}
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-green block mb-3">Our Heritage</span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-8 leading-tight">
                New Haven’s <br />
                <span className="text-brand-gold font-light italic normal-case">Mom & Pop Sanctuary</span>
              </h2>

              <div className="space-y-6 text-brand-brown/90 font-sans text-xs sm:text-sm uppercase tracking-wide leading-relaxed">
                <p className="font-bold text-base text-brand-brown tracking-normal normal-case">
                  Come experience the charm of a cozy, independent New York Style Mom & Pop nestled in the heart of Little Italy!
                </p>
                <p className="normal-case tracking-normal text-sm sm:text-base text-brand-brown/80">
                  Our café is lovingly owned & operated by a passionate Italian-American resident of New Haven. Every detail is personal, representing decades of neighborly love, local craftsmanship, and a deep-rooted commitment to hospitality.
                </p>
                <p className="normal-case tracking-normal text-sm sm:text-base text-brand-brown/80">
                  We are proud to partner with local craft institutions like <strong className="text-brand-brown">SoNo Baking Company</strong> and artisanal local purveyors. From our daily-toasted gourmet bagels to our frothy lattes and melt-in-your-mouth cannoli-stuffed croissants, everything we serve is selected with absolute dedication to premium flavor.
                </p>
                <p className="normal-case tracking-normal text-sm sm:text-base text-brand-brown/80">
                  To us, coffee isn’t just a quick caffeine fix—it’s a ritual. Our expert baristas pour love, precision, and passion into every single cup. Whether you are here for a solitary working afternoon, meeting a long-lost friend, or stopping by with your dog, you are part of our family.
                </p>
              </div>

              {/* Custom Icon Highlights as Editorial Grid List */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-brand-gold/30">
                <div className="flex flex-col items-start p-1">
                  <div className="text-brand-gold font-serif text-xl italic font-bold mb-2">01</div>
                  <span className="font-serif font-bold text-xs uppercase tracking-wider text-brand-brown">Made with Love</span>
                  <p className="text-[10px] text-brand-brown/60 mt-1 uppercase tracking-wider">Family recipes</p>
                </div>
                
                <div className="flex flex-col items-start p-1">
                  <div className="text-brand-gold font-serif text-xl italic font-bold mb-2">02</div>
                  <span className="font-serif font-bold text-xs uppercase tracking-wider text-brand-brown">Artisanal Bake</span>
                  <p className="text-[10px] text-brand-brown/60 mt-1 uppercase tracking-wider">SoNo Baking partners</p>
                </div>

                <div className="flex flex-col items-start p-1">
                  <div className="text-brand-gold font-serif text-xl italic font-bold mb-2">03</div>
                  <span className="font-serif font-bold text-xs uppercase tracking-wider text-brand-brown">Cozy Vibe</span>
                  <p className="text-[10px] text-brand-brown/60 mt-1 uppercase tracking-wider">Welcoming sanctuary</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image & Artwork Display Block */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Outer Decorative Editorial Frame */}
              <div className="absolute inset-0 border border-brand-gold/40 translate-x-3 translate-y-3 pointer-events-none" />
              
              {/* Main Image styled as framed artwork */}
              <div className="bg-white p-4 border border-brand-gold/30 shadow-md relative z-10 rounded-xs">
                <img
                  src={artworkImg}
                  alt="Dandelion Watercolor Artwork on Cafe Wall by Owner's Daughter"
                  className="w-full h-auto aspect-[3/4] object-cover rounded-xs"
                  referrerPolicy="no-referrer"
                />
                
                {/* Elegant Gallery label underneath image */}
                <div className="mt-4 text-center border-t border-brand-brown/10 pt-3">
                  <p className="font-serif italic text-lg text-brand-brown">“Dandelions of Wooster Street”</p>
                  <p className="font-sans text-[9px] tracking-[0.2em] text-brand-brown/60 uppercase mt-1">
                    Watercolor by the owner’s daughter • Sanctuary wall
                  </p>
                </div>
              </div>

              {/* Decorative Accent Badges */}
              <div className="absolute top-8 -left-4 bg-brand-brown text-brand-cream py-1 px-3 rounded-xs shadow-xs z-20 text-[9px] uppercase tracking-[0.15em] font-bold">
                Crafted in New Haven
              </div>
              
              <div className="absolute bottom-16 -right-4 bg-brand-gold text-brand-brown py-1 px-3 rounded-xs shadow-xs z-20 text-[9px] uppercase tracking-[0.15em] font-bold">
                Local Dedicated
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
