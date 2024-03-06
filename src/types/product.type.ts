import { TImage, TLanguage, TMeta } from '@/types/common.type';

export type TProductCategory = {
  id: number;
  name: TLanguage;
  slug: string;
};

export type TProductBrand = {
  id: number;
  name: TLanguage;
  image: TImage;
};

export type TProductOther = Pick<
  TProduct,
  | 'id'
  | 'mpn'
  | 'gtin'
  | 'name'
  | 'slug'
  | 'image'
  | 'brand'
  | 'price'
  | 'originalPrice'
  | 'maxPrice'
>;

export type TProductPrice = {
  id: number;
  itemIds?: number[];
  price: number;
  originalPrice: number;
  stock: number;
  estimatedDelivery?: number | string;
};

export type TProductDocument = {
  id: number;
  name: TLanguage;
  url: string;
};

export type TProductPropertyItem = {
  description: TLanguage;
  value1: TLanguage;
  unit1: TLanguage;
  value2: TLanguage | null;
  unit2: TLanguage | null;
  value3: TLanguage | null;
  unit3: TLanguage | null;
  image: TImage | null;
};

export type TProductPropertyGroup = {
  id: number;
  name: TLanguage;
  group?: TLanguage;
  items: TProductPropertyItem[];
};

export type TProductProperty = {
  id: number;
  name: TLanguage;
  type: string;
  fields: TLanguage[];
  groups: TProductPropertyGroup[];
};

export type TProduct = TMeta & {
  id: number;
  title: TLanguage;
  name: TLanguage;
  slug: string;
  code: string;
  mpn: string;
  gtin: {
    upc: string;
    ean: string;
  } | null;
  familyCode: string;
  icon: TImage;
  image: TImage;
  description: TLanguage;
  images: TImage[];
  categories: TLanguage;
  brand: TProductBrand;
  otherProducts: TProductOther[];
  prices: TProductPrice[];
  priceDetails: TProductPrice[];
  documents: TProductDocument[];
  properties: TProductProperty[];
  price: number;
  originalPrice: number | null;
  maxPrice: number | null;
  categoryNames: TLanguage[];
};

export type TProductSubNav = Array<{
  title: string;
  id: string;
}>;

export type TProductQtyInput = {
  type: string;
  item: TProductPrice;
  qty: number;
  index: number;
};

export type TProductOverview = Omit<
  TProduct,
  'galleries' | 'documents' | 'properties'
>;

export type TProductFamily = {
  code: string;
  products: TProductOverview[];
};

export type TProductWishlistStore = {
  items: number[];
  addItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  clear: () => void;
};

export type TProductCartStore = TProductWishlistStore;

export type TProductEnquiryStore = TProductWishlistStore;

// PROPS
export type TProductCommonProps = {
  product: TProduct;
};

export type TProductSummaryProps = TProductCommonProps &
  React.HTMLAttributes<{}> & {
    onClose: () => void;
  };

export type TProductFamilyProps = {
  products: TProductFamily[];
};
