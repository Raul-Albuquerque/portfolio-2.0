'use client'

import { useTranslations, useLocale } from 'next-intl'
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { CustomLink } from '../Links'
import * as S from './styles'

export const Footer = () => {
  const footer = useTranslations('Footer')
  const localActive = useLocale()

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

      <S.SocialContainer>
        <li>
          <S.SocialLink href="/">
            <FaWhatsapp size={24} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink href="/">
            <FaLinkedin size={24} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink href="/">
            <FaEnvelope size={24} />
          </S.SocialLink>
        </li>
        <li>
          <S.SocialLink href="/">
            <FaGithub size={24} />
          </S.SocialLink>
        </li>
      </S.SocialContainer>
    </S.Footer>
  )
}
