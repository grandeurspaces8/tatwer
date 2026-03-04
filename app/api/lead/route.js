import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, phone, interest } = await req.json()
    if (!name || !phone) {
      return Response.json({ error: 'Name and phone required' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Mountain View Leads" <${process.env.SMTP_USER}>`,
      to: 'leads@grandeur-spaces.com',
      subject: `New Lead: ${name} – Mountain View`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:520px;margin:0 auto;background:#f7f9fc;padding:32px;border-radius:12px;">
          <div style="background:#003580;padding:20px 24px;border-radius:8px;margin-bottom:24px;">
            <h2 style="color:white;margin:0;font-size:20px;">New Lead – Mountain View Egypt</h2>
          </div>
          <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;">
            <tr style="background:#f7f9fc;">
              <td style="padding:14px 16px;font-weight:600;color:#3A4A60;width:150px;">Full Name</td>
              <td style="padding:14px 16px;color:#0A1628;font-weight:700;">${name}</td>
            </tr>
            <tr>
              <td style="padding:14px 16px;font-weight:600;color:#3A4A60;">Phone</td>
              <td style="padding:14px 16px;color:#0057B7;font-weight:700;font-size:17px;">${phone}</td>
            </tr>
            <tr style="background:#f7f9fc;">
              <td style="padding:14px 16px;font-weight:600;color:#3A4A60;">Project Interest</td>
              <td style="padding:14px 16px;color:#0A1628;">${interest || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding:14px 16px;font-weight:600;color:#3A4A60;">Time</td>
              <td style="padding:14px 16px;color:#6B7A90;">${new Date().toLocaleString('en-EG', { timeZone: 'Africa/Cairo' })}</td>
            </tr>
          </table>
          <div style="margin-top:28px;text-align:center;">
            <a href="tel:${phone}" style="background:#003580;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;">
              Call ${name} Now
            </a>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Failed to send' }, { status: 500 })
  }
}
