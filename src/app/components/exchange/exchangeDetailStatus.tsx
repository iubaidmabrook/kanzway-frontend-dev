import { useI18n } from '@/locales/client';
import { TExchangeDetail } from '@/types/order.type';
import ModalAddBankAccount from '../modal/ModalAddBankAccount';

function ExchangeDetailStatus({ exchange }: { exchange: TExchangeDetail }) {
  const t = useI18n();

  const renderExchangeDetail = () => {
    switch (exchange.id) {
      case 1:
        return (
          <div className="d-flex justify-content-between align-items-center py-2">
            <div className="text-xs color-dark">
              {t('profile.waitingConfirmation')}
            </div>
            <div className="text-xs ">16 Mar 2023</div>
          </div>
        );
        break;
      case 2:
        return (
          <>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs color-dark">{t('profile.approve')}</div>
              <div className="text-xs ">16 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.waitingConfirmation')}</div>
              <div className="text-xs ">15 Mar 2023</div>
            </div>
          </>
        );
        break;
      case 3:
        return (
          <>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs color-dark">
                {t('profile.onDelivery')}
              </div>
              <div className="text-xs ">17 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.approve')}</div>
              <div className="text-xs ">16 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.waitingConfirmation')}</div>
              <div className="text-xs ">15 Mar 2023</div>
            </div>
          </>
        );
        break;
      case 4:
        return (
          <>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs color-dark">{t('profile.complete')}</div>
              <div className="text-xs ">18 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.onDelivery')}</div>
              <div className="text-xs ">17 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.approve')}</div>
              <div className="text-xs ">16 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.waitingConfirmation')}</div>
              <div className="text-xs ">15 Mar 2023</div>
            </div>
          </>
        );
        break;
      case 5:
        return (
          <>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs color-dark">{t('profile.cancel')}</div>
              <div className="text-xs ">17 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.approve')}</div>
              <div className="text-xs ">16 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.waitingConfirmation')}</div>
              <div className="text-xs ">15 Mar 2023</div>
            </div>
          </>
        );
        break;
      case 6:
        return (
          <>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs color-dark">{t('profile.rejected')}</div>
              <div className="text-xs ">16 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.waitingConfirmation')}</div>
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

  const renderButton = () => {
    switch (exchange.id) {
      case 2:
        return (
          <button
            className="btn btn-secondary w-100"
            type="button"
          >
            {t('profile.requestPickUp')}
          </button>
        );
        break;
      default:
        return '';
        break;
    }
  };

  return (
    <>
      <ModalAddBankAccount />
      <div className="box-border rounded-2 bg-white p-3 mb-3">
        <div className="text-xs color-dark mb-1 text-bold">
          {t('profile.refundDetailStatus')}
        </div>
        {renderExchangeDetail()}
      </div>
      {renderButton()}
    </>
  );
}

export default ExchangeDetailStatus;
