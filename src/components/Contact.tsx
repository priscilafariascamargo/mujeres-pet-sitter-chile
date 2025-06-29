import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Translations } from '../types/language';

interface ContactProps {
  translations: Translations;
}

const Contact: React.FC<ContactProps> = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const teamMembers = [
    {
      name: 'María González',
      role: 'Fundadora & Pet Sitter Senior',
      whatsapp: '+56912345678',
      phone: '+56912345678',
      email: 'maria@mujerespetsitter.cl'
    },
    {
      name: 'Carolina Pérez',
      role: 'Especialista en Felinos',
      whatsapp: '+56912345679',
      phone: '+56912345679',
      email: 'carolina@mujerespetsitter.cl'
    },
    {
      name: 'Valentina Ruiz',
      role: 'Pet Sitter & Groomer',
      whatsapp: '+56912345680',
      phone: '+56912345680',
      email: 'valentina@mujerespetsitter.cl'
    },
    {
      name: 'Camila Torres',
      role: 'Cuidadora Nocturna',
      whatsapp: '+56912345681',
      phone: '+56912345681',
      email: 'camila@mujerespetsitter.cl'
    },
    {
      name: 'Andrea Silva',
      role: 'Especialista en Comportamiento',
      whatsapp: '+56912345682',
      phone: '+56912345682',
      email: 'andrea@mujerespetsitter.cl'
    },
    {
      name: 'Francisca Morales',
      role: 'Pet Sitter & Paseadora',
      whatsapp: '+56912345683',
      phone: '+56912345683',
      email: 'francisca@mujerespetsitter.cl'
    }
  ];

  const whatsappMessage = `Hola! Me interesa conocer más sobre los servicios de pet sitting. Mi nombre es ${formData.name}`;
  const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {translations.contact.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <p className="text-gray-600">{translations.contact.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">{translations.contact.info.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Cobertura</p>
                    <p className="text-gray-600">{translations.contact.info.coverage}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Horario</p>
                    <p className="text-gray-600">{translations.contact.info.hours}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Áreas de Servicio</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Las Condes', 'Providencia', 'Vitacura', 'Ñuñoa',
                  'Santiago Centro', 'La Reina', 'Macul', 'San Miguel',
                  'Peñalolén', 'La Florida', 'Maipú', 'Estación Central'
                ].map((area, index) => (
                  <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3 text-center">
                    <span className="text-purple-700 font-medium text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu Cotización</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.contact.form.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="paseos">Paseos diarios</option>
                  <option value="visitas">Visitas a domicilio</option>
                  <option value="nocturno">Cuidado nocturno</option>
                  <option value="aseo">Aseo y cuidado</option>
                  <option value="hotel">Hotel para mascotas</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu mascota y qué tipo de cuidado necesita..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{translations.contact.form.submit}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Team Contact Information */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contacto Directo con Nuestro Equipo</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100">
                <h4 className="font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-purple-600 text-sm mb-4">{member.role}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    <a 
                      href={`https://wa.me/${member.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <a 
                      href={`tel:${member.phone}`}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-purple-500" />
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;