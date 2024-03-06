import { create } from 'zustand';

interface LastPathStore {
  lastPath: string;
  add: (item: string) => void;
  remove: (item: string) => void;
}

const useLastPathStore = create<LastPathStore>()((set) => ({
  lastPath: '',
  add: (item) =>
    set(() => {
      return { lastPath: item };
    }),
  remove: () =>
    set(() => {
      return { lastPath: '' };
    }),
}));

export default useLastPathStore;
