'use client';

import useStore from '@/hooks/useStore';
import { useScopedI18n } from '@/locales/client';
import useCompareStore from '@/store/compare.store';
import useModalCompareStore from '@/store/modal-compare.store';
import Image from 'next/image';
import { Button, Collapse } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ShopCompare() {
  // hooks
  const items = useStore(useCompareStore, (state) => state.items);
  const t = useScopedI18n('common');
  const { clear: clearCompare } = useCompareStore();

  const { onOpen } = useModalCompareStore();

  return (
    items &&
    items.length > 0 && (
      <Collapse in={items.length > 0}>
        <div className="compare-box d-flex gap-2">
          <div
            className=" flex-grow-1 mb-2 mb-sm-0"
            style={{ overflow: 'hidden' }}
          >
            <div className=" position-relative ">
              <Swiper
                loop={false}
                slidesPerView="auto"
                spaceBetween={4}
                className=" swiper"
              >
                {items.map((item, i) => (
                  <SwiperSlide
                    key={item.id + i.toString()}
                    className="img-compare-thumb"
                  >
                    <Image
                      src={item.image.url}
                      className="img-fluid"
                      alt={item.image.name}
                      width={item.image.width}
                      height={item.image.height}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="d-flex align-items-center gap-3 position-relative">
              <div className="text-xs color-gray-60">
                {items.length} {t('selected')}
              </div>
              <button
                className="btn btn-nohover btn-close-compare-mini"
                onClick={() => {
                  clearCompare();
                  toast.success('Compare has been cleared');
                }}
              >
                <img
                  src="/img/Icon/mini-close.svg"
                  // className="img-fluid"
                  width={16}
                  height={16}
                />
              </button>
            </div>
            <Button
              variant="secondary"
              onClick={onOpen}
              disabled={items.length <= 1}
            >
              {t('compare')}
            </Button>
          </div>
        </div>
      </Collapse>
    )
  );
}
