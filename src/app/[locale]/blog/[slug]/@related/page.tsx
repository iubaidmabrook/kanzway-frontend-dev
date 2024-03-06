'use client';

import BlogItem from '@/app/components/blog/BlogItem';
import { DUMMY_BLOGS } from '@/constant/faker.constant';
import { useI18n } from '@/locales/client';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ArticleRelatedParallel() {
  const t = useI18n();
  return (
    <div className="">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <p className="color-dark text-3xl Mulish text-bold">
          {t('blog.relatedArticles')}
        </p>
      </div>
      <Swiper
        loop={false}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          type: 'bullets',
          el: '#blog.swiper-pagination',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="swiper"
      >
        <div className="swiper-wrapper">
          {DUMMY_BLOGS.map((blog, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={`${index.toString()}`}
            >
              <BlogItem blog={{ ...blog, id: index + 1 }} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
