import { TProductOverview } from './product.type';
import { TShippingAddress } from './shippingAddress.type';

export type TCheckoutProduct = {
  productId: number;
  qty: number;
  price: number;
  note: string;
  subtotal: number;
};

export type TCheckoutItem = {
  shippingMethodId: number;
  shippingCost: number;
  products: TCheckoutProduct[];
};

export type TCheckoutRequest = {
  principalAddressId: number;
  promoCode: string;
  discount: number;
  items: TCheckoutItem[];
};

export type TCheckoutProductResponse = Omit<TCheckoutProduct, 'productId'> &
  TProductOverview;

export type TCheckoutItemResponse = TCheckoutItem & {
  shippingMethodName: string;
};

export type TCheckoutResponse = {
  id: number;
  orderNumber: string;
  date: Date;
  principalAddressId: number;
  principalAddress: TShippingAddress;
  // paymentMethod: TPaymentMethod | null;
  payment_expired_at: Date;
  subtotal: number;
  shippingCost: number;
  promoCode: string;
  discount: number;
  grandTotal: number;
  status: string;
  items: TCheckoutItemResponse[];
};

export type TCheckShipingCostRequest = {
  principalAddressId: number;
  shippingMethodId: number;
};

export type TCheckShipingCostResponse = {
  shippingCost: number;
  deliveryEst: string;
};

export type TUpdatePaymentMethodRequest = {
  orderId: number;
  paymentMethodId: number;
};

export type TUpdatePaymentMethodResponse = TCheckoutResponse;
