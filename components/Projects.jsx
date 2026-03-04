const PROJECTS = [
  {
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    location: 'New Cairo – 5th Settlement', name: 'iCity New Cairo',
    desc: 'An integrated smart metropolis with luxury apartments, villas, and hotel apartments managed by IHG Hotels & Resorts.',
    meta: ['🏢 500 acres', '💰 From 11.7M EGP', '📅 10% Down'],
  },
  {
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    location: '6th of October City', name: 'iCity 6 October',
    desc: "West Cairo's crown jewel — 220+ acres of elite residences, green parks, lagoons, and world-class amenities.",
    meta: ['🏢 220 acres', '💰 From 10.1M EGP', '📅 10% Down'],
  },
  {
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    location: 'Mostakbal City', name: 'Aliva – Mostakbal City',
    desc: '640 acres of interconnected living — Club Park, Central Park, Evia & Lagoon Beach Park all in one mega-community.',
    meta: ['🏢 640 acres', '💰 Premium Units', '📅 Flexible Plans'],
  },
  {
    img: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=600&q=80',
    location: '6th of October City', name: 'Kings Way',
    desc: '715 acres of royal living — upscale residences defined by comfort, luxury, and tranquil surroundings near Sheikh Zayed.',
    meta: ['🏢 715 acres', '💰 Competitive Rates', '📅 Easy Payment'],
  },
  {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    location: 'Ras El Hekma – North Coast', name: 'MV North Coast Resort',
    desc: '450 acres of beachfront luxury near Fouka Road — panoramic sea views, private beaches, and a vibrant village atmosphere.',
    meta: ['🏢 450 acres', '💰 From 16.2M EGP', '📅 Easy Down'],
  },
  {
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    location: 'Ain Sokhna – Red Sea', name: 'MV Ain Sokhna',
    desc: 'Red Sea luxury resort with private beaches, Olympic pools, lush gardens, and full hospitality services year-round.',
    meta: ['🏖️ Beachfront', '💰 Competitive Rates', '📅 Flexible Plans'],
  },
]

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-5">
          <div>
            <span className="inline-block bg-[#EBF4FF] text-[#0057B7] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              Our Projects
            </span>
            <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-bold text-gray-900">
              Find Your <span className="text-[#0057B7]">Perfect</span> Home
            </h2>
          </div>
          <a href="tel:+201008900076" className="bg-[#003580] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#0057B7] transition-colors">
            📞 Ask About Pricing
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(p => (
            <div key={p.name} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-xs text-[#0057B7] font-bold uppercase tracking-wide mb-2">📍 {p.location}</p>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {p.meta.map(m => <span key={m} className="text-xs text-gray-500 font-medium">{m}</span>)}
                </div>
                <div className="flex gap-2">
                  <a href="tel:+201008900076" className="flex-1 text-center bg-[#003580] text-white py-2 rounded-lg text-sm font-bold hover:bg-[#0057B7] transition-colors">
                    Call Now
                  </a>
                  <a href="#lead-form" className="flex-1 text-center border-2 border-[#003580] text-[#003580] py-2 rounded-lg text-sm font-bold hover:bg-[#003580] hover:text-white transition-all">
                    Get Info
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
