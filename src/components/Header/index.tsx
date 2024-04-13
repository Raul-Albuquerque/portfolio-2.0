import { CustomLink } from '../Links'
import * as s from './styles'

type Props = {
  themeSwitch: () => void
  isDarkTheme: boolean
  languageSwitch: () => void
  isEn: boolean
}

export const Header = (props: Props) => {
  return (
    <s.Header>
      <CustomLink url="/" linkType="logo">
        Raul Albuquerque
      </CustomLink>
      <s.SwitchersContainer>
        {props.isEn ? (
          <s.Switcher
            onClick={props.languageSwitch}
            src="/static/images/en.svg"
          />
        ) : (
          <s.Switcher
            onClick={props.languageSwitch}
            src="/static/images/pt.svg"
          />
        )}

        {props.isDarkTheme ? (
          <s.Switcher
            onClick={props.themeSwitch}
            src="/static/images/moon.svg"
          />
        ) : (
          <s.Switcher
            onClick={props.themeSwitch}
            src="/static/images/sun.svg"
          />
        )}
      </s.SwitchersContainer>
    </s.Header>
  )
}
