'use client'

import { useContext } from 'react'

import { LanguageContext } from '../../app/providers'
import { Button } from '../Buttons'

import * as S from './styles'

export type Props = {
  type?: 'home' | ''
  title?: string
  children?: object
}

export const Main = ({ type, title, children }: Props) => {
  const { isEn } = useContext(LanguageContext)

  return (
    <S.MainContainer>
      {type === 'home' ? (
        <S.HomeSection>
          <S.WelcomeContainer>
            <S.Name>RAUL ALBUQUERQUE</S.Name>
            {isEn ? (
              <S.StackContainer>
                <S.Stack>FULL STACK DEVELOPER</S.Stack>
                <S.BtnContainer>
                  <Button url="/" type="primary">
                    GET IN TOUCH
                  </Button>
                  <Button url="/" type="secondary">
                    MY RESUME
                  </Button>
                </S.BtnContainer>
              </S.StackContainer>
            ) : (
              <S.StackContainer>
                <S.Stack>DESENVOLVEDOR FULL STACK</S.Stack>
                <S.BtnContainer>
                  <Button url="/" type="primary">
                    ENTRAR EM CONTATO
                  </Button>
                  <Button url="/" type="secondary">
                    DOWNLOAD CV
                  </Button>
                </S.BtnContainer>
              </S.StackContainer>
            )}
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
