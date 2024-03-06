import { TModalStore } from '@/types/common.type';
import { create } from 'zustand';

type TModalCompareStore = TModalStore;

const useModalCompareStore = create<TModalCompareStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalCompareStore;
