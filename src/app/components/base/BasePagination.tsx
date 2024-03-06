'use client';

import useLangClient from '@/hooks/useLangClient';
import { useScopedI18n } from '@/locales/client';
import { TBasePaginationProps } from '@/types/base-component.type';
import clsx from 'clsx';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next13-progressbar';
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Form } from 'react-bootstrap';

export default function BasePagination({
  currentPage = 1,
  totalPage,
}: TBasePaginationProps) {
  // hooks
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  // locale
  const t = useScopedI18n('common');
  const { isAr } = useLangClient();

  // ref
  const inputRef = useRef<HTMLInputElement>(null);

  // state
  const [customPage, setCustomPage] = useState<number>(currentPage);

  // handle change value
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      let numericValue = Number(value.replace(/[^0-9]/g, ''));

      if (numericValue > totalPage) {
        numericValue = totalPage;
      }

      setCustomPage(+numericValue);
    },
    [totalPage],
  );

  // handle on page change
  const onChange = useCallback(() => {
    if (customPage > totalPage) return;
    if (customPage === 0) return;
    urlSearchParams.set('page', customPage.toString());
    router.push(`${pathname}?${urlSearchParams.toString()}`);
  }, [urlSearchParams, router, customPage, pathname, totalPage]);

  // handle on key enter
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onChange();
        if (inputRef.current) {
          inputRef.current.blur();
        }
      }
    },
    [onChange],
  );

  // handle previous page
  const handlePrev = useCallback(() => {
    urlSearchParams.set('page', (currentPage - 1).toString());
    router.push(`${pathname}?${urlSearchParams}`);
  }, [urlSearchParams, currentPage, pathname, router]);

  // handle next page
  const handleNext = useCallback(() => {
    urlSearchParams.set('page', (currentPage + 1).toString());
    router.push(`${pathname}?${urlSearchParams}`);
  }, [urlSearchParams, currentPage, pathname, router]);

  // assign real value to local value
  useEffect(() => {
    setCustomPage(currentPage);
  }, [currentPage]);

  return (
    <div className="d-flex justify-content-center">
      <ul className="main-pagination">
        <li>
          <button
            disabled={currentPage <= 1}
            onClick={handlePrev}
            className="link-pagination"
          >
            <span
              className={clsx(
                isAr ? 'icon-ico-chev-right' : 'icon-ico-chev-left',
              )}
            />
          </button>
        </li>
        <li>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <div className="color-gray-60">{t('page')}</div>
            <div className="input-pagination">
              <Form.Control
                type="text"
                name="customPage"
                value={customPage}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
              />
            </div>
            <div className="color-gray-60">
              {t('of')} {totalPage}
            </div>
          </div>
        </li>
        <li>
          <button
            disabled={currentPage >= totalPage}
            onClick={handleNext}
            className="link-pagination"
          >
            <span
              className={clsx(
                isAr ? 'icon-ico-chev-left' : 'icon-ico-chev-right',
              )}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
