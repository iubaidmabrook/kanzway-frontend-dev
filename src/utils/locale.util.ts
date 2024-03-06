import { TDefaultParams, TLanguage } from '@/types/common.type';

/**
 * get current lang
 */
export const getLang = (params: TDefaultParams | any, text: TLanguage) => {
  return text[params.locale as keyof TLanguage]
    ? text[params.locale as keyof TLanguage]
    : text.en;
};
