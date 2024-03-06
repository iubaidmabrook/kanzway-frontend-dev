export type TProductPhoto = string;

export type TProductFeature = {
  icon: string;
  feature: string;
};

export type TProductSpecification = {
  description: string;
  value: string;
};

export type TProductCuttingCondition = {
  name: string;
  sustainability: string;
  vc: number;
  f: number;
};

export type TProductCutting = {
  title: string;
  conditions: TProductCuttingCondition[];
};

export type TProductDocument = {
  name: string;
  url: string;
};

export type TProductPriceOption = {
  previousName?: string;
  name: string;
  stock: number;
  qty: number;
};

export type TProductOtherOption = {
  name: string;
  code: string;
  photo: string;
};

export type TProduct = {
  id: string;
  slug: string;
  name: string;
  subName: string;
  code: string;
  sku: string;
  eanCode: string;
  description: string;
  photos: TProductPhoto[];
  features: TProductFeature[];
  specifications: TProductSpecification[];
  cuttingConditions: TProductCutting[];
  documents: TProductDocument[];
  priceOptions: TProductPriceOption[];
  otherOptions: TProductOtherOption[];
  variantName: string;
  previousVariantName: string | null;
  discount: number;
};

export type TOverviewProduct = TProduct & {
  thumbnail: string;
};

export type TProductSubNav = Array<{
  title: string;
  id: string;
}>;

// PROPS
export type TProductCommonProps = {
  product: TProduct;
};

export type TProductSummaryProps = TProductCommonProps &
  React.HTMLAttributes<{}> & {
    onClose: () => void;
  };
