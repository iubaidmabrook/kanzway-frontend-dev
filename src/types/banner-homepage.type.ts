import { TImage, TLanguage } from './common.type';

export type TBannerHomePage = {
  id: number;
  code: string;
  title: TLanguage;
  link: string;
  image: TImage;
  description: TLanguage;
};
