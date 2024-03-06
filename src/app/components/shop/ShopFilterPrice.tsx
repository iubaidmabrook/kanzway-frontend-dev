'use client';

import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import toast from 'react-hot-toast';

export default function ShopFilterPrice() {
  // hooks
  const t = useI18n();
  const { isAr } = useLangClient();

  // state

  const [isOpenPrice, setIsOpenPrice] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );
  const queryMinPrice = searchParams.get('minPrice') ?? '';
  const queryMaxPrice = searchParams.get('maxPrice') ?? '';
  const [minPrice, setMinPrice] = useState<string>(queryMinPrice);
  const [maxPrice, setMaxPrice] = useState<string>(queryMaxPrice);

  // handle apply
  const handleApply = useCallback(() => {
    if (Number(minPrice) > Number(maxPrice)) {
      toast.error(t('shop.filterPriceError'));
    } else {
      urlSearchParams.set('minPrice', minPrice);
      urlSearchParams.set('maxPrice', maxPrice);
      window.location.href = `/shop?${urlSearchParams}`;
    }
  }, [urlSearchParams, minPrice, maxPrice, t]);

  const addThousandsSeparator = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <div className="box-filter mb-3">
      <div className="position-relative">
        <button
          className={clsx('btn btn-filter btn-nohover', {
            collapsed: isOpenPrice,
          })}
          aria-controls="filter-price"
          aria-expanded={isOpenPrice}
          onClick={() => setIsOpenPrice(!isOpenPrice)}
        >
          <div className="col-11">
            <div className="d-flex align-items-center justify-content-between">
              <div className="text-semiBold color-dark">
                {t('common.price')}
              </div>
            </div>
          </div>
        </button>
        {(minPrice !== '' && minPrice !== queryMinPrice) ||
        (maxPrice !== '' && maxPrice !== queryMaxPrice) ? (
          <a
            className={clsx('btn btn-reset btn-nohover p-0 reset-inner', {
              arab: isAr,
            })}
            type="button"
            role="presentation"
            onClick={handleApply}
          >
            {t('common.apply')}
          </a>
        ) : null}
      </div>
      <Collapse in={isOpenPrice}>
        <div id="filter-price">
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder={t('common.min')}
              value={
                minPrice !== ''
                  ? addThousandsSeparator(Number(minPrice))
                  : minPrice
              }
              onChange={(e) => {
                const { value } = e.target;
                const numericValue = value.replace(/[^0-9]/g, '');
                setMinPrice(numericValue);
              }}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder={t('common.max')}
              value={
                maxPrice !== ''
                  ? addThousandsSeparator(Number(maxPrice))
                  : maxPrice
              }
              onChange={(e) => {
                const { value } = e.target;
                const numericValue = value.replace(/[^0-9]/g, '');
                setMaxPrice(numericValue);
              }}
            />
          </div>
        </div>
      </Collapse>
    </div>
  );
}
