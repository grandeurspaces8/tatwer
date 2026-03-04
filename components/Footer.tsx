const PROJECTS = ['IL Monte Galala','Fouka Bay','D-Bay','Bloomfields','Seasons','Nurai – سيناء']
const QUICK    = [['من نحن','#about'],['مشاريعنا','#projects'],['المميزات','#amenities'],['أنظمة السداد','#payment'],['تواصل معنا','#contact']]

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1B] px-6 pt-14 pb-7">
      <div className="max-w-6xl mx-auto">
        {/* Top orange line */}
        <div className="h-1 bg-[#FF4713] mb-10 w-20 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10 mb-7">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FF4713] rounded flex items-center justify-center text-white font-black">TM</div>
              <div>
                <span className="block font-black text-white">تطوير مصر</span>
                <span className="block text-xs text-white/40">Tatweer Misr</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[260px]">
              شركة رائدة في التطوير العقاري منذ 2014. نبني مجتمعات متكاملة حيث تلتقي الطبيعة بالفخامة.
            </p>
            <a href="tel:+201008900076" className="block mt-4 text-[#FF4713] font-bold text-base hover:text-orange-400 transition-colors">
              📞 +20 100 890 0076
            </a>
          </div>

          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">مشاريعنا</h4>
            <ul className="space-y-2">
              {PROJECTS.map(p => (
                <li key={p}><a href="#projects" className="text-sm text-white/50 hover:text-white transition-colors">{p}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {QUICK.map(([l,h]) => (
                <li key={l}><a href={h} className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">تواصل معنا</h4>
            <ul className="space-y-2">
              <li><a href="tel:+201008900076" className="text-sm text-white/50 hover:text-white transition-colors">+20 100 890 0076</a></li>
              <li><a href="https://wa.me/201008900076" className="text-sm text-white/50 hover:text-white transition-colors">واتساب</a></li>
              <li><a href="mailto:leads@grandeur-spaces.com" className="text-sm text-white/50 hover:text-white transition-colors">leads@grandeur-spaces.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3 text-xs text-white/30">
          <span>© 2024 تطوير مصر. جميع الحقوق محفوظة.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-white transition-colors">إخلاء المسؤولية</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
