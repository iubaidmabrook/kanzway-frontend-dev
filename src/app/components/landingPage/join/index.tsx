'use client';

import { usePathname } from 'next/navigation';
import { useI18n } from '@/locales/client';
import useLangClient from '@/hooks/useLangClient';

function LpJoint() {
  const pathname = usePathname();
  const t = useI18n();
  const { isAr } = useLangClient();

  return (
    <section className="join-section">
      <div
        className="container"
        dir={isAr ? 'rtl' : ''}
      >
        <div className="join-bg">
          <div className="col-xl-8 mx-auto text-center">
            <div className="col-xl-8 mx-auto mb-4 ">
              <h3 className="Mulish color-white text-extraBold text-center ">
                {t('join.title')}
              </h3>
            </div>
            <p className="text-md text-center color-white mb-4">
              {t('join.subTitle')}
            </p>
            <a
              href={`${pathname}/register`}
              className="btn btn-primary "
            >
              {t('join.joinNow')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LpJoint;
