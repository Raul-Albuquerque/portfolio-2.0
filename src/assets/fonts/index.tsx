import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const coolvetica = localFont({
  src: [
    {
      path: './coolvetica.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
})
