import { TLanguage } from './common.type';

export type TOption = {
  value: string;
  unit: TLanguage;
};

export type TAttribute = {
  id: number;
  brand: number;
  category: number;
  name: TLanguage;
  options: TOption[];
};
