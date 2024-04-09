'use client'
import styled, { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import { coolvetica } from '@/assets/fonts'
import darkTheme from '@/themes/dark'
import lightTheme from '@/themes/light'
import { Header } from '@/components/Header'

const Providers = ({ children }) => {
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
