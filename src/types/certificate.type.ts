import { TImage, TLanguage } from './common.type';

export type TCertificate = {
  id: number;
  code: string;
  title: TLanguage;
  slug: string;
  date: string;
  image: TImage;
};

// Props
export type TCertificateItemProps = {
  certificate: TCertificate;
};

export type TCertificatePageSearchParams = {
  sort: string | undefined;
  order: string | undefined;
};

export type TCertificatePageParams = {
  searchParams: TCertificatePageSearchParams;
};
