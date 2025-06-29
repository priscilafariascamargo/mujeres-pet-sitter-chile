import React, { useState, useEffect } from 'react';
import { 
  Users, 
  MessageSquare, 
  Image, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Eye,
  EyeOff,
  LogOut,
  Check,
  AlertCircle
} from 'lucide-react';
import { TeamMember, Testimonial } from '../types/language';

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'team' | 'testimonials' | 'photos'>('team');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Initialize with sample data
  useEffect(() => {
    const sampleTeamMembers: TeamMember[] = [
      {
        id: '1',
        name: 'María González',
        role: 'Fundadora & Pet Sitter Senior',
        experience: '8 años de experiencia',
        specialties: ['Perros grandes', 'Entrenamiento', 'Cuidado médico'],
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        whatsapp: '+56912345678',
        phone: '+56912345678',
        email: 'maria@mujerespetsitter.cl'
      },
      {
        id: '2',
        name: 'Carolina Pérez',
        role: 'Especialista en Felinos',
        experience: '6 años de experiencia',
        specialties: ['Gatos', 'Medicina veterinaria', 'Comportamiento animal'],
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
        whatsapp: '+56912345679',
        phone: '+56912345679',
        email: 'carolina@mujerespetsitter.cl'
      }
    ];

    const sampleTestimonials: Testimonial[] = [
      {
        id: '1',
        name: 'Patricia Martínez',
        location: 'Las Condes',
        rating: 5,
        text: 'Increíble servicio. María cuidó a mi perro Max durante mis vacaciones y regresé para encontrarlo feliz y relajado.',
        pet: 'Golden Retriever - Max',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
        approved: true
      },
      {
        id: '2',
        name: 'Roberto Chen',
        location: 'Providencia',
        rating: 5,
        text: 'Excelente profesionalismo. Carolina cuidó a mis dos gatos durante un viaje de trabajo.',
        pet: 'Gatos - Luna y Sol',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        approved: false
      }
    ];

    setTeamMembers(sampleTeamMembers);
    setTestimonials(sampleTestimonials);
  }, []);

  const handleDeleteTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
  };

  const handleApproveTestimonial = (id: string) => {
    setTestimonials(testimonials.map(testimonial => 
      testimonial.id === id ? { ...testimonial, approved: !testimonial.approved } : testimonial
    ));
  };

  const renderTeamSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900">Gestión del Equipo</h3>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-pink-600 hover:to-purple-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Agregar Miembro</span>
        </button>
      </div>

      <div className="grid gap-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex space-x-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{member.name}</h4>
                  <p className="text-purple-600 text-sm">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.experience}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingItem(member.id)}
                  className="text-blue-600 hover:text-blue-700 p-2"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDeleteTeamMember(member.id)}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">WhatsApp:</span>
                <p className="text-gray-600">{member.whatsapp}</p>
              </div>
              <div>
                <span className="font-medium">Teléfono:</span>
                <p className="text-gray-600">{member.phone}</p>
              </div>
              <div>
                <span className="font-medium">Email:</span>
                <p className="text-gray-600">{member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTestimonialsSection = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Gestión de Testimonios</h3>

      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      testimonial.approved 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {testimonial.approved ? 'Aprobado' : 'Pendiente'}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{testimonial.location} • {testimonial.pet}</p>
                  <p className="text-gray-700 mt-2">"{testimonial.text}"</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleApproveTestimonial(testimonial.id)}
                  className={`p-2 ${
                    testimonial.approved 
                      ? 'text-yellow-600 hover:text-yellow-700' 
                      : 'text-green-600 hover:text-green-700'
                  }`}
                >
                  {testimonial.approved ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setEditingItem(testimonial.id)}
                  className="text-blue-600 hover:text-blue-700 p-2"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDeleteTestimonial(testimonial.id)}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPhotosSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900">Gestión de Fotos</h3>
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-pink-600 hover:to-purple-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Subir Foto</span>
        </button>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
        <Image className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">Funcionalidad de gestión de fotos en desarrollo</p>
        <p className="text-sm text-gray-400 mt-2">Próximamente podrás subir y gestionar las fotos del sitio web</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-1">
                <img
                  src="/logomarca.jpg"
                  alt="Mujeres Pet Sitter Chile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Panel de Administración</h1>
                <p className="text-sm text-gray-500">Mujeres Pet Sitter Chile</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { key: 'team', label: 'Equipo', icon: Users },
              { key: 'testimonials', label: 'Testimonios', icon: MessageSquare },
              { key: 'photos', label: 'Fotos', icon: Image }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.key
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'team' && renderTeamSection()}
        {activeTab === 'testimonials' && renderTestimonialsSection()}
        {activeTab === 'photos' && renderPhotosSection()}
      </div>
    </div>
  );
};

export default AdminPanel;