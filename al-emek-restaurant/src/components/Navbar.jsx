import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activePage, setActivePage }) {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isRtl = lang === 'ar' || lang === 'he';

  const socialLinks = {
    tiktok: "https://www.tiktok.com/@restauranthaemk?is_from_webapp=1&sender_device=pc",
    instagram: "https://www.instagram.com/restaurant_hamek?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    facebook: "https://www.facebook.com/restaurantemek"
  };

  const navItems = [
    { id: 'home', label: t('nav.home') || (lang === 'ar' ? 'الرئيسية' : lang === 'he' ? 'ראשי' : 'Home') },
    { id: 'menu', label: t('nav.menu') || (lang === 'ar' ? 'القائمة' : lang === 'he' ? 'תפריט' : 'Menu') },
    { id: 'events', label: t('nav.events') || (lang === 'ar' ? 'المناسبات' : lang === 'he' ? 'אירועים' : 'Events') },
    { id: 'deliveries', label: t('nav.deliveries') || (lang === 'ar' ? 'التوصيل' : lang === 'he' ? 'משלוחים' : 'Deliveries') },
    { id: 'contact', label: t('nav.contact') || (lang === 'ar' ? 'اتصل بنا' : lang === 'he' ? 'צור קשר' : 'Contact') },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md text-white shadow-2xl border-b-2 border-[#D4AF37]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 sm:h-24">
        
        {/* Logo Section */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer flex items-center gap-3 group shrink-0"
        >
          <img 
            src="/images/logo.png" 
            alt="Al-Emek Logo" 
            className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="text-xl sm:text-2xl font-black text-[#D4AF37] tracking-wider drop-shadow-md">
            {lang === 'ar' ? 'مطعم العيمق' : lang === 'en' ? 'Al-Emek' : 'מסעדת העמק'}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-base lg:text-lg font-bold transition-all duration-200 px-3 lg:px-4 py-2 rounded-lg ${
                activePage === item.id 
                  ? 'text-[#D4AF37] bg-[#8B0000]/40 border border-[#D4AF37]/50 shadow-md' 
                  : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Socials & Language Switcher (Desktop & Tablet) */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 bg-[#1F1F1F] hover:bg-[#00F2FE] hover:text-black text-white rounded-xl border border-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.38 6.338 6.338 0 0 0 1.077 8.163 6.338 6.338 0 0 0 8.013-.231c1.867-1.722 2.767-4.18 2.767-6.832V8.903a8.21 8.21 0 0 0 4.772 1.527V6.985a4.78 4.78 0 0 1-2.003-.299z"/>
              </svg>
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 bg-[#1F1F1F] hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 text-white rounded-xl border border-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 bg-[#1F1F1F] hover:bg-[#1877F2] text-white rounded-xl border border-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex bg-black/80 p-1 rounded-xl border border-[#D4AF37]/40 shadow-inner" dir="ltr">
            {['he', 'ar', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-xs font-black rounded-lg uppercase transition-all ${
                  lang === l 
                    ? 'bg-[#8B0000] text-white shadow-md border border-red-500/30' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden text-[#D4AF37] hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#D4AF37]/20 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-start px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                  activePage === item.id 
                    ? 'bg-[#8B0000] text-white shadow-md border border-[#D4AF37]/40' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Social Links */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-4">
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#222] text-white rounded-xl border border-white/10 flex items-center justify-center active:scale-95 transition-transform"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.38 6.338 6.338 0 0 0 1.077 8.163 6.338 6.338 0 0 0 8.013-.231c1.867-1.722 2.767-4.18 2.767-6.832V8.903a8.21 8.21 0 0 0 4.772 1.527V6.985a4.78 4.78 0 0 1-2.003-.299z"/>
              </svg>
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#222] text-white rounded-xl border border-white/10 flex items-center justify-center active:scale-95 transition-transform"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#222] text-white rounded-xl border border-white/10 flex items-center justify-center active:scale-95 transition-transform"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}