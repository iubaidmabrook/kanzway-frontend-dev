import { TRefundDetail } from '@/types/order.type';
import { useI18n } from '@/locales/client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

function RefundReason({ refund }: { refund: TRefundDetail }) {
  const t = useI18n();
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  return (
    <div className="box-border bg-white rounded-2 p-3 mb-3">
      <span
        className={`${isCollapse ? 'collapsed' : ''} link-collapse`}
        data-bs-toggle="collapse"
        role="presentation"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        {t('profile.refundReson')}
      </span>
      <div
        className={`${isCollapse ? '' : 'show'} collapse`}
        id="link-collapse-2"
      >
        <div className="text-xs my-2 color-dark">{refund.reason}</div>
        <Swiper
          loop={false}
          slidesPerView="auto"
          spaceBetween={8}
          className="swiper refund-slider"
          wrapperClass="swiper-wrapper reason-image"
        >
          {refund.images.map((imagesItems) => (
            <SwiperSlide className="swiper-slide">
              <div className="img-refund">
                <Image
                  src={imagesItems}
                  className="img-fluid"
                  height={58}
                  width={58}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default RefundReason;
