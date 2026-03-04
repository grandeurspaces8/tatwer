const ITEMS = [
  '✅ تأسست عام 2014',
  '🏆 أفضل مطور عقاري في مصر',
  '🏠 أكثر من 40,000 وحدة سكنية',
  '🌊 مشاريع على البحر الأحمر والساحل الشمالي',
  '⭐ معايير جودة دولية',
]

export default function TrustBar() {
  return (
    <div className="bg-[#FF4713] py-3 px-6">
      <div className="max-w-6xl mx-auto flex justify-around flex-wrap gap-1">
        {ITEMS.map(item => (
          <span key={item} className="text-white/90 text-sm font-semibold px-4 py-2">{item}</span>
        ))}
      </div>
    </div>
  )
}
