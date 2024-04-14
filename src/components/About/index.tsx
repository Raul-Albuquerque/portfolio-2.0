'use client'

import { useContext } from 'react'

import { LanguageContext } from '../../app/providers'
import { Main } from '../Main'
import Image from 'next/image'

import * as S from './styles'

export const About = () => {
  const { isEn } = useContext(LanguageContext)

  return (
    <>
      {isEn ? (
        <Main type="" title="ABOUT">
          <S.SectionAbout>
            <S.TextAbout>
              <S.AboutP>
                Software engineer in progress, with experience in Front-End and
                growing proficiency in Back-End development. Specialized in
                technologies such as HTML, CSS, JavaScript, TypeScript, and
                Python, with a focus on frameworks like Django, Next.JS, Flask,
                and React.JS. I demonstrate my ability in diverse projects,
                ranging from institutional websites to complex web applications.
              </S.AboutP>
              <S.AboutP>
                Proficient in SQL and NoSQL databases like PostgreSQL, MySQL and
                MongoDB, with experience in Docker to ensure portability and
                efficiency. I am highly committed to continuous learning and
                making significant contributions to teams, offering creativity,
                problem-solving skills, and code quality.
              </S.AboutP>
            </S.TextAbout>
            <S.SkillsAbout>
              <S.SkillsAbout>
                <S.SkillsImage
                  src="https://skillicons.dev/icons?i=html,css,bootstrap,sass,js,ts,py,react,nextjs,styledcomponents,tailwind,nodejs,django,flask,postgres,mysql,mongodb,docker,git,figma,&perline=4"
                  alt="html,css,bootstrap,sass,js,ts,py,react,nextjs,styledcomponents,tailwind,nodejs,django,flask,postgres,mysql,mongodb,docker,git,figma"
                />
              </S.SkillsAbout>
            </S.SkillsAbout>
          </S.SectionAbout>
        </Main>
      ) : (
        <Main type="" title="SOBRE">
          <S.SectionAbout>
            <S.TextAbout>
              <S.AboutP>
                Engenheiro de Software em formação, com experiência em Front-End
                e crescente habilidade em Back-End. Especializado em tecnologias
                como HTML, CSS, JavaScript, TypeScript e Python, com foco em
                frameworks como Django, Next.JS, Flask e React.JS. Demonstro
                minha capacidade em projetos diversos, de sites institucionais a
                aplicações web complexas.
              </S.AboutP>
              <S.AboutP>
                Proficiente em bancos de dados SQL e NoSQL, como PostgreSQL,
                MySQL e MongoDB, e vivência em Docker para garantir
                portabilidade e eficiência. Sou bastante comprometido com a
                aprendizagem contínua e contribuição significativa para equipes,
                oferecendo criatividade, resolução de problemas e qualidade de
                código.
              </S.AboutP>
            </S.TextAbout>
            <S.SkillsAbout>
              <S.SkillsAbout>
                <S.SkillsImage
                  src="https://skillicons.dev/icons?i=html,css,bootstrap,sass,js,ts,py,react,nextjs,styledcomponents,tailwind,nodejs,django,flask,postgres,mysql,mongodb,docker,git,figma,&perline=4"
                  alt="html,css,bootstrap,sass,js,ts,py,react,nextjs,styledcomponents,tailwind,nodejs,django,flask,postgres,mysql,mongodb,docker,git,figma"
                />
              </S.SkillsAbout>
            </S.SkillsAbout>
          </S.SectionAbout>
        </Main>
      )}
    </>
  )
}
