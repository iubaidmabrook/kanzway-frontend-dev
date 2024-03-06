import { TImage, TLanguage, TMeta } from './common.type';

export type TAbout = TMeta & {
  id: number;
  code: string;
  title: TLanguage;
  slug: string;
  thumbnail: TImage;
  content: TLanguage;
};
