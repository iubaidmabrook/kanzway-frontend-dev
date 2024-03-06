import ModalCompare from '@/app/components/modal/ModalCompare';
import { ShopFilter } from '@/app/components/shop';
import { useLangServer } from '@/hooks/useLangServer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KanzWay - Shop',
  description: '',
  keywords: '',
};

export default async function ShopLayout({
  children,
  // filterCategories,
  // filterBrands,
  filterCategoriesBrands,
  filter,
  filterAttributes,
  products,
}: {
  children: React.ReactNode;
  // filterCategories: React.ReactNode;
  // filterBrands: React.ReactNode;
  filterCategoriesBrands: React.ReactNode;
  filter: React.ReactNode;
  filterAttributes: React.ReactNode;
  products: React.ReactNode;
}) {
  const { isAr } = await useLangServer();
  return (
    <>
      <section className="main-inner">
        <div className="container">
          {children}
          <div className="product-list-row">
            <div
              className="row g-5"
              dir={isAr ? 'rtl' : ''}
            >
              <ShopFilter>
                {/* {filterCategories}
                {filterBrands} */}
                {filterCategoriesBrands}
                {filter}
                {filterAttributes}
              </ShopFilter>
              {products}
            </div>
          </div>
        </div>
      </section>
      <ModalCompare />
    </>
  );
}
