'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { BsPlusCircleFill, BsGithub } from 'react-icons/bs'

import { Button } from '../Buttons'
import * as S from './styles'

export type Props = {
  type: 'project' | 'contact'
  title?: string
  modalHandler?: () => void
  imageUrl?: string
  description?: string
  icon?: React.ReactNode
  navigateTo?: string
  repourl?: string
  projecturl?: string
}

export const Card = ({
  type,
  title,
  modalHandler,
  imageUrl,
  description,
  icon,
  navigateTo,
  repourl,
  projecturl,
}: Props) => {
  const project = useTranslations('Projects')

  return (
    <>
      {type === 'project' ? (
        <S.CardContainer>
          <S.ProjectTitle>{title}</S.ProjectTitle>
          {imageUrl && (
            <Image src={imageUrl} width={220} height={130} alt={title} />
          )}
          {description && (
            <S.ProjectDescription>{description}</S.ProjectDescription>
          )}
          <S.ActionsContainer>
            <S.IconsContainer>
              <BsPlusCircleFill size={24} onClick={modalHandler} />
              {repourl && (
                <S.ActionIcon target="_blank" href={repourl}>
                  <BsGithub size={24} />
                </S.ActionIcon>
              )}
            </S.IconsContainer>
            <Button type="tertiary" url={projecturl}>
              {project('ctaProject')}
            </Button>
          </S.ActionsContainer>
        </S.CardContainer>
      ) : (
        <S.CardContainerContact target="_blank" href={navigateTo}>
          <S.ContactTitle>{title}</S.ContactTitle>
          {icon}
        </S.CardContainerContact>
      )}
    </>
  )
}
