import { TImage, TLanguage, TMeta } from './common.type';

export type TBrand = {
  id: number;
  name: TLanguage;
  slug: string;
  image: TImage;
  bwImage: TImage;
  description: TLanguage;
};

export type TBrandDetail = TBrand & TMeta;
