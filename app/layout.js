import './globals.css'

export const metadata = {
  title: 'Mountain View Egypt | Luxury Compounds – New Cairo, October, North Coast',
  description: "Mountain View – Egypt's #1 real estate developer. Luxury compounds in New Cairo, 6 October, North Coast & Ain Sokhna. Easy 10% down payment.",
  keywords: 'Mountain View Egypt, iCity, luxury compounds, New Cairo, real estate Egypt',
  robots: 'index, follow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Mountain View Egypt',
              description: "Egypt's top luxury real estate developer with 23+ compounds.",
              telephone: '+201008900076',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
