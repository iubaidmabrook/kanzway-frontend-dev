'use client';

import useLangClient from '@/hooks/useLangClient';
import { useScopedI18n } from '@/locales/client';
import formatNumberToKmb from '@/utils/common.util';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next13-progressbar';

type TShopSorting = {
  productCount: number;
};

export default function ShopSorting({ productCount }: TShopSorting) {
  // hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );
  const tCommon = useScopedI18n('common');
  const { isAr } = useLangClient();

  const size = searchParams.get('size') ?? 10;
  const sort = searchParams.get('sort') ?? 'familyCode';
  const order = searchParams.get('order') ?? 'desc';

  const handlePageSize = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      urlSearchParams.set('size', e.target.value);
      router.replace(`/shop?${urlSearchParams}`);
    },
    [urlSearchParams, router],
  );

  const handleSort = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value.split('|');
      urlSearchParams.set('sort', value[0]);
      urlSearchParams.set('order', value[1]);
      router.replace(`/shop?${urlSearchParams}`);
    },
    [urlSearchParams, router],
  );
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between mb-4 align-items-sm-center gap-3">
      <div className="">
        <div className="d-flex align-items-center gap-2">
          <div className="text-xs color-gray-60">{tCommon('showing')}</div>
          <div className="">
            <Form.Select
              value={size}
              onChange={handlePageSize}
              className={clsx(isAr ? 'ps-5' : 'pe-5', { arab: isAr })}
            >
              {[18, 24].map((value) => (
                <option
                  value={value}
                  key={value}
                >
                  {value}
                  {/* <Link href={`/shop?size=${value}`}>{value}</Link> */}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="text-xs color-gray-60">
            {tCommon('of')}{' '}
            {formatNumberToKmb(productCount, productCount > 999 ? 1 : 0)}{' '}
            {tCommon('products')}
          </div>
        </div>
      </div>
      <div className="">
        <Form.Select
          value={`${sort}|${order}`}
          onChange={handleSort}
          className={clsx(isAr ? 'ps-5' : 'pe-5', { arab: isAr })}
        >
          <option value="familyCode|desc">{tCommon('latest')}</option>
          <option value="familyCode|asc">{tCommon('oldest')}</option>
          {/* <option value="price|desc">{tCommon('highPrice')}</option>
          <option value="price|asc">{tCommon('lowPrice')}</option> */}
        </Form.Select>
      </div>
    </div>
  );
}
