import { createI18nClient } from 'next-international/client';

export const {
  useI18n,
  useScopedI18n,
  useChangeLocale,
  I18nProviderClient,
  useCurrentLocale,
} = createI18nClient({
  id: () => import('./id'),
  en: () => import('./en'),
  ar: () => import('./ar'),
});
