import { useLanguage } from '../context/LanguageContext';
import { Phone, Clock, MapPin, Navigation } from 'lucide-react';

export default function Contact() {
  const { lang } = useLanguage();

  const isRtl = lang === 'ar' || lang === 'he';
  const dirClass = isRtl ? 'dir-rtl text-right' : 'dir-ltr text-left';

  const phones = [
    { label: '04-9930842', raw: '049930842' },
    { label: '04-9536642', raw: '049536642' },
    { label: '050-564-3643', raw: '0505643643' },
  ];

  const googleMapsUrl = "https://www.google.com/maps/place/%D7%9E%D7%A1%D7%A2%D7%93%D7%AA+%D7%94%D7%A2%D7%9E%D7%A7%E2%80%AD/data=!4m2!3m1!1s0x151db2814c66bbcf:0x67f4bee462cd5d50?sa=X&ved=1t:242&ictx=111";
  const wazeUrl = "https://waze.com/ul/hsvc403vyt";

  const content = {
    he: {
      title: 'צור קשר',
      subtitle: 'אנחנו כאן לכל שאלה, הזמנות ומידע נוסף',
      ordersTitle: 'להזמנות ושאלות',
      quickCall: 'חיוג מהיר',
      hoursTitle: 'שעות פעילות',
      hoursText: 'כל יום: 07:00 – 19:00',
      addressTitle: 'כתובת',
      addressText: 'מסעדת העמק - רמת ישי',
      navTitle: 'ניווט הגעה',
      navSubtitle: 'בחרו אפליקציה להגעה נוחה',
      openWaze: 'פתח ב-Waze',
      openMaps: 'פתח ב-Maps',
    },
    ar: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لخدمتكم دائماً وإجابة جميع استفساراتكم',
      ordersTitle: 'للطلبات والاستفسارات',
      quickCall: 'اتصال مباشر',
      hoursTitle: 'ساعات العمل',
      hoursText: 'كل يوم: 07:00 – 19:00',
      addressTitle: 'العنوان',
      addressText: 'مطعم العيمق - رمات يشاي',
      navTitle: 'الوصول إلينا',
      navSubtitle: 'اختر تطبيق الملاحة للوصول المباشر',
      openWaze: 'افتح في Waze',
      openMaps: 'افتح في Maps',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here for any questions, orders, and more information',
      ordersTitle: 'Orders & Inquiries',
      quickCall: 'Call Now',
      hoursTitle: 'Opening Hours',
      hoursText: 'Every day: 07:00 – 19:00',
      addressTitle: 'Address',
      addressText: 'Al-Emek Restaurant - Ramat Yishai',
      navTitle: 'Get Directions',
      navSubtitle: 'Choose your preferred navigation app',
      openWaze: 'Open in Waze',
      openMaps: 'Open in Maps',
    },
  };

  const t = content[lang] || content.he;

  return (
    <div className={`bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#141414] text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${dirClass}`}>
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] tracking-wider drop-shadow-2xl animate-gradient">
            {t.title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            {t.subtitle}
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-4"></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Contact & Hours Card */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#242424] p-10 rounded-3xl border border-[#D4AF37]/30 shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500 flex flex-col justify-between space-y-8 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[#D4AF37]/20 pb-4">
                <div className="p-2 bg-[#D4AF37]/10 rounded-lg">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h2 className="text-3xl font-black text-[#D4AF37]">
                  {t.ordersTitle}
                </h2>
              </div>

              <div className="space-y-4">
                {phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="group flex items-center justify-between p-6 bg-gradient-to-r from-[#242424] to-[#1A1A1A] hover:from-[#8B0000] hover:to-[#DC143C] rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <span className="text-gray-300 group-hover:text-white font-bold text-base uppercase tracking-wide">
                      {t.quickCall}
                    </span>
                    <span className="text-2xl font-black text-[#D4AF37] group-hover:text-white font-mono tracking-wider transition-colors duration-300" dir="ltr">
                      {phone.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Opening Hours & Address */}
            <div className="pt-6 border-t border-[#D4AF37]/20 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#141414]/50 p-6 rounded-2xl border backdrop-blur-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                    {t.hoursTitle}
                  </h3>
                </div>
                <p className="text-lg font-black text-white font-mono leading-relaxed" dir="ltr">
                  {t.hoursText}
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                    {t.addressTitle}
                  </h3>
                </div>
                <p className="text-base font-bold text-gray-200 leading-snug">
                  {t.addressText}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation & Map */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#242424] p-10 rounded-3xl border border-[#D4AF37]/30 shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500 flex flex-col justify-between space-y-8 backdrop-blur-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#D4AF37]/10 rounded-lg">
                  <Navigation className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h2 className="text-3xl font-black text-white">
                  {t.navTitle}
                </h2>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                {t.navSubtitle}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#242424] to-[#1A1A1A] hover:from-[#33CCFF] hover:to-[#00B4D8] text-white hover:text-black font-black text-lg py-6 px-6 rounded-2xl border border-[#D4AF37]/20 hover:border-transparent transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="p-3 bg-white/10 group-hover:bg-white/20 rounded-xl transition-all duration-300">
                  <img 
                    src="/waze.png" 
                    alt="Waze" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="transition-colors duration-300">{t.openWaze}</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#242424] to-[#1A1A1A] hover:from-[#EA4335] hover:to-[#C5221F] text-white font-black text-lg py-6 px-6 rounded-2xl border border-[#D4AF37]/20 hover:border-transparent transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="p-3 bg-white/10 group-hover:bg-white/20 rounded-xl transition-all duration-300">
                  <img 
                    src="/googlemaps.png" 
                    alt="Google Maps" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="transition-colors duration-300">{t.openMaps}</span>
              </a>
            </div>

            {/* Embedded Map */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl group">
              <iframe
                title="HaEmek Restaurant Location"
                src="https://maps.google.com/maps?q=מסעדת%20העמק%20רמת%20ישי&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0F0F0F]/30 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </div>

        </div>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in;
        }
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
}