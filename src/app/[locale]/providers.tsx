'use client'
import { ReactNode, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { coolvetica } from '@/assets/fonts'

import darkTheme from '@/themes/dark'
import lightTheme from '@/themes/light'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  function switchTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <body className={coolvetica.className}>
        <BgOverlay>
          <Header themeSwitch={switchTheme} isDarkTheme={isDarkTheme} />
          {children}
          <Footer />
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
