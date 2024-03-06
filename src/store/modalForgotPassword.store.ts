import { create } from 'zustand';

interface ModalForgotPasswordStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useModalForgotPasswordStore = create<ModalForgotPasswordStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalForgotPasswordStore;
