import { create } from 'zustand';

interface SelectedLanguageStore {
  language: string;
  add: (item: string) => void;
  remove: (item: string) => void;
}

const useSelectedLanguageStore = create<SelectedLanguageStore>()((set) => ({
  language: 'en',
  add: (item) =>
    set(() => {
      return { language: item };
    }),
  remove: () =>
    set(() => {
      return { language: '' };
    }),
}));

export default useSelectedLanguageStore;
