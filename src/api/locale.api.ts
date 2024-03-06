'use server';

import http from '@/plugins/axios';
import { TApiResponse } from '@/types/api.type';
import { TCountry } from '@/types/country.type';
import { TLocaleLanguage } from '@/types/language.type';

export const getCountries = async () => {
  const { data } = await http.get<TApiResponse<TCountry[]>>('/countries', {
    id: 'list-countries',
    cache: { ttl: 1000 * 600 },
  });

  return data.data;
};

export const getLanguages = async () => {
  const { data } = await http.get<TApiResponse<TLocaleLanguage[]>>(
    '/languages',
    {
      id: 'list-languages',
      cache: { ttl: 1000 * 600 },
    },
  );

  return data.data;
};
