import { TModalStore } from '@/types/common.type';
import { TProductOverview } from '@/types/product.type';
import { create } from 'zustand';

type TDrawerOtherOptionsStore = TModalStore & {
  products: TProductOverview[];
  setProducts: (produtcs: TProductOverview[]) => void;
};

const useDrawerOtherOptionsStore = create<TDrawerOtherOptionsStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
  products: [],
  setProducts: (products) => set({ products }),
}));

export default useDrawerOtherOptionsStore;
