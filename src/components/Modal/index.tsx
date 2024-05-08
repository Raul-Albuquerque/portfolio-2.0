import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '../Buttons'

import { BsFillXCircleFill } from 'react-icons/bs'

import { Projects } from '@/models/projects'
import { Freelances } from '@/models/freelances'
import { useModalStore } from '@/stores/modalStore'

import * as S from './styles'

type FilteredItem = {
  title: string
  techs: string
  repo_url?: string
  deploy_url: string
  id: string
}

export const Modal = () => {
  const modal = useModalStore()
  const [filteredItem, setFilteredItem] = useState<FilteredItem>({
    title: '',
    techs: '',
    repo_url: '',
    deploy_url: '',
    id: '',
  })

  const filterItem = (id: string) => {
    const project = Projects.find((item) => item.id === id)
    const freelance = Freelances.find((item) => item.id === id)

    if (project) {
      setFilteredItem(project)
    } else if (freelance) {
      setFilteredItem(freelance)
    }
  }

  useEffect(() => {
    filterItem(modal.itemId)
  })

  return (
    <S.ModalOverlay onClick={modal.closeModal}>
      <S.ModalContainer>
        <S.ModalTitle>
          <h4>{filteredItem.title ? filteredItem.title : 'titulo'}</h4>
          <BsFillXCircleFill height={20} onClick={modal.closeModal} />
        </S.ModalTitle>
        <S.ModalContent>
          <h5>Techs</h5>
          <S.TechsImage
            src={`https://skillicons.dev/icons?i=${filteredItem.techs ? filteredItem.techs : 'html,css'}&perline=4`}
            alt={filteredItem.techs ? filteredItem.techs : 'html,css'}
          />
        </S.ModalContent>
        <S.ModalFooter>
          <h5>Links</h5>
          <div>
            <S.ModalLinks>
              {filteredItem.repo_url && (
                <Link
                  target="_blank"
                  href={
                    filteredItem.repo_url
                      ? filteredItem.repo_url
                      : 'https://github.com/Raul-Albuquerque'
                  }
                >
                  <S.GithubImage
                    src="https://skillicons.dev/icons?i=github"
                    alt="Acessar o repositório no Github"
                  />
                </Link>
              )}
            </S.ModalLinks>
            <Button
              type="tertiary"
              url={
                filteredItem.deploy_url
                  ? filteredItem.deploy_url
                  : 'https://github.com/Raul-Albuquerque'
              }
            >
              VER PROJETO
            </Button>
          </div>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.ModalOverlay>
  )
}
