import { TImage, TLanguage } from './common.type';

export type TLocaleLanguage = {
  id: number;
  code: string;
  name: TLanguage;
  image: TImage;
  createdAt: string;
  updatedAt: string;
};
