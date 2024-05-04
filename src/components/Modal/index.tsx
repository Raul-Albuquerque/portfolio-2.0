import Link from 'next/link'
import { Button } from '../Buttons'
import * as S from './styles'
import { BsFillXCircleFill } from 'react-icons/bs'

type Props = {
  modalHandler: () => void
}

export default function Modal({ modalHandler }: Props) {
  return (
    <S.ModalOverlay onClick={modalHandler}>
      <S.ModalContainer>
        <S.ModalTitle>
          <h4>Projeto 1</h4>
          <BsFillXCircleFill height={20} onClick={modalHandler} />
        </S.ModalTitle>
        <S.ModalContent>
          <h5>Techs</h5>
          <img
            src="https://skillicons.dev/icons?i=html,css,bootstrap,sass&perline=4"
            alt="html,css,bootstrap,sass"
          />
        </S.ModalContent>
        <S.ModalFooter>
          <h5>Links</h5>
          <div>
            <S.ModalLinks>
              <Link target="_blank" href="https://www.google.com">
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="html,css,bootstrap,sass"
                />
              </Link>
              <Link target="_blank" href="https://www.google.com">
                <img src="https://skillicons.dev/icons?i=figma" alt="figma" />
              </Link>
            </S.ModalLinks>
            <Button type="tertiary" url="https://www.google.com">
              VER PROJETO
            </Button>
          </div>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.ModalOverlay>
  )
}
