import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';
import { Translations } from '../types/language';

interface FooterProps {
  translations: Translations;
}

const Footer: React.FC<FooterProps> = ({ translations }) => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                {/* Outer glow effect */}
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-md opacity-40"></div>
                
                {/* Círculo exterior blanco */}
                <div className="relative w-20 h-20 bg-white rounded-full p-1 shadow-xl border-2 border-white/20">
                  {/* Círculo interior con gradiente */}
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-full p-1 shadow-inner">
                    <img
                      src="/logomarca.jpg"
                      alt="Mujeres Pet Sitter Chile"
                      className="w-full h-full object-cover rounded-full shadow-md"
                    />
                  </div>
                </div>
                
                {/* Highlight effect */}
                <div className="absolute top-2 left-2 w-5 h-5 bg-white/30 rounded-full blur-sm"></div>
              </div>
              <span className="text-2xl font-bold">Mujeres Pet Sitter Chile</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {translations.footer.description}
            </p>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Servicios', href: '#services' },
                { label: 'Equipo', href: '#team' },
                { label: 'Testimonios', href: '#testimonials' },
                { label: 'Contacto', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">hola@mujerespetsitter.cl</span>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Áreas de Servicio</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>Las Condes</div>
                <div>Providencia</div>
                <div>Vitacura</div>
                <div>Ñuñoa</div>
                <div>La Reina</div>
                <div>Macul</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Mujeres Pet Sitter Chile. {translations.footer.rights}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;