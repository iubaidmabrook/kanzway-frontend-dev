'use client';

// React
import { useCallback, useEffect, useState } from 'react';

// Next
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Locale
import { useI18n } from '@/locales/client';
import useLangClient from '@/hooks/useLangClient';

// Utils
import clsx from 'clsx';
import { getLang } from '@/utils/locale.util';

// Types
import { TProductCommonProps } from '@/types/product.type';

export default function ProductBreadcrumbs(
  props: Readonly<TProductCommonProps>,
) {
  const { product } = props;

  // Hooks
  const params = useParams();

  // Locale
  const t = useI18n();
  const { isAr } = useLangClient();

  const [showOverflowDot, setShowOverflowDot] = useState<boolean>(false);
  const [showForceNormally, setShowForceNormally] = useState<boolean>(true);

  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    function updateBreadcrumbs() {
      const breadcrumbsContainer: HTMLDivElement | null =
        document.querySelector('#product-breadcrumbs-container');
      const breadcrumbsList = document.querySelector('#product-breadcrumbs');

      if (breadcrumbsContainer && breadcrumbsList) {
        const breadcrumbsItems = Array.from(
          breadcrumbsList.children,
        ) as HTMLLIElement[];

        // Check if breadcrumbs overflow the container
        const containerWidth = breadcrumbsContainer.offsetWidth;
        const breadcrumbsWidth = breadcrumbsList.scrollWidth;
        const overflow = breadcrumbsWidth > containerWidth;

        // If overflow, hide some items and show ellipsis
        if (overflow) {
          const availableWidth = containerWidth;
          let totalWidth = 0;

          // eslint-disable-next-line no-plusplus
          for (let i = breadcrumbsItems.length - 1; i >= 0; i--) {
            const itemWidth = breadcrumbsItems[i].offsetWidth;
            totalWidth += itemWidth;

            if (totalWidth > availableWidth) {
              breadcrumbsItems[i].classList.add('hidden');
            } else {
              breadcrumbsItems[i].classList.remove('hidden');
            }
          }
        } else {
          // If no overflow, show all items and remove ellipsis
          breadcrumbsItems.forEach((item) => {
            item.classList.remove('hidden');
          });
          breadcrumbsContainer.classList.remove('ellipsis');
        }
        setShowOverflowDot(overflow);
      }
    }

    window.addEventListener('resize', updateBreadcrumbs);

    return () => {
      window.removeEventListener('resize', updateBreadcrumbs);
    };
  }, []);

  useEffect(() => {
    if (isClient) {
      window.dispatchEvent(new Event('resize'));
    }
  }, [isClient]);

  /**
   * Handle breadcrumb view to normally
   */
  const handleForceNormally = useCallback(() => {
    setShowForceNormally(false);
    window.dispatchEvent(new Event('resize'));
  }, []);

  if (!isClient) {
    return <div className="container">Get Breadcrumbs...</div>;
  }

  return (
    <div
      className="container"
      id="product-breadcrumbs-container"
    >
      <nav>
        <ol
          id="product-breadcrumbs"
          dir={isAr ? 'rtl' : ''}
          className={clsx(
            'product-breadcrumb breadcrumb pt-sm-3 pt-lg-4',
            !showForceNormally ? 'normally' : '',
          )}
        >
          {showOverflowDot && (
            <li>
              <button
                onClick={handleForceNormally}
                className="product-breadcrumb-button"
              >
                ...
              </button>
            </li>
          )}
          <li
            className={clsx('breadcrumb-item', {
              arab: isAr,
            })}
          >
            <Link href="/">{t('common.home')}</Link>
          </li>
          <li
            className={clsx('breadcrumb-item', {
              arab: isAr,
            })}
            aria-current="page"
          >
            <Link href="/shop">{t('header.menu.shop')}</Link>
          </li>
          {product.categoryNames.map((cat) => (
            <li
              key={cat.en}
              className={clsx('breadcrumb-item', {
                arab: isAr,
              })}
              aria-current="page"
            >
              {getLang(params, cat)}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
