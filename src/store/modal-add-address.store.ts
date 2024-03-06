import { TModalStore } from '@/types/common.type';
import { create } from 'zustand';

type TModalAddAddressStore = TModalStore;

const useModalAddAddressStore = create<TModalAddAddressStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalAddAddressStore;
