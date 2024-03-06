'use client';

import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
import { TBrand } from '@/types/brand.type';
import BrandItem from './BrandItem';

function Lpbrand({ brands }: { brands: TBrand[] }) {
  // const [brandData, setBrandData] = useState<TBrand>()
  // const [activeId, setActiveId] = useState(0);
  // const currentLocale = useCurrentLocale();
  // const {
  //   brandId,
  //   add: addSelectedBrand,
  //   remove: removeSelectedBrand,
  // } = useSelectedBrandStore();
  // const pathname = usePathname();
  const t = useI18n();
  const { isAr } = useLangClient();
  // const size = useWindowSize();

  // const setActiveElementOnHover = (id: number) => {
  //   if (size.width <= 992) {
  //     removeSelectedBrand(0);
  //   } else {
  //     setTimeout(() => {
  //       addSelectedBrand(id);
  //     }, 100);
  //   }
  // };

  // const resetActiveElementOnLeave = () => {
  //   if (size.width <= 992) {
  //     removeSelectedBrand(0);
  //   } else {
  //     setTimeout(() => {
  //       removeSelectedBrand(0);
  //     }, 250);
  //   }
  // };

  let maxSizeBrands: TBrand[] = [];

  if (brands?.length > 35) {
    maxSizeBrands = brands.slice(0, 35);
  } else {
    maxSizeBrands = brands;
  }

  return (
    <section className="main-section brand-section bg-brand">
      <div
        className="container"
        dir={isAr ? 'rtl' : ''}
      >
        <div className="ttl-section mb-4">{t('brand.brand')}</div>
        <div className="row">
          <div className="col-xl-5 mb-4 mb-xl-0">
            <div className="row justify-content-between ">
              <div className="col-lg-12 mb-4">
                <h2 className="Mulish color-white text-extraBold">
                  {t('brand.title')}
                </h2>
              </div>
              <div className="col-lg-10 ">
                <p className="text-md color-white mb-4 mb-xl-5">
                  {t('brand.subtitle')}
                </p>
                <Link
                  href="/brands"
                  className="btn btn-sm btn-primary"
                >
                  {t('brand.explore')}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="brand-rows">
              {maxSizeBrands?.map((items) => <BrandItem brand={items} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lpbrand;
