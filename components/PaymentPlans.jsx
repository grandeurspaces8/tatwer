const CARDS = [
  { num: '10', sup: '%', label: 'Down Payment',      desc: 'Start your journey with only 10% of the unit value upfront',             featured: false },
  { num: '9',  sup: '',  label: 'Years Installment', desc: 'Spread payments over up to 9 years with easy monthly installments',      featured: true  },
  { num: '0',  sup: '%', label: 'Hidden Fees',       desc: 'Transparent pricing with no hidden fees on selected units',               featured: false },
]

export default function PaymentPlans() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#003580] to-[#00214F] relative overflow-hidden" id="payment">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.04] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <span className="inline-block bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Flexible Payment Plans
        </span>
        <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-bold text-white mb-4">
          Own Your Dream Home <span className="text-[#7DC4FF]">Today</span>
        </h2>
        <p className="text-base text-white/70 max-w-xl mb-12">
          Mountain View offers Egypt&apos;s most flexible payment plans — start with just 10% down
          and pay the rest over up to 9 years.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CARDS.map(c => (
            <div key={c.label}
              className={`rounded-2xl p-8 text-center transition-all hover:-translate-y-1 ${c.featured ? 'bg-white' : 'bg-white/10 border border-white/20 hover:bg-white/15'}`}>
              <div className={`text-5xl font-black leading-none ${c.featured ? 'text-[#003580]' : 'text-white'}`}>
                {c.num}{c.sup && <sup className="text-2xl">{c.sup}</sup>}
              </div>
              <div className={`text-sm font-bold uppercase tracking-wide mt-3 ${c.featured ? 'text-gray-600' : 'text-white/85'}`}>
                {c.label}
              </div>
              <div className={`text-sm mt-2 leading-relaxed ${c.featured ? 'text-gray-400' : 'text-white/55'}`}>
                {c.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:+201008900076"
            className="bg-white text-[#003580] px-8 py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#EBF4FF] transition-all hover:-translate-y-0.5 shadow-lg">
            📞 Get Pricing Details
          </a>
          <a href="#lead-form"
            className="border-2 border-white/40 text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] hover:border-white hover:bg-white/10 transition-all">
            Request Callback
          </a>
        </div>
      </div>
    </section>
  )
}
