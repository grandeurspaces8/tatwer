import LeadForm from './LeadForm'

const STATS = [
  { num: '10+', lbl: 'مشاريع' },
  { num: '20+', lbl: 'سنة خبرة' },
  { num: '40K+', lbl: 'وحدة سكنية' },
  { num: '5★',   lbl: 'جودة عالمية' },
]

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1D1D1B] via-[#2a2a28] to-[#1D1D1B] relative flex items-center overflow-hidden pt-[70px]">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80')" }}
      />
      {/* Orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF4713]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center w-full">

        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-orange-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[#FF4713] rounded-full animate-pulse" />
            الشركة الرائدة في التطوير العقاري بمصر
          </div>

          <h1 className="text-[clamp(36px,4.5vw,58px)] font-black text-white leading-[1.2] mb-5">
            اعيش تجربة <span className="text-[#FF4713]">فريدة</span><br />مع تطوير مصر
          </h1>

          <p className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-xl">
            مشاريع سكنية فاخرة على البحر الأحمر، الساحل الشمالي، وقلب القاهرة —
            حيث يلتقي الفخامة بجودة الحياة الحقيقية.
          </p>

          <div className="flex gap-8 mb-10 flex-wrap">
            {STATS.map(s => (
              <div key={s.lbl}>
                <div className="text-3xl font-black text-white leading-none">{s.num}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <a href="tel:+201008900076"
              className="bg-[#FF4713] text-white px-7 py-3.5 rounded text-[15px] font-bold hover:bg-orange-600 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2">
              📞 اتصل الآن
            </a>
            <a href="#projects"
              className="border-2 border-white/30 text-white px-7 py-3.5 rounded text-[15px] font-semibold hover:border-white hover:bg-white/10 transition-all inline-flex items-center gap-2">
              استعرض المشاريع ↓
            </a>
          </div>
        </div>

        {/* Lead Form */}
        <div id="lead-form" className="bg-white rounded-lg p-8 shadow-2xl">
          <div className="text-center mb-7">
            <div className="w-1 h-8 bg-[#FF4713] mx-auto mb-3 rounded-full" />
            <h2 className="text-xl font-black text-[#1D1D1B] mb-1">احصل على استشارة مجانية</h2>
            <p className="text-sm text-gray-400">فريقنا سيتواصل معك في أقرب وقت</p>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
