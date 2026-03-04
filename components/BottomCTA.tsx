export default function BottomCTA() {
  return (
    <section className="py-20 px-6 bg-[#FF4713] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80')] bg-center bg-cover opacity-10" />
      <div className="relative z-10">
        <h2 className="text-[clamp(28px,3vw,44px)] font-black text-white mb-4">
          منزل أحلامك على بُعد مكالمة واحدة
        </h2>
        <p className="text-lg text-white/85 mb-10">
          تحدث مع متخصصينا اليوم — بدون ضغط، فقط استشارة مهنية مجانية.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:+201008900076"
            className="bg-white text-[#FF4713] px-10 py-4 rounded font-black text-base hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg">
            📞 +20 100 890 0076
          </a>
          <a href="https://wa.me/201008900076" target="_blank" rel="noreferrer"
            className="border-2 border-white/60 text-white px-10 py-4 rounded font-bold text-base hover:border-white hover:bg-white/10 transition-all">
            💬 واتساب
          </a>
        </div>
      </div>
    </section>
  )
}
