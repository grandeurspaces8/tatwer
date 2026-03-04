'use client'
import { useState } from 'react'

const PROJECTS = [
  'IL Monte Galala – العين السخنة',
  'Fouka Bay – الساحل الشمالي',
  'D-Bay – الساحل الشمالي',
  'Bloomfields – مستقبل سيتي',
  'Nurai – أبوظبي',
  'غير محدد / أريد الاستفسار',
]

export default function LeadForm() {
  const [form, setForm]     = useState({ name: '', phone: '', interest: '' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert('من فضلك أدخل الاسم ورقم الهاتف')
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
      <h3 className="text-xl font-bold text-[#1D1D1B] mb-2">شكراً لك!</h3>
      <p className="text-gray-500 text-sm mb-5">سيتواصل معك فريق المبيعات في أقرب وقت.</p>
      <a href="tel:+201008900076"
        className="inline-flex items-center gap-2 bg-[#FF4713] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors">
        📞 +20 100 890 0076
      </a>
    </div>
  )

  const inp = 'w-full px-4 py-3 border-2 border-gray-200 rounded text-sm font-medium outline-none transition-colors focus:border-[#FF4713] bg-gray-50 focus:bg-white'

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1.5">الاسم الكامل *</label>
        <input name="name" value={form.name} onChange={handle} placeholder="أدخل اسمك الكامل" className={inp} />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1.5">رقم الهاتف *</label>
        <input name="phone" value={form.phone} onChange={handle} placeholder="+20 100 000 0000" type="tel" className={inp} />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1.5">المشروع المهتم به</label>
        <select name="interest" value={form.interest} onChange={handle} className={inp}>
          <option value="">اختر المشروع...</option>
          {PROJECTS.map(p => <option key={p}>{p}</option>)}
        </select>
      </div>
      <button
        onClick={submit}
        disabled={status === 'loading'}
        className="w-full bg-[#FF4713] hover:bg-orange-600 disabled:bg-gray-400 text-white py-3.5 rounded font-bold text-base transition-all hover:-translate-y-0.5 cursor-pointer"
      >
        {status === 'loading' ? 'جارٍ الإرسال...' : 'طلب استشارة مجانية ←'}
      </button>
      {status === 'error' && (
        <p className="text-center text-red-500 text-sm">حدث خطأ. يرجى الاتصال بنا مباشرة.</p>
      )}
      <p className="text-center text-xs text-gray-400">🔒 بياناتك محمية وسرية تماماً</p>
    </div>
  )
}
