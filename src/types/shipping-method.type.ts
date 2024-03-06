export type TShippingMethodDeliverCompany = {
  serviceType: string;
  avgDeliveryTime: string;
  deliveryOptionId: number;
  deliveryCompanyName: string;
  deliveryOptionName: string;
  price: number;
};

export type TShippingMethodDetail = {
  success: true;
  traceId: string;
  deliveryCompany: TShippingMethodDeliverCompany[];
};

export type TShippingMethod = {
  id: number;
  code: string;
  providerName: string;
  deliveryCompanyName: string;
  deliveryEstimateTime: string;
  detail: TShippingMethodDetail;
};
