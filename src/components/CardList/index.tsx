'use client'

import { Main } from '@/components/Main'
import { Card } from '@/components/Card'
import Modal from '@/components/Modal'

import { CardListContact, CardListContainer } from './styles'
import {
  BsDownload,
  BsWhatsapp,
  BsLinkedin,
  BsEnvelopeFill,
  BsGithub,
} from 'react-icons/bs'
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
                title="Pokédex"
                modalHandler={handleModal}
                imageUrl="/static/projects/pokedex.png"
                description="Web Application about Pokémons with a lot of features, using the PokéAPI."
                repourl="https://github.com/Raul-Albuquerque/meus_contatos_react"
                projecturl="https://desafio-pokedex-neon.vercel.app/"
              />
              <Card
                type="project"
                title="Y - Twitter Clone"
                modalHandler={handleModal}
                imageUrl="/static/projects/twitter.png"
                description="This is a robust project that replicates various functionalities of Twitter."
                repourl="https://github.com/Raul-Albuquerque/meus_contatos_react"
                projecturl="https://desafio-pokedex-neon.vercel.app/"
              />
              <Card
                type="project"
                title="My Contacts"
                modalHandler={handleModal}
                imageUrl="/static/projects/contacts.png"
                description="Sort of an agenda that allows the user to add name, email, phone, and avatar."
                repourl="https://github.com/Raul-Albuquerque/meus_contatos_react"
                projecturl="https://desafio-pokedex-neon.vercel.app/"
              />
            </CardListContainer>
          </Main>
        </>
      )}
      {type === 'freelances' && (
        <Main title="FREELANCES">
          <CardListContainer>
            <Card
              type="project"
              title="Dentiff"
              modalHandler={handleModal}
              imageUrl="/static/freelances/dentiff.png"
              description="Landing page of a company that sells dental products."
              projecturl="https://desafio-pokedex-neon.vercel.app/"
            />
            <Card
              type="project"
              title="Barra do Corumbá"
              modalHandler={handleModal}
              imageUrl="/static/freelances/barra.png"
              description="Landing page of a tourism company that offers a wide range of travel services."
              projecturl="https://desafio-pokedex-neon.vercel.app/"
            />
            <Card
              type="project"
              title="Oxente Passeios"
              modalHandler={handleModal}
              imageUrl="/static/freelances/oxente.png"
              description="Landing page of a tourism company specialized in boat trips."
              projecturl="https://desafio-pokedex-neon.vercel.app/"
            />
          </CardListContainer>
        </Main>
      )}
      {type === 'contacts' && (
        <Main title={contacts('title')}>
          <CardListContact>
            <Card
              type="contact"
              title="whatsapp"
              icon={<BsWhatsapp size={36} />}
              navigateTo="https://github.com/Raul-Albuquerque"
            />
            <Card
              type="contact"
              title="linkedin"
              icon={<BsLinkedin size={36} />}
              navigateTo="https://github.com/Raul-Albuquerque"
            />
            <Card
              type="contact"
              title="e-mail"
              icon={<BsEnvelopeFill size={36} />}
              navigateTo="https://github.com/Raul-Albuquerque"
            />
            <Card
              type="contact"
              title="github"
              icon={<BsGithub size={36} />}
              navigateTo="https://github.com/Raul-Albuquerque"
            />
            <Card
              type="contact"
              title={contacts('resume')}
              icon={<BsDownload size={36} />}
              navigateTo="https://github.com/Raul-Albuquerque"
            />
          </CardListContact>
        </Main>
      )}
      {showModal && <Modal modalHandler={handleModal} />}
    </>
  )
}
