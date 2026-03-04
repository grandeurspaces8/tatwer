const FEATURES = [
  { icon: '🏆', title: 'أفضل مطور في مصر',  sub: '2023 – 2024' },
  { icon: '🌍', title: 'شراكات دولية',       sub: 'Egis, Loisium, وغيرهم' },
  { icon: '🏗️', title: '40,000+ وحدة',       sub: 'مُسلَّمة وقيد التنفيذ' },
  { icon: '📍', title: '5 مناطق رئيسية',     sub: 'القاهرة، الساحل، سيناء' },
]

export default function About() {
  return (
    <section className="py-24 px-6" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
            alt="تطوير مصر"
            className="rounded-lg object-cover w-full h-[480px]"
          />
          {/* Orange accent */}
          <div className="absolute -bottom-4 -right-4 bg-[#FF4713] text-white rounded-lg px-6 py-5 text-center shadow-xl">
            <div className="text-4xl font-black leading-none">10+</div>
            <div className="text-xs opacity-90 mt-1">مشاريع فاخرة</div>
          </div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#FF4713] rounded-r-full opacity-80" />
        </div>

        <div>
          <span className="inline-block bg-orange-50 text-[#FF4713] px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest mb-4 border border-orange-200">
            من نحن
          </span>
          <h2 className="text-[clamp(28px,3vw,42px)] font-black text-[#1D1D1B] leading-tight mb-4">
            تطوير مصر — <span className="text-[#FF4713]">رؤية</span> تتجاوز الحدود
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            منذ تأسيسها في 2014، نجحت شركة تطوير مصر في بناء مجتمعات سكنية متكاملة تجمع بين
            الفخامة والطبيعة. من الجبال والبحر إلى قلب القاهرة، كل مشروع هو تجربة حياة فريدة.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {FEATURES.map(f => (
              <div key={f.title} className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg border-r-4 border-[#FF4713]">
                <div className="w-9 h-9 bg-orange-50 rounded flex items-center justify-center text-lg flex-shrink-0">{f.icon}</div>
                <div>
                  <strong className="block text-sm font-black text-[#1D1D1B]">{f.title}</strong>
                  <span className="text-xs text-gray-400">{f.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <a href="tel:+201008900076" className="bg-[#FF4713] text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-orange-600 transition-colors">
              📞 تحدث مع المبيعات
            </a>
            <a href="#projects" className="border-2 border-[#1D1D1B] text-[#1D1D1B] px-6 py-2.5 rounded font-bold text-sm hover:bg-[#1D1D1B] hover:text-white transition-all">
              استعرض المشاريع
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
