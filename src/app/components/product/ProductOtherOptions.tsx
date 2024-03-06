'use client';

import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import useCompareStore from '@/store/compare.store';
import useDrawerOtherOptionsStore from '@/store/drawer-other-options.store';
import useModalCompareStore from '@/store/modal-compare.store';
import { TProductOverview } from '@/types/product.type';
import { getLang } from '@/utils/locale.util';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';

export default function ProductOtherOptions() {
  // hooks
  const { products, isOpen, onClose } = useDrawerOtherOptionsStore();
  const { isAr } = useLangClient();
  const t = useI18n();
  const params = useParams;
  // const router = useRouter();
  const { addItem: addItemToCompare, clear: clearItemsCompared } =
    useCompareStore();
  const { onOpen } = useModalCompareStore();
  // const searchParams = useSearchParams();
  // const urlSearchParams = useMemo(() => new URLSearchParams(), []);

  // state
  const [selectOpt, setSelectOpt] = useState<number[]>([]);

  /**
   * Handle Select All actions
   * @param e
   */
  const handleSelectAllOpt = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (products) {
        const { checked } = e.target;
        if (checked) {
          setSelectOpt(products.map((opt) => opt.id));
        } else {
          setSelectOpt([]);
        }
      }
    },
    [products],
  );

  /**
   * Handle Check
   * @param e
   * @param item
   * @param index
   */
  const handleCheckOtherOpt = (
    e: ChangeEvent<HTMLInputElement>,
    item: TProductOverview,
  ) => {
    const { checked } = e.target;
    const newValues = [...selectOpt];
    if (checked) {
      newValues.push(item.id);
    } else {
      const findIndex = newValues.findIndex((v) => v === item.id);
      if (findIndex !== -1) {
        newValues.splice(findIndex, 1);
      }
    }

    setSelectOpt(newValues);
  };

  const selectAllChecked = useMemo(() => {
    return selectOpt.length === products.length;
  }, [products.length, selectOpt.length]);

  // const handleRedirectToCompare = useCallback(() => {
  //   selectOpt.map((opt) =>
  //     urlSearchParams.append('productIds', opt.toString()),
  //   );
  //   window.location.href = `/compare?${urlSearchParams}`;
  // }, [urlSearchParams, selectOpt]);

  const handleRedirectToCompare = useCallback(() => {
    clearItemsCompared();

    products
      .filter((prd) => selectOpt.includes(prd.id))
      .forEach((prd) => {
        addItemToCompare(prd as TProductOverview);
      });

    // router.push('/compare');
    onOpen();
    onClose();
  }, [
    addItemToCompare,
    clearItemsCompared,
    // router,
    onOpen,
    selectOpt,
    products,
    onClose,
  ]);

  return (
    products.length >= 0 && (
      <Offcanvas
        show={isOpen}
        onHide={onClose}
        placement="end"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('product.otherOptions')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=" light-scrollbar py-0 d-flex flex-column">
          <div className="sticky-top bg-white py-2">
            <div className="d-flex align-items-center justify-content-between ">
              <div className="text-xxs color-dark text-medium">
                {t('common.selectAll')}
              </div>
              <div className="d-flex align-items-center">
                <Form.Check
                  onChange={handleSelectAllOpt}
                  checked={selectAllChecked}
                />
              </div>
            </div>
          </div>
          <div className="flex-fill">
            {products.map((item) => (
              <div
                className="option-list"
                key={item.id}
              >
                <div className="row gx-1">
                  <div className="col-8">
                    <div className="d-flex align-items-center gap-2">
                      <div className="img-opt">
                        <Link href={`/shop/product/${item.slug}`}>
                          <Image
                            src={item.image.url}
                            width={54}
                            height={54}
                            className="img-fluid"
                            alt={item.name.en}
                          />
                        </Link>
                      </div>
                      <div className="opt-meta">
                        <Link
                          href={`/shop/product/${item.slug}`}
                          className="text-xxs Mulish color-dark d-inline-block text-bold"
                        >
                          {item.mpn}
                        </Link>
                        <Link href={`/shop/product/${item.slug}`}>
                          <div className="text-xxxs color-gray-60 text-hidden">
                            {getLang(params, item.name)}
                          </div>
                          <div className="text-xxxs color-gray-60 text-hidden">
                            Code: {item.gtin?.ean || item.gtin?.upc || '-'}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex h-100 justify-content-between flex-column">
                      <div className="d-flex justify-content-end">
                        <Form.Check
                          checked={selectOpt.includes(item.id)}
                          onChange={(e) => handleCheckOtherOpt(e, item)}
                        />
                      </div>
                      <div className="row gx-1 align-items-center">
                        <div className="col-5">
                          <div className="d-flex align-items-center gap-2 justify-content-end  hidden-action">
                            <div className="opt-whis">
                              <input
                                type="checkbox"
                                id="w-1"
                                className="hidden"
                              />
                              <label htmlFor="w-1"></label>
                            </div>
                            <a
                              href="#/"
                              className="cart-w"
                            >
                              <span className="icon-ico-cart"></span>
                            </a>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="text-xxs color-dark text-semiBold text-uppercase text-right d-block">
                            {isAr ? (
                              <span>
                                {item.price} {t('common.sar')}
                              </span>
                            ) : (
                              <span>
                                {t('common.sar')} {item.price}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" sticky-bottom bg-white py-3">
            <Button
              disabled={selectOpt.length < 2}
              variant="secondary"
              className="w-100 sticky-bottom"
              onClick={handleRedirectToCompare}
            >
              {selectOpt.length < 2 ? (
                <span>{t('common.compare')}</span>
              ) : (
                <span>
                  {t('common.compare')} {selectOpt.length} {t('common.product')}
                </span>
              )}
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    )
  );
}
