import { useLanguage } from '../context/LanguageContext';
import { UtensilsCrossed, Flame, HeartHandshake, PartyPopper, PhoneCall, Menu } from 'lucide-react';

export default function Home({ setActivePage }) {
  const { t } = useLanguage();

  return (
    <div className="space-y-16 pb-20 bg-[#0F0F0F] text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-[#0F0F0F] py-24 sm:py-32 px-4 border-b border-[#D4AF37]/30 overflow-hidden flex items-center justify-center min-h-[650px]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transform scale-105 transition-transform duration-1000" 
          style={{ backgroundImage: "url('/food.png')" }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/85 via-black/70 to-[#0F0F0F]"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-6">
          <span className="inline-block px-6 py-2.5 rounded-full bg-[#8B0000]/80 backdrop-blur-md border border-[#D4AF37]/60 text-[#D4AF37] font-extrabold text-sm sm:text-base tracking-widest uppercase shadow-xl">
            Ramat Yishai • רמת ישי
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#D4AF37] drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] tracking-tight leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl sm:text-3xl font-bold text-gray-100 drop-shadow-md leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow font-normal">
            {t('hero.description')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-6 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => setActivePage('menu')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#8B0000] hover:bg-red-800 text-white font-black text-lg sm:text-xl py-4 px-10 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border border-red-500/40 active:scale-95"
            >
              <Menu className="w-6 h-6" />
              <span>{t('hero.cta_menu')}</span>
            </button>
            
            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-yellow-500 text-black font-black text-lg sm:text-xl py-4 px-10 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <PhoneCall className="w-6 h-6" />
              <span>{t('hero.cta_call')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Card 1: Fresh Ingredients */}
        <div className="group bg-[#1A1A1A]/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 group-hover:scale-110 transition-transform duration-300">
            <Flame className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#D4AF37] mb-3">{t('features.fresh')}</h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">{t('features.fresh_desc')}</p>
        </div>
        
        {/* Card 2: Generous Portions */}
        <div className="group bg-[#1A1A1A]/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center border border-[#8B0000]/40 hover:border-[#8B0000] transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#8B0000]/20 flex items-center justify-center border border-[#8B0000]/40 group-hover:scale-110 transition-transform duration-300">
            <UtensilsCrossed className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#D4AF37] mb-3">{t('features.generous')}</h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">{t('features.generous_desc')}</p>
        </div>
        
        {/* Card 3: Warm Atmosphere */}
        <div className="group bg-[#1A1A1A]/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 group-hover:scale-110 transition-transform duration-300">
            <HeartHandshake className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#D4AF37] mb-3">{t('features.atmosphere')}</h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">{t('features.atmosphere_desc')}</p>
        </div>

        {/* Card 4: Events */}
        <div className="group bg-[#1A1A1A]/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center border border-[#8B0000]/40 hover:border-[#8B0000] transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#8B0000]/20 flex items-center justify-center border border-[#8B0000]/40 group-hover:scale-110 transition-transform duration-300">
            <PartyPopper className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#D4AF37] mb-3">{t('events.title')}</h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">{t('events.desc')}</p>
        </div>

      </section>

    </div>
  );
}