import { TExchangeDetail } from '@/types/order.type';
import { format } from 'date-fns';

function DetailExchangeStatus({ exchange }: { exchange: TExchangeDetail }) {
  const renderStatus = () => {
    switch (exchange.status) {
      case 'Waiting Confirmation':
        return (
          <>
            <div className="status on-placed">{exchange.status}</div>
            <div className="text-xxs">
              {format(new Date(exchange.date), 'dd MMM yyyy')}
            </div>
          </>
        );
        break;
      case 'Approve':
        return (
          <>
            <div className="status on-process">{exchange.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">
                {exchange.exchangeNumber}
              </li>
              <li className="text-xxxs color-default">
                {format(new Date(exchange.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'On Delivery':
        return (
          <>
            <div className="status on-delivery">{exchange.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">
                {exchange.exchangeNumber}
              </li>
              <li className="text-xxxs color-default">
                {format(new Date(exchange.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'Completed':
        return (
          <>
            <div className="status completed">{exchange.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">
                {exchange.exchangeNumber}
              </li>
              <li className="text-xxxs color-default">
                {format(new Date(exchange.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'Canceled':
        return (
          <>
            <div className="status canceled">{exchange.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">
                {exchange.exchangeNumber}
              </li>
              <li className="text-xxxs color-default">
                {format(new Date(exchange.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'Rejected':
        return (
          <>
            <div className="status canceled">{exchange.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">
                {exchange.exchangeNumber}
              </li>
              <li className="text-xxxs color-default">
                {format(new Date(exchange.date), 'dd MMM yyyy')}
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
      className={`${exchange.status === 'On Process' ? '' : 'd-flex justify-content-between align-items-center'} box-border bg-white rounded-2 p-3 mb-3`}
    >
      {renderStatus()}
    </div>
  );
}

export default DetailExchangeStatus;
