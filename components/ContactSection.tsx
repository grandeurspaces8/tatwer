import LeadForm from './LeadForm'

const CONTACTS = [
  { icon: '📞', title: 'اتصل الآن',      href: 'tel:+201008900076',               label: '+20 100 890 0076',           external: false },
  { icon: '💬', title: 'واتساب',          href: 'https://wa.me/201008900076',      label: 'تحدث على واتساب',            external: true  },
  { icon: '📧', title: 'البريد الإلكتروني', href: 'mailto:leads@grandeur-spaces.com', label: 'leads@grandeur-spaces.com', external: false },
]

export default function ContactSection() {
  return (
    <section className="py-24 px-6 bg-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-orange-50 text-[#FF4713] px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest mb-4 border border-orange-200">
          تواصل معنا
        </span>
        <h2 className="text-[clamp(28px,3vw,42px)] font-black text-[#1D1D1B] mb-4">
          هل أنت <span className="text-[#FF4713]">مستعد؟</span>
        </h2>
        <p className="text-base text-gray-500 mb-12">
          فريق المبيعات لدينا متاح 7 أيام في الأسبوع للإجابة على جميع استفساراتك.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {CONTACTS.map(c => (
            <div key={c.title} className="bg-gray-50 border-2 border-gray-100 rounded-lg p-7 hover:border-[#FF4713] hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-orange-50 border-2 border-orange-100 rounded flex items-center justify-center text-2xl mx-auto mb-4">{c.icon}</div>
              <h4 className="text-sm font-black text-[#1D1D1B] mb-2">{c.title}</h4>
              <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noreferrer' : undefined}
                className="text-sm font-bold text-[#FF4713] hover:text-orange-700 transition-colors break-all">
                {c.label}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-10 shadow-lg border border-gray-100 text-right max-w-lg mx-auto">
          <h3 className="text-xl font-black text-[#1D1D1B] text-center mb-1">اطلب معاودة الاتصال</h3>
          <p className="text-sm text-gray-400 text-center mb-7">أدخل بياناتك وسنتصل بك خلال ساعة.</p>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
