'use client'
import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { coolvetica } from '@/assets/fonts'

import darkTheme from '@/themes/dark'
import lightTheme from '@/themes/light'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const Providers = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const client = new QueryClient()

  function switchTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <body className={coolvetica.className}>
        <QueryClientProvider client={client}>
          <BgOverlay>
            <Header themeSwitch={switchTheme} isDarkTheme={isDarkTheme} />
            {children}
            <Footer />
          </BgOverlay>
        </QueryClientProvider>
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
