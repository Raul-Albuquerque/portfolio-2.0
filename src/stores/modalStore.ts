import { create } from 'zustand'

type ModalStore = {
  isOpen: boolean
  itemId: string
  openModal: (id: string) => void
  closeModal: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  itemId: '',

  openModal: (id: string) => {
    set((state) => ({ ...state, isOpen: true, itemId: id }))
  },
  closeModal: () => {
    set((state) => ({ ...state, isOpen: false, itemId: '' }))
  },
}))
