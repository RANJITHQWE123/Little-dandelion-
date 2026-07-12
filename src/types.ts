export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'coffee' | 'tea' | 'pastry' | 'specialty' | 'beverage' | 'sweet';
  description: string;
  isBestSeller?: boolean;
  image?: string;
  tags?: string[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  isLocalGuide?: boolean;
  tags?: string[];
  avatarColor?: string;
}

export interface BookingRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventType: 'table' | 'event' | 'art_show' | 'book_club';
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  confirmed: boolean;
}
