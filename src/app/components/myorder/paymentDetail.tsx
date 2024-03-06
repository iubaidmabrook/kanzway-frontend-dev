/* eslint-disable no-plusplus */
import { useI18n } from '@/locales/client';
import { TOrderDetail, TOrderDetailItems } from '@/types/order.type';
import { useState } from 'react';

function PaymentDetail({ order }: { order: TOrderDetail }) {
  const t = useI18n();
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  const getTotalProduct = () => {
    const orderItems: TOrderDetailItems[] = order.items;
    let totalProduct: number = 0;

    for (let i = 0; i < orderItems.length; i++) {
      totalProduct += orderItems[i].products.length;
    }

    return totalProduct;
  };

  return (
    <div className="box-border bg-white rounded-2 p-3 mb-3">
      <span
        className={`${isCollapse ? 'collapsed' : ''} link-collapse`}
        data-bs-toggle="collapse"
        role="presentation"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        {t('profile.paymentDetail')}
      </span>
      <div
        className={`${isCollapse ? '' : 'show'} collapse`}
        id="link-collapse-1"
      >
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="text-xs">{t('profile.paymentMethode')}</div>
          <div className="text-xs color-dark">{order.paymentMethod.name}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="text-xs">
            {`${t('common.price')} (${getTotalProduct()} ${t('common.product')})`}
          </div>
          <div className="text-xs color-dark">{`${t('common.sar')} ${order.subtotal}`}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="text-xs">{t('common.promo')}</div>
          <div className="text-xs color-dark">{`${t('common.sar')} ${order.discount}`}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="text-xs">{t('checkout.shippingCost')}</div>
          <div className="text-xs color-dark">{`${t('common.sar')} ${order.shippingCost}`}</div>
        </div>
        <hr className="my-3" />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="text-xs">{t('common.total')}</div>
          <div className="text-bold color-dark">{`${t('common.sar')} ${order.grandTotal}`}</div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetail;
