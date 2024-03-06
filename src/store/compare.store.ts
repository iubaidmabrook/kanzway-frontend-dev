import { TProductOverview } from '@/types/product.type';
import { create } from 'zustand';
import Cookies from 'js-cookie';

interface CompareStore {
  items: Pick<TProductOverview, 'id' | 'image'>[];
  addItem: (item: TProductOverview) => void;
  removeItem: (productId: number) => void;
  clear: () => void;
}

const getInitialStateFromCookie = () => {
  const cookieValue = Cookies.get('compare');
  return cookieValue
    ? (JSON.parse(atob(cookieValue)) as Pick<
        TProductOverview,
        'id' | 'image'
      >[])
    : [];
};
const useCompareStore = create<CompareStore>((set) => ({
  items: getInitialStateFromCookie(),
  addItem: (item) =>
    set((state) => {
      const find = state.items.find((value) => value.id === item.id);

      if (find) {
        const filterItems = state.items.filter((value) => value.id !== item.id);

        Cookies.set('compare', btoa(JSON.stringify(filterItems)));
        return { items: filterItems };
      }

      const newItems = [...state.items, { id: item.id, image: item.image }];
      Cookies.set('compare', btoa(JSON.stringify(newItems)));

      return { items: newItems };
    }),
  removeItem: (productId) =>
    set((state) => {
      const filterItems = state.items.filter((value) => value.id !== productId);

      Cookies.set('compare', btoa(JSON.stringify(filterItems)));

      return { items: filterItems };
    }),

  clear: () =>
    set(() => {
      Cookies.set('compare', btoa(JSON.stringify([])));

      return { items: [] };
    }),
}));

export const addItemsToCompare = (items: TProductOverview[]) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addItem = useCompareStore((state) => state.addItem);

  items.map((item) => addItem(item));
};

export default useCompareStore;
