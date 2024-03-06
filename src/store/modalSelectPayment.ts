import { TModalStore } from '@/types/common.type';
import { create } from 'zustand';

type TModalSelectPaymentStore = TModalStore;

const useModalSelectPaymentStore = create<TModalSelectPaymentStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalSelectPaymentStore;
