'use client'
import styled, { ThemeProvider } from 'styled-components'
import { createContext, useState } from 'react'

import { coolvetica } from '@/assets/fonts'
import darkTheme from '@/themes/dark'
import lightTheme from '@/themes/light'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { register } from 'swiper/element/bundle'

export const LanguageContext = createContext({})

register()

const Providers = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [isEn, setIsEn] = useState(true)

  function switchTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  function switchLanguage() {
    setIsEn(!isEn)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <body className={coolvetica.className}>
        <BgOverlay>
          <Header
            themeSwitch={switchTheme}
            isDarkTheme={isDarkTheme}
            languageSwitch={switchLanguage}
            isEn={isEn}
          />
          <LanguageContext.Provider value={{ isEn, setIsEn }}>
            {children}
          </LanguageContext.Provider>
          <Footer isEn={isEn} />
        </BgOverlay>
      </body>
    </ThemeProvider>
  )
}

export default Providers

export const BgOverlay = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: ${(props) => props.theme.bgColor};
`
