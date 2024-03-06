import { TRefundDetail } from '@/types/order.type';
import { format } from 'date-fns';
import { useI18n } from '@/locales/client';

function DetailRefundStatus({ refund }: { refund: TRefundDetail }) {
  const t = useI18n();

  const renderStatus = () => {
    switch (refund.status) {
      case 'Waiting Confirmation':
        return (
          <>
            <div className="status on-placed">{refund.status}</div>
            <div className="text-xxs">
              {format(new Date(refund.date), 'dd MMM yyyy')}
            </div>
          </>
        );
        break;
      case 'Approve':
        return (
          <>
            <div className="status on-process">{refund.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">{refund.refundNumber}</li>
              <li className="text-xxxs color-default">
                {format(new Date(refund.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'On Process':
        return (
          <>
            <div className=" d-flex justify-content-between align-items-center mb-3">
              <div className="status on-process">{refund.status}</div>
              <ul className="info-order justify-content-end">
                <li className="text-xxxs color-default">
                  {refund.refundNumber}
                </li>
                <li className="text-xxxs color-default">
                  {format(new Date(refund.date), 'dd MMM yyyy')}
                </li>
              </ul>
            </div>
            <div className="text-italic text-xxs">
              {t('profile.enterYourBankNumber')}
            </div>
          </>
        );
        break;
      case 'Completed':
        return (
          <>
            <div className="status completed">{refund.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">{refund.refundNumber}</li>
              <li className="text-xxxs color-default">
                {format(new Date(refund.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'Canceled':
        return (
          <>
            <div className="status canceled">{refund.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">{refund.refundNumber}</li>
              <li className="text-xxxs color-default">
                {format(new Date(refund.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'Rejected':
        return (
          <>
            <div className="status canceled">{refund.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">{refund.refundNumber}</li>
              <li className="text-xxxs color-default">
                {format(new Date(refund.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;

      default:
        return null;
        break;
    }
  };

  return (
    <div
      className={`${refund.status === 'On Process' ? '' : 'd-flex justify-content-between align-items-center'} box-border bg-white rounded-2 p-3 mb-3`}
    >
      {renderStatus()}
    </div>
  );
}

export default DetailRefundStatus;
