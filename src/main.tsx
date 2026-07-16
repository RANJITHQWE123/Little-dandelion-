import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SiteConfigProvider } from './context/SiteConfigContext';

// Self-executing local storage image path repair script to instantly upgrade stale paths
(function() {
  try {
    const key = 'dandelion_site_config';
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      let changed = false;
      if (parsed && Array.isArray(parsed.menuItems)) {
        parsed.menuItems = parsed.menuItems.map((item: any) => {
          if (item && item.image && typeof item.image === 'string') {
            let img = item.image.trim();
            // Upgrades any stale paths (including /src/assets/ or assets/ without leading slash)
            if (img.includes('src/assets/')) {
              img = img.replace(/.*src\/assets\//, '/assets/');
              changed = true;
            } else if (img.startsWith('assets/')) {
              img = '/' + img;
              changed = true;
            } else if (img.startsWith('//assets/')) {
              img = img.substring(1);
              changed = true;
            }
            // Collapse duplicate slashes
            img = img.replace(/\/+/g, '/');
            if (img !== item.image) {
              changed = true;
              return { ...item, image: img };
            }
          }
          return item;
        });
      }
      if (changed) {
        localStorage.setItem(key, JSON.stringify(parsed));
        console.log('[Dandelion Auto-Repair] Successfully migrated stale image paths in local storage.');
      }
    }
  } catch (e) {
    console.error('[Dandelion Auto-Repair] Error repairing local storage paths:', e);
  }
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteConfigProvider>
      <App />
    </SiteConfigProvider>
  </StrictMode>,
);
