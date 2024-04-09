'use client'

import * as s from './styles'

type Props = {
  themeSwitch: () => void
  isDarkTheme: boolean
}

export const Header = (props: Props) => {
  return (
    <s.Header>
      <s.Logo href="/">Raul Albuquerque</s.Logo>
      {props.isDarkTheme ? (
        <s.ThemeSwitcher
          onClick={props.themeSwitch}
          src="/static/images/sun.svg"
        />
      ) : (
        <s.ThemeSwitcher
          onClick={props.themeSwitch}
          src="/static/images/moon.svg"
        />
      )}
    </s.Header>
  )
}
