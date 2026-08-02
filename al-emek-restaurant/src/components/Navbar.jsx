
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activePage, setActivePage }) {
  const { lang, setLang, t } = useLanguage();
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

  // Full Native Language Switcher Configuration
  const languages = [
    { code: 'he', label: 'עברית' },
    { code: 'ar', label: 'عربية' },
    { code: 'en', label: 'English' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-[#D4AF37]/30 w-full transition-all duration-300 overflow-x-hidden"
    >
      {/* Subtle Gold Metallic Accent Bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#8B0000]" />

      {/* 1. TOP BAR: Logo + Large Social Links + Full Language Switcher */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2 flex items-center justify-between border-b border-white/5 gap-2 overflow-x-auto no-scrollbar">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer flex items-center gap-1.5 sm:gap-2 group shrink-0"
        >
          <div className="relative p-0.5 rounded-full bg-gradient-to-br from-[#D4AF37]/40 via-transparent to-[#8B0000]/40 group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/images/logo.png" 
              alt="Al-Emek Logo" 
              className="h-8 sm:h-12 w-auto object-contain rounded-full bg-black/40"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <span className="text-xs sm:text-2xl font-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] bg-clip-text text-transparent tracking-wide drop-shadow-sm whitespace-nowrap">
            {lang === 'ar' ? 'مطعم العيمق' : lang === 'en' ? 'Al-Emek' : 'מסעדת העמק'}
          </span>
        </div>

        {/* Right Section: Social Icons + Big Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          
          {/* Big Social Media Icons */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* TikTok */}
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-7 h-7 sm:w-10 sm:h-10 bg-[#181818] hover:bg-[#00F2FE] hover:text-black text-gray-300 rounded-full border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md shrink-0"
            >
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.38 6.338 6.338 0 0 0 1.077 8.163 6.338 6.338 0 0 0 8.013-.231c1.867-1.722 2.767-4.18 2.767-6.832V8.903a8.21 8.21 0 0 0 4.772 1.527V6.985a4.78 4.78 0 0 1-2.003-.299z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 sm:w-10 sm:h-10 bg-[#181818] hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white text-gray-300 rounded-full border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md shrink-0"
            >
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 sm:w-10 sm:h-10 bg-[#181818] hover:bg-[#1877F2] hover:text-white text-gray-300 rounded-full border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md shrink-0"
            >
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Fully Visible Language Switcher Pill */}
          <div className="flex bg-[#161616] p-0.5 sm:p-1 rounded-2xl border border-[#D4AF37]/40 shadow-inner gap-0.5 sm:gap-1 shrink-0" dir="ltr">
            {languages.map((item) => {
              const isActive = lang === item.code;
              return (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`px-2 sm:px-3.5 py-1 text-[11px] sm:text-xs font-extrabold rounded-xl transition-all duration-300 whitespace-nowrap shrink-0 active:scale-95 ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#8B0000] to-[#B22222] text-white shadow-[0_4px_12px_rgba(139,0,0,0.6)] border border-red-500/50 scale-105' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR: All 5 Main Pages Direct Access */}
      <div className="bg-[#121212]/90 px-1 sm:px-2 py-2 w-full">
        <nav className="max-w-7xl mx-auto flex items-center justify-between gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex-1 py-1.5 sm:py-2 px-1 text-center rounded-xl text-[11px] sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-b from-[#8B0000] to-[#5C0000] text-white font-black shadow-[0_4px_15px_rgba(139,0,0,0.6)] border border-[#D4AF37]/50 scale-[1.02]' 
                    : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5 active:scale-95'
                }`}
              >
                {/* Active Indicator Glow Bar */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-[0_0_8px_#D4AF37]" />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}