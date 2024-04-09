import type { Metadata } from 'next'

import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Raul Albuquerque - Full Stack Developer',
  description: 'Full Stack Developer',
  icons: {
    icon: 'static/images/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <Providers>{children}</Providers>
    </html>
  )
}
