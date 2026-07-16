import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, OperatingHours } from '../types/site';
import { MenuItem } from '../types';
import { DEFAULT_SITE_CONFIG } from '../data/defaultConfig';

interface SiteConfigContextType {
  siteConfig: SiteConfig;
  isAdmin: boolean;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;
  updateAlertBanner: (message: string, active: boolean) => void;
  updateHero: (title: string, subtitle: string) => void;
  updateStory: (title: string, paragraph1: string, paragraph2: string) => void;
  updateHours: (hours: OperatingHours) => void;
  updateContact: (phone: string, email: string, address: string) => void;
  updateMenuItem: (item: MenuItem) => void;
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  deleteMenuItem: (id: string) => void;
  resetToDefault: () => void;
  saveConfigToBrowser: () => void;
}

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(undefined);

// Helper to sanitize image paths to ensure they load from the public assets directory
function sanitizeImagePath(path: string | undefined): string | undefined {
  if (!path) return path;
  let p = path.trim();
  // Keep external URLs intact
  if (p.startsWith('http://') || p.startsWith('https://') || p.startsWith('data:')) {
    return p;
  }
  // Remove leading ./ if present
  if (p.startsWith('./')) {
    p = p.substring(2);
  }
  // Replace any reference to src/assets with public assets path
  if (p.includes('src/assets/')) {
    p = p.replace(/.*src\/assets\//, '/assets/');
  }
  // Ensure we have a leading slash for assets paths
  if (p.startsWith('assets/')) {
    p = '/' + p;
  }
  // Collapse any duplicate slashes
  p = p.replace(/\/+/g, '/');
  return p;
}

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const storedConfig = localStorage.getItem('dandelion_site_config');
      if (storedConfig) {
        const parsed = JSON.parse(storedConfig);
        let wasMigrated = false;
        
        // Migrate and sanitize image paths if any exist in stored state
        if (parsed && Array.isArray(parsed.menuItems)) {
          parsed.menuItems = parsed.menuItems.map((item: any) => {
            if (item.image && typeof item.image === 'string') {
              const currentImage = item.image;
              const updatedImage = sanitizeImagePath(currentImage);

              if (updatedImage !== currentImage) {
                wasMigrated = true;
                return {
                  ...item,
                  image: updatedImage
                };
              }
            }
            return item;
          });
        }
        setSiteConfig(parsed);
        if (wasMigrated) {
          saveToLocalStorage(parsed);
        }
      }
      
      const storedAdmin = localStorage.getItem('dandelion_is_admin');
      if (storedAdmin === 'true') {
        setIsAdmin(true);
      }
    } catch (e) {
      console.error('Error loading config from localStorage', e);
    }
  }, []);

  const loginAdmin = (passcode: string): boolean => {
    const cleaned = passcode.trim();
    if (cleaned === 'dandelion@123') {
      setIsAdmin(true);
      localStorage.setItem('dandelion_is_admin', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('dandelion_is_admin');
  };

  const saveToLocalStorage = (config: SiteConfig) => {
    try {
      localStorage.setItem('dandelion_site_config', JSON.stringify(config));
    } catch (e) {
      console.error('Error saving config to localStorage', e);
    }
  };

  const updateAlertBanner = (message: string, active: boolean) => {
    setSiteConfig((prev) => {
      const updated = {
        ...prev,
        alertBanner: { message, active }
      };
      saveToLocalStorage(updated);
      return updated;
    });
  };

  const updateHero = (title: string, subtitle: string) => {
    setSiteConfig((prev) => {
      const updated = {
        ...prev,
        hero: { title, subtitle }
      };
      saveToLocalStorage(updated);
      return updated;
    });
  };

  const updateStory = (title: string, paragraph1: string, paragraph2: string) => {
    setSiteConfig((prev) => {
      const updated = {
        ...prev,
        story: {
          ...prev.story,
          title,
          paragraph1,
          paragraph2
        }
      };
      saveToLocalStorage(updated);
      return updated;
    });
  };

  const updateHours = (hours: OperatingHours) => {
    setSiteConfig((prev) => {
      const updated = {
        ...prev,
        hours
      };
      saveToLocalStorage(updated);
      return updated;
    });
  };

  const updateContact = (phone: string, email: string, address: string) => {
    setSiteConfig((prev) => {
      const updated = {
        ...prev,
        contact: { phone, email, address }
      };
      saveToLocalStorage(updated);
      return updated;
    });
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    setSiteConfig((prev) => {
      const sanitizedItem = {
        ...updatedItem,
        image: sanitizeImagePath(updatedItem.image)
      };
      const updatedItems = prev.menuItems.map((item) =>
        item.id === sanitizedItem.id ? sanitizedItem : item
      );
      const updated = {
        ...prev,
        menuItems: updatedItems
      };
      saveToLocalStorage(updated);
      return updated;
    });
  };

  const addMenuItem = (newItem: Omit<MenuItem, 'id'>) => {
    setSiteConfig((prev) => {
      const newId = `custom_${Date.now()}`;
      const itemWithId: MenuItem = {
        ...newItem,
        id: newId,
        image: sanitizeImagePath(newItem.image)
      };
      const updated = {
        ...prev,
        menuItems: [...prev.menuItems, itemWithId]
      };
      saveToLocalStorage(updated);
      return updated;
    });
  };

  const deleteMenuItem = (id: string) => {
    setSiteConfig((prev) => {
      const updated = {
        ...prev,
        menuItems: prev.menuItems.filter((item) => item.id !== id)
      };
      saveToLocalStorage(updated);
      return updated;
    });
  };

  const resetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all configurations to the original defaults? This will erase all your custom changes.')) {
      setSiteConfig(DEFAULT_SITE_CONFIG);
      saveToLocalStorage(DEFAULT_SITE_CONFIG);
    }
  };

  const saveConfigToBrowser = () => {
    saveToLocalStorage(siteConfig);
  };

  return (
    <SiteConfigContext.Provider
      value={{
        siteConfig,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        updateAlertBanner,
        updateHero,
        updateStory,
        updateHours,
        updateContact,
        updateMenuItem,
        addMenuItem,
        deleteMenuItem,
        resetToDefault,
        saveConfigToBrowser
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error('useSiteConfig must be used within a SiteConfigProvider');
  }
  return context;
}
