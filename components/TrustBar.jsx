const ITEMS = [
  '✅ Founded in 2005',
  '🏆 Top 5 Developers in Egypt',
  '⏱️ Easy 10% Down – Up to 9 Years',
  '🤝 IHG Hotels & Huawei Partnership',
  '⭐ International Quality Standards',
]

export default function TrustBar() {
  return (
    <div className="bg-[#003580] py-3 px-6">
      <div className="max-w-6xl mx-auto flex justify-around flex-wrap gap-1">
        {ITEMS.map(item => (
          <span key={item} className="text-white/85 text-sm font-medium px-4 py-2">{item}</span>
        ))}
      </div>
    </div>
  )
}
