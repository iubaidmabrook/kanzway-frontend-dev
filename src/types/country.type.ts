import { TImage, TLanguage } from './common.type';

export type TCountry = {
  id: number;
  code: string;
  name: TLanguage;
  phoneCode: number;
  phoneStartNumber: number;
  phoneMinLength: number;
  phoneMaxLength: number;
  image: TImage;
  createdAt: string;
  updatedAt: string;
};
