'use client'

import { Button } from '../Buttons'
import { useTranslations } from 'next-intl'

import * as S from './styles'

export type Props = {
  type?: 'home' | ''
  title?: string
  children?: object
}

export const Main = ({ type, title, children }: Props) => {
  const t = useTranslations('Index')

  return (
    <S.MainContainer>
      {type === 'home' ? (
        <S.HomeSection>
          <S.WelcomeContainer>
            <S.Name>RAUL ALBUQUERQUE</S.Name>
            <S.StackContainer>
              <S.Stack>{t('title')}</S.Stack>
              <S.BtnContainer>
                <Button url="/" type="primary">
                  {t('getInTouch')}
                </Button>
                <Button url="/" type="secondary">
                  {t('resume')}
                </Button>
              </S.BtnContainer>
            </S.StackContainer>
          </S.WelcomeContainer>
          <S.ImageContainer>
            <S.ProfileImage
              src="/static/images/raul.svg"
              width={380}
              height={420}
              alt="Picture of the author"
            />
          </S.ImageContainer>
        </S.HomeSection>
      ) : (
        <>
          <S.PageTitle>{title}</S.PageTitle>
          {children}
        </>
      )}
    </S.MainContainer>
  )
}
