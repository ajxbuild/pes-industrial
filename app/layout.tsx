import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'PES - We handle Everything: Electrical, Electronics and Engineering',
  description: 'PES Industrial - Delivering cutting-edge solutions that redefine power, automation, and seamless communication. Electrical, Electronics and Engineering.',
  keywords: 'electrical, electronics, engineering, switchboard, automation, PES Industrial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
