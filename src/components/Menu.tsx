import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Coffee, Leaf, Croissant, Utensils, CupSoda, Cookie } from 'lucide-react';
import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Coffee Creations
  {
    id: 'c1',
    name: 'Espresso',
    price: 3.25,
    category: 'coffee',
    description: 'Rich, intense, double-shot of our heritage espresso blend. Perfectly extracted with thick hazelnut crema.',
    image: '/src/assets/images/dandelion_espresso_shot_1783629595611.jpg',
    tags: ['Double Shot', 'Traditional']
  },
  {
    id: 'c2',
    name: 'Cortado',
    price: 3.75,
    category: 'coffee',
    description: 'Equal parts double shot espresso and steamed silky milk, cutting the acidity beautifully.',
    image: '/src/assets/images/dandelion_cortado_glass_1783629608541.jpg',
    tags: ['Balanced', 'Barista Fav']
  },
  {
    id: 'c3',
    name: 'Café Latte',
    price: 4.75,
    category: 'coffee',
    description: 'Our house espresso with velvety steamed milk and a delicate layer of microfoam.',
    image: '/src/assets/images/dandelion_cafe_latte_1783629617581.jpg',
    tags: ['Smooth', 'Classic']
  },
  {
    id: 'c4',
    name: 'Dandelion Signature Latte',
    price: 5.50,
    category: 'coffee',
    description: 'Infused with organic local wildflower honey, French lavender, and a dash of dandelion root powder. Topped with blowing dandelion latte art.',
    isBestSeller: true,
    image: '/src/assets/images/dandelion_cafe_latte_1783629617581.jpg',
    tags: ['Signature', 'Latte Art']
  },
  {
    id: 'c5',
    name: 'Cappuccino',
    price: 4.50,
    category: 'coffee',
    description: 'Double espresso with equal parts rich steamed milk and a luxurious cushion of dense foam.',
    image: '/src/assets/images/dandelion_cappuccino_froth_1783629627490.jpg',
    tags: ['Frothy', 'Classic']
  },
  {
    id: 'c6',
    name: 'Flat White',
    price: 4.50,
    category: 'coffee',
    description: 'Rich ristretto shots finished with micro-textured steamed milk for a dense, velvety mouthfeel.',
    image: '/src/assets/images/dandelion_flat_white_1783629660503.jpg',
    tags: ['Velvety', 'Bold']
  },

  // Tea Selection
  {
    id: 't1',
    name: 'Loose Leaf Hot Tea',
    price: 3.50,
    category: 'tea',
    description: 'Premium organic whole leaves. Select from Earl Grey, Chamomile Lavender, or Jasmine Green.',
    image: '/src/assets/images/dandelion_hot_tea_1783629649611.jpg',
    tags: ['Organic', 'Hot']
  },
  {
    id: 't2',
    name: 'Ceremonial Matcha Latte',
    price: 5.25,
    category: 'tea',
    description: 'Whip-whisked Uji stone-ground matcha blended with creamy steamed oat milk and organic vanilla.',
    image: '/src/assets/images/dandelion_dirty_matcha_1783629639993.jpg',
    tags: ['Antioxidants', 'Oat Milk']
  },
  {
    id: 't3',
    name: 'Chai Latte',
    price: 4.75,
    category: 'tea',
    description: 'Sweet & spicy black tea concentrate infused with fresh ginger, cardamom, clove, and steamed milk.',
    image: '/src/assets/images/dandelion_hot_tea_1783629649611.jpg',
    tags: ['Spicy', 'Comfort']
  },
  {
    id: 't4',
    name: 'Dirty Matcha',
    price: 5.95,
    category: 'tea',
    description: 'Ceremonial green matcha latte with a robust double-shot overlay of house espresso.',
    image: '/src/assets/images/dandelion_dirty_matcha_1783629639993.jpg',
    tags: ['Energy Boost', 'Layered']
  },

  // Food & Sandwiches (Matches the chalkboard menu exactly!)
  {
    id: 's1',
    name: 'Egg & Cheese Bagel / Sourdough',
    price: 8.50,
    category: 'specialty',
    description: 'Toasted plain, everything, or sesame bagel, croissant, or sourdough bread stuffed with organic eggs, melted Swiss, Cheddar, or Provolone cheese.',
    image: '/src/assets/images/dandelion_egg_cheese_bagel_1783627790275.jpg',
    isBestSeller: true,
    tags: ['Breakfast Classic', 'Custom Bread']
  },
  {
    id: 's2',
    name: 'Egg & Cheese w/ Summer Sausage',
    price: 9.50,
    category: 'specialty',
    description: 'Our standard toasted breakfast bagel sandwich packed with fluffy scrambled organic eggs, melted cheese, and savory sliced summer sausage.',
    image: '/src/assets/images/dandelion_egg_sausage_bagel_1783628802341.jpg',
    tags: ['Savory', 'Summer Sausage']
  },
  {
    id: 's3',
    name: 'Gourmet Grilled Cheese',
    price: 8.50,
    category: 'specialty',
    description: 'Artisanal sourdough stuffed with a premium melted blend of sharp white cheddar and provolone cheese, toasted beautifully golden-brown.',
    image: '/src/assets/images/dandelion_grilled_cheese_1783627781365.jpg',
    isBestSeller: true,
    tags: ['Comfort', 'Vegetarian']
  },
  {
    id: 's4',
    name: 'Croque Monsieur',
    price: 6.50,
    category: 'specialty',
    description: 'Classic French style grilled ham and cheese sandwich on rustic toasted bread, with bubbly melted Gruyère cheese.',
    image: '/src/assets/images/dandelion_croque_monsieur_1783628811252.jpg',
    tags: ['French Classic', 'Warm ham & cheese']
  },

  // Pastries & Bakes
  {
    id: 'p1',
    name: 'Sweet Croissant',
    price: 3.75,
    category: 'pastry',
    description: 'Buttery, flaky, golden French pastry baked fresh daily by our local partner, SoNo Baking Company.',
    image: '/src/assets/images/fresh_pastries_tray_1783625868185.jpg',
    tags: ['Fresh Daily', 'SoNo Baking']
  },
  {
    id: 'p2',
    name: 'Slice of Cake',
    price: 4.50,
    category: 'pastry',
    description: 'A decadent slice of our daily featured cake, freshly sourced from local bakeries.',
    image: '/src/assets/images/dandelion_display_pastries_1783627772746.jpg',
    tags: ['Gourmet', 'Slice of Heaven']
  },

  // Sweet Treats
  {
    id: 'sw1',
    name: 'Warm Crepe',
    price: 4.50,
    category: 'sweet',
    description: 'Delicate hand-folded crepe lightly dusted with powdered sugar and finished with a subtle sweet honey drizzle.',
    image: '/src/assets/images/dandelion_sweet_crepe_1783627804644.jpg',
    tags: ['Sweet Crepe', 'Warm']
  },
  {
    id: 'sw2',
    name: 'Cannoli-Stuffed Croissant',
    price: 6.50,
    category: 'sweet',
    description: 'Signature buttery croissant sliced and piped full of sweet, chocolate-chip ricotta cannoli cream. Heavily dusted with powdered sugar.',
    image: '/src/assets/images/dandelion_cannoli_croissant_1783628826182.jpg',
    isBestSeller: true,
    tags: ['Heavenly', 'Italian-American']
  },
  {
    id: 'sw3',
    name: 'Cannoli',
    price: 3.25,
    category: 'sweet',
    description: 'A crisp, golden pastry shell filled to the brim with sweet, creamy ricotta and loaded with chocolate chips.',
    image: '/src/assets/images/dandelion_cannoli_1783627815643.jpg',
    tags: ['Authentic', 'Sweet Shell']
  },
  {
    id: 'sw4',
    name: 'Espresso Fudge Brownie',
    price: 4.50,
    category: 'sweet',
    description: 'Dense, intensely rich chocolate fudge brownie baked with a reduction of our signature heritage espresso.',
    image: '/src/assets/images/dandelion_chocolate_brownie_1783627825285.jpg',
    tags: ['Rich', 'Fudge Brownie']
  },
  {
    id: 'sw5',
    name: 'Add a Vanilla Gelato',
    price: 2.50,
    category: 'sweet',
    description: 'A scoop of premium, velvety-smooth authentic Italian vanilla gelato. Perfect to top your crepe, brownie, or cake!',
    image: '/src/assets/images/dandelion_vanilla_gelato_1783628835180.jpg',
    tags: ['Gelato Topping', 'Cool & Creamy']
  }
];

