import type { Metadata } from 'next'

import './globals.css'
import { coolvetica } from '@/assets/fonts'

export const metadata: Metadata = {
  title: 'Raul Albuquerque - Full Stack Developer',
  description: 'Full Stack Developer',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={coolvetica.className}>
        <div className="bg-overlayer">{children}</div>
      </body>
    </html>
  )
}
