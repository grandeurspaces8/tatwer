const FEATURES = [
  { icon: '🏆', title: 'Top 5 in Egypt',   sub: 'Ranked 2021' },
  { icon: '🌍', title: 'Global Partners',   sub: 'Huawei, IHG, CallisonRTKL' },
  { icon: '🏗️', title: '67B EGP',           sub: 'Total investments' },
  { icon: '📍', title: '4 Prime Regions',   sub: 'Cairo, Coast, Sokhna' },
]

export default function About() {
  return (
    <section className="py-24 px-6" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
            alt="Mountain View luxury compound"
            className="rounded-2xl object-cover w-full h-[480px]"
          />
          <div className="absolute -bottom-5 -right-5 bg-[#003580] text-white rounded-xl px-6 py-5 text-center shadow-xl">
            <div className="text-4xl font-black leading-none">23+</div>
            <div className="text-xs opacity-80 mt-1">Elite Projects</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="inline-block bg-[#EBF4FF] text-[#0057B7] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            About Mountain View
          </span>
          <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-bold text-gray-900 leading-tight mb-4">
            Egypt&apos;s Most <span className="text-[#0057B7]">Trusted</span> Real Estate Developer
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            Established in 2005, Mountain View is driven by innovation — creating vibrant,
            interconnected communities where residents thrive. From luxury villas to smart
            city apartments, every project is built to the highest international standards.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {FEATURES.map(f => (
              <div key={f.title} className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl border-l-4 border-[#0057B7]">
                <div className="w-9 h-9 bg-[#EBF4FF] rounded-lg flex items-center justify-center text-lg flex-shrink-0">{f.icon}</div>
                <div>
                  <strong className="block text-sm font-bold text-gray-900">{f.title}</strong>
                  <span className="text-xs text-gray-400">{f.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <a href="tel:+201008900076" className="bg-[#003580] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#0057B7] transition-colors">
              📞 Speak to Sales
            </a>
            <a href="#projects" className="border-2 border-[#003580] text-[#003580] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#003580] hover:text-white transition-all">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
