'use client';

// React
import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Components
import ProductItem from '@/app/components/product/ProductItem';

// Type
import { TProductFamilyProps } from '@/types/product.type';

function ProductRelatedItems(props: TProductFamilyProps) {
  const { products } = props;

  return (
    <Swiper
      loop={false}
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{
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
    >
      {products?.map((product) => (
        <SwiperSlide key={product.code}>
          <ProductItem productFamily={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductRelatedItems;
