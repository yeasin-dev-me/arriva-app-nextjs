import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arrivasofts.com'),
  title: {
    default: 'Arriva Soft | Software Development Company | Web & App Development Agency',
    template: '%s | Arriva Soft',
  },
  description: 'Arriva Soft is a world-class software development company and AI product studio launched in 2025. We build custom software, web and mobile apps, and secure AI agents for venture-backed teams.',
  keywords: [
    'Arriva Soft',
    'software development company',
    'software development agency',
    'software builder firm',
    'custom software development',
    'web development company',
    'web application development',
    'mobile app development',
    'app development company',
    'AI agent products',
    'AI development company',
    'enterprise software solutions',
    'fintech software development',
    'healthcare software',
    'ecommerce development',
    'best software development company',
    'top software agency',
    'software development services',
    'web development services',
    'app development services',
    'software outsourcing company',
    'IT consulting services',
  ],
  authors: [{ name: 'Arriva Soft', url: 'https://www.arrivasofts.com' }],
  creator: 'Arriva Soft',
  publisher: 'Arriva Soft',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.arrivasofts.com',
    siteName: 'Arriva Soft',
    title: 'Arriva Soft | Software Development Company | Web & App Development',
    description: 'World-class software and AI product studio delivering custom web, mobile, and AI solutions for modern startups. Founded in 2025 with ISO 27001 controls.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Arriva Soft - Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arriva Soft | Software Development Company | Web & App Development',
    description: 'World-class software studio for web, mobile, and AI solutions. Custom software development, app development, and enterprise solutions for modern startups.',
    images: ['/og-image.svg'],
    creator: '@ArrivaSoft',
  },
  alternates: {
    canonical: 'https://www.arrivasofts.com',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Arriva Soft',
              url: 'https://www.arrivasofts.com',
              logo: 'https://www.arrivasofts.com/app-icon.svg',
              description: 'A world-class software builder firm and AI product studio specializing in web development, app development, and intelligent agent products.',
              foundingDate: '2025',
              areaServed: 'Worldwide',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+880-1716-973986',
                contactType: 'sales',
                areaServed: 'Global',
                email: 'contact@arrivasofts.com',
              },
              sameAs: ['https://www.linkedin.com/company/arrivasoft/'],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '200',
              },
              service: [
                {
                  '@type': 'Service',
                  name: 'Custom Software Development',
                  description: 'Building bespoke software solutions for enterprises.'
                },
                {
                  '@type': 'Service',
                  name: 'Web Development',
                  description: 'Creating high-performance, scalable websites and web applications.'
                },
                {
                  '@type': 'Service',
                  name: 'Mobile App Development',
                  description: 'Developing native and cross-platform mobile applications for iOS and Android.'
                },
                {
                  '@type': 'Service',
                  name: 'AI Agent Products',
                  description: 'Designing and developing intelligent AI agents to automate business processes.'
                }
              ]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
