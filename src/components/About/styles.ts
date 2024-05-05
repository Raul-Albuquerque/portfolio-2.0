import styled from 'styled-components'

export const SectionAbout = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const AboutP = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-gray);
  margin-bottom: 20px;
`

export const SkillsAbout = styled.article`
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const SkillsImage = styled.img``
