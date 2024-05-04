'use client'

import { useTranslations } from 'next-intl'

import { Main } from '../Main'

import * as S from './styles'

export const About = () => {
  const about = useTranslations('About')

  return (
    <Main type="" title={about('title')}>
      <S.SectionAbout>
        <S.TextAbout>
          <S.AboutP>{about('p1')}</S.AboutP>
          <S.AboutP>{about('p2')}</S.AboutP>
        </S.TextAbout>
        <S.SkillsAbout>
          <S.SkillsAbout>
            <S.SkillsImage
              src="https://skillicons.dev/icons?i=html,css,bootstrap,sass,js,ts,py,vue,react,redux,nextjs,styledcomponents,tailwind,nodejs,django,flask,postgres,mysql,mongodb,docker,git,&perline=7"
              alt="html,css,bootstrap,sass,js,ts,py,vue,react,redux,nextjs,styledcomponents,tailwind,nodejs,django,flask,postgres,mysql,mongodb,docker,git"
            />
          </S.SkillsAbout>
        </S.SkillsAbout>
      </S.SectionAbout>
    </Main>
  )
}
