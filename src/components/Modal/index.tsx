import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '../Buttons'

import { BsFillXCircleFill } from 'react-icons/bs'

import { Projects } from '@/models/projects'
import { Freelances } from '@/models/freelances'

import * as S from './styles'

type Props = {
  modalHandler: () => void
  projectId: string
}

export const Modal = ({ modalHandler, projectId }: Props) => {
  const [filteredItem, setFilteredItem] = useState([])

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
    filterItem(projectId)
  }, [])

  console.log(filteredItem.id)

  return (
    <S.ModalOverlay onClick={modalHandler}>
      <S.ModalContainer>
        <S.ModalTitle>
          <h4>{filteredItem.title ? filteredItem.title : 'titulo'}</h4>
          <BsFillXCircleFill height={20} onClick={modalHandler} />
        </S.ModalTitle>
        <S.ModalContent>
          <h5>Techs</h5>
          <img
            src={`https://skillicons.dev/icons?i=${filteredItem.techs ? filteredItem.techs : 'html,css'}&perline=4`}
            alt={filteredItem.techs ? filteredItem.techs : 'html,css'}
          />
        </S.ModalContent>
        <S.ModalFooter>
          <h5>Links</h5>
          <div>
            <S.ModalLinks>
              <Link
                target="_blank"
                href={
                  filteredItem.repo_url
                    ? filteredItem.repo_url
                    : 'https://github.com/Raul-Albuquerque'
                }
              >
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="Acessar o repositório no Github"
                />
              </Link>
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
