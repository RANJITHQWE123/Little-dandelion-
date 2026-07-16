import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Coffee, Leaf, Croissant, Utensils, CupSoda, Cookie, Trash2, Plus, Star } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';
import EditableText from './EditableText';

const CATEGORIES = [
  { id: 'all', name: 'Full Menu', icon: Coffee },
  { id: 'coffee', name: 'Coffee Creations', icon: Coffee },
  { id: 'tea', name: 'Tea Selection', icon: Leaf },
  { id: 'pastry', name: 'Pastries & Bakes', icon: Croissant },
  { id: 'specialty', name: 'Specialty Fare', icon: Utensils },
  { id: 'sweet', name: 'Sweet Treats', icon: Cookie }
];

export default function Menu() {
  const { siteConfig, updateMenuItem, addMenuItem, deleteMenuItem, isAdmin } = useSiteConfig();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Add item form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('4.50');
  const [newItemDesc, setNewItemDesc] = useState('');
  const [newItemCat, setNewItemCat] = useState<'coffee' | 'tea' | 'pastry' | 'specialty' | 'beverage' | 'sweet'>('coffee');

  const filteredItems = siteConfig.menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const handleAddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim() || !newItemDesc.trim()) return;

    addMenuItem({
      name: newItemName,
      price: parseFloat(newItemPrice) || 0,
      description: newItemDesc,
      category: newItemCat,
      tags: ['New', 'Hand-Crafted'],
      isBestSeller: false
    });

    setNewItemName('');
    setNewItemPrice('4.50');
    setNewItemDesc('');
    setShowAddForm(false);
  };

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
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* If Admin: Add New Item Dashed Card */}
            {isAdmin && (
              <div className="bg-brand-cream/5 border-2 border-dashed border-brand-gold/50 hover:border-brand-brown p-6 transition-all duration-300 flex flex-col items-center justify-center min-h-[300px] text-center rounded-xs">
                {!showAddForm ? (
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="flex flex-col items-center gap-3 text-brand-brown hover:text-brand-gold-dark transition-all font-sans text-xs uppercase tracking-widest font-black cursor-pointer bg-transparent border-none"
                  >
                    <span className="p-3.5 bg-brand-brown text-brand-cream hover:bg-brand-gold hover:text-brand-brown transition-all rounded-xs">
                      <Plus className="h-6 w-6" />
                    </span>
                    <span>Add Menu Creation</span>
                  </button>
                ) : (
                  <form onSubmit={handleAddNewItem} className="w-full space-y-3 text-left">
                    <h4 className="font-serif font-black text-xs uppercase tracking-wider text-brand-brown mb-2 text-center border-b border-brand-gold/20 pb-2">
                      New Craft Creation
                    </h4>
                    
                    <div>
                      <label className="block text-[8px] uppercase tracking-wider font-bold text-brand-brown/70 mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        className="w-full px-2 py-1 bg-white border border-brand-gold/30 text-xs text-brand-brown focus:outline-none"
                        placeholder="e.g. Lavender Latte"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[8px] uppercase tracking-wider font-bold text-brand-brown/70 mb-1">Price ($)</label>
                        <input
                          type="number"
                          step="0.01"
                          required
                          value={newItemPrice}
                          onChange={(e) => setNewItemPrice(e.target.value)}
                          className="w-full px-2 py-1 bg-white border border-brand-gold/30 text-xs text-brand-brown focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] uppercase tracking-wider font-bold text-brand-brown/70 mb-1">Category</label>
                        <select
                          value={newItemCat}
                          onChange={(e) => setNewItemCat(e.target.value as any)}
                          className="w-full px-1.5 py-1.5 bg-white border border-brand-gold/30 text-[9px] text-brand-brown uppercase font-bold focus:outline-none"
                        >
                          <option value="coffee">Coffee</option>
                          <option value="tea">Tea</option>
                          <option value="pastry">Pastry</option>
                          <option value="specialty">Specialty</option>
                          <option value="sweet">Sweet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[8px] uppercase tracking-wider font-bold text-brand-brown/70 mb-1">Description</label>
                      <textarea
                        required
                        value={newItemDesc}
                        onChange={(e) => setNewItemDesc(e.target.value)}
                        className="w-full p-2 bg-white border border-brand-gold/30 text-xs text-brand-brown focus:outline-none"
                        rows={2}
                        placeholder="e.g. Blended with lavender syrup and microfoam."
                      />
                    </div>

                    <div className="flex gap-2 pt-1 text-[8px] uppercase font-bold tracking-wider">
                      <button
                        type="submit"
                        className="flex-1 py-1.5 bg-brand-brown hover:bg-brand-brown/90 text-brand-cream transition-all cursor-pointer text-center"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="flex-1 py-1.5 bg-brand-cream border border-brand-gold/30 text-brand-brown hover:bg-brand-brown/5 transition-all cursor-pointer text-center"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-transparent hover:bg-brand-cream/15 p-6 border border-brand-gold/25 hover:border-brand-brown transition-all duration-300 flex flex-col justify-between group h-full rounded-xs relative"
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
                      <div className="absolute top-3 right-3 bg-brand-green/10 backdrop-blur-xs border border-brand-green text-brand-green font-sans text-[8px] font-bold px-2 py-0.5 rounded-xs uppercase tracking-[0.15em] z-10">
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
                      <EditableText
                        value={item.name}
                        onSave={(newName) => updateMenuItem({ ...item, name: newName })}
                        className="text-left font-serif font-black"
                      />
                    </h3>
                    <span className="font-serif font-black text-sm text-brand-brown whitespace-nowrap pt-0.5 border-b border-brand-gold/60">
                      $
                      <EditableText
                        value={item.price.toFixed(2)}
                        type="number"
                        onSave={(newPrice) => updateMenuItem({ ...item, price: parseFloat(newPrice) || 0 })}
                        className="inline-block font-serif font-black"
                      />
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-brand-brown/70 leading-relaxed italic mt-2">
                    <EditableText
                      value={item.description}
                      onSave={(newDesc) => updateMenuItem({ ...item, description: newDesc })}
                      className="text-left w-full"
                      multiline
                    />
                  </p>
                </div>

                {/* Admin Management Tools */}
                {isAdmin && (
                  <div className="mt-5 pt-3 border-t border-brand-gold/20 flex items-center justify-between text-[9px] uppercase font-bold tracking-widest text-brand-brown/50">
                    <button
                      onClick={() => updateMenuItem({ ...item, isBestSeller: !item.isBestSeller })}
                      className={`flex items-center gap-1 cursor-pointer transition-all ${
                        item.isBestSeller ? 'text-brand-gold-dark font-black' : 'text-brand-brown/40 hover:text-brand-brown'
                      }`}
                      title="Toggle Best Seller ribbon"
                    >
                      <Star className={`h-3.5 w-3.5 ${item.isBestSeller ? 'fill-brand-gold text-brand-gold-dark' : ''}`} />
                      <span>{item.isBestSeller ? 'Featured' : 'Feature'}</span>
                    </button>

                    <button
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete "${item.name}" from the menu?`)) {
                          deleteMenuItem(item.id);
                        }
                      }}
                      className="flex items-center gap-1 text-brand-terracotta/60 hover:text-brand-terracotta cursor-pointer transition-colors"
                      title="Remove from menu"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
