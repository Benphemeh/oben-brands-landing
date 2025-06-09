import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'O’Ben Brands  Fresh Porks & Provisions',
  description: 'Farm-fresh meat and everyday essentials delivered to your doorstep',
  generator: 'Next.js',
    icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
