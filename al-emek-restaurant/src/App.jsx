import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import Deliveries from './pages/Deliveries';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'menu':
        return <Menu />;
      case 'events':
        return <Events />;
      case 'deliveries':
        return <Deliveries />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col justify-between bg-gray-50">
        <div>
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          <main className="transition-opacity duration-300">{renderPage()}</main>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}