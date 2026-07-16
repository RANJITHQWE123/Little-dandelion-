import { SiteConfig } from '../types/site';

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  alertBanner: {
    active: true,
    message: "✨ SPECIAL OFFER: Mention 'LITTLE ITALY' at checkout for 10% off any signature latte today!"
  },
  hero: {
    title: "THE LITTLE DANDELION",
    subtitle: "Italian-American Coffee Sanctuary in the heart of historic Little Italy"
  },
  story: {
    badge: "Our Heritage",
    title: "New Haven’s Mom & Pop Sanctuary",
    paragraph1: "Come experience the charm of a cozy, independent New York Style Mom & Pop nestled in the heart of Little Italy!",
    paragraph2: "Our café is lovingly owned & operated by a passionate Italian-American resident of New Haven. Every detail is personal, representing decades of neighborly love, local craftsmanship, and a deep-rooted commitment to hospitality. We are proud to partner with local craft institutions like SoNo Baking Company and artisanal local purveyors."
  },
  hours: {
    Monday: "Closed",
    Tuesday: "10:30 AM – 7:00 PM",
    Wednesday: "10:30 AM – 7:00 PM",
    Thursday: "10:30 AM – 7:00 PM",
    Friday: "10:30 AM – 7:00 PM",
    Saturday: "10:30 AM – 7:00 PM",
    Sunday: "10:30 AM – 7:00 PM"
  },
  contact: {
    phone: "(817) 793-0381",
    email: "hello@littledandelion.com",
    address: "Wooster Street, New Haven, CT"
  },
  menuItems: [
    {
      id: 'c1',
      name: 'Espresso',
      price: 3.25,
      category: 'coffee',
      description: 'Rich, intense, double-shot of our heritage espresso blend. Perfectly extracted with thick hazelnut crema.',
      image: 'assets/images/dandelion_espresso_shot_1783629595611.jpg',
      tags: ['Double Shot', 'Traditional']
    },
    {
      id: 'c2',
      name: 'Cortado',
      price: 3.75,
      category: 'coffee',
      description: 'Equal parts double shot espresso and steamed silky milk, cutting the acidity beautifully.',
      image: 'assets/images/dandelion_cortado_glass_1783629608541.jpg',
      tags: ['Balanced', 'Barista Fav']
    },
    {
      id: 'c3',
      name: 'Café Latte',
      price: 4.75,
      category: 'coffee',
      description: 'Our house espresso with velvety steamed milk and a delicate layer of microfoam.',
      image: 'assets/images/dandelion_cafe_latte_1783629617581.jpg',
      tags: ['Smooth', 'Classic']
    },
    {
      id: 'c4',
      name: 'Dandelion Signature Latte',
      price: 5.50,
      category: 'coffee',
      description: 'Infused with organic local wildflower honey, French lavender, and a dash of dandelion root powder. Topped with blowing dandelion latte art.',
      isBestSeller: true,
      image: 'assets/images/dandelion_cafe_latte_1783629617581.jpg',
      tags: ['Signature', 'Latte Art']
    },
    {
      id: 'c5',
      name: 'Cappuccino',
      price: 4.50,
      category: 'coffee',
      description: 'Double espresso with equal parts rich steamed milk and a luxurious cushion of dense foam.',
      image: 'assets/images/dandelion_cappuccino_froth_1783629627490.jpg',
      tags: ['Frothy', 'Classic']
    },
    {
      id: 'c6',
      name: 'Flat White',
      price: 4.50,
      category: 'coffee',
      description: 'Rich ristretto shots finished with micro-textured steamed milk for a dense, velvety mouthfeel.',
      image: 'assets/images/dandelion_flat_white_1783629660503.jpg',
      tags: ['Velvety', 'Bold']
    },
    {
      id: 't1',
      name: 'Loose Leaf Hot Tea',
      price: 3.50,
      category: 'tea',
      description: 'Premium organic whole leaves. Select from Earl Grey, Chamomile Lavender, or Jasmine Green.',
      image: 'assets/images/dandelion_hot_tea_1783629649611.jpg',
      tags: ['Organic', 'Hot']
    },
    {
      id: 't2',
      name: 'Ceremonial Matcha Latte',
      price: 5.25,
      category: 'tea',
      description: 'Whip-whisked Uji stone-ground matcha blended with creamy steamed oat milk and organic vanilla.',
      image: 'assets/images/dandelion_dirty_matcha_1783629639993.jpg',
      tags: ['Antioxidants', 'Oat Milk']
    },
    {
      id: 't3',
      name: 'Chai Latte',
      price: 4.75,
      category: 'tea',
      description: 'Sweet & spicy black tea concentrate infused with fresh ginger, cardamom, clove, and steamed milk.',
      image: 'assets/images/dandelion_hot_tea_1783629649611.jpg',
      tags: ['Spicy', 'Comfort']
    },
    {
      id: 't4',
      name: 'Dirty Matcha',
      price: 5.95,
      category: 'tea',
      description: 'Ceremonial green matcha latte with a robust double-shot overlay of house espresso.',
      image: 'assets/images/dandelion_dirty_matcha_1783629639993.jpg',
      tags: ['Energy Boost', 'Layered']
    },
    {
      id: 's1',
      name: 'Egg & Cheese Bagel / Sourdough',
      price: 8.50,
      category: 'specialty',
      description: 'Toasted plain, everything, or sesame bagel, croissant, or sourdough bread stuffed with organic eggs, melted Swiss, Cheddar, or Provolone cheese.',
      image: 'assets/images/dandelion_egg_cheese_bagel_1783627790275.jpg',
      isBestSeller: true,
      tags: ['Breakfast Classic', 'Custom Bread']
    },
    {
      id: 's2',
      name: 'Egg & Cheese w/ Summer Sausage',
      price: 9.50,
      category: 'specialty',
      description: 'Our standard toasted breakfast bagel sandwich packed with fluffy scrambled organic eggs, melted cheese, and savory sliced summer sausage.',
      image: 'assets/images/dandelion_egg_sausage_bagel_1783628802341.jpg',
      tags: ['Savory', 'Summer Sausage']
    },
    {
      id: 's3',
      name: 'Gourmet Grilled Cheese',
      price: 8.50,
      category: 'specialty',
      description: 'Artisanal sourdough stuffed with a premium melted blend of sharp white cheddar and provolone cheese, toasted beautifully golden-brown.',
      image: 'assets/images/dandelion_grilled_cheese_1783627781365.jpg',
      isBestSeller: true,
      tags: ['Comfort', 'Vegetarian']
    },
    {
      id: 's4',
      name: 'Croque Monsieur',
      price: 6.50,
      category: 'specialty',
      description: 'Classic French style grilled ham and cheese sandwich on rustic toasted bread, with bubbly melted Gruyère cheese.',
      image: 'assets/images/dandelion_croque_monsieur_1783628811252.jpg',
      tags: ['French Classic', 'Warm ham & cheese']
    },
    {
      id: 'p1',
      name: 'Sweet Croissant',
      price: 3.75,
      category: 'pastry',
      description: 'Buttery, flaky, golden French pastry baked fresh daily by our local partner, SoNo Baking Company.',
      image: 'assets/images/fresh_pastries_tray_1783625868185.jpg',
      tags: ['Fresh Daily', 'SoNo Baking']
    },
    {
      id: 'p2',
      name: 'Slice of Cake',
      price: 4.50,
      category: 'pastry',
      description: 'A decadent slice of our daily featured cake, freshly sourced from local bakeries.',
      image: 'assets/images/dandelion_display_pastries_1783627772746.jpg',
      tags: ['Gourmet', 'Slice of Heaven']
    },
    {
      id: 'sw1',
      name: 'Warm Crepe',
      price: 4.50,
      category: 'sweet',
      description: 'Delicate hand-folded crepe lightly dusted with powdered sugar and finished with a subtle sweet honey drizzle.',
      image: 'assets/images/dandelion_sweet_crepe_1783627804644.jpg',
      tags: ['Sweet Crepe', 'Warm']
    },
    {
      id: 'sw2',
      name: 'Cannoli-Stuffed Croissant',
      price: 6.50,
      category: 'sweet',
      description: 'Signature buttery croissant sliced and piped full of sweet, chocolate-chip ricotta cannoli cream. Heavily dusted with powdered sugar.',
      image: 'assets/images/dandelion_cannoli_croissant_1783628826182.jpg',
      isBestSeller: true,
      tags: ['Heavenly', 'Italian-American']
    },
    {
      id: 'sw3',
      name: 'Cannoli',
      price: 3.25,
      category: 'sweet',
      description: 'A crisp, golden pastry shell filled to the brim with sweet, creamy ricotta and loaded with chocolate chips.',
      image: 'assets/images/dandelion_cannoli_1783627815643.jpg',
      tags: ['Authentic', 'Sweet Shell']
    },
    {
      id: 'sw4',
      name: 'Espresso Fudge Brownie',
      price: 4.50,
      category: 'sweet',
      description: 'Dense, intensely rich chocolate fudge brownie baked with a reduction of our signature heritage espresso.',
      image: 'assets/images/dandelion_chocolate_brownie_1783627825285.jpg',
      tags: ['Rich', 'Fudge Brownie']
    },
    {
      id: 'sw5',
      name: 'Add a Vanilla Gelato',
      price: 2.50,
      category: 'sweet',
      description: 'A scoop of premium, velvety-smooth authentic Italian vanilla gelato. Perfect to top your crepe, brownie, or cake!',
      image: 'assets/images/dandelion_vanilla_gelato_1783628835180.jpg',
      tags: ['Gelato Topping', 'Cool & Creamy']
    }
  ]
};
