import { create } from 'zustand';

interface ModalAddBankAccountStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useModalAddBankAccountStore = create<ModalAddBankAccountStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalAddBankAccountStore;
