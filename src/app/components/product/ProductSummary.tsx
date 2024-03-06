'use client';

// React
import React, {
  ChangeEvent,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';

// Next
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Types
import {
  TProductCommonProps,
  TProductOther,
  TProductOverview,
  TProductPrice,
  TProductQtyInput,
} from '@/types/product.type';

// Components
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { BaseQtyInput } from '@/app/components/base';
import toast from 'react-hot-toast';

// Utils
import clsx from 'clsx';
import { commonImageProps } from '@/utils/common.util';

// Locale
import { useI18n } from '@/locales/client';
import { getLang } from '@/utils/locale.util';
import useLangClient from '@/hooks/useLangClient';

// Store
import useCompareStore from '@/store/compare.store';
import useWishlistStore from '@/store/wishlist.store';
import useEnquiryStore from '@/store/enquiry.store';
import useModalCompareStore from '@/store/modal-compare.store';

function ProductSummary(props: Readonly<TProductCommonProps>) {
  const { product } = props;

  // Hooks
  const t = useI18n();
  const { isAr } = useLangClient();
  const params = useParams();

  // For side information
  const [showAllDesc, setShowAllDesc] = useState<boolean>(false);
  const [showAllPrices, setShowAllPrices] = useState<boolean>(false);
  const [showAllOptions, setShowAllOptions] = useState<boolean>(false);
  const [showAllSelected, setShowAllSelected] = useState<boolean>(false);

  // For action toggle
  const [actionToggle, setActionToggle] = useState<string>('');

  // Handle Selected
  const [selectOpt, setSelectOpt] = useState<string[]>([]);

  // Store
  const { addItem: addItemToCompare, clear: clearItemsCompared } =
    useCompareStore();
  const { onOpen: handleOpenModalCompare } = useModalCompareStore();
  const { addItem: addItemToWishlist } = useWishlistStore();
  const { addItem: addItemToEnquiry } = useEnquiryStore();

  /**
   * Handling actions wishlist or enquiry
   * @param type
   */
  const handleActionToggle = useCallback(
    (type: string) => {
      setActionToggle(actionToggle === type ? '' : type);
    },
    [actionToggle],
  );

  /**
   * Handle compare product
   */
  const handleRedirectToCompare = useCallback(() => {
    clearItemsCompared();

    product.otherProducts
      .filter((prd) => selectOpt.includes(prd.mpn))
      .forEach((prd) => {
        addItemToCompare(prd as TProductOverview);
      });

    handleOpenModalCompare();
  }, [
    addItemToCompare,
    clearItemsCompared,
    handleOpenModalCompare,
    product.otherProducts,
    selectOpt,
  ]);

  /**
   * Handle Check
   * @param e
   * @param item
   * @param index
   */
  const handleCheckOtherOpt = (
    e: ChangeEvent<HTMLInputElement>,
    item: TProductOther,
  ) => {
    const { checked } = e.target;
    const newValues = [...selectOpt];
    if (checked) {
      newValues.push(item.mpn);
    } else {
      const findIndex = newValues.findIndex((v) => v === item.mpn);
      if (findIndex !== -1) {
        newValues.splice(findIndex, 1);
      }
    }

    setSelectOpt(newValues);
  };

  /**
   * Handle Select All actions
   * @param e
   */
  const handleSelectAllOpt = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (product.otherProducts) {
        const { checked } = e.target;
        if (checked) {
          setSelectOpt(product.otherProducts.map((opt) => opt.mpn));
        } else {
          setSelectOpt([]);
        }
      }
    },
    [product.otherProducts],
  );

  /**
   * State select all
   */
  const selectAllChecked = useMemo(() => {
    return selectOpt.length === product.otherProducts.length;
  }, [product.otherProducts.length, selectOpt.length]);

  // Qty
  const [qtyInputted, setQtyInputted] = useState<TProductQtyInput[]>([]);
  const [qtyDetailInputted, setQtyDetailInputted] = useState<
    TProductQtyInput[]
  >([]);

  /**
   * Handle qty
   * @param type
   * @param item
   * @param val
   * @param index
   */
  const handleQtyInputted = useCallback(
    (type: string, item: TProductPrice, qty: number, index: number) => {
      const isFromPrice = type === 'price';
      const newQty = isFromPrice ? [...qtyInputted] : [...qtyDetailInputted];
      const findIndex = newQty.findIndex(
        (q) => q.type === type && q.index === index,
      );

      if (findIndex !== -1) {
        newQty[findIndex].qty = qty;
      } else {
        newQty.push({
          type,
          qty,
          item,
          index,
        });
      }

      if (isFromPrice) {
        setQtyInputted(newQty);
      } else {
        setQtyDetailInputted(newQty);
      }
    },
    [qtyDetailInputted, qtyInputted],
  );

  // Filter qty inputted more than zero
  const filteredQtyInputted = useMemo(
    () => qtyInputted.filter((item) => item.qty > 0),
    [qtyInputted],
  );

  // Filter qty detail inputted more than zero
  const filteredQtyDetailInputted = useMemo(
    () => qtyDetailInputted.filter((item) => item.qty > 0),
    [qtyDetailInputted],
  );

  /**
   * Get qty value
   * @param type
   * @param index
   */
  const getQtyValue = useCallback(
    (type: string, index: number) => {
      const isFromPrice = type === 'price';
      const newQty = isFromPrice ? qtyInputted : qtyDetailInputted;
      const findIndex = newQty.findIndex(
        (q) => q.type === type && q.index === index,
      );
      return findIndex !== -1 ? newQty[findIndex].qty ?? 0 : 0;
    },
    [qtyDetailInputted, qtyInputted],
  );

  // Get product code
  const productFamilyMpnCode = useMemo<string>(() => {
    let text =
      product.familyCode !== product.mpn ? `${product.familyCode} - ` : '';
    text += product.mpn ? `${product.mpn} - ` : '';

    return text.substring(0, text.length - 3);
  }, [product.familyCode, product.mpn]);

  return (
    <div className="product-summary custom-scrollbar">
      <div className="product-summary-logo">
        <Image
          {...commonImageProps(product.brand.image)}
          className="img-fluid mb-1"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      <div className="text-md text-bold color-black mb-2">
        {getLang(params, product.name)}
      </div>

      <p className="text-xs Mulish mb-1">
        {getLang(params, product.brand.name)} -{' '}
        <span className="text-medium">{productFamilyMpnCode}</span>
      </p>

      <ul className="product-code mb-2">
        <li>SKU : {product.code}</li>
        <li>EAN Code : {product.gtin?.ean || product.gtin?.upc || '-'}</li>
      </ul>

      <div className="product-excerpt">
        <div
          dangerouslySetInnerHTML={{
            __html: getLang(params, product.description),
          }}
        />
      </div>

      {getLang(params, product.description) && (
        <a
          role="presentation"
          onClick={() => setShowAllDesc(true)}
          className="text-xxs desc-prod color-red"
          style={{
            cursor: 'pointer',
          }}
        >
          {t('common.readMore')}
        </a>
      )}

      <hr />

      <div>
        {/* Price Options */}
        <section>
          {product.prices.slice(0, 3).map((item, index) => (
            <div
              className={clsx('price-list', index === 0 ? 'pt-0' : '')}
              key={item.itemIds?.[0]}
            >
              <div className="box-price">
                <div className="d-flex align-items-center gap-2">
                  {item.originalPrice && (
                    <div className="price-bofore sm">
                      {isAr ? (
                        <span>
                          {item.originalPrice} {t('common.sar')}
                        </span>
                      ) : (
                        <span>
                          {t('common.sar')} {item.originalPrice}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="price-after sm">
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
                <div className="ft-11">
                  {t('common.available')}: {item.stock}
                </div>
                <div className="ft-11">{item.estimatedDelivery}</div>
              </div>

              <div className="box-qty">
                <div className="ft-11 color-gray-60">{t('common.qty')}:</div>
                <BaseQtyInput
                  max={item.stock}
                  value={getQtyValue('price', index)}
                  onChange={(val) =>
                    handleQtyInputted('price', item, val, index)
                  }
                />
              </div>
            </div>
          ))}

          {product.prices.length > 3 && (
            <>
              <div className="d-flex justify-content-between align-items-center pt-2">
                <div className="text-13 color-dark text-semiBold">
                  {product.prices.length - 3}+ {t('product.priceOptions')}
                </div>
                <a
                  role="presentation"
                  onClick={() => setShowAllPrices(true)}
                  className="text-13 price-options color-red"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {t('common.showAll')}
                </a>
              </div>
              <hr className="my-2" />
            </>
          )}
        </section>

        {/* Other Options */}
        {product.otherProducts.length > 1 && (
          <section>
            <div className="d-flex justify-content-between align-items-center py-1">
              <div className="text-13 color-dark text-semiBold">
                {t('product.otherOptions')}
              </div>
            </div>
            <ul className="list-image-variant py-2">
              {product.otherProducts.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link href={`/shop/product/${item.slug}`}>
                    <div className="image-variant">
                      <Image
                        src={item.image.url}
                        width={47}
                        height={47}
                        className="img-fluid"
                        alt={item.name.en}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>
                    <div className="tool-tip-variant">
                      <div className="Mulish text-xxs color-black text-bold">
                        {item.mpn}
                      </div>
                      <div className="text-xxs color-gray-60">
                        {getLang(params, product.name)}
                      </div>
                      <div className="text-xxs color-gray-60">
                        Code: {item.gtin?.ean || item.gtin?.upc || '-'}
                      </div>
                      <div className=" text-xxs color-black text-semiBold text-uppercase">
                        {item.price}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}

              <li>
                <div className="image-variant">
                  <a
                    role="presentation"
                    className="text-13 options color-red text-center d-block"
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => setShowAllOptions(true)}
                  >
                    {t('common.showAll')}
                  </a>
                </div>
              </li>
            </ul>
            <hr />
          </section>
        )}

        {/* Selected */}
        <div className="d-flex justify-content-between align-items-center pt-1">
          <div className="text-xxs color-dark  text-semiBold">
            {filteredQtyInputted.length + filteredQtyDetailInputted.length}{' '}
            {t('product.productSelected')}
          </div>
          {filteredQtyInputted.length + filteredQtyDetailInputted.length >
            0 && (
            <a
              role="presentation"
              className="text-xxs color-red selected text-medium"
              style={{
                cursor: 'pointer',
              }}
              onClick={() => setShowAllSelected(true)}
            >
              {t('common.showDetail')}
            </a>
          )}
        </div>

        {/* Action */}
        <div className="row gx-2 py-3 list-btn">
          <div
            className={clsx(
              product.prices.length > 0 ? 'col-3' : 'col-12',
              'position-relative',
            )}
          >
            <div className="row gx-2">
              <div className="col-6">
                <button
                  type="button"
                  className="btn-outline-dark btn-icon whis w-100 btn-sm btn"
                  // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
                  onMouseOver={() => handleActionToggle('wishlist')}
                >
                  <span className="icon-ico-heart"></span>
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="btn-outline-dark btn-icon enq w-100 btn-sm btn"
                  // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
                  onMouseOver={() => handleActionToggle('enquiry')}
                >
                  <span className="icon-ico-info"></span>
                </button>
              </div>
            </div>
            <div className="row-hidden">
              <button
                className={clsx(
                  'btn btn-red w-100 hidden-button',
                  actionToggle === 'wishlist' ? 'actived' : '',
                )}
                // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
                onMouseOut={() => handleActionToggle('wishlist')}
                onClick={() => {
                  addItemToWishlist(product.id);
                  toast.success('Product has been added to wishlist');
                }}
              >
                {t('common.wishlist')}
              </button>
              <button
                className={clsx(
                  'btn btn-blue w-100 hidden-button',
                  actionToggle === 'enquiry' ? 'actived' : '',
                )}
                // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
                onMouseOut={() => handleActionToggle('enquiry')}
                onClick={() => {
                  addItemToEnquiry(product.id);
                  toast.success('Product has been added to enquiry list');
                }}
              >
                {t('common.enquiry')}
              </button>
            </div>
          </div>

          {product.prices.length > 0 && (
            <div className="col-9">
              <div className="row gx-2">
                <div className="col-6">
                  <Link
                    href="/shop/cart"
                    className={clsx('btn-secondary w-100 btn-sm btn', {
                      'text-arab': isAr,
                    })}
                  >
                    {t('common.addToCart')}
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    href="/shop/checkout"
                    className={clsx('btn-outline-dark w-100 btn-sm btn', {
                      'text-arab': isAr,
                    })}
                  >
                    {t('common.buyNow')}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <Offcanvas
        show={showAllDesc}
        onHide={() => setShowAllDesc(false)}
        placement="end"
      >
        <Offcanvas.Header
          closeButton
          dir={isAr ? 'rtl' : 'ltr'}
        >
          <Offcanvas.Title>{t('common.description')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-xs">
            <div
              dangerouslySetInnerHTML={{
                __html: getLang(params, product.description),
              }}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Select Price */}
      <Offcanvas
        show={showAllPrices}
        onHide={() => setShowAllPrices(false)}
        placement="end"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('product.selectPrice')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            dir={isAr ? 'rtl' : 'ltr'}
            className="d-flex flex-column h-100"
          >
            <div className="flex-fill overflow-y-auto custom-scrollbar">
              {product.prices.map((item, index) => (
                <div
                  className="price-list"
                  key={item.id}
                >
                  <div className="box-price">
                    <div className="d-flex align-items-center gap-2">
                      {item.originalPrice && (
                        <div className="price-bofore sm">
                          {isAr ? (
                            <span>
                              {item.originalPrice} {t('common.sar')}
                            </span>
                          ) : (
                            <span>
                              {t('common.sar')} {item.originalPrice}
                            </span>
                          )}
                        </div>
                      )}
                      <div className="price-after sm">
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
                    <div className="ft-11">
                      {t('common.available')}: {item.stock}
                    </div>
                    <div className="ft-11">{item.estimatedDelivery}</div>
                  </div>

                  <div className="box-qty">
                    <div className="ft-11 color-gray-60">{t('common.qty')}</div>
                    <BaseQtyInput
                      max={item.stock}
                      value={getQtyValue('price', index)}
                      onChange={(val) =>
                        handleQtyInputted('price', item, val, index)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Button
                variant="secondary"
                className="w-100"
                onClick={() => setShowAllPrices(false)}
              >
                {t('common.save')}
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Select Options */}
      <Offcanvas
        show={showAllOptions}
        onHide={() => setShowAllOptions(false)}
        placement="end"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('product.otherOptions')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column h-100">
            <div className="d-flex align-items-center justify-content-between">
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
            <div className="flex-fill overflow-y-auto overflow-x-hidden min-h-0 min-w-0 custom-scrollbar">
              {product.otherProducts.map((item) => (
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
                              onContextMenu={(e) => e.preventDefault()}
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
                            checked={selectOpt.includes(item.mpn)}
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
            <div>
              <Button
                disabled={selectOpt.length < 2}
                variant="secondary"
                className="w-100"
                onClick={handleRedirectToCompare}
              >
                {selectOpt.length < 2 ? (
                  <span>{t('common.compare')}</span>
                ) : (
                  <span>
                    {t('common.compare')} {selectOpt.length}{' '}
                    {t('common.product')}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Select Selected */}
      <Offcanvas
        show={showAllSelected}
        onHide={() => setShowAllSelected(false)}
        placement="end"
      >
        <Offcanvas.Header
          dir={isAr ? 'rtl' : 'ltr'}
          closeButton
        >
          <Offcanvas.Title>{t('product.productSelected')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            className="d-flex flex-column h-100"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            <div className="flex-fill">
              {qtyInputted.map((item: TProductQtyInput) => {
                if (item.qty === 0) {
                  return null;
                }

                return (
                  <div
                    className="price-list"
                    key={item.item.itemIds?.[0]}
                  >
                    <div className="box-price">
                      <div className="d-flex align-items-center gap-2">
                        {item.item.originalPrice && (
                          <div className="price-bofore sm">
                            {isAr ? (
                              <span>
                                {item.item.originalPrice} {t('common.sar')}
                              </span>
                            ) : (
                              <span>
                                {t('common.sar')} {item.item.originalPrice}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="price-after sm">
                          {isAr ? (
                            <span>
                              {item.item.price} {t('common.sar')}
                            </span>
                          ) : (
                            <span>
                              {t('common.sar')} {item.item.price}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="ft-11">
                        {t('common.available')}: {item.item.stock}
                      </div>
                      <div className="ft-11">{item.item.estimatedDelivery}</div>
                    </div>

                    <div className="box-qty">
                      <div className="ft-11 color-gray-60">Qty :</div>
                      <BaseQtyInput
                        value={getQtyValue('price', item.index)}
                        max={item.item.stock}
                        onChange={(val) =>
                          handleQtyInputted('price', item.item, val, item.index)
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <Button
                variant="secondary"
                className="w-100"
                onClick={() => setShowAllSelected(false)}
              >
                {t('common.save')}
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default memo(ProductSummary);
