import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'

import Providers from './providers'

import './globals.css'

export const metadata: Metadata = {
  title: `Raul Albuquerque - Full Stack Developer`,
  description: `Full Stack Developer`,
  icons: {
    icon: 'static/images/favicon.svg',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>{children}</Providers>
      </NextIntlClientProvider>
    </html>
  )
}
