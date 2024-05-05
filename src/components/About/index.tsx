'use client'

import { useLocale, useTranslations } from 'next-intl'

import { Main } from '../Main'
import { Dev } from '@/models/developer'
import * as S from './styles'

export const About = () => {
  const about = useTranslations('About')
  const localActive = useLocale()

  return (
    <Main type="" title={about('title')}>
      <S.SectionAbout>
        <S.SkillsAbout>
          <S.SkillsImage
            src={`https://skillicons.dev/icons?i=${Dev.skills},&perline=7`}
            alt={Dev.skills}
          />
        </S.SkillsAbout>
        <S.TextAbout>
          <S.AboutP>{localActive === 'en' ? Dev.about1 : Dev.sobre1}</S.AboutP>
          <S.AboutP>{localActive === 'en' ? Dev.about2 : Dev.sobre2}</S.AboutP>
        </S.TextAbout>
      </S.SectionAbout>
    </Main>
  )
}
