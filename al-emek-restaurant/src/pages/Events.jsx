import { useLanguage } from '../context/LanguageContext';

export default function Events() {
  const { lang } = useLanguage();

  const eventTypes = [
    { 
      title: { he: 'במסעדה שלנו', ar: 'في مطعمنا', en: 'In Our Restaurant' }, 
      img: '/images/events/restaurantevent.jpg' 
    },
    { 
      title: { he: 'אצלכם בבית', ar: 'في بيوتكم', en: 'At Your Home' }, 
      img: '/images/events/homeevent.jpg' 
    },
    { 
      title: { he: 'במלון', ar: 'في الفندق', en: 'At Hotels' }, 
      img: '/images/events/hotelevent.jpg' 
    },
    { 
      title: { he: 'באולם אירועים', ar: 'في قاعات الأفراح', en: 'In Event Halls' }, 
      img: '/images/events/hallevent.jpg' 
    },
    { 
      title: { he: 'ימי הולדת', ar: 'أعياد ميلاد', en: 'Birthday Parties' }, 
      img: '/images/events/birthdayparty.jpg' 
    },
    { 
      title: { he: 'אירועים עסקיים', ar: 'مناسبات ואعمال', en: 'Corporate Events' }, 
      img: '/images/events/corporateevent.jpg' 
    },
  ];

  const phones = [
    { label: '04-9930842', raw: '049930842' },
    { label: '04-9536642', raw: '049536642' },
    { label: '050-564-3643', raw: '0505643643' },
  ];

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-[#D4AF37] tracking-wider drop-shadow-md">
            {lang === 'ar' ? 'المناسبات والحفلات' : lang === 'en' ? 'Events & Catering' : 'אירועים וכנסים'}
          </h1>
          <p className="text-gray-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            {lang === 'ar' 
              ? 'نقدم لكم أفضل خدمات الضيافة والإطعام لجميع المناسبات الخاصة والعامة' 
              : lang === 'en'
              ? 'Premier catering and hospitality services tailored for every celebration.'
              : 'מגוון שירותי קייטרינג ואירוח לכל חגיגה, פרטית או עסקית'}
          </p>
          <div className="w-16 sm:w-24 h-1 bg-[#8B0000] mx-auto rounded-full mt-2"></div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {eventTypes.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-xl transition-all duration-300 transform sm:hover:-translate-y-2 group flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-video bg-black/40 overflow-hidden shrink-0">
                <img 
                  src={item.img} 
                  alt={item.title[lang] || item.title.he} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { 
                    e.target.src = '/images/logo.png'; 
                    e.target.className = 'w-full h-full object-contain p-4 sm:p-8 opacity-80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-3 sm:p-6 text-center flex-grow flex items-center justify-center">
                <h3 className="font-bold sm:font-black text-sm sm:text-xl md:text-2xl text-[#D4AF37] group-hover:text-white transition-colors line-clamp-2">
                  {item.title[lang] || item.title.he}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call Section with Stacked Phones */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/30 text-white p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl text-center space-y-4 sm:space-y-6 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-[#D4AF37]">
              {lang === 'ar' ? 'هل ترغب بالاحتفال معنا؟' : lang === 'en' ? 'Want to celebrate with us?' : 'רוצים לחגוג איתנו?'}
            </h2>
            <p className="text-gray-300 text-xs sm:text-base md:text-lg max-w-xl mx-auto px-2">
              {lang === 'ar' 
                ? 'تواصلوا معنا لطلب إمكانية حجز وإعداد قائمة طعام متميزة لمناسبتكم' 
                : lang === 'en'
                ? 'Get in touch with us to coordinate a custom menu for your event.'
                : 'צרו איתנו קשר לתיאום תפריט ייחודי ומותאם אישית לאירוע שלכם'}
            </p>

            {/* Vertical Stacked Phone Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:pt-4 max-w-xs sm:max-w-sm mx-auto">
              {phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.raw}`}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#242424] hover:bg-[#8B0000] text-white font-bold text-base sm:text-lg py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl border border-[#D4AF37]/30 hover:border-transparent shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 fill-[#D4AF37] shrink-0" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="tracking-wide" dir="ltr">{phone.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}