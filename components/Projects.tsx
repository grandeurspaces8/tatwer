const PROJECTS = [
  {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    tag: 'العين السخنة – البحر الأحمر',
    name: 'IL Monte Galala',
    desc: 'مشروع جبلي فريد على البحر الأحمر بارتفاع 250 متر فوق سطح البحر. فيلات وشاليهات بإطلالات بانورامية خلابة.',
    meta: ['🏔️ 1000 فدان', '💰 تبدأ من 3.5M EGP', '📅 مقدم 10%'],
  },
  {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    tag: 'الساحل الشمالي',
    name: 'Fouka Bay',
    desc: 'منتجع ساحلي راقٍ على الساحل الشمالي بشاطئ خاص وبحيرات سباحة وأجواء متوسطية أصيلة.',
    meta: ['🏖️ 414 فدان', '💰 تبدأ من 4M EGP', '📅 تسليم 2026'],
  },
  {
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    tag: 'الساحل الشمالي',
    name: 'D-Bay',
    desc: 'وجهة ساحلية استثنائية بتصميم معماري يوناني مستوحى من جزيرة سانتوريني مع شاطئ خاص فاخر.',
    meta: ['🌊 شاطئ خاص', '💰 تبدأ من 5M EGP', '📅 وحدات محدودة'],
  },
  {
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    tag: 'مستقبل سيتي – القاهرة',
    name: 'Bloomfields',
    desc: 'مدينة متكاملة في قلب مستقبل سيتي بنظام تعليمي وتجاري وسكني متميز. أول مجتمع حضري ذكي في مصر.',
    meta: ['🏙️ 415 فدان', '💰 تبدأ من 6M EGP', '📅 10% مقدم'],
  },
  {
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    tag: 'العين السخنة',
    name: 'Seasons – العين السخنة',
    desc: 'منتجع صيفي هادئ على ضفاف البحر الأحمر بوحدات متنوعة بين الشاليهات والفيلات بأسعار مناسبة.',
    meta: ['🏖️ على البحر', '💰 أسعار تنافسية', '📅 تسليم فوري'],
  },
  {
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    tag: 'شمال سيناء',
    name: 'Nurai – سيناء',
    desc: 'أحدث مشاريع تطوير مصر في قلب سيناء — مجتمع سكني متكامل يربط بين الطبيعة والحداثة.',
    meta: ['🌴 موقع استراتيجي', '💰 أسعار تنافسية', '📅 قيد التطوير'],
  },
]

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-5">
          <div>
            <span className="inline-block bg-orange-50 text-[#FF4713] px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest mb-3 border border-orange-200">
              مشاريعنا
            </span>
            <h2 className="text-[clamp(28px,3vw,42px)] font-black text-[#1D1D1B]">
              اختر <span className="text-[#FF4713]">مشروعك</span> المثالي
            </h2>
          </div>
          <a href="tel:+201008900076" className="bg-[#FF4713] text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-orange-600 transition-colors">
            📞 استفسر عن الأسعار
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(p => (
            <div key={p.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100">
              <div className="relative">
                <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
                <div className="absolute top-3 right-3 bg-[#FF4713] text-white text-xs font-bold px-3 py-1 rounded">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-[#1D1D1B] mb-2">{p.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-gray-100">
                  {p.meta.map(m => <span key={m} className="text-xs text-gray-500 font-semibold">{m}</span>)}
                </div>
                <div className="flex gap-2">
                  <a href="tel:+201008900076" className="flex-1 text-center bg-[#FF4713] text-white py-2 rounded text-sm font-bold hover:bg-orange-600 transition-colors">
                    اتصل الآن
                  </a>
                  <a href="#lead-form" className="flex-1 text-center border-2 border-[#1D1D1B] text-[#1D1D1B] py-2 rounded text-sm font-bold hover:bg-[#1D1D1B] hover:text-white transition-all">
                    احجز موعد
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
