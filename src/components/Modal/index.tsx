import Link from 'next/link'
import { useEffect, useState } from 'react'

import { BsFillXCircleFill } from 'react-icons/bs'

import { Button } from '@/components/Buttons'
import { useProjectData } from '@/hooks/useProjectData'
import { useFreelanceData } from '@/hooks/useFreelanceData'

import * as S from './styles'

type Props = {
  modalHandler: () => void
  projectId: string
}

export const Modal = ({ modalHandler, projectId }: Props) => {
  const { isLoading: isLoadingProjects, data: projectsData } = useProjectData()
  const { isLoading: isLoadingFreelances, data: freelancesData } =
    useFreelanceData()
  const [filteredItem, setFilteredItem] = useState([])

  const filterItem = (id: string) => {
    const project = projectsData.find((item) => item.id === id)
    const freelance = freelancesData.find((item) => item.id === id)

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
              {filteredItem.repo_url && (
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
