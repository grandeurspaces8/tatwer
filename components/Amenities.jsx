const ITEMS = [
  { icon: '🏊', title: 'Swimmable Lagoons',     desc: 'Crystal-clear lagoons and Olympic-size pools in every compound' },
  { icon: '🌳', title: 'Central Park & Greenery',desc: '80% of each compound dedicated to lush green spaces' },
  { icon: '🏋️', title: 'Sports & Fitness',       desc: 'Gyms, jogging tracks, cycling paths, and multi-sport courts' },
  { icon: '🛍️', title: 'Retail & Dining',        desc: 'International restaurants, cafes, supermarkets, and retail' },
  { icon: '🏫', title: 'Schools & Nurseries',    desc: 'Top educational institutions within walking distance' },
  { icon: '🏥', title: 'Medical Facilities',     desc: 'Clinics, pharmacies, and healthcare centers on-site' },
  { icon: '🔒', title: '24/7 Security',          desc: 'Gated community with round-the-clock smart security' },
  { icon: '💡', title: 'Smart Technology',       desc: 'Huawei smart city infrastructure and high-speed connectivity' },
]

export default function Amenities() {
  return (
    <section className="py-24 px-6" id="amenities">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EBF4FF] text-[#0057B7] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            World-Class Amenities
          </span>
          <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-bold text-gray-900 mb-4">
            Everything You Need, <span className="text-[#0057B7]">Within Your Community</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Every Mountain View compound is a self-contained city designed for every aspect of your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {ITEMS.map(item => (
            <div key={item.title} className="text-center p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-[#0057B7] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <span className="text-4xl block mb-3">{item.icon}</span>
              <h4 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="tel:+201008900076" className="inline-flex items-center gap-2 bg-[#003580] text-white px-10 py-4 rounded-xl text-base font-bold hover:bg-[#0057B7] transition-colors">
            📞 Call +20 100 890 0076
          </a>
        </div>
      </div>
    </section>
  )
}
