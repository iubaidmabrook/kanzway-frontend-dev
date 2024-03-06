import { TImage, TLanguage, TMeta } from './common.type';

export type TChildCategory = {
  id: number;
  name: TLanguage;
  slug: string;
  image: TImage;
  description: TLanguage;
  parentId: string | null;
};

export type TCategory = TChildCategory & {
  childs: TCategory[];
};

export type TRootCategories = TChildCategory & {
  children: TRootCategories[];
};

export type TBrand = {
  id: number;
  name: TLanguage;
};

export type TProduct = {
  id: number;
  name: TLanguage;
  slug: string;
  image: TImage;
  description: TLanguage;
  brand: TBrand;
};

export type TproductCategory = {
  id: number;
  name: TLanguage;
  image: TImage;
  description: TLanguage;
  showAtHomePage: boolean;
  products: TProduct[];
};

export type TCategoryDetail = TCategory & TMeta;
