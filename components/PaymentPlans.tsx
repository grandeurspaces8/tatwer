const CARDS = [
  { num: '10', sup: '%', label: 'مقدم الحجز',     desc: 'ابدأ رحلتك مع 10% فقط من قيمة الوحدة',       featured: false },
  { num: '8',  sup: '',  label: 'سنوات تقسيط',    desc: 'سدد المبلغ المتبقي على 8 سنوات بأقساط مريحة', featured: true  },
  { num: '0',  sup: '%', label: 'فوائد مخفية',    desc: 'أسعار شفافة بدون أي رسوم أو فوائد مخفية',    featured: false },
]

export default function PaymentPlans() {
  return (
    <section className="py-24 px-6 bg-[#1D1D1B] relative overflow-hidden" id="payment">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF4713]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF4713]/5 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest mb-4">
          أنظمة السداد
        </span>
        <h2 className="text-[clamp(28px,3vw,42px)] font-black text-white mb-4">
          امتلك وحدتك <span className="text-[#FF4713]">بسهولة</span>
        </h2>
        <p className="text-base text-white/60 max-w-xl mb-12">
          تطوير مصر تقدم أفضل أنظمة السداد في السوق المصري — مقدم 10% وتقسيط يصل لـ 8 سنوات.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CARDS.map(c => (
            <div key={c.label}
              className={`rounded-lg p-8 text-center transition-all hover:-translate-y-1 ${c.featured ? 'bg-[#FF4713]' : 'bg-white/5 border border-white/15 hover:bg-white/10'}`}>
              <div className={`text-5xl font-black leading-none ${c.featured ? 'text-white' : 'text-white'}`}>
                {c.num}{c.sup && <sup className="text-2xl">{c.sup}</sup>}
              </div>
              <div className={`text-sm font-black uppercase tracking-wide mt-3 ${c.featured ? 'text-white' : 'text-white/80'}`}>
                {c.label}
              </div>
              <div className={`text-sm mt-2 leading-relaxed ${c.featured ? 'text-white/85' : 'text-white/50'}`}>
                {c.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:+201008900076"
            className="bg-[#FF4713] text-white px-8 py-3.5 rounded font-bold text-[15px] hover:bg-orange-600 transition-all hover:-translate-y-0.5 shadow-lg">
            📞 استفسر عن الأسعار
          </a>
          <a href="#lead-form"
            className="border-2 border-white/30 text-white px-8 py-3.5 rounded font-semibold text-[15px] hover:border-white hover:bg-white/10 transition-all">
            طلب معاودة الاتصال
          </a>
        </div>
      </div>
    </section>
  )
}
