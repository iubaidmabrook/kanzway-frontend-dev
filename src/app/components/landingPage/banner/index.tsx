'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/locales/client';
import useLangClient from '@/hooks/useLangClient';
import Image from 'next/image';
import useWindowDimensions from '@/hooks/useWIndowDimention';

function Banner() {
  const pathname = usePathname();
  const t = useI18n();
  const { isAr } = useLangClient();
  const { height } = useWindowDimensions();

  const banner = [
    {
      image: '/img/hero1.webp',
      title: t('banner.title'),
      subtitle: t('banner.subTitle'),
    },
  ];

  return (
    <section
      className={`hero ${height <= 400 && height !== 0 ? 'additional-pading' : ''}`}
    >
      <Swiper
        loop
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          type: 'bullets',
          el: '#hero.swiper-pagination',
        }}
        modules={[Pagination]}
        className="swiper slider-hero position-relative"
      >
        <div className="swiper-wrapper">
          {banner.map((items) => (
            <SwiperSlide
              className="swiper-slide"
              key={Math.random()}
            >
              <div
                className="hero-wrapper"
                dir={isAr ? 'rtl' : ''}
              >
                <div className="video-container">
                  <Image
                    src={items.image}
                    style={{ width: '100%', height: '100%' }}
                    className="gif-banner"
                    alt=""
                    fill
                    objectFit="cover"
                    priority
                    quality={10}
                    loading="eager"
                  />
                  {/* <video
                    src="img/hero.mp4"
                    autoPlay
                    loop
                    muted
                  ></video> */}
                </div>
                <div className="container">
                  <div className="col-xl-10">
                    <div className="desc-hero">
                      <h1 className="text-bold Mulish color-white mb-4">
                        {items.title}
                      </h1>
                      <p className="text-xs color-white mb-5">
                        {items.subtitle}
                      </p>
                      <div className="d-flex gap-2">
                        <a
                          href={`${pathname}/shop`}
                          className="btn btn-primary"
                        >
                          {t('banner.explore')}
                        </a>
                        <a
                          href={`${pathname}/about`}
                          className="btn btn-primary"
                        >
                          {t('banner.about')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div
          id="hero"
          className="main-hero swiper-pagination"
        >
          {' '}
        </div>
      </Swiper>
    </section>
  );
}

export default Banner;
