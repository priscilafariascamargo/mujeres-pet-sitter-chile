import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Translations } from '../types/language';

interface HeroProps {
  translations: Translations;
}

const Hero: React.FC<HeroProps> = ({ translations }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6 animate-bounce-in">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-yellow-400 fill-current animate-pulse" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">500+ familias satisfechas</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                {translations.hero.title}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
              {translations.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 animate-pulse-slow">
                <span>{translations.hero.cta}</span>
                <ArrowRight className="h-5 w-5 animate-bounce-x" />
              </button>
              
              <button className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Ver Servicios
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional pet sitter with happy dog"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold text-lg">6</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Profesionales</p>
                  <p className="text-sm text-gray-500">Con experiencia</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg animate-float animation-delay-1000">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Disponible</p>
                  <p className="text-sm text-gray-500">Siempre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;