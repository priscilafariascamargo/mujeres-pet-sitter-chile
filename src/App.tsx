import React, { useState } from 'react';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

function App() {
  const { language, changeLanguage, t } = useLanguage();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if current path is admin
  React.useEffect(() => {
    if (window.location.pathname === '/admin') {
      setIsAdminMode(true);
    }
  }, []);

  const handleLogin = (success: boolean) => {
    setIsLoggedIn(success);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdminMode(false);
    window.history.pushState({}, '', '/');
  };

  // Admin mode rendering
  if (isAdminMode) {
    if (!isLoggedIn) {
      return <AdminLogin onLogin={handleLogin} />;
    }
    return <AdminPanel onLogout={handleLogout} />;
  }

  // Regular website rendering
  return (
    <div className="min-h-screen bg-white">
      <Header
        language={language}
        onLanguageChange={changeLanguage}
        translations={t}
      />
      <Hero translations={t} />
      <Services translations={t} />
      <Team translations={t} />
      <Testimonials translations={t} />
      <Contact translations={t} />
      <Footer translations={t} />
    </div>
  );
}

export default App;