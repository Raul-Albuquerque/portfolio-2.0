'use client'

import { Button } from '../Buttons'
import { useLocale, useTranslations } from 'next-intl'
import { Dev } from '@/models/developer'

import * as S from './styles'

export type Props = {
  type?: 'home' | ''
  title?: string
  children?: object
}

export const Main = ({ type, title, children }: Props) => {
  const t = useTranslations('Index')
  const localActive = useLocale()

  return (
    <S.MainContainer>
      {type === 'home' ? (
        <S.HomeSection>
          <S.WelcomeContainer>
            <S.Name>{Dev.full_name}</S.Name>
            <S.StackContainer>
              {localActive === 'en' ? (
                <S.Stack>{Dev.stack_en}</S.Stack>
              ) : (
                <S.Stack>{Dev.stack_pt}</S.Stack>
              )}
              <S.BtnContainer>
                <Button url={Dev.whatsapp_url} type="primary">
                  {t('getInTouch')}
                </Button>
                <Button
                  url={localActive === 'en' ? Dev.resume_url : Dev.cv_url}
                  type="secondary"
                >
                  {t('resume')}
                </Button>
              </S.BtnContainer>
            </S.StackContainer>
          </S.WelcomeContainer>
          <S.ImageContainer>
            <S.ProfileImage
              src={Dev.profile_picture}
              width={380}
              height={420}
              alt={`Picture of ${Dev.full_name}`}
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
