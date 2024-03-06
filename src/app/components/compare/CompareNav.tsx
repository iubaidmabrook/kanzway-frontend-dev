'use client';

import useCompareScrollPosition from '@/hooks/useCompareScrollPosition';
import useCompareScrollspy from '@/hooks/useCompareScrollSpy';
import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import { TProductSubNav } from '@/types/product-old.type';
import { TProduct } from '@/types/product.type';
import { getLang } from '@/utils/locale.util';
import clsx from 'clsx';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';

type TCompareNavProps = {
  compare: TProduct[];
};

export default function CompareNav({ compare }: TCompareNavProps) {
  // hooks
  const params = useParams();
  const scrollPosition = useCompareScrollPosition();

  // locale
  const t = useI18n();
  const { isAr } = useLangClient();

  // nav from product (dynamic)
  const navFromProduct: TProductSubNav = useMemo(() => [], []);
  compare.map((product) =>
    product.properties.map((property) => {
      const id = `section-${property.name.en}`
        .replace(/\s+/g, '-')
        .toLowerCase();
      if (!navFromProduct.map((nav) => nav.id).includes(id)) {
        navFromProduct.push({ id, title: getLang(params, property.name) });
      }

      return property;
    }),
  );

  // Actual Nav
  const actualNav = useMemo<TProductSubNav>(() => {
    return [
      { id: 'section-photo', title: t('common.photo') },
      ...navFromProduct,
      { id: 'section-document', title: t('common.document') },
      { id: 'section-review', title: t('common.review') },
    ];
  }, [navFromProduct, t]);

  const ids: string[] = actualNav.map((p) => p.id);

  const activeId = useCompareScrollspy(ids, 496);

  // handle scroll to top
  const handleScrollToTop = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation();
      e.preventDefault();

      const modalCompare = document.querySelector('#modal-compare');

      if (modalCompare) {
        modalCompare.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [],
  );

  // handle scroll to element
  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.stopPropagation();
      e.preventDefault();

      const modalCompare = document.querySelector('#modal-compare');
      const el = document.getElementById(id);
      if (modalCompare) {
        if (el) {
          modalCompare.scrollTo({
            top: el.offsetTop - 316,
            behavior: 'smooth',
          });
        }
      }
    },
    [],
  );

  return (
    <>
      <div
        id="sticky-2"
        dir={isAr ? 'rtl' : ''}
        className={clsx(
          'sticky-top sticky-nav compare sticky-nav-compare mt-3 bg-white',
          { actived: scrollPosition > 50 },
          {
            shadowed: scrollPosition > 150,
          },
        )}
      >
        <div className="small-nav">
          <div className="container  px-xl-5 px-3">
            <div className="d-flex justify-content-between align-items-center gap-3">
              <ul className="small-nav-menu flex-grow-1 no-scrollbar">
                {actualNav.map((item, index) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={clsx(
                        activeId === item.id || (!activeId && index === 0)
                          ? 'active'
                          : '',
                      )}
                      onClick={(e) => handleScrollTo(e, item.id)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="d-flex align-items-center gap-3 me-4">
                <div
                  className={clsx(
                    'topthetop',
                    scrollPosition > 150 ? 'show' : '',
                  )}
                >
                  <a
                    href="#top"
                    className="active"
                    onClick={handleScrollToTop}
                  >
                    {t('common.toTheTop')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container p-xl-5 p-3 py-5 pb-0 pb-xl-0 bg-white"
        style={{ marginTop: '-56px' }}
        dir={isAr ? 'rtl' : ''}
      >
        <h4 className="Mulish text-bold color-dark">{t('compare.title')}</h4>
        <p className="text-xs py-3">
          {t('compare.subtitle', { length: compare.length })}
        </p>
      </div>
    </>
  );
}
