'use client'

import { useState } from 'react'

import { useLocale, useTranslations } from 'next-intl'
import {
  BsDownload,
  BsWhatsapp,
  BsLinkedin,
  BsEnvelopeFill,
  BsGithub,
} from 'react-icons/bs'

import { Main } from '@/components/Main'
import { Card } from '@/components/Card'
import { Modal } from '@/components/Modal'
import { Loader } from '@/components/Loader'
import { useDeveloperData } from '@/hooks/useDeveloperData'
import { useProjectData } from '@/hooks/useProjectData'
import { useFreelanceData } from '@/hooks/useFreelanceData'

import { CardListContact, CardListContainer } from './styles'

export type props = {
  type: 'projects' | 'freelances' | 'contacts'
}

export const CardList = ({ type }: props) => {
  const [showModal, setShowModal] = useState(false)
  const [modalId, setModalId] = useState('')
  const projects = useTranslations('Projects')
  const contacts = useTranslations('Contacts')
  const localActive = useLocale()
  const { isLoading, data } = useDeveloperData()
  const { isLoading: isLoadingProjects, data: projectsData } = useProjectData()
  const { isLoading: isLoadingFreelances, data: freelancesData } =
    useFreelanceData()
  const dev = data ? data[0] : null

  const handleModal = (id: string) => {
    setShowModal(!showModal)
    setModalId(id)
  }

  return (
    <>
      {type === 'projects' && (
        <>
          <Main title={projects('title')}>
            {isLoadingProjects ? (
              <Loader />
            ) : (
              <CardListContainer>
                {projectsData.map((project) => (
                  <Card
                    key={project.id}
                    type="project"
                    title={project.title}
                    modalHandler={() => handleModal(project.id)}
                    imageUrl={project.image_url}
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
            )}
          </Main>
        </>
      )}
      {type === 'freelances' && (
        <Main title="FREELANCES">
          {isLoadingFreelances ? (
            <Loader />
          ) : (
            <CardListContainer>
              {freelancesData.map((freelance) => (
                <Card
                  key={freelance.id}
                  type="project"
                  title={freelance.title}
                  modalHandler={() => handleModal(freelance.id)}
                  imageUrl={freelance.image_url}
                  description={
                    localActive === 'en'
                      ? freelance.description
                      : freelance.descricao
                  }
                  projecturl={freelance.deploy_url}
                />
              ))}
            </CardListContainer>
          )}
        </Main>
      )}
      {type === 'contacts' && (
        <Main title={contacts('title')}>
          {isLoading ? (
            <Loader />
          ) : (
            <CardListContact>
              <Card
                type="contact"
                title="whatsapp"
                icon={<BsWhatsapp size={36} />}
                navigateTo={dev.whatsapp_url}
              />
              <Card
                type="contact"
                title="linkedin"
                icon={<BsLinkedin size={36} />}
                navigateTo={dev.linkedin_url}
              />
              <Card
                type="contact"
                title="e-mail"
                icon={<BsEnvelopeFill size={36} />}
                navigateTo={dev.email_url}
              />
              <Card
                type="contact"
                title="github"
                icon={<BsGithub size={36} />}
                navigateTo={dev.github_url}
              />
              <Card
                type="contact"
                title={contacts('resume')}
                icon={<BsDownload size={36} />}
                navigateTo={localActive === 'en' ? dev.resume_url : dev.cv_url}
              />
            </CardListContact>
          )}
        </Main>
      )}
      {showModal && <Modal modalHandler={handleModal} projectId={modalId} />}
    </>
  )
}
