import { type Metadata } from 'next'
import { Geist_Mono, Lora, Source_Sans_3, Fraunces } from 'next/font/google'
import 'katex/dist/katex.min.css'
import './globals.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['400', '500'],
})

// Display face for root-site and generative-site.
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Endogenator',
  description: 'Generative Coordination and the theoretical apparatus behind it.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${lora.variable} ${sourceSans.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}