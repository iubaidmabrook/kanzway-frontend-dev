'use client';

// React
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

// Next
import { useParams } from 'next/navigation';

// Hooks
import useScrollspy from '@/hooks/useScrollSpy';

// Locale
import { useI18n } from '@/locales/client';
import { getLang } from '@/utils/locale.util';

// Utils
import clsx from 'clsx';

// Type
import { TProductCommonProps, TProductSubNav } from '@/types/product.type';

function ProductDetailNav(props: Readonly<TProductCommonProps>) {
  const { product } = props;

  // Hooks
  const params = useParams();
  const t = useI18n();

  // Nav from product (dynamic)
  const navFromProduct: TProductSubNav = useMemo(
    () =>
      product.properties.map((property) => ({
        id: `section-${property.name.en}`.replace(/\s+/g, '-').toLowerCase(),
        title: getLang(params, property.name),
      })),
    [params, product.properties],
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

  const activeId = useScrollspy(ids, 182);

  /**
   * Handle scroll to ids
   * @param e
   * @param id
   */
  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.stopPropagation();
      e.preventDefault();

      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 170,
        });
      }
    },
    [],
  );

  /**
   * Scroll to top
   * @param e
   */
  const handleScrollToTop = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation();
      e.preventDefault();

      window.scrollTo({ top: 0 });
    },
    [],
  );

  // Add shadow after scroll level
  const [withShadow, setWithShadow] = useState<boolean>(false);
  useEffect(() => {
    const scrollEvent = () => {
      setWithShadow(window.pageYOffset > 150);
    };
    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <div className={clsx('sticky-nav', withShadow ? 'shadowed' : '')}>
      <div className="small-nav">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="small-nav-menu product-detail">
              {actualNav.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={clsx(
                      activeId === item.id || (!activeId && index === 0)
                        ? 'active'
                        : '',
                    )}
                    onClick={(e) => handleScrollTo(e, item.id)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className={clsx('topthetop', withShadow ? 'show' : '')}>
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
  );
}

export default memo(ProductDetailNav);
