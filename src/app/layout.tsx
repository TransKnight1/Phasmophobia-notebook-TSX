import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phasmophobia Notebook',
  description: 'Phasmophobia Notebook recreated with Next.js',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-800 text-zinc-50'>{children}</body>
    </html>
  )
}
