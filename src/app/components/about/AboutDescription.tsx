'use client';

import { useI18n } from '@/locales/client';
import React from 'react';

export default function AboutDescription() {
  const t = useI18n();
  return (
    <section className="main-inner pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="heading-list-product color-dark Mulish pt-sm-4 pt-xl-5 mb-3 mb-sm-4">
              {t('about.title')}
            </div>
            <div className="text-md text-center color-dark mt-5 lh-lg d-flex flex-column gap-3">
              <p>{t('about.description.0')}</p>
              <p>{t('about.description.1')}</p>
              <p>{t('about.description.2')}</p>
              <p>{t('about.description.3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
