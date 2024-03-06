// Next
import { searchRootCategories } from '@/api/category.api';
import { Metadata } from 'next';
import ModalCategory from '../components/modal/ModalCategory';
import ModalSearch from '../components/modal/ModalSearch';

export const metadata: Metadata = {
  title: 'Kanzway - Connecting Manufacturers and Buyers Around the World',
  description: '',
  keywords: '',
  authors: [{}],
};

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await searchRootCategories({});

  return (
    <>
      {children}
      <ModalCategory categories={categories} />
      <ModalSearch />
    </>
  );
};

export default MainLayout;
