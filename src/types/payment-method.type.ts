import { TLanguage } from './common.type';

export type TPaymentMethod = {
  id: number;
  code: string;
  name: TLanguage;
  instruction: TLanguage;
  createdAt: Date;
  updatedAt: Date;
};
