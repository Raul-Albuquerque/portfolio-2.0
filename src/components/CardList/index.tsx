import { Main } from '@/components/Main'
import { Card } from '@/components/Card'

import { CardListContainer } from './styles'

export type props = {
  type: 'projects' | 'freelances'
}

export default function CardList({ type }: props) {
  return (
    <>
      {type === 'projects' ? (
        <Main title="PROJECTS">
          <CardListContainer>
            <Card type="project" title="Projeto 1" />
            <Card type="project" title="Projeto 1" />
            <Card type="project" title="Projeto 1" />
          </CardListContainer>
        </Main>
      ) : (
        <Main title="FREELANCES">
          <CardListContainer>
            <Card type="project" title="Projeto 1" />
            <Card type="project" title="Projeto 1" />
            <Card type="project" title="Projeto 1" />
          </CardListContainer>
        </Main>
      )}
    </>
  )
}
