'use client'

import { useLocale, useTranslations } from 'next-intl'

import { roboto } from '@/assets/fonts'
import { Main } from '@/components/Main'
import { Loader } from '@/components/Loader'
import { useDeveloperData } from '@/hooks/useDeveloperData'

import * as S from './styles'

export const About = () => {
  const about = useTranslations('About')
  const localActive = useLocale()
  const { isLoading, data } = useDeveloperData()
  const dev = data ? data[0] : null

  return (
    <Main type="" title={about('title')}>
      {isLoading ? (
        <Loader />
      ) : (
        <S.SectionAbout>
          <article>
            <S.AboutP className={roboto.className}>
              {localActive === 'en' ? dev.about : dev.sobre}
            </S.AboutP>
          </article>
          <S.SkillsAbout>
            <S.SkillsImage
              src={`https://skillicons.dev/icons?i=${dev.skills},&perline=5`}
              alt={dev.skills}
            />
          </S.SkillsAbout>
        </S.SectionAbout>
      )}
    </Main>
  )
}
