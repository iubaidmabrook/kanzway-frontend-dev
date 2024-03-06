'use client';

// React
import React, { useMemo, memo, useState } from 'react';

// Next
import Image from 'next/image';

// Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import BaseImageLightbox from '@/app/components/base/BaseImageLightbox';

// Types
import { TProductCommonProps } from '@/types/product.type';
import { TImage } from '@/types/common.type';

// Locale
import { useI18n } from '@/locales/client';

const MAX_PHOTOS = 6;

function ProductPhotos(props: Readonly<TProductCommonProps>) {
  const { product } = props;

  // Hooks
  const t = useI18n();

  // Photo Active Index
  const [photoActiveIndex, setPhotoActiveIndex] = React.useState(-1);

  // All photos
  const images = useMemo<TImage[]>(() => product.images, [product.images]);

  // Product photos
  const photos = useMemo<SlideImage[]>(
    () => images.map((item) => ({ src: item.url })),
    [images],
  );

  // Show more
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section id="section-photo">
      {/* Mobile View */}
      <div className="d-md-none">
        <Swiper
          loop={false}
          modules={[Pagination, Grid]}
          pagination={{
            el: '#pd.swiper-pagination',
          }}
          slidesPerView={1}
          spaceBetween={10}
        >
          {product.images.map((item, currIndex) => (
            <SwiperSlide key={item.id}>
              <div
                className="image-product-detail"
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={item.url}
                  width={item.width}
                  height={item.height}
                  priority
                  className="img-fluid"
                  alt={item.name}
                  onClick={() => setPhotoActiveIndex(currIndex)}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="position-relative mt-4">
          <div
            id="pd"
            className="main-hero red swiper-pagination"
          ></div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="img-products-grid-container d-none d-md-block">
        <div className="img-products-grid">
          {images.slice(0, MAX_PHOTOS).map((item, currIndex) => (
            <div
              key={item.id}
              className="image-product-detail"
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={item.url}
                width={item.width}
                height={item.height}
                priority
                className="img-fluid"
                alt={item.name}
                onClick={() => {
                  setPhotoActiveIndex(currIndex);
                }}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          ))}

          {showMore && (
            <>
              {images.slice(MAX_PHOTOS, -1).map((item, currIndex) => (
                <div
                  key={item.id}
                  className="image-product-detail"
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={item.url}
                    width={item.width}
                    height={item.height}
                    priority
                    className="img-fluid"
                    alt={item.name}
                    onClick={() => {
                      setPhotoActiveIndex(currIndex + MAX_PHOTOS);
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {images.length > MAX_PHOTOS && (
        <button
          className="Mulish color-red tex-xs text-bold img-products-show-more mt-2"
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? t('common.showMorePhotos') : t('common.hideMorePhotos')}
        </button>
      )}

      <Lightbox
        styles={{
          container: { backgroundColor: '#FFF' },
          icon: { color: '#000', boxShadow: 'none' },
        }}
        index={photoActiveIndex}
        slides={photos}
        open={photoActiveIndex >= 0}
        close={() => setPhotoActiveIndex(-1)}
        render={{ slide: BaseImageLightbox }}
      />
    </section>
  );
}

export default memo(ProductPhotos);
