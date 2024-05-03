'use client'

import Image from 'next/image'

import { BsPlusCircleFill } from 'react-icons/bs'
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

import { Button } from '../Buttons'
import * as S from './styles'

export type Props = {
  type: 'project' | 'contact'
  title?: string
}

export const Card = ({ type, title }: Props) => {
  return (
    <>
      {type === 'project' ? (
        <S.CardContainer>
          <S.ProjectTitle>{title}</S.ProjectTitle>
          <Image
            src="/static/images/project-image.png"
            width={220}
            height={130}
            alt="projeto 1"
          />
          <S.ProjectDescription>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
            Quisque finibus semper nisi, varius
          </S.ProjectDescription>
          <S.ActionsContainer>
            <S.IconsContainer>
              <S.ActionIcon href="https://fonts.google.com/icons">
                <BsPlusCircleFill size={24} />
              </S.ActionIcon>
              <S.ActionIcon href="https://fonts.google.com/icons">
                <FaGithub size={24} />
              </S.ActionIcon>
            </S.IconsContainer>
            <Button type="tertiary" url="https://fonts.google.com/icons">
              VER PROJETO
            </Button>
          </S.ActionsContainer>
        </S.CardContainer>
      ) : (
        <S.CardContainerContact
          target="_blank"
          href="https://github.com/Raul-Albuquerque"
        >
          <S.ContactTitle>Whatsapp</S.ContactTitle>
          <FaWhatsapp size={36} />
        </S.CardContainerContact>
      )}
    </>
  )
}
