'use client'
import { useState } from 'react'

const PROJECTS = [
  'iCity New Cairo','iCity 6th October','Aliva – Mostakbal City',
  'Hyde Park Compound','Kings Way – 6 October',
  'Mountain View North Coast','Mountain View Ain Sokhna','Other / Not Sure',
]

export default function LeadForm() {
  const [form, setForm]     = useState({ name: '', phone: '', interest: '' })
  const [status, setStatus] = useState('idle')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert('Please enter your name and phone number.')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div className="text-center py-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
      <h3 className="text-xl font-bold text-[#003580] mb-2">Thank You!</h3>
      <p className="text-gray-500 text-sm mb-5">Our sales team will contact you shortly.</p>
      <a href="tel:+201008900076" className="inline-flex items-center gap-2 bg-[#003580] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0057B7] transition-colors">
        📞 +20 100 890 0076
      </a>
    </div>
  )

  const inp = 'w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm font-medium outline-none transition-colors focus:border-[#0057B7] bg-gray-50 focus:bg-white'

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1.5">Full Name *</label>
        <input name="name" value={form.name} onChange={handle} placeholder="Enter your full name" className={inp} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1.5">Phone Number *</label>
        <input name="phone" value={form.phone} onChange={handle} placeholder="+20 100 000 0000" type="tel" className={inp} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1.5">Project Interest</label>
        <select name="interest" value={form.interest} onChange={handle} className={inp}>
          <option value="">Select a project...</option>
          {PROJECTS.map(p => <option key={p}>{p}</option>)}
        </select>
      </div>
      <button
        onClick={submit}
        disabled={status === 'loading'}
        className="w-full bg-[#003580] hover:bg-[#0057B7] disabled:bg-gray-400 text-white py-3.5 rounded-lg font-bold text-base transition-all hover:-translate-y-0.5 cursor-pointer"
      >
        {status === 'loading' ? 'Sending...' : 'Request Free Consultation →'}
      </button>
      {status === 'error' && (
        <p className="text-center text-red-500 text-sm">Something went wrong. Please call us directly.</p>
      )}
      <p className="text-center text-xs text-gray-400">🔒 Your data is 100% private and secure.</p>
    </div>
  )
}
