import { create } from 'zustand';

interface ModalVideoStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useModalVideoStore = create<ModalVideoStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalVideoStore;
