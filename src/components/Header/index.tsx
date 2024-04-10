import { CustomLink } from '../Links'
import * as s from './styles'

type Props = {
  themeSwitch: () => void
  isDarkTheme: boolean
}

export const Header = (props: Props) => {
  return (
    <s.Header>
      <CustomLink url="/" linkType="logo">
        Raul Albuquerque
      </CustomLink>
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
