import { TModalStore } from '@/types/common.type';
import { create } from 'zustand';

type TModalPaymentStore = TModalStore;

const useModalPaymentStore = create<TModalPaymentStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useModalPaymentStore;
