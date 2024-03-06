'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useI18n } from '@/locales/client';
import useLangClient from '@/hooks/useLangClient';

function LpBlog() {
  const pathname = usePathname();
  const t = useI18n();
  const { isAr } = useLangClient();

  return (
    <section className="main-section blog-section">
      <div
        className="container"
        dir={isAr ? 'rtl' : ''}
      >
        <div className="ttl-section mb-4">{t('blog.blog')}</div>
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="Mulish color-dark text-extraBold">
              {t('blog.title')}
            </h2>
          </div>
          <div className="col-lg-5 ps-xl-5">
            <p className="text-md color-dark mb-4 mb-xl-5">
              {t('blog.subTitle')}
            </p>
            <a
              href={`${pathname}/blog`}
              className="btn btn-sm btn-secondary"
            >
              {t('blog.seeAll')}
            </a>
          </div>
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
          className="swiper blog-home"
        >
          <div className="swiper-wrapper">
            {Array.from({ length: 6 }).map((items, index) => (
              <SwiperSlide
                className="swiper-slide"
                key={`${index.toString()}`}
              >
                <div className="blog-itmes">
                  <Link
                    href={`/blog/${index + 1}`}
                    className="img-blog mb-3"
                  >
                    <img
                      src={`https://picsum.photos/466/334?random=${index + 1}`}
                      className="img-fluid"
                    />
                  </Link>
                  <div className="blog-meta">
                    <p className="color-gray-60 text-xs mb-2">
                      10 November 2023
                    </p>
                    <Link
                      href={`/blog/${index + 1}`}
                      className="blog-title-link Mulish"
                    >
                      New Product Launch - 40ECP Slotless Motor {index + 1}
                    </Link>
                    <p className="blog-excerpt">
                      Cost-Optimized Motor Delivers Active Cooling with
                      Unparalleled Torque and Speed. The 40ECP brushless
                      slotless motor is the newest addition to our
                    </p>
                    <Link
                      href={`/blog/${index + 1}`}
                      className="link-more"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="position-relative mt-4">
          <div
            id="blog"
            className="main-hero red swiper-pagination"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default LpBlog;
