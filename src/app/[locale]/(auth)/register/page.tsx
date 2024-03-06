// React
import React from 'react';

// Next
import { Metadata } from 'next';
import Link from 'next/link';

// Types
import { TAuthRegisterLinkItem } from '@/types/auth.type';

// Locale
import { getCurrentLocale, getScopedI18n } from '@/locales/server';

// Components
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// Utils
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Kanzway - Register',
  description: '',
  keywords: '',
};

const REGISTER_LINK_TYPES: Array<TAuthRegisterLinkItem> = [
  {
    label: 'individual',
    route: '/register/individual',
    tooltipText: 'tooltipIndividual',
  },
  {
    label: 'company',
    route: '/register/company',
    tooltipText: 'tooltipCompany',
  },
  {
    label: 'manufacture',
    route: '/register/manufacture',
    tooltipText: 'tooltipManufacture',
  },
  {
    label: 'seller',
    route: '/register/seller',
    tooltipText: 'tooltipSeller',
  },
];

export default async function RegisterInitialPage() {
  const locale = getCurrentLocale();
  const t = await getScopedI18n('register');

  return (
    <section className="main-inner">
      <div className="container">
        <div className="login-wrapper">
          <div className="col-lg-4 mx-auto">
            <h4 className="Mulish color-dark text-bold mb-4 text-center">
              {t('title')}
            </h4>
            <p className="text-center text-xs color-dark mb-4">
              {t('subTitle')}
            </p>

            {REGISTER_LINK_TYPES.map((item) => {
              return (
                <OverlayTrigger
                  key={item.label}
                  placement="right-end"
                  overlay={
                    <Tooltip>
                      {t(`registerLinkType.${item.tooltipText}` as any)}
                    </Tooltip>
                  }
                >
                  <Link
                    href={`/${locale}/${item.route}`}
                    className="register-box mb-3"
                  >
                    <div className={clsx('register-icon', item.label)}>
                      {t(`registerLinkType.${item.label}` as any)}
                    </div>
                  </Link>
                </OverlayTrigger>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
