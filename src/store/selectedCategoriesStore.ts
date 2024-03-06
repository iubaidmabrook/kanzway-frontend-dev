import { create } from 'zustand';

interface SelectedCategoriesStore {
  selectedCategories: number[];
  setSelectedCategories: (ids: number[]) => void;
}

const useSelectedCategoriesStore = create<SelectedCategoriesStore>((set) => ({
  selectedCategories: [],
  setSelectedCategories: (ids) => set({ selectedCategories: ids }),
}));

export default useSelectedCategoriesStore;
