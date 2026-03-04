const ITEMS = [
  { icon: '🏊', title: 'بحيرات سباحة',        desc: 'بحيرات لاغون وحمامات سباحة أولمبية في كل مشروع' },
  { icon: '🌊', title: 'شواطئ خاصة',          desc: 'شواطئ رملية ناعمة بخدمات فندقية متكاملة' },
  { icon: '🏋️', title: 'رياضة ولياقة',        desc: 'جيم، مسارات جري، ملاعب متعددة الرياضات' },
  { icon: '🍽️', title: 'مطاعم ومقاهي',        desc: 'أفضل المطاعم والكافيهات العالمية داخل المشروع' },
  { icon: '🏫', title: 'مدارس دولية',          desc: 'أفضل المؤسسات التعليمية الدولية ضمن المشروع' },
  { icon: '🏥', title: 'مرافق طبية',           desc: 'عيادات وصيدليات ومراكز صحية متكاملة' },
  { icon: '🔒', title: 'أمن 24 ساعة',          desc: 'حراسة مشددة وكاميرات مراقبة وبوابات ذكية' },
  { icon: '🌿', title: 'مساحات خضراء',         desc: '80% من المساحة الكلية مخصصة للطبيعة والحدائق' },
]

export default function Amenities() {
  return (
    <section className="py-24 px-6" id="amenities">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-50 text-[#FF4713] px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest mb-4 border border-orange-200">
            المميزات
          </span>
          <h2 className="text-[clamp(28px,3vw,42px)] font-black text-[#1D1D1B] mb-4">
            كل ما تحتاجه <span className="text-[#FF4713]">في مكان واحد</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            كل مشروع من مشاريع تطوير مصر هو مجتمع متكامل يوفر أعلى مستوى من الراحة والرفاهية.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {ITEMS.map(item => (
            <div key={item.title} className="text-center p-7 rounded-lg bg-white border-2 border-gray-100 hover:border-[#FF4713] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <span className="text-4xl block mb-3">{item.icon}</span>
              <h4 className="text-sm font-black text-[#1D1D1B] mb-2">{item.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="tel:+201008900076" className="inline-flex items-center gap-2 bg-[#FF4713] text-white px-10 py-4 rounded text-base font-bold hover:bg-orange-600 transition-colors">
            📞 اتصل على +20 100 890 0076
          </a>
        </div>
      </div>
    </section>
  )
}
