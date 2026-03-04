import LeadForm from './LeadForm'

const CONTACTS = [
  { icon: '📞', title: 'Call Us Now',  href: 'tel:+201008900076',                  label: '+20 100 890 0076' },
  { icon: '💬', title: 'WhatsApp',     href: 'https://wa.me/201008900076',          label: 'Chat on WhatsApp', external: true },
  { icon: '📧', title: 'Email Us',     href: 'mailto:leads@grandeur-spaces.com',    label: 'leads@grandeur-spaces.com' },
]

export default function ContactSection() {
  return (
    <section className="py-24 px-6 bg-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-[#EBF4FF] text-[#0057B7] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Contact Us
        </span>
        <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-bold text-gray-900 mb-4">
          Ready to Find <span className="text-[#0057B7]">Your Home?</span>
        </h2>
        <p className="text-base text-gray-500 mb-12">
          Our dedicated sales team is available 7 days a week to answer all your questions.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {CONTACTS.map(c => (
            <div key={c.title} className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-7 hover:border-[#0057B7] hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-[#EBF4FF] rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">{c.icon}</div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">{c.title}</h4>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                className="text-sm font-bold text-[#0057B7] hover:text-[#003580] transition-colors break-all"
              >
                {c.label}
              </a>
            </div>
          ))}
        </div>

        {/* Second Lead Form */}
        <div className="bg-gray-50 rounded-2xl p-10 shadow-lg border border-gray-100 text-left max-w-lg mx-auto">
          <h3 className="text-xl font-extrabold text-[#003580] text-center mb-1">Request a Callback</h3>
          <p className="text-sm text-gray-400 text-center mb-7">Fill in your details and we&apos;ll call you within the hour.</p>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
