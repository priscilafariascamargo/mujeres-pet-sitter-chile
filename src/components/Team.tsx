import React from 'react';
import { Star, Award, Heart } from 'lucide-react';
import { Translations } from '../types/language';

interface TeamProps {
  translations: Translations;
}

const Team: React.FC<TeamProps> = ({ translations }) => {
  const teamMembers = [
    {
      name: 'María González',
      role: 'Fundadora & Pet Sitter Senior',
      experience: '8 años de experiencia',
      specialties: ['Perros grandes', 'Entrenamiento', 'Cuidado médico'],
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Carolina Pérez',
      role: 'Especialista en Felinos',
      experience: '6 años de experiencia',
      specialties: ['Gatos', 'Medicina veterinaria', 'Comportamiento animal'],
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Valentina Ruiz',
      role: 'Pet Sitter & Groomer',
      experience: '5 años de experiencia',
      specialties: ['Aseo profesional', 'Cachorros', 'Terapia animal'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Camila Torres',
      role: 'Cuidadora Nocturna',
      experience: '7 años de experiencia',
      specialties: ['Cuidado nocturno', 'Mascotas senior', 'Primeros auxilios'],
      image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Andrea Silva',
      role: 'Entrenadora Canina',
      experience: '4 años de experiencia',
      specialties: ['Entrenamiento', 'Socialización', 'Problemas de conducta'],
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Francisca Morales',
      role: 'Pet Sitter & Paseadora',
      experience: '3 años de experiencia',
      specialties: ['Paseos grupales', 'Ejercicio canino', 'Cuidado básico'],
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {translations.team.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.team.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">5.0</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <Award className="h-5 w-5 text-purple-500" />
                </div>
                
                <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.experience}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-pink-500">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm font-medium">Disponible</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                    Ver perfil →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Familias atendidas' },
            { number: '6', label: 'Profesionales' },
            { number: '24/7', label: 'Disponibilidad' },
            { number: '100%', label: 'Satisfacción' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;