import { TModalStore } from '@/types/common.type';
import { create } from 'zustand';

type TPopupFilterStore = TModalStore;

const usePopupFilterStore = create<TPopupFilterStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default usePopupFilterStore;
