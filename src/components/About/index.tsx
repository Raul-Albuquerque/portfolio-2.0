'use client'

import { useEffect, useState } from 'react'

import { useLocale, useTranslations } from 'next-intl'

import { roboto } from '@/assets/fonts'

import { Main } from '../Main'
import { Loader } from '../Loader'

import api from '@/services/api'

import * as S from './styles'

export const About = () => {
  const about = useTranslations('About')
  const localActive = useLocale()
  const [Dev, setDev] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/developers')
      .then((res) => {
        setDev(res.data[0])
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Main type="" title={about('title')}>
      {Loading ? (
        <Loader />
      ) : (
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
      )}
    </Main>
  )
}
