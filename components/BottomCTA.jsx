export default function BottomCTA() {
  return (
    <section className="py-20 px-6 bg-[#003580] text-center">
      <h2 className="font-serif text-[clamp(28px,3vw,44px)] font-bold text-white mb-4">
        Your Dream Home is One Call Away
      </h2>
      <p className="text-lg text-white/70 mb-10">
        Speak with a Mountain View specialist today — no pressure, just expert guidance.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="tel:+201008900076"
          className="bg-white text-[#003580] px-10 py-4 rounded-xl font-bold text-base hover:bg-[#EBF4FF] transition-all hover:-translate-y-0.5 shadow-lg">
          📞 Call +20 100 890 0076
        </a>
        <a href="https://wa.me/201008900076" target="_blank" rel="noreferrer"
          className="border-2 border-white/40 text-white px-10 py-4 rounded-xl font-semibold text-base hover:border-white hover:bg-white/10 transition-all">
          💬 WhatsApp Us
        </a>
      </div>
    </section>
  )
}
