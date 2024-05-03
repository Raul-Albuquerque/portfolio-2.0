'use client'

import { useTranslations } from 'next-intl'
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { CustomLink } from '../Links'
import * as S from './styles'

export const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <S.Footer>
      <nav>
        <S.NavContainer>
          <li>
            <CustomLink url="/" linkType="nav">
              {t('home')}
            </CustomLink>
          </li>
          <li>
            <CustomLink url="/pages/about" linkType="nav">
              {t('about')}
            </CustomLink>
          </li>
          <li>
            <CustomLink url="/pages/projects" linkType="nav">
              {t('projects')}
            </CustomLink>
          </li>
          <li>
            <CustomLink url="/pages/freelances" linkType="nav">
              {t('freelances')}
            </CustomLink>
          </li>
          <li>
            <CustomLink url="/pages/contacts" linkType="nav">
              {t('contacts')}
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
