import { TLanguage } from './common.type';

export type TFaq = {
  id: number;
  code: string;
  faqGroupId: number;
  question: TLanguage;
  answer: TLanguage;
};

// for FAQ List & Homepage

export type TFaqGroup = {
  id: number;
  code: string;
  title: TLanguage;
  description: TLanguage;
  faqs: TFaq[];
};
