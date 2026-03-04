import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'Tatweer Misr | مشاريع سكنية فاخرة في مصر',
  description: 'تطوير مصر – شركة رائدة في التطوير العقاري في مصر. مشاريع سكنية فاخرة في القاهرة، الساحل الشمالي، وسيناء. تواصل معنا اليوم.',
  keywords: 'تطوير مصر, مشاريع سكنية, عقارات مصر, IL Monte Galala, Fouka Bay, D-Bay',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Tatweer Misr',
              description: 'شركة تطوير مصر للتطوير العقاري',
              telephone: '+201008900076',
            }),
          }}
        />
      </head>
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
