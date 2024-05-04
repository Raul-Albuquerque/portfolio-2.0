'use client'

import { Main } from '@/components/Main'
import { Card } from '@/components/Card'
import Modal from '@/components/Modal'

import { CardListContact, CardListContainer } from './styles'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export type props = {
  type: 'projects' | 'freelances' | 'contacts'
}

export default function CardList({ type }: props) {
  const [showModal, setShowModal] = useState(false)
  const projects = useTranslations('Projects')
  const contacts = useTranslations('Contacts')

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      {type === 'projects' && (
        <>
          <Main title={projects('title')}>
            <CardListContainer>
              <Card
                type="project"
                title="Projeto 1"
                modalHandler={handleModal}
              />
              <Card
                type="project"
                title="Projeto 1"
                modalHandler={handleModal}
              />
              <Card
                type="project"
                title="Projeto 1"
                modalHandler={handleModal}
              />
            </CardListContainer>
          </Main>
        </>
      )}
      {type === 'freelances' && (
        <Main title="FREELANCES">
          <CardListContainer>
            <Card type="project" title="Projeto 1" modalHandler={handleModal} />
            <Card type="project" title="Projeto 1" modalHandler={handleModal} />
            <Card type="project" title="Projeto 1" modalHandler={handleModal} />
          </CardListContainer>
        </Main>
      )}
      {type === 'contacts' && (
        <Main title={contacts('title')}>
          <CardListContact>
            <Card type="contact" title="whatsapp" />
            <Card type="contact" title="linkedin" />
            <Card type="contact" title="e-mail" />
            <Card type="contact" title="github" />
            <Card type="contact" title="phone" />
            <Card type="contact" title={contacts('resume')} />
          </CardListContact>
        </Main>
      )}
      {showModal && <Modal modalHandler={handleModal} />}
    </>
  )
}
