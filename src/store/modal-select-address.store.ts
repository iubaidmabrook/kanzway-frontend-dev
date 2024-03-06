import { TModalStore } from '@/types/common.type';
import { create } from 'zustand';

type TModalSelectAddressStore = TModalStore;

const useModalSelectAddressStore = create<TModalSelectAddressStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalSelectAddressStore;
