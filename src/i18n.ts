import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

type Locale = 'en' | 'pt-br'

// Can be imported from a shared config
const locales = ['en', 'pt-br']

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound()

  return {
    messages: (await import(`./assets/messages/${locale}.json`)).default,
  }
})
