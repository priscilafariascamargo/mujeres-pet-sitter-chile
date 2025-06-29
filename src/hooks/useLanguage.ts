import { useState, useEffect } from 'react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return {
    language,
    changeLanguage,
    t: translations[language]
  };
};