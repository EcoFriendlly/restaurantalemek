
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activePage, setActivePage }) {
  const { lang, setLang, t } = useLanguage();
  const isRtl = lang === 'ar' || lang === 'he';

  const navItems = [
    { id: 'home', label: t('nav.home') || (lang === 'ar' ? 'الرئيسية' : lang === 'he' ? 'ראשי' : 'Home') },
    { id: 'menu', label: t('nav.menu') || (lang === 'ar' ? 'القائمة' : lang === 'he' ? 'תפריט' : 'Menu') },
    { id: 'events', label: t('nav.events') || (lang === 'ar' ? 'المناسبات' : lang === 'he' ? 'אירועים' : 'Events') },
    { id: 'deliveries', label: t('nav.deliveries') || (lang === 'ar' ? 'التوصيل' : lang === 'he' ? 'משלוחים' : 'Deliveries') },
    { id: 'contact', label: t('nav.contact') || (lang === 'ar' ? 'اتصل بنا' : lang === 'he' ? 'צור קשר' : 'Contact') },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-[#D4AF37]/30 w-full transition-all duration-300"
    >
      {/* Subtle Gold Accent Top Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#8B0000]" />

      {/* 1. TOP BAR: Brand Logo & Title + Premium Language Switcher */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between border-b border-white/5">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer flex items-center gap-2.5 group shrink-0"
        >
          <div className="relative p-0.5 rounded-full bg-gradient-to-br from-[#D4AF37]/40 via-transparent to-[#8B0000]/40 group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/images/logo.png" 
              alt="Al-Emek Logo" 
              className="h-9 sm:h-12 w-auto object-contain rounded-full bg-black/40"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <span className="text-base sm:text-2xl font-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] bg-clip-text text-transparent tracking-wide drop-shadow-sm">
            {lang === 'ar' ? 'مطعم العيمق' : lang === 'en' ? 'Al-Emek' : 'מסעדת העמק'}
          </span>
        </div>

        {/* Premium Pill Language Switcher */}
        <div className="flex bg-[#161616] p-1 rounded-full border border-[#D4AF37]/30 shadow-inner shrink-0 gap-0.5" dir="ltr">
          {['he', 'ar', 'en'].map((l) => {
            const isActive = lang === l;
            return (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-[10px] sm:text-xs font-black rounded-full uppercase tracking-wider transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#8B0000] to-[#B22222] text-white shadow-[0_2px_10px_rgba(139,0,0,0.5)] border border-red-500/40 scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {l}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. NAVIGATION BAR: All 5 Titles Visible Directly On Screen */}
      <div className="bg-[#121212]/90 px-2 py-2 w-full">
        <nav className="max-w-7xl mx-auto flex items-center justify-between gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex-1 py-2 px-1 text-center rounded-xl text-[11px] sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-b from-[#8B0000] to-[#5C0000] text-white font-black shadow-[0_4px_15px_rgba(139,0,0,0.6)] border border-[#D4AF37]/50 scale-[1.02]' 
                    : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5 active:scale-95'
                }`}
              >
                {/* Active Indicator Glow */}
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