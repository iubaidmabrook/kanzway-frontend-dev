'use client';

import CartItem from '@/app/components/cart/CartItem';
import SelectShippingCourier from '@/app/components/checkout/SelectShippingCourier';
import ModalAddAddress from '@/app/components/modal/ModalAddAddress';
import ModalPayment from '@/app/components/modal/ModalPayment';
import ModalSelectAddress from '@/app/components/modal/ModalSelectAddress';
import ModalSelectPayment from '@/app/components/modal/ModalSelectPayment';
import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import useModalAddAddressStore from '@/store/modal-add-address.store';
import useModalSelectAddressStore from '@/store/modal-select-address.store';
import useModalSelectPaymentStore from '@/store/modalSelectPayment';
import clsx from 'clsx';
import { Button } from 'react-bootstrap';

export default function CheckoutPage() {
  const { onOpen: onOpenModalAddAddress } = useModalAddAddressStore();
  const { onOpen: onOpenModalSelectAddress } = useModalSelectAddressStore();
  const { onOpen: onOpenModalSelectPayment } = useModalSelectPaymentStore();
  const { isAr } = useLangClient();
  const t = useI18n();

  const isLogin = true;
  return (
    <>
      <section
        className="main-inner"
        dir={isAr ? 'rtl' : ''}
      >
        <div className="container">
          <div className="action-wrapper">
            <p className="color-dark text-bold Mulish pt-5">
              {t('common.checkout')}
            </p>
            <div className="row g-4">
              <div className="col-lg-8 col-sm-8">
                <div
                  className={clsx('d-flex justify-content-start mb-3', {
                    'justify-content-between': isLogin,
                  })}
                >
                  <div className="text-bold color-dark text-xs">
                    {t('checkout.shippingAddress')}
                  </div>
                  {isLogin ? (
                    <a
                      type="button"
                      role="presentation"
                      className="color-red text-xs text-bold"
                      onClick={onOpenModalSelectAddress}
                    >
                      {t('checkout.editAddress')}
                    </a>
                  ) : null}
                </div>

                <div className="col-lg-5 col-sm-6">
                  {isLogin ? (
                    <>
                      <div className="text-xs color-dark mb-2">
                        <strong>Andri - 0878 8989 8989</strong>
                      </div>
                      <p className="text-xs">
                        Jalan Sukabumi, Dekat KFC Jawa Barat, Kab Bandung,
                        Cimeunyan, 40141
                      </p>
                    </>
                  ) : (
                    <button
                      className="btn btn-red w-100"
                      type="button"
                      onClick={onOpenModalAddAddress}
                    >
                      {t('checkout.inputShippingAddress')}
                    </button>
                  )}
                </div>
                {isLogin ? (
                  <>
                    <hr className="my-4" />
                    <div className="col-lg-5">
                      <div className="text-bold color-dark text-xs mb-3">
                        {t('checkout.shippingCourier')}
                      </div>
                      <SelectShippingCourier />
                    </div>
                  </>
                ) : null}
                {isLogin ? (
                  <>
                    <hr className="my-4" />
                    <CartItem />
                  </>
                ) : (
                  <>
                    <hr className="my-4" />
                    <CartItem />
                    <CartItem />
                    <SelectShippingCourier />
                    <hr className="my-4" />
                    <CartItem />
                    <SelectShippingCourier />
                    <hr className="my-4" />
                  </>
                )}
              </div>
              <div className="col-lg-4 col-sm-4">
                <div className="box-checkout">
                  <div className="row gx-2">
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Promo code"
                        id=""
                        defaultValue=""
                      />
                    </div>
                    <div className="col-4">
                      <button
                        className="btn btn-red w-100"
                        type="button"
                      >
                        {t('common.apply')}
                      </button>
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="d-flex justify-content-between align-items-center my-3">
                    <div className="text-xs">Price (1 product)</div>
                    <div className="text-xs color-dark">SAR 240</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-3">
                    <div className="text-xs">{t('common.promo')}</div>
                    <div className="text-xs color-dark">SAR 0</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-3">
                    <div className="text-xs">{t('checkout.shippingCost')}</div>
                    <div className="text-xs color-dark">SAR 0</div>
                  </div>
                  <hr className="my-3" />
                  <div className="d-flex justify-content-between align-items-center my-3">
                    <div className="text-xs">{t('common.total')}</div>
                    <div className="text-bold color-dark">SAR 240</div>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="check-1"
                    />
                    <label
                      className="text-13 color-dark"
                      htmlFor="check-1"
                    >
                      I have read and accept terms and conditions
                    </label>
                  </div>
                  <Button
                    // href="checkout.html"
                    variant="secondary"
                    className="w-100"
                    onClick={onOpenModalSelectPayment}
                  >
                    {t('checkout.proceedToCheckout')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalAddAddress />
      <ModalSelectAddress />
      <ModalSelectPayment />
      <ModalPayment />
    </>
  );
}
