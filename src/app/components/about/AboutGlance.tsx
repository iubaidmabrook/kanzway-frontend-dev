'use client';

import { GLANCE_LIST } from '@/constant/common.constant';
import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';

export default function AboutGlance() {
  const { isAr } = useLangClient();
  const t = useI18n();
  return (
    <section
      className="about-glance-section"
      dir={isAr ? 'rtl' : ''}
    >
      <div className="container">
        <div className="row justify-content-between gy-3 align-items-center">
          <div className="col-lg-4 col-12">
            <h2 className="Mulish text-white text-extraBold">
              {t('about.glance.title')}
            </h2>
          </div>
          <div className="col-lg-5 col-12">
            <p className="text-md text-white">{t('about.glance.subtitle')}</p>
          </div>
        </div>
        <div className="mt-lg-5 mt-2 row g-5">
          {GLANCE_LIST.map((glance, i) => (
            <div
              key={glance.label}
              className="col-lg-2 col-4 text-center d-flex flex-column gap-4"
            >
              <h3 className="color-red text-semiBold Mulish">
                {/* @ts-expect-error */}
                {t(`about.glance.items.${i}.value`)}
              </h3>
              <p className="text-white text-xs">
                {/* @ts-expect-error */}
                {t(`about.glance.items.${i}.label`)}
              </p>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between align-items-center glance-join">
          <div className="col-lg-8">
            <p className="text-md color-white">
              {t('about.glance.join.description')}
            </p>
          </div>
          <a
            href="register.html"
            className="btn btn-primary"
          >
            {t('about.glance.join.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
