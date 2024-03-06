'use client';

import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import useModalCategoryStore from '@/store/modal-category.store';
import '@/styles/global.scss';
import { TproductCategory } from '@/types/category.type';
import 'swiper/css/bundle';
import SwiperCategory from './swiperCategory';

type TPageProps = {
  categories: TproductCategory[];
};

function LpProductCategory({ categories }: TPageProps) {
  const { onOpen } = useModalCategoryStore();
  const t = useI18n();
  const { isAr } = useLangClient();

  return (
    <div className="main-section bg-gray-1 product-category">
      <div
        className="container"
        dir={isAr ? 'rtl' : ''}
      >
        <div className="ttl-section mb-4">{t('productCategory.category')}</div>
        <div className="row justify-content-between mb-4 mb-sm-5">
          <div className="col-lg-6">
            <h2 className="Mulish color-dark text-extraBold">
              {t('productCategory.title')}
            </h2>
          </div>
          <div className="col-lg-5 ps-xl-5">
            <p className="text-md color-dark mb-4 mb-xl-5">
              {t('productCategory.subTitle')}
            </p>
            <button
              className="btn btn-sm btn-secondary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modal-category"
              onClick={onOpen}
            >
              {t('productCategory.seeAll')}
            </button>
          </div>
        </div>

        <SwiperCategory categories={categories} />

        <div className="position-relative mt-4">
          <div
            id="category"
            className="main-hero red swiper-pagination"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LpProductCategory;
