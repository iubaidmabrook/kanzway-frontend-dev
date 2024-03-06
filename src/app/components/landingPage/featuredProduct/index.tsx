'use client';

import ProductItem from '@/app/components/product/ProductItem';
import '@/styles/global.scss';
import { TProductFamily } from '@/types/product.type';
import { usePathname } from 'next/navigation';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useI18n } from '@/locales/client';
import useLangClient from '@/hooks/useLangClient';
import ProductOtherOptions from '../../product/ProductOtherOptions';

type TPageProps = {
  productFamilies: TProductFamily[];
};

function LpFeaturedProduct({ productFamilies }: TPageProps) {
  // const currentLocale = useCurrentLocale();
  const pathname = usePathname();
  const t = useI18n();
  const { isAr } = useLangClient();

  // const renderOtherOption = (option: any[]) => {
  //   return option.map((items, index) => (
  //     <SwiperSlide
  //       className="swiper-slide"
  //       key={index}
  //     >
  //       <a
  //         href={`shop/product/${items.id}`}
  //         className={`variant-thumb ${index === 0 && 'active'}`}
  //         data-bs-toggle="tooltip"
  //         data-bs-title={items.title[currentLocale]}
  //         data-bs-placement="top"
  //       >
  //         <img
  //           src={items.thumbnail.url}
  //           className="img-fluid"
  //         />
  //       </a>
  //     </SwiperSlide>
  //   ));
  // };

  return (
    <>
      <section className="main-section featured-product">
        <div
          className="container"
          dir={isAr ? 'rtl' : ''}
        >
          <div className="ttl-section mb-4">
            {t('featuredProduct.featured')}
          </div>
          <div className="row justify-content-between ">
            <div className="col-lg-7">
              <h2 className="Mulish color-dark text-extraBold">
                {t('featuredProduct.title')}
              </h2>
            </div>
            <div className="col-lg-5 ps-xl-5">
              <p className="text-md color-dark mb-4 mb-xl-5">
                {t('featuredProduct.subTitle')}
              </p>
              <a
                href={`${pathname}/shop`}
                className="btn btn-sm btn-secondary"
              >
                {t('featuredProduct.seeAll')}
              </a>
            </div>
          </div>

          <Swiper
            loop={false}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              type: 'bullets',
              el: '#featured.swiper-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
            className="swiper featured-home"
          >
            <div className="swiper-wrapper">
              {productFamilies?.map((productFamily) => (
                <SwiperSlide
                  className="swiper-slide"
                  key={productFamily.code}
                >
                  <ProductItem productFamily={productFamily} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="position-relative mt-4">
            <div
              id="featured"
              className="main-hero red swiper-pagination"
            ></div>
          </div>
        </div>
      </section>
      <ProductOtherOptions />
    </>
  );
}

export default LpFeaturedProduct;
