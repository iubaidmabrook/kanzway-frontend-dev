'use client';

// React
import React, { memo, useMemo } from 'react';

// Next
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next13-progressbar';

// Types
import { TCareerCategoriesProps } from '@/types/career.type';

// Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Utils
import { getLang } from '@/utils/locale.util';
import clsx from 'clsx';

function CareerCategories(props: Readonly<TCareerCategoriesProps>) {
  const { categories } = props;
  const params = useParams();

  // hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const categorySelected = searchParams.get('category') ?? 'all';

  /**
   * handle sort
   * @param e
   */
  const handleCategory = (slug: string) => {
    urlSearchParams.set('category', slug);
    router.replace(`/career?${urlSearchParams}`);
  };

  return (
    <Swiper
      loop={false}
      slidesPerView="auto"
      wrapperClass="career-tab nav-tabs justify-content-lg-center"
      spaceBetween={10}
    >
      <SwiperSlide>
        <button
          className={clsx(
            'nav-link',
            categorySelected === 'all' ? 'active' : '',
          )}
          onClick={() => handleCategory('all')}
        >
          All
        </button>
      </SwiperSlide>
      {categories.map((category) => (
        <SwiperSlide key={category.slug}>
          <button
            className={clsx(
              'nav-link',
              category.slug === categorySelected ? 'active' : '',
            )}
            onClick={() => handleCategory(category.slug)}
          >
            {getLang(params, category.title)}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(CareerCategories);
