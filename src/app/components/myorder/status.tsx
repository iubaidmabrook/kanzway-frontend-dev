import { TOrderDetail } from '@/types/order.type';
import { format } from 'date-fns';

function DetailOrderStatus({ order }: { order: TOrderDetail }) {
  const renderStatus = () => {
    switch (order.status) {
      case 'On placed':
        return (
          <>
            <div className="status on-placed">{order.status}</div>
            <div className="text-xxs">
              {format(new Date(order.date), 'dd MMM yyyy')}
            </div>
          </>
        );
        break;
      case 'On Process':
        return (
          <>
            <div className="status on-process">{order.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">{order.orderNumber}</li>
              <li className="text-xxxs color-default">
                {format(new Date(order.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'On Delivery':
        return (
          <>
            <div className="status on-delivery">{order.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">{order.orderNumber}</li>
              <li className="text-xxxs color-default">
                {format(new Date(order.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'Completed':
        return (
          <>
            <div className="status completed">{order.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">{order.orderNumber}</li>
              <li className="text-xxxs color-default">
                {format(new Date(order.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'Reviewed':
        return (
          <>
            <div className="status completed">{order.status}</div>
            <ul className="info-order justify-content-end">
              <li className="text-xxxs color-default">{order.orderNumber}</li>
              <li className="text-xxxs color-default">
                {format(new Date(order.date), 'dd MMM yyyy')}
              </li>
            </ul>
          </>
        );
        break;
      case 'Canceled':
        return (
          <>
            <div className="status canceled">{order.status}</div>
            <div className="text-xxxs color-default">
              {format(new Date(order.date), 'dd MMM yyyy')}
            </div>
          </>
        );
        break;

      default:
        return null;
        break;
    }
  };

  return (
    <div className="box-border bg-white rounded-2 p-3 d-flex justify-content-between align-items-center mb-3">
      {renderStatus()}
    </div>
  );
}

export default DetailOrderStatus;
