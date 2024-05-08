'use client'

import { useLocale, useTranslations } from 'next-intl'

import { Main } from '@/components/Main'
import { Card } from '@/components/Card'
import { Modal } from '@/components/Modal'

import {
  BsDownload,
  BsWhatsapp,
  BsLinkedin,
  BsEnvelopeFill,
  BsGithub,
} from 'react-icons/bs'

import { Dev } from '@/models/developer'
import { Projects } from '@/models/projects'
import { Freelances } from '@/models/freelances'

import { CardListContact, CardListContainer } from './styles'
import { useModalStore } from '@/stores/modalStore'

export type props = {
  type: 'projects' | 'freelances' | 'contacts'
}

export const CardList = ({ type }: props) => {
  const projects = useTranslations('Projects')
  const contacts = useTranslations('Contacts')
  const localActive = useLocale()
  const isOpen = useModalStore((state) => state.isOpen)

  return (
    <>
      {type === 'projects' && (
        <>
          <Main title={projects('title')}>
            <CardListContainer>
              {Projects.map((project) => (
                <Card
                  key={project.id}
                  type="project"
                  title={project.title}
                  imageUrl={project.image_url}
                  projectId={project.id}
                  description={
                    localActive === 'en'
                      ? project.description
                      : project.descricao
                  }
                  repourl={project.repo_url}
                  projecturl={project.deploy_url}
                />
              ))}
            </CardListContainer>
          </Main>
        </>
      )}
      {type === 'freelances' && (
        <Main title="FREELANCES">
          <CardListContainer>
            {Freelances.map((freelance) => (
              <Card
                key={freelance.id}
                type="project"
                title={freelance.title}
                imageUrl={freelance.image_url}
                projectId={freelance.id}
                description={
                  localActive === 'en'
                    ? freelance.description
                    : freelance.descricao
                }
                projecturl={freelance.deploy_url}
              />
            ))}
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
              navigateTo={Dev.whatsapp_url}
            />
            <Card
              type="contact"
              title="linkedin"
              icon={<BsLinkedin size={36} />}
              navigateTo={Dev.linkedin_url}
            />
            <Card
              type="contact"
              title="e-mail"
              icon={<BsEnvelopeFill size={36} />}
              navigateTo={Dev.email_url}
            />
            <Card
              type="contact"
              title="github"
              icon={<BsGithub size={36} />}
              navigateTo={Dev.github_url}
            />
            <Card
              type="contact"
              title={contacts('resume')}
              icon={<BsDownload size={36} />}
              navigateTo={localActive === 'en' ? Dev.resume_url : Dev.cv_url}
            />
          </CardListContact>
        </Main>
      )}
      {isOpen && <Modal />}
    </>
  )
}
