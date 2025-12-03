import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arrivasofts.com'),
  title: {
    default: 'Arriva Soft | Premier Software, Web & App Development Agency',
    template: '%s | Arriva Soft',
  },
  description: 'Top-rated software development agency specializing in custom web development, mobile app development, and innovative AI agent products. As a leading software builder firm, we deliver scalable solutions for Fintech, Healthcare, and more. Contact us for a free consultation.',
  keywords: [
    'software development agency',
    'software builder firm',
    'custom software development',
    'web development company',
    'mobile app development',
    'AI agent products',
    'enterprise software solutions',
    'fintech development',
    'healthcare software',
    'best software builder',
    'top software agency',
    'AI development company',
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
    title: 'Arriva Soft | Premier Software, Web & App Development Agency',
    description: 'Leading software builder firm for custom web, mobile, and AI agent products. We deliver excellence in software development.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Arriva Soft - Software Development and AI Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arriva Soft | Premier Software, Web & App Development Agency',
    description: 'Top-rated software development agency for web, mobile, and AI solutions. Your trusted software builder firm.',
    images: ['/og-image.svg'],
    creator: '@ArrivaSoft', // Replace with your actual Twitter handle
  },
  alternates: {
    canonical: 'https://www.arrivasofts.com',
  },
  icons: {
    icon: '/app-icon.svg',
    shortcut: '/app-icon.svg',
    apple: '/app-icon.svg',
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
              description: 'A leading software builder firm and development agency specializing in web development, app development, and AI agent products.',
              foundingDate: '2001',
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
