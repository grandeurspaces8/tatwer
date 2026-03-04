'use client'
import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#amenities',label: 'Amenities' },
  { href: '#payment',  label: 'Payment Plans' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-100 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#003580] rounded-lg flex items-center justify-center text-white font-bold text-lg font-serif">MV</div>
          <div>
            <span className="block text-base font-extrabold text-[#003580] leading-tight">Mountain View</span>
            <span className="block text-[11px] text-gray-400 tracking-widest uppercase">Real Estate Egypt</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-gray-600 hover:text-[#0057B7] transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3 items-center">
          <a href="tel:+201008900076" className="border-2 border-[#003580] text-[#003580] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#003580] hover:text-white transition-all">
            📞 Call Now
          </a>
          <a href="#lead-form" className="bg-[#003580] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#0057B7] transition-colors">
            Free Consultation
          </a>
        </div>

        {/* Mobile Burger */}
        <button className="md:hidden text-[#003580]" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path d="M6 18L18 6M6 6l12 12"/>
              : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-2">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700 py-2 border-b border-gray-50">
              {l.label}
            </a>
          ))}
          <a href="tel:+201008900076" className="block text-center bg-[#003580] text-white py-3 rounded-lg font-bold mt-3">
            📞 +20 100 890 0076
          </a>
        </div>
      )}
    </nav>
  )
}
