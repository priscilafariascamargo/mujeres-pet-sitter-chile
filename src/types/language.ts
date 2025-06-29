export type Language = 'es' | 'en' | 'pt';

export interface Translations {
  nav: {
    home: string;
    services: string;
    team: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    walkService: {
      title: string;
      description: string;
    };
    homeVisits: {
      title: string;
      description: string;
    };
    overnight: {
      title: string;
      description: string;
    };
    grooming: {
      title: string;
      description: string;
    };
    petHotel: {
      title: string;
      description: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
      submit: string;
    };
    info: {
      phone: string;
      email: string;
      coverage: string;
      hours: string;
    };
  };
  footer: {
    description: string;
    rights: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  image: string;
  whatsapp: string;
  phone: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  pet: string;
  image: string;
  approved: boolean;
}