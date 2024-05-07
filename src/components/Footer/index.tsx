'use client'

import { useTranslations, useLocale } from 'next-intl'
import {
  BsWhatsapp,
  BsLinkedin,
  BsEnvelopeFill,
  BsGithub,
} from 'react-icons/bs'

import { CustomLink } from '@/components/Links'
import { useDeveloperData } from '@/hooks/useDeveloperData'

import * as S from './styles'

export const Footer = () => {
  const footer = useTranslations('Footer')
  const localActive = useLocale()
  const { isLoading, data } = useDeveloperData()
  const dev = data ? data[0] : null

  return (
    <S.Footer>
      <nav>
        <S.NavContainer>
          <li>
            <CustomLink url="/" linkType="nav">
              {footer('home')}
            </CustomLink>
          </li>
          <li>
            <CustomLink url={`/${localActive}/pages/about`} linkType="nav">
              {footer('about')}
            </CustomLink>
          </li>
          <li>
            <CustomLink url={`/${localActive}/pages/projects`} linkType="nav">
              {footer('projects')}
            </CustomLink>
          </li>
          <li>
            <CustomLink url={`/${localActive}/pages/freelances`} linkType="nav">
              {footer('freelances')}
            </CustomLink>
          </li>
          <li>
            <CustomLink url={`/${localActive}/pages/contacts`} linkType="nav">
              {footer('contacts')}
            </CustomLink>
          </li>
        </S.NavContainer>
      </nav>

      {!isLoading && (
        <S.SocialContainer>
          <li>
            <S.SocialLink target="_blank" href={dev.whatsapp_url}>
              <BsWhatsapp size={24} />
            </S.SocialLink>
          </li>
          <li>
            <S.SocialLink target="_blank" href={dev.linkedin_url}>
              <BsLinkedin size={24} />
            </S.SocialLink>
          </li>
          <li>
            <S.SocialLink target="_blank" href={dev.email_url}>
              <BsEnvelopeFill size={24} />
            </S.SocialLink>
          </li>
          <li>
            <S.SocialLink target="_blank" href={dev.github_url}>
              <BsGithub size={24} />
            </S.SocialLink>
          </li>
        </S.SocialContainer>
      )}
    </S.Footer>
  )
}
