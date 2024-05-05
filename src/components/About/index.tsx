'use client'

import { useLocale, useTranslations } from 'next-intl'
import { roboto } from '@/assets/fonts'

import { Main } from '../Main'
import { Dev } from '@/models/developer'
import * as S from './styles'

export const About = () => {
  const about = useTranslations('About')
  const localActive = useLocale()

  return (
    <Main type="" title={about('title')}>
      <S.SectionAbout>
        <article>
          <S.AboutP className={roboto.className}>
            {localActive === 'en' ? Dev.about : Dev.sobre}
          </S.AboutP>
        </article>
        <S.SkillsAbout>
          <S.SkillsImage
            src={`https://skillicons.dev/icons?i=${Dev.skills},&perline=5`}
            alt={Dev.skills}
          />
        </S.SkillsAbout>
      </S.SectionAbout>
    </Main>
  )
}
