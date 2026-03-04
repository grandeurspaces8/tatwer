export default function FloatingPhone() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="tel:+201008900076"
        className="flex items-center gap-3 bg-[#003580] hover:bg-[#0057B7] text-white px-5 py-3.5 rounded-full font-bold text-base shadow-2xl transition-all hover:-translate-y-1"
      >
        <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center phone-ring-anim">
          📞
        </span>
        <span className="hidden sm:block">+20 100 890 0076</span>
      </a>
    </div>
  )
}
