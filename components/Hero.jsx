import LeadForm from './LeadForm'

const STATS = [
  { num: '23+', lbl: 'Projects' },
  { num: '20+', lbl: 'Years' },
  { num: '67B',  lbl: 'EGP Invested' },
  { num: '5★',   lbl: 'Quality' },
]

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#003580] via-[#00214F] to-[#001A3E] relative flex items-center overflow-hidden pt-[70px]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-[0.18]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80')" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center w-full">

        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-4 py-1.5 text-[#A8C8F0] text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
            Egypt&apos;s #1 Luxury Real Estate Developer
          </div>

          <h1 className="font-serif text-[clamp(36px,4.5vw,58px)] font-bold text-white leading-[1.15] mb-5">
            Live Beyond <span className="text-[#7DC4FF]">Expectations</span><br />with Mountain View
          </h1>

          <p className="text-[17px] text-white/75 leading-relaxed mb-9 max-w-xl">
            Discover world-class residential compounds across New Cairo, 6th of October,
            the North Coast, and Ain Sokhna — where luxury meets lifestyle.
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
              className="bg-white text-[#003580] px-7 py-3.5 rounded-xl text-[15px] font-bold hover:bg-[#EBF4FF] transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2">
              📞 Call Us Now
            </a>
            <a href="#projects"
              className="border-2 border-white/40 text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:border-white hover:bg-white/10 transition-all inline-flex items-center gap-2">
              Explore Projects ↓
            </a>
          </div>
        </div>

        {/* Lead Form Card */}
        <div id="lead-form" className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-7">
            <h2 className="text-xl font-extrabold text-[#003580] mb-1">Get a Free Consultation</h2>
            <p className="text-sm text-gray-400">Our experts will reach out within minutes</p>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
