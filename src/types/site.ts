import { MenuItem } from '../types';

export interface AlertBannerConfig {
  active: boolean;
  message: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
}

export interface StoryConfig {
  badge: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
}

export interface OperatingHours {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface ContactConfig {
  phone: string;
  email: string;
  address: string;
}

export interface SiteConfig {
  alertBanner: AlertBannerConfig;
  hero: HeroConfig;
  story: StoryConfig;
  hours: OperatingHours;
  contact: ContactConfig;
  menuItems: MenuItem[];
}
