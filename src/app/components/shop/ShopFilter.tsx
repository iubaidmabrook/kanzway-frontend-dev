'use client';

import useLangClient from '@/hooks/useLangClient';
import { useScopedI18n } from '@/locales/client';
import usePopupFilterStore from '@/store/popup-filter.store';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next13-progressbar';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

export default function ShopFilter({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useScopedI18n('common');
  const { isOpen, onClose } = usePopupFilterStore();
  const searchParams = useSearchParams();
  const { isAr } = useLangClient();
  const router = useRouter();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const handleReset = useCallback(() => {
    urlSearchParams.delete('brands');
    urlSearchParams.delete('categories');
    urlSearchParams.delete('minPrice');
    urlSearchParams.delete('maxPrice');
    router.push(`/shop?${urlSearchParams}`);
  }, [urlSearchParams, router]);

  useEffect(() => {
    function handleResize() {
      setIsPopup(window.innerWidth < 991);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="col-xl-3 col-lg-4 d-none d-lg-block">
      <div
        className={clsx('d-flex flex-column', { show: isOpen })}
        style={{
          position: 'sticky',
          top: '80px',
          maxHeight: 'calc(100vh - 80px)',
          // overflowY: 'auto',
        }}
      >
        {/* <div
          id="closed-filter"
          className="d-flex justify-content-end mt-2"
        >
          <button
            className="btn btn-close close-filter btn-nohover p-0"
            onClick={onClose}
          />
        </div> */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-semiBold color-dark">{t('filter')}</div>
          {searchParams.get('brands') ||
          searchParams.get('categories') ||
          searchParams.get('minPrice') ||
          searchParams.get('maxPrice') ? (
            <button
              className="btn btn-reset btn-nohover px-0 color-red"
              type="button"
              onClick={handleReset}
            >
              {t('reset')}
            </button>
          ) : null}
        </div>
        {isPopup ? (
          <Offcanvas
            show={isOpen}
            onHide={onClose}
            placement={isAr ? 'end' : 'start'}
            dir={isAr ? 'rtl' : 'ltr'}
          >
            <Offcanvas.Header closeButton>
              <div className="" />
            </Offcanvas.Header>
            <Offcanvas.Body className="light-scrollbar">
              <div className="">
                <div className="d-flex mt-0 align-items-center justify-content-between">
                  <div className="text-semiBold color-dark">{t('filter')}</div>
                  <button
                    className="btn btn-reset btn-nohover px-0 color-red"
                    type="button"
                    onClick={handleReset}
                  >
                    {t('reset')}
                  </button>
                </div>
                {children}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        ) : (
          <div
            className=" flex-shrink-1 shop-filter"
            style={{ overflowY: 'auto' }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
