import { Main } from '@/components/Main'
import { Card } from '@/components/Card'

import { CardListContact, CardListContainer } from './styles'

export type props = {
  type: 'projects' | 'freelances' | 'contacts'
}

export default function CardList({ type }: props) {
  return (
    <>
      {type === 'projects' && (
        <Main title="PROJECTS">
          <CardListContainer>
            <Card type="project" title="Projeto 1" />
            <Card type="project" title="Projeto 1" />
            <Card type="project" title="Projeto 1" />
          </CardListContainer>
        </Main>
      )}
      {type === 'freelances' && (
        <Main title="FREELANCES">
          <CardListContainer>
            <Card type="project" title="Projeto 1" />
            <Card type="project" title="Projeto 1" />
            <Card type="project" title="Projeto 1" />
          </CardListContainer>
        </Main>
      )}
      {type === 'contacts' && (
        <Main title="CONTACTS">
          <CardListContact>
            <Card type="contact" />
            <Card type="contact" />
            <Card type="contact" />
            <Card type="contact" />
            <Card type="contact" />
            <Card type="contact" />
          </CardListContact>
        </Main>
      )}
    </>
  )
}
