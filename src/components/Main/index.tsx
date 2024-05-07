'use client'

import { useLocale, useTranslations } from 'next-intl'

import { Button } from '@/components/Buttons'
import { Loader } from '@/components/Loader'
import { useDeveloperData } from '@/hooks/useDeveloperData'

import * as S from './styles'

export type Props = {
  type?: 'home' | ''
  title?: string
  children?: object
}

export const Main = ({ type, title, children }: Props) => {
  const t = useTranslations('Index')
  const localActive = useLocale()
  const { isLoading, data } = useDeveloperData()

  const dev = data ? data[0] : null

  return (
    <S.MainContainer>
      {type === 'home' ? (
        <S.HomeSection>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <S.WelcomeContainer>
                <S.Name>{dev.full_name}</S.Name>
                <S.StackContainer>
                  {localActive === 'en' ? (
                    <S.Stack>{dev.stack_en}</S.Stack>
                  ) : (
                    <S.Stack>{dev.stack_pt}</S.Stack>
                  )}
                  <S.BtnContainer>
                    <Button url={dev.whatsapp_url} type="primary">
                      {t('getInTouch')}
                    </Button>
                    <Button
                      url={localActive === 'en' ? dev.resume_url : dev.cv_url}
                      type="secondary"
                    >
                      {t('resume')}
                    </Button>
                  </S.BtnContainer>
                </S.StackContainer>
              </S.WelcomeContainer>
              <S.ImageContainer>
                <S.ProfileImage
                  src={dev.profile_picture}
                  width={380}
                  height={420}
                  alt={`Picture of ${dev.full_name}`}
                />
              </S.ImageContainer>
            </>
          )}
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
