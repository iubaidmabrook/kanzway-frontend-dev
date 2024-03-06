import { useI18n } from '@/locales/client';
import { TRefundDetail } from '@/types/order.type';
import useModalAddBankAccountStore from '@/store/modalAddBankAccount.store';
import ModalAddBankAccount from '../modal/ModalAddBankAccount';

function RefundDetailStatus({ refund }: { refund: TRefundDetail }) {
  const t = useI18n();
  const { onOpen } = useModalAddBankAccountStore();

  const renderRefundDetail = () => {
    switch (refund.id) {
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
                {t('profile.refundOnProcess')}
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
              <div className="text-xs">{t('profile.refundOnProcess')}</div>
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
              <div className="text-xs ">18 Mar 2023</div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="text-xs">{t('profile.refundOnProcess')}</div>
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
    switch (refund.id) {
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
      case 3:
        return (
          <button
            className="btn btn-secondary w-100"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modal-bank"
            onClick={onOpen}
          >
            {t('profile.inputBankAccount')}
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
        {renderRefundDetail()}
      </div>
      {renderButton()}
    </>
  );
}

export default RefundDetailStatus;
