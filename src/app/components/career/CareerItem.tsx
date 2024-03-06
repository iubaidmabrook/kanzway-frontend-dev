'use client';

// React
import React from 'react';

// Next
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Locales
import { useI18n } from '@/locales/client';
import { getLang } from '@/utils/locale.util';

// Types
import { TCareerItemProps } from '@/types/career.type';

function CareerItem(props: Readonly<TCareerItemProps>) {
  const { career } = props;

  const params = useParams();
  const t = useI18n();

  return (
    <div className="career-items">
      <div className="career-info">
        <Link
          href={`/career/detail/${career.slug}`}
          className="Mulish d-inline-block color-dark text-xxl text-semiBold mb-2"
        >
          {getLang(params, career.title)}
        </Link>
        <ul className="career-meta">
          <li>{getLang(params, career.job_field.name)}</li>
          <li>{getLang(params, career.job_type)}</li>
          <li>{getLang(params, career.job_location)}</li>
        </ul>
      </div>
      <Link
        href={`/career/detail/${career.slug}`}
        className="Mulish text-xxl color-red text-semiBold"
      >
        {t('common.apply')}
      </Link>
    </div>
  );
}

export default CareerItem;
