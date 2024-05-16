import type { Metadata } from 'next'
import { Inter, Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/header/Header'
import Footer from '@/components/ui/footer/Footer'

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto_mono.className} antialiased min-w-min`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
