import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Translations } from '../types/language';

interface TestimonialsProps {
  translations: Translations;
}

const Testimonials: React.FC<TestimonialsProps> = ({ translations }) => {
  const testimonials = [
    {
      name: 'Patricia Martínez',
      location: 'Las Condes',
      rating: 5,
      text: 'Increíble servicio. María cuidó a mi perro Max durante mis vacaciones y regresé para encontrarlo feliz y relajado. Las actualizaciones diarias con fotos me dieron mucha tranquilidad.',
      pet: 'Golden Retriever - Max',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Roberto Chen',
      location: 'Providencia',
      rating: 5,
      text: 'Excelente profesionalismo. Carolina cuidó a mis dos gatos durante un viaje de trabajo. Su experiencia veterinaria fue crucial cuando uno de ellos necesitó medicación.',
      pet: 'Gatos - Luna y Sol',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Isabel Fernández',
      location: 'Ñuñoa',
      rating: 5,
      text: 'Valentina es maravillosa. No solo cuidó a mi cachorro, sino que también lo ayudó con su entrenamiento básico. Regresé y Bruno había aprendido nuevos comandos.',
      pet: 'Labrador - Bruno',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Carlos Mendoza',
      location: 'Vitacura',
      rating: 5,
      text: 'Servicio excepcional para mi perro senior. Camila demostró gran paciencia y cuidado especializado. La comunicación constante me permitió trabajar tranquilo.',
      pet: 'Pastor Alemán - Rex',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ana Rodríguez',
      location: 'Santiago Centro',
      rating: 5,
      text: 'Andrea transformó completamente el comportamiento de mi perro rescatado. Su paciencia y técnicas de entrenamiento son increíbles. Totalmente recomendado.',
      pet: 'Mestizo - Coco',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Miguel Torres',
      location: 'La Reina',
      rating: 5,
      text: 'Francisca es fantástica con los paseos. Mi Border Collie necesita mucho ejercicio y ella siempre encuentra actividades nuevas. Muy profesional y cariñosa.',
      pet: 'Border Collie - Nala',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {translations.testimonials.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-600"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-purple-200" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
                <p className="text-sm font-medium text-purple-700">
                  🐾 {testimonial.pet}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-pink-100">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5.0</div>
                <div className="text-pink-100">Calificación promedio</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-pink-100">Recomendación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;