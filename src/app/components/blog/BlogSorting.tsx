'use client';

import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';
import { FormSelect } from 'react-bootstrap';

export default function BlogSorting() {
  const { isAr } = useLangClient();
  const t = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );
  const order = searchParams.get('order') ?? 'desc';

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    urlSearchParams.set('order', e.target.value);
    router.replace(`/blog?${urlSearchParams}`);
  };
  return (
    <div className="d-flex justify-content-between mb-3 align-items-center">
      <p className="color-dark fs-3 Mulish text-bold">
        {t('blog.allArticles')}
      </p>
      <div className="col-xl-1 col-lg-2 col-sm-3 col-3">
        <FormSelect
          value={order}
          onChange={handleOrderChange}
          className={clsx({ arab: isAr })}
        >
          <option value="desc">{t('common.latest')}</option>
          <option value="asc">{t('common.oldest')}</option>
        </FormSelect>
      </div>
    </div>
  );
}
