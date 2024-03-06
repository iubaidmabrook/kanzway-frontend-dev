import { TLanguage } from './common.type';

export type TBrandImage = {
  id: string;
  name: string;
  url: string;
  width: string;
  height: string;
  type: string;
};

export type TBrandContent = {
  id: Number;
  name: TLanguage;
  slug: string;
  image: TBrandImage;
  bwImage: TBrandImage;
  description: TLanguage;
};

export type TDataBrand = {
  size: Number;
  page: Number;
  count: Number;
  totalCount: Number;
  content: TBrandContent[];
};

export type TBrand = {
  code: Number;
  message: string;
  data: TDataBrand;
};
