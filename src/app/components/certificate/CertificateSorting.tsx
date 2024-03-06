'use client';

// React
import React, { ChangeEvent, useCallback, useMemo } from 'react';

// Components
import { Form } from 'react-bootstrap';

// Next
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next13-progressbar';

// Lang
import useLangClient from '@/hooks/useLangClient';
import { useI18n, useScopedI18n } from '@/locales/client';

// Utils
import { clsx } from 'clsx';

function CertificateSorting() {
  // locales
  const t = useI18n();
  const tCommon = useScopedI18n('common');
  const { isAr } = useLangClient();

  // hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const sort = searchParams.get('sort') ?? 'id';
  const order = searchParams.get('order') ?? 'desc';

  /**
   * handle sort
   * @param e
   */
  const handleSort = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value.split('|');
      urlSearchParams.set('sort', value[0]);
      urlSearchParams.set('order', value[1]);

      router.replace(`/certification?${urlSearchParams}`);
    },
    [router, urlSearchParams],
  );

  return (
    <div className="row justify-content-between mb-4 align-items-center">
      <div className="col-xl-6 col-lg-8 col-sm-8 mb-3 mb-sm-0">
        <h5 className="Mulish text-bold color-dark">
          {t('certification.allCertificates')}
        </h5>
      </div>
      <div className="col-xl-2 col-lg-3 col-sm-3">
        <Form.Select
          value={`${sort}|${order}`}
          onChange={handleSort}
          className={clsx(isAr ? 'ps-5' : 'pe-5', { arab: isAr })}
        >
          <option value="id|desc">{tCommon('latest')}</option>
          <option value="id|asc">{tCommon('oldest')}</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default CertificateSorting;
