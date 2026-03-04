const REVIEWS = [
  {
    initials: 'أم', name: 'أحمد محمد', role: 'مالك وحدة في IL Monte Galala',
    text: 'تجربة استثنائية من أول يوم. الإطلالة على البحر والجبل في نفس الوقت شيء لا يُوصف. أفضل قرار استثماري اتخذته في حياتي.',
  },
  {
    initials: 'سر', name: 'سارة رشاد', role: 'مالكة شاليه في Fouka Bay',
    text: 'الشاطئ الخاص والخدمات الفندقية جعلت منزلنا وجهة صيفية لا بديل عنها. فريق تطوير مصر محترف جداً ومواعيد التسليم دقيقة.',
  },
  {
    initials: 'كح', name: 'خالد حسن', role: 'مستثمر في Bloomfields',
    text: 'Bloomfields هو مستقبل السكن الذكي في مصر. المشروع يجمع بين التعليم والترفيه والسكن في منظومة متكاملة. ممتاز.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-50 text-[#FF4713] px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest mb-4 border border-orange-200">
            آراء العملاء
          </span>
          <h2 className="text-[clamp(28px,3vw,42px)] font-black text-[#1D1D1B]">
            آلاف العائلات <span className="text-[#FF4713]">وثقت بنا</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(r => (
            <div key={r.name} className="bg-white border-2 border-gray-100 rounded-lg p-7 hover:border-[#FF4713] transition-colors">
              <div className="text-[#FF4713] text-base mb-4">★★★★★</div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-orange-50 border-2 border-[#FF4713] flex items-center justify-center text-[#FF4713] font-black text-sm">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-black text-[#1D1D1B]">{r.name}</div>
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
