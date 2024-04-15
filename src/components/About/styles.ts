import styled from 'styled-components'

import { roboto } from '../../assets/fonts/index'

export const SectionAbout = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TextAbout = styled.article`
  width: 48%;
  height: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
`

export const AboutP = styled.p`
  font-size: 18px;
  font-family: roboto, sans-serif;
  font-weight: 500;
  line-height: 28px;
  color: var(--color-gray);
  margin-bottom: 20px;
`

export const SkillsAbout = styled.article`
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`
export const SkillsImage = styled.img`
  width: 100%;
`

export const SkillsContainer = styled.div`
  text-align: center;
`