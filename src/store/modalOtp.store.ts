import { create } from 'zustand';

interface ModalOtpStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useModalOtpStore = create<ModalOtpStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalOtpStore;
