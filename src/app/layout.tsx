import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from "@components/header";
import { Footer } from "@components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PRO-DEAL - Сервис безопасных сделок с гарантией доставки',
  description: 'Сервис предоставляет 100% защиту денежных средств для покупателей и продавцов при покупках товаров в интернете',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
