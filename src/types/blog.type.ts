import { TImage, TLanguage, TMeta } from './common.type';

export type TBlog = {
  id: number;
  code: string;
  title: TLanguage;
  slug: string;
  date: string | Date;
  thumbnail: TImage;
  description: TLanguage;
};

export type TBlogDetail = TBlog & TMeta;
