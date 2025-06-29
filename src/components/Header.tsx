import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types/language';
import { Translations } from '../types/language';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  translations: Translations;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'team', href: '#team' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {/* Outer glow effect - más grande */}
              <div className="absolute inset-0 w-28 h-28 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-lg opacity-70 animate-pulse"></div>
              
              {/* Círculo exterior blanco prominente */}
              <div className="relative w-28 h-28 bg-white rounded-full p-2 shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                {/* Círculo interior con gradiente rosado */}
                <div className="w-full h-full bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 rounded-full p-1 shadow-inner border-2 border-pink-200/30">
                  <img
                    src="/logomarca.jpg"
                    alt="Mujeres Pet Sitter Chile"
                    className="w-full h-full object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Highlight effect más prominente */}
              <div className="absolute top-3 left-3 w-8 h-8 bg-white/50 rounded-full blur-sm"></div>
              
              {/* Efecto de brillo adicional */}
              <div className="absolute top-1 left-1 w-6 h-6 bg-white/30 rounded-full"></div>
            </div>
            
            <div className="text-white">
              <span className="text-2xl font-bold drop-shadow-lg">
                Mujeres Pet Sitter Chile
              </span>
              <div className="text-sm opacity-90 font-medium">
                Cuidado profesional con amor
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-pink-200 transition-colors font-medium relative group"
              >
                {translations.nav[item.key as keyof typeof translations.nav]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={onLanguageChange}
            />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={onLanguageChange}
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-pink-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-white hover:text-pink-200 transition-colors font-medium"
              >
                {translations.nav[item.key as keyof typeof translations.nav]}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;