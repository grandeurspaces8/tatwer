import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, phone, interest } = await req.json()

    if (!name || !phone) {
      return Response.json({ error: 'الاسم ورقم الهاتف مطلوبان' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Tatweer Misr Leads" <${process.env.SMTP_USER}>`,
      to: 'leads@grandeur-spaces.com',
      subject: `عميل جديد: ${name} – تطوير مصر`,
      html: `
        <div style="font-family:Cairo,sans-serif;direction:rtl;max-width:520px;margin:0 auto;background:#f8f8f8;padding:32px;border-radius:12px;">
          <div style="background:#FF4713;padding:20px 24px;border-radius:8px;margin-bottom:24px;">
            <h2 style="color:white;margin:0;font-size:20px;">🏠 عميل جديد – تطوير مصر</h2>
          </div>
          <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;">
            <tr style="background:#f8f8f8;">
              <td style="padding:14px 16px;font-weight:600;color:#555;width:150px;">الاسم الكامل</td>
              <td style="padding:14px 16px;color:#1D1D1B;font-weight:700;">${name}</td>
            </tr>
            <tr>
              <td style="padding:14px 16px;font-weight:600;color:#555;">رقم الهاتف</td>
              <td style="padding:14px 16px;color:#FF4713;font-weight:700;font-size:17px;">${phone}</td>
            </tr>
            <tr style="background:#f8f8f8;">
              <td style="padding:14px 16px;font-weight:600;color:#555;">المشروع المهتم به</td>
              <td style="padding:14px 16px;color:#1D1D1B;">${interest || 'غير محدد'}</td>
            </tr>
            <tr>
              <td style="padding:14px 16px;font-weight:600;color:#555;">وقت الإرسال</td>
              <td style="padding:14px 16px;color:#888;">${new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' })}</td>
            </tr>
          </table>
          <div style="margin-top:28px;text-align:center;">
            <a href="tel:${phone}" style="background:#FF4713;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;">
              📞 اتصل بـ ${name} الآن
            </a>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'فشل الإرسال' }, { status: 500 })
  }
}
