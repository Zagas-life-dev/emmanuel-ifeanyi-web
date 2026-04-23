import type { Metadata } from 'next'
import { Bebas_Neue, IBM_Plex_Mono, Jost } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const jost = Jost({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

const siteUrl = 'https://emmanueli.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Emmanuel Ifeanyi — Full-Stack Web Developer, Abuja',
    template: '%s | Emmanuel Ifeanyi',
  },
  description:
    '4+ years building full-stack web apps, games, and AI tools. Founder of Katalystiq web agency. Open to freelance, commissions, and full-time roles.',
  keywords: [
    'Full-Stack Developer',
    'Web Developer Abuja',
    'Next.js Developer Nigeria',
    'React Developer',
    'Katalystiq',
    'Emmanuel Ifeanyi',
    'Freelance Web Developer',
    'Game Developer',
    'AI Integration',
  ],
  authors: [{ name: 'Emmanuel Ifeanyi', url: siteUrl }],
  creator: 'Emmanuel Ifeanyi',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteUrl,
    siteName: 'Emmanuel Ifeanyi Portfolio',
    title: 'Emmanuel Ifeanyi — Full-Stack Web Developer',
    description:
      '4+ years building digital products — from game engines to full-stack web apps. Founder of Katalystiq.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Ifeanyi — Full-Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Ifeanyi — Full-Stack Web Developer',
    description:
      '4+ years building digital products — from game engines to full-stack web apps.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${ibmPlexMono.variable} ${jost.variable}`}
    >
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
