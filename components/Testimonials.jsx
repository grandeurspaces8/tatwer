const REVIEWS = [
  {
    initials: 'AM', name: 'Ahmed Mohamed', role: 'iCity New Cairo Resident',
    text: 'Mountain View iCity exceeded all my expectations. The amenities, construction quality, and community spirit are second to none in Egypt. Best investment I have ever made.',
  },
  {
    initials: 'SR', name: 'Sara Rashad', role: 'Kings Way Homeowner',
    text: 'The payment plan made it so easy to own a villa in Kings Way. The team was professional from day one and delivery was perfectly on time. Highly recommend Mountain View.',
  },
  {
    initials: 'KH', name: 'Khaled Hassan', role: 'North Coast Resort Owner',
    text: 'We have been living in Mountain View North Coast for two summers now. The beach, the lagoon, the restaurants — everything is perfect. It truly feels like a 5-star resort.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EBF4FF] text-[#0057B7] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Client Testimonials
          </span>
          <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-bold text-gray-900">
            Thousands of Families <span className="text-[#0057B7]">Trust Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(r => (
            <div key={r.name} className="bg-white border-2 border-gray-100 rounded-2xl p-7">
              <div className="text-yellow-400 text-base mb-4">★★★★★</div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#EBF4FF] flex items-center justify-center text-[#003580] font-bold text-sm">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
