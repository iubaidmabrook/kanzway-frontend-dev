import { useI18n } from '@/locales/client';
import { TRefundDetail } from '@/types/order.type';
import { useState } from 'react';

function TotalRefund({ refund }: { refund: TRefundDetail }) {
  const t = useI18n();
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  const getProductPrices = () => {
    const refundItems = refund.items;

    return refundItems
      .map((items) => items.price * items.qty)
      .reduce((a, b) => a + b, 0);
  };

  return (
    <div className="box-border bg-white rounded-2 p-3 mb-3">
      <span
        className={`${isCollapse ? 'collapsed' : ''} link-collapse`}
        data-bs-toggle="collapse"
        role="presentation"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        {t('profile.refundTotal')}
      </span>
      <div
        className={`${isCollapse ? '' : 'show'} collapse`}
        id="link-collapse-1"
      >
        <div className="d-flex justify-content-between align-items-center my-3">
          <div className="text-xs">{`${t('common.price')} (${refund.items.length} ${t('common.product')})`}</div>
          <div className="text-xs color-dark">{`${t('common.sar')} ${getProductPrices()}`}</div>
        </div>
        <hr className="my-3" />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="text-xs">Total</div>
          <div className="text-bold color-dark">{`${t('common.sar')} ${refund.totalRefund}`}</div>
        </div>
      </div>
    </div>
  );
}

export default TotalRefund;
