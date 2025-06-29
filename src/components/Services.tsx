import React from 'react';
import { 
  MapPin, 
  Home, 
  Moon, 
  Sparkles, 
  Building2,
  Clock,
  Heart
} from 'lucide-react';
import { Translations } from '../types/language';

interface ServicesProps {
  translations: Translations;
}

const Services: React.FC<ServicesProps> = ({ translations }) => {
  const services = [
    {
      icon: MapPin,
      title: translations.services.walkService.title,
      description: translations.services.walkService.description,
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Home,
      title: translations.services.homeVisits.title,
      description: translations.services.homeVisits.description,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Moon,
      title: translations.services.overnight.title,
      description: translations.services.overnight.description,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Sparkles,
      title: translations.services.grooming.title,
      description: translations.services.grooming.description,
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Building2,
      title: translations.services.petHotel.title,
      description: translations.services.petHotel.description,
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {translations.services.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            {translations.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-pink-500 font-medium group-hover:text-purple-600 transition-colors duration-300">
                  <span className="mr-2">Más información</span>
                  <div className="w-6 h-6 bg-current rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 mr-3 animate-pulse" />
              <span className="text-2xl font-bold">Disponibles 24/7</span>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Cobertura completa en toda la Región Metropolitana de Santiago
            </p>
            <button className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Solicitar Cotización Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;