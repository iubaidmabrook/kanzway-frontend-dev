import { TImage, TLanguage } from './common.type';

export type TItemBrand = {
  id: number;
  name: TLanguage;
  image: TImage;
};

export type TOrderItem = {
  id: number;
  title: TLanguage;
  slug: string;
  code: string;
  mpn: string;
  gtin: {
    upc: string;
    ean: string;
  } | null;
  image: TImage;
  brand: TItemBrand;
  price: number;
  originalPrice: number;
  maxPrice: number;
  qty: number;
  note: string;
  subtotal: number;
};

export type TRefundItem = {
  id: number;
  refundId: number;
  orderItemId: number;
  title: TLanguage;
  slug: string;
  code: string;
  mpn: string;
  gtin: {
    upc: string;
    ean: string;
  } | null;
  image: TImage;
  brand: TItemBrand;
  price: number;
  qty: number;
  note: string;
};

export type TExchangeItem = {
  id: number;
  exchangeId: number;
  orderItemId: number;
  title: TLanguage;
  slug: string;
  code: string;
  mpn: string;
  gtin: {
    ean: string;
    upc: string;
  };
  image: TImage;
  brand: TItemBrand;
  qty: number;
  price: number;
  note: string;
};

export type TOrderList = {
  id: number;
  orderNumber: string;
  date: string;
  subtotal: number;
  shippingCost: number;
  promoCode: string | null;
  discount: number;
  grandTotal: number;
  status: string;
  items: TOrderItem[];
};

export type TExchangeList = {
  id: number;
  exchangeNumber: string;
  date: string;
  status: string;
  items: TOrderItem[];
};

export type TRefundList = {
  id: number;
  refundNumber: string;
  date: string;
  totalRefund: number;
  status: string;
  items: TOrderItem[];
};

export type TPrincipleAddress = {
  id: number;
  address_name: string;
  address: string;
  city: string;
  country: string;
  lat: string;
  long: string;
};

export type TPaymentMethode = {
  id: number;
  name: string;
};

export type TOrderDetailItems = {
  shippingMethodId: number;
  shippingMethodName: string;
  shippingCost: number;
  products: TOrderItem[];
};

export type TOrderDetail = {
  id: number;
  orderNumber: string;
  date: string;
  principalAddressId: number;
  principalAddress: TPrincipleAddress;
  paymentMethod: TPaymentMethode;
  payment_expired_at: string;
  subtotal: number;
  shippingCost: number;
  promoCode: string | null;
  discount: number;
  grandTotal: number;
  status: string;
  items: TOrderDetailItems[];
};

export type TRefundDetail = {
  id: number;
  refundNumber: string;
  date: string;
  totalRefund: number;
  reason: string;
  images: string[];
  status: string;
  updated_at: string;
  items: TRefundItem[];
};

export type TExchangeDetail = {
  id: number;
  exchangeNumber: string;
  date: string;
  reason: string;
  images: string[];
  status: string;
  updated_at: string;
  items: TExchangeItem[];
};
