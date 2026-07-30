import { createContext, useState, useContext, useEffect } from 'react';
import he from '../locales/he.json';
import ar from '../locales/ar.json';
import en from '../locales/en.json';

const LanguageContext = createContext(undefined);
const translations = { he, ar, en };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('language') || 'he';
  });

  useEffect(() => {
    const dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
  }, [lang]);

  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let current = translations[lang];
    for (const key of keys) {
      if (current && current[key]) {
        current = current[key];
      } else {
        return keyPath;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.displayName = 'LanguageProvider';

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}