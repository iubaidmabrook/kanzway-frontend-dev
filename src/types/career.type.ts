import { TLanguage, TMeta } from './common.type';

export type TCareer = TMeta & {
  id: number;
  code: string;
  title: TLanguage;
  slug: string;
  job_field: {
    id: number;
    name: TLanguage;
  };
  job_type: TLanguage;
  job_date: TLanguage;
  job_location: TLanguage;
  experience: TLanguage;
  responsibility: TLanguage;
  requirements: TLanguage;
};

export type TCareerPageSearchParams = {
  sort: string | undefined;
  order: string | undefined;
  page: string | number | undefined;
  category: string | undefined;
};

export type TCareerPagePageParams = {
  searchParams: TCareerPageSearchParams;
};

export type TCareerCategory = {
  title: TLanguage;
  slug: string;
};

export type TCareerApply = {
  name: string;
  email: string;
  phoneNumber: string;
  cv: File | null | undefined;
};

// Props
export type TCareerItemProps = {
  career: TCareer;
};

export type TCareerCategoriesProps = {
  categories: TCareerCategory[];
};
