import { TOrderDetail } from '@/types/order.type';
import { useI18n } from '@/locales/client';

function ShippingDetail({ order }: { order: TOrderDetail }) {
  const t = useI18n();

  const renderShippingDetail = () => {
    switch (order.id) {
      case 2:
        return (
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-xs color-dark">
              {t('profile.shippingInProcess')}
            </div>
            <div className="text-xs ">15 Mar 2023</div>
          </div>
        );
        break;
      case 3:
        return (
          <>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs color-dark">
                {t('profile.onDelivery')}
              </div>
              <div className="text-xs ">16 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs k">{t('profile.shippingInProcess')}</div>
              <div className="text-xs ">15 Mar 2023</div>
            </div>
          </>
        );
        break;
      case 4:
        return (
          <>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs color-dark">{t('profile.completed')}</div>
              <div className="text-xs ">17 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs color-dark">
                {t('profile.onDelivery')}
              </div>
              <div className="text-xs ">16 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs k">{t('profile.shippingInProcess')}</div>
              <div className="text-xs ">15 Mar 2023</div>
            </div>
          </>
        );
        break;
      default:
        return '';
        break;
    }
  };

  return (
    <>
      <div
        className={`${order.id === 3 ? 'mb-3' : ''} box-border rounded-2 bg-white p-3`}
      >
        <div className="text-xs color-dark text-bold mb-2">
          {t('profile.shippingDetail')}
        </div>
        {renderShippingDetail()}
      </div>
      {order.id === 3 && (
        <button
          className="btn btn-secondary w-100"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#modal-complete"
        >
          {t('profile.complete')}
        </button>
      )}
    </>
  );
}

export default ShippingDetail;
