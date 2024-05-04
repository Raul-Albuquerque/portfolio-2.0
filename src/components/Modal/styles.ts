import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100dvh;
  width: 100dvw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-modal-overlayer);
  cursor: pointer;
`

export const ModalContainer = styled.div`
  max-width: 360px;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
  background-color: var(--color-modal-bg);
  border: 1px solid var(--color-modal-border);
  color: var(--color-white);
  border-radius: var(--border-radius);
  letter-spacing: 1px;
`

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;

  svg {
    cursor: pointer;

    &:hover {
      color: var(--color-yellow);
    }
  }
`

export const ModalContent = styled.div`
  h5 {
    font-size: 16px;
    margin: 20px 0 16px 0;
  }
`

export const ModalLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`

export const ModalFooter = styled.div`
  h5 {
    font-size: 16px;
    margin: 20px 0 16px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
