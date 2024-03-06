// Zustand
import { create } from 'zustand';

// Types
import { TProductEnquiryStore } from '@/types/product.type';

// Cookie
import Cookies from 'js-cookie';

const cookieKey = 'enquiries';

const getInitialStateFromCookie = () => {
  const cookieValue = Cookies.get(cookieKey);
  return cookieValue ? JSON.parse(atob(cookieValue)) : [];
};

const useEnquiryStore = create<TProductEnquiryStore>((set) => ({
  items: getInitialStateFromCookie(),
  addItem: (productId) =>
    set((state) => {
      const newItems = [...state.items, productId];
      Cookies.set(cookieKey, btoa(JSON.stringify(newItems)));
      return { items: newItems };
    }),
  removeItem: (productId) =>
    set((state) => {
      const filterItems = state.items.filter((id) => id !== productId);
      Cookies.set(cookieKey, btoa(JSON.stringify(filterItems)));
      return { items: filterItems };
    }),

  clear: () =>
    set(() => {
      Cookies.set(cookieKey, btoa(JSON.stringify([])));
      return { items: [] };
    }),
}));

export default useEnquiryStore;