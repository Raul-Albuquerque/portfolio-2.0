import { useTransition } from 'react'
import { CustomLink } from '../Links'

import * as s from './styles'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

type Props = {
  themeSwitch: () => void
  isDarkTheme: boolean
}

export const Header = (props: Props) => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()

  const changeLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(`/${newLocale}`)
    })
  }

  return (
    <s.Header>
      <CustomLink url="/" linkType="logo">
        Raul Albuquerque
      </CustomLink>
      <s.SwitchersContainer>
        {localActive === 'en' ? (
          <s.Switcher
            src="/static/images/en.svg"
            onClick={() => changeLocale('pt-br')}
          />
        ) : (
          <s.Switcher
            src="/static/images/pt.svg"
            onClick={() => changeLocale('en')}
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
