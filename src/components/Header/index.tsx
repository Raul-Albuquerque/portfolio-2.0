import { useTransition } from 'react'
import { useRouter } from 'next/navigation'

import { useLocale } from 'next-intl'

import { CustomLink } from '@/components/Links'
import { useDeveloperData } from '@/hooks/useDeveloperData'

import * as s from './styles'

type Props = {
  themeSwitch: () => void
  isDarkTheme: boolean
}

export const Header = (props: Props) => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()
  const { isLoading, data } = useDeveloperData()
  const dev = data ? data[0] : null

  const changeLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(`/${newLocale}`)
    })
  }

  return (
    <s.Header>
      {!isLoading && (
        <CustomLink url="/" linkType="logo">
          {dev.full_name}
        </CustomLink>
      )}
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
