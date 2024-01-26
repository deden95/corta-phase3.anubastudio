import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Modal from "../components/Modal";
import './globals.css'
import './map.min.css'

import 'swiper/css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corta Phase-3',
  description: 'Program PERTAMA-DAS 2022-2023',
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
        <Modal />
      </body>
    </html>
  )
}
