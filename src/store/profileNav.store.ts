import { create } from 'zustand';

interface ProfileNaveStore {
  tab: string;
  add: (item: string) => void;
  remove: (item: string) => void;
}

const useProfileNavStore = create<ProfileNaveStore>()((set) => ({
  tab: 'myorder',
  add: (item) =>
    set(() => {
      return { tab: item };
    }),
  remove: () =>
    set(() => {
      return { tab: '' };
    }),
}));

export default useProfileNavStore;
