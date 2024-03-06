import { TImage, TLanguage } from './common.type';

export type TChildCategory = {
  id: number;
  name: string;
};

export type TCategory = {
  id: number;
  name: string;
  childs: TChildCategory[];
};

export type TChildCategoryAlt = {
  id: number;
  name: TLanguage;
  slug: string;
  image: TImage;
  description: TLanguage;
  parentId: number;
};

export type TCategoryAlt = TChildCategoryAlt & {
  childs: TChildCategoryAlt[];
};
