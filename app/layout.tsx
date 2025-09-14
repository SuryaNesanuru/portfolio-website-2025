import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Surya Nesanuru - Frontend Developer & 3D Web Enthusiast',
  description: 'Portfolio of Surya Nesanuru - Frontend Developer with 4+ years of experience in React, Next.js, TypeScript, and cutting-edge 3D web technologies.',
  keywords: 'Frontend Developer, React, Next.js, TypeScript, 3D Web, WebGL, Three.js, Portfolio',
  authors: [{ name: 'Surya Nesanuru' }],
  creator: 'Surya Nesanuru',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suryanesanuru.dev',
    title: 'Surya Nesanuru - Frontend Developer & 3D Web Enthusiast',
    description: 'Portfolio of Surya Nesanuru - Frontend Developer with 4+ years of experience in React, Next.js, TypeScript, and cutting-edge 3D web technologies.',
    siteName: 'Surya Nesanuru Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Surya Nesanuru Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surya Nesanuru - Frontend Developer & 3D Web Enthusiast',
    description: 'Portfolio of Surya Nesanuru - Frontend Developer with 4+ years of experience in React, Next.js, TypeScript, and cutting-edge 3D web technologies.',
    images: ['/og-image.jpg']
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
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}