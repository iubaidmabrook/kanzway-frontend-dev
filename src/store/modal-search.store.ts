import { TModalStore } from '@/types/common.type';
import { create } from 'zustand';

type TModalSearchStore = TModalStore;

const useModalSearchStore = create<TModalSearchStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalSearchStore;
