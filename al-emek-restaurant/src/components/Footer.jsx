import { useLanguage } from '../context/LanguageContext';
import { Clock, MapPin, Phone, Compass, Share2 } from 'lucide-react';

export default function Footer() {
  const { lang } = useLanguage();

  const isRtl = lang === 'ar' || lang === 'he';

  const phones = [
    { label: '04-9930842', raw: '049930842' },
    { label: '04-9536642', raw: '049536642' },
    { label: '050-564-3643', raw: '0505643643' },
  ];

  const wazeUrl = "https://waze.com/ul/hsvc403vyt";
  const googleMapsUrl = "https://www.google.com/maps/place/%D7%9E%D7%A1%D7%A2%D7%93%D7%AA+%D7%94%D7%A2%D7%9E%D7%A7%E2%80%AD/data=!4m2!3m1!1s0x151db2814c66bbcf:0x67f4bee462cd5d50?sa=X&ved=1t:242&ictx=111";

  const socialLinks = {
    tiktok: "https://www.tiktok.com/@restauranthaemk?is_from_webapp=1&sender_device=pc",
    instagram: "https://www.instagram.com/restaurant_hamek?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    facebook: "https://www.facebook.com/restaurantemek"
  };

  const content = {
    he: {
      hoursTitle: 'שעות פעילות',
      hoursText: 'כל יום: 07:00 – 19:00',
      addressTitle: 'כתובת המסעדה',
      addressText: 'מסעדת העמק - רמת ישי',
      callTitle: 'דברו איתנו',
      directionsTitle: 'איך מגיעים?',
      followTitle: 'עקבו אחרינו',
      restaurantName: 'מסעדת העמק',
    },
    ar: {
      hoursTitle: 'ساعات العمل',
      hoursText: 'كل يوم: 07:00 – 19:00',
      addressTitle: 'عنوان المطعم',
      addressText: 'مطعم هعمك - رامات يشاي',
      callTitle: 'تواصلوا معنا',
      directionsTitle: 'الوصول إلينا',
      followTitle: 'تابعونا',
      restaurantName: 'مطعم هعمك',
    },
    en: {
      hoursTitle: 'Opening Hours',
      hoursText: 'Every day: 07:00 – 19:00',
      addressTitle: 'Our Location',
      addressText: 'Al-Emek Restaurant - Ramat Yishai',
      callTitle: 'Call Us',
      directionsTitle: 'Directions',
      followTitle: 'Follow Us',
      restaurantName: 'Al-Emek Restaurant',
    },
  };

  const t = content[lang] || content.he;

  return (
    <footer 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="relative bg-gradient-to-b from-[#121212] via-[#0A0A0A] to-black text-white border-t border-[#D4AF37]/40 pt-12 pb-8 w-full shadow-2xl"
    >
      
      {/* Top Gold Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
        
        {/* Logo Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-[#1A1A1A]/80 rounded-2xl border-2 border-[#D4AF37]/40 shadow-xl group hover:border-[#D4AF37] transition-all duration-300">
          <img 
            src="/images/logo.png" 
            alt={t.restaurantName} 
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* Hours & Address */}
        <div className="space-y-6">
          {/* Hours */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-black text-[#D4AF37] uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2 w-fit flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
              {t.hoursTitle}
            </h4>
            <p className="text-base sm:text-lg font-bold text-gray-100 font-mono">
              {t.hoursText}
            </p>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-black text-[#D4AF37] uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2 w-fit flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              {t.addressTitle}
            </h4>
            <p className="text-base sm:text-lg font-bold text-gray-100 leading-relaxed">
              {t.addressText}
            </p>
          </div>
        </div>

        {/* Phones */}
        <div className="space-y-3">
          <h4 className="text-base sm:text-lg font-black text-[#D4AF37] uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2 w-fit flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#D4AF37]" />
            {t.callTitle}
          </h4>
          <div className="space-y-2 pt-1">
            {phones.map((phone, idx) => (
              <a 
                key={idx}
                href={`tel:${phone.raw}`}
                className="flex items-center gap-3 text-gray-100 hover:text-[#D4AF37] transition-all duration-300 group w-fit"
              >
                <span className="text-lg sm:text-xl font-bold font-mono tracking-widest group-hover:scale-105 transition-transform" dir="ltr">
                  {phone.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation & Socials */}
        <div className="space-y-6">
          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-black text-[#D4AF37] uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2 w-fit flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#D4AF37]" />
              {t.directionsTitle}
            </h4>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Waze Navigation"
                className="w-12 h-12 bg-[#1A1A1A] hover:bg-[#33CCFF] rounded-xl border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <img src="/waze.png" alt="Waze" className="w-6 h-6 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Navigation"
                className="w-12 h-12 bg-[#1A1A1A] hover:bg-[#EA4335] rounded-xl border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <img src="/googlemaps.png" alt="Google Maps" className="w-6 h-6 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-black text-[#D4AF37] uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2 w-fit flex items-center gap-2">
              <Share2 className="w-5 h-5 text-[#D4AF37]" />
              {t.followTitle}
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-[#1A1A1A] hover:bg-[#00F2FE] hover:text-black text-white rounded-xl border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.38 6.338 6.338 0 0 0 1.077 8.163 6.338 6.338 0 0 0 8.013-.231c1.867-1.722 2.767-4.18 2.767-6.832V8.903a8.21 8.21 0 0 0 4.772 1.527V6.985a4.78 4.78 0 0 1-2.003-.299z"/>
                </svg>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-[#1A1A1A] hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 text-white rounded-xl border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-[#1A1A1A] hover:bg-[#1877F2] text-white rounded-xl border border-[#D4AF37]/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Credit Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 flex items-center justify-center" dir="ltr">
        <a 
          href="https://www.aetherboom.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#171717] hover:bg-[#222222] px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 shadow-xl"
        >
          <img 
            src="/Aetherboom.jpg" 
            alt="AetherBoom" 
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-[#D4AF37] group-hover:scale-110 transition-transform duration-300"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="text-xs sm:text-sm font-black tracking-widest text-gray-200 group-hover:text-white transition-colors uppercase">
            CREATED BY <span className="text-[#D4AF37]">AETHERBOOM</span>
          </span>
        </a>
      </div>

    </footer>
  );
}