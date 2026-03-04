const PROJECTS = ['iCity New Cairo','iCity 6th October','Aliva – Mostakbal City','Kings Way','North Coast Resort','Ain Sokhna']
const QUICK    = [['About MV','#about'],['Amenities','#amenities'],['Payment Plans','#payment'],['Contact Us','#contact'],['Free Consultation','#lead-form']]

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] px-6 pt-14 pb-7">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10 mb-7">

          <div>
            <h3 className="text-lg font-extrabold text-white mb-3">Mountain View Egypt</h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-[260px]">
              Egypt&apos;s leading luxury real estate developer since 2005. Creating communities where people thrive.
            </p>
            <a href="tel:+201008900076" className="block mt-4 text-[#7DC4FF] font-bold text-base hover:text-white transition-colors">
              📞 +20 100 890 0076
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Our Projects</h4>
            <ul className="space-y-2">
              {PROJECTS.map(p => (
                <li key={p}><a href="#projects" className="text-sm text-white/50 hover:text-white transition-colors">{p}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK.map(([l,h]) => (
                <li key={l}><a href={h} className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="tel:+201008900076" className="text-sm text-white/50 hover:text-white transition-colors">+20 100 890 0076</a></li>
              <li><a href="https://wa.me/201008900076" target="_blank" rel="noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="mailto:leads@grandeur-spaces.com" className="text-sm text-white/50 hover:text-white transition-colors">leads@grandeur-spaces.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3 text-xs text-white/30">
          <span>© 2024 Mountain View Egypt. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