const CATEGORIES = [
  { id: 'all', name: 'Full Menu', icon: Coffee },
  { id: 'coffee', name: 'Coffee Creations', icon: Coffee },
  { id: 'tea', name: 'Tea Selection', icon: Leaf },
  { id: 'pastry', name: 'Pastries & Bakes', icon: Croissant },
  { id: 'specialty', name: 'Specialty Fare', icon: Utensils },
  { id: 'sweet', name: 'Sweet Treats', icon: Cookie }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-white text-brand-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-black text-brand-green block mb-2">Gastronomy & Sanctuary Craft</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black uppercase tracking-tight text-brand-brown">
            Culinary Excellence
          </h2>
          <div className="h-px w-20 bg-brand-gold mx-auto mt-4 mb-5" />
          <p className="font-sans text-xs uppercase tracking-wider text-brand-brown/60 leading-relaxed">
            Every creation is prepared with artisanal patience and finest local ingredients. Browse our selection of hand-crafted sips and real gourmet food items.
          </p>
        </div>

        {/* Search Bar Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md mx-auto md:mx-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-brand-brown/40">
              <Search className="h-4.5 w-4.5" />
            </span>
            <input
              type="text"
              placeholder="Search coffee, bagels, croissants, cookies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 bg-brand-cream/40 border border-brand-gold/30 rounded-xs font-sans text-xs uppercase tracking-wider text-brand-brown placeholder-brand-brown/45 focus:outline-none focus:border-brand-brown focus:bg-white transition-all duration-300"
            />
          </div>
        </div>

        {/* Categories Tabs Scrollbar */}
        <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-12 border-b border-brand-gold/20">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 border-b-2 font-sans text-[10px] uppercase tracking-[0.18em] font-black transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'border-brand-brown text-brand-brown bg-brand-cream/30'
                    : 'border-transparent text-brand-brown/55 hover:text-brand-brown hover:border-brand-gold/40'
                }`}
              >
                <IconComponent className={`h-3.5 w-3.5 ${isSelected ? 'text-brand-gold-dark' : 'text-brand-brown/45'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-transparent hover:bg-brand-cream/15 p-6 border border-brand-gold/25 hover:border-brand-brown transition-all duration-300 flex flex-col justify-between group h-full rounded-xs"
                >
                  <div>
                    {/* Image or Category Icon Holder */}
                    <div className="relative rounded-xs overflow-hidden mb-5 bg-brand-cream aspect-video flex items-center justify-center border border-brand-brown/5">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center p-6 text-brand-brown/30">
                          <Coffee className="h-8 w-8 mb-1.5 stroke-1" />
                          <span className="text-[9px] uppercase tracking-[0.15em] font-bold">{item.category}</span>
                        </div>
                      )}
                      
                      {/* Best Seller Badge */}
                      {item.isBestSeller && (
                        <div className="absolute top-3 right-3 bg-brand-green/10 backdrop-blur-xs border border-brand-green text-brand-green font-sans text-[8px] font-bold px-2 py-0.5 rounded-xs uppercase tracking-[0.15em]">
                          <span>Best Seller</span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-brand-brown/5 text-brand-brown/65 font-sans text-[8px] font-bold rounded-xs uppercase tracking-widest border border-brand-brown/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title & Price */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif font-black text-base sm:text-lg text-brand-brown uppercase tracking-tight group-hover:text-brand-gold-dark transition-colors duration-200 leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-serif font-black text-sm text-brand-brown whitespace-nowrap pt-0.5 border-b border-brand-gold/60">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs text-brand-brown/70 leading-relaxed italic">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-brand-cream/20 rounded-3xl border border-dashed border-brand-brown/20"
            >
              <p className="font-serif text-lg text-brand-brown/60">No delicious bites found matching "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-4 px-5 py-2 bg-brand-brown text-brand-cream rounded-full text-xs font-semibold"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
