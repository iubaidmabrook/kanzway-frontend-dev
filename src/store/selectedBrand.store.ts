import { create } from 'zustand';

interface SelectedBrandStore {
  brandId: number;
  add: (item: number) => void;
  remove: (item: number) => void;
}

const useSelectedBrandStore = create<SelectedBrandStore>()((set) => ({
  brandId: 0,
  add: (item) =>
    set(() => {
      return { brandId: item };
    }),
  remove: () =>
    set(() => {
      return { brandId: 0 };
    }),
}));

export default useSelectedBrandStore;
