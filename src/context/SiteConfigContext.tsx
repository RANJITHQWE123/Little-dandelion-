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
        // Migrate old image paths if any exist in stored state
        if (parsed && Array.isArray(parsed.menuItems)) {
          parsed.menuItems = parsed.menuItems.map((item: any) => {
            if (item.image && typeof item.image === 'string' && item.image.startsWith('/src/assets/')) {
              wasMigrated = true;
              return {
                ...item,
                image: item.image.replace('/src/assets/', '/assets/')
              };
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
      const updatedItems = prev.menuItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
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
        id: newId
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
