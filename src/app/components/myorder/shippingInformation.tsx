import { useI18n } from '@/locales/client';
import { TOrderDetail } from '@/types/order.type';
import { useState } from 'react';

function ShippingInformation({ order }: { order: TOrderDetail }) {
  const t = useI18n();
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  return (
    <div className="box-border bg-white rounded-2 p-3 mb-3">
      <span
        className={`${isCollapse ? 'collapsed' : ''} link-collapse`}
        data-bs-toggle="collapse"
        role="presentation"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        {t('profile.shippingInformation')}
      </span>
      <div
        className={`${isCollapse ? '' : 'show'} collapse`}
        id="link-collapse-2"
      >
        <div className="text-xs my-2">{t('checkout.shippingCourier')}</div>
        {order.items.map((items) => (
          <>
            <div className="text-xs color-dark mb-2">
              {items.shippingMethodName}
            </div>
            <p className="text-xs color-dark"></p>
          </>
        ))}
        <hr className="dashed" />
        <div className="text-xs mb-2">{t('profile.shippingAddress')}</div>
        <div className="text-xs color-dark mb-2">
          {order.principalAddress.address_name}
        </div>
        <p className="text-xs color-dark">
          {`${order.principalAddress.address} ${order.principalAddress.city} ${order.principalAddress.country}`}
        </p>
      </div>
    </div>
  );
}

export default ShippingInformation;
