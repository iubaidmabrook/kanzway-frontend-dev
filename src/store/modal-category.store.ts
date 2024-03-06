import { TModalStore } from '@/types/common.type';
import { create } from 'zustand';

type TModalCategoryStore = TModalStore;

const useModalCategoryStore = create<TModalCategoryStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalCategoryStore;
