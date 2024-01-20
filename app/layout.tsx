import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import './map.min.css'

import 'swiper/css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FDRCSI-DRR',
  description: 'Amicross',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
