'use client'

import { useContext } from 'react'
import { LanguageContext } from './providers'

export default function Home() {
  const { isEn } = useContext(LanguageContext)

  return <main>{isEn ? <h1>Em inglês</h1> : <p>CONTEÚDO DO SITE</p>}</main>
}
