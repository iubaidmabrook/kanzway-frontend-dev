'use server';

import http from '@/plugins/axios';
import { TApiResponse, TSearchCategoriesQueryParams } from '@/types/api.type';
import {
  TCategory,
  TRootCategories,
  TproductCategory,
} from '@/types/category.type';

export const getCategories = async () => {
  const { data } = await http.get<TApiResponse<TCategory[]>>('/categories', {
    id: 'list-categories',
    cache: { ttl: 1000 * 600 },
  });

  return data.data;
};

export const getProductCategories = async () => {
  const { data } = await http.get<TApiResponse<TproductCategory[]>>(
    '/overviews/product-categories',
    {
      id: 'list-product-categories',
      cache: { ttl: 1000 * 600 },
    },
  );

  return data.data;
};

export const searchCategories = async (search: string) => {
  const { data } = await http.get<TApiResponse<TCategory[]>>(
    `/categories?search=${search}`,
    {
      id: `list-categories-${search}`,
      cache: { ttl: 1000 * 600 },
    },
  );

  return data.data;
};

export const searchRootCategories = async (
  query: TSearchCategoriesQueryParams,
) => {
  const { search = '', brands = [] } = query;
  const queryString = new URLSearchParams({
    search,
  });

  if (brands.length > 0) {
    brands.map((id) => queryString.append('brands', id));
  }
  const { data } = await http.get<TApiResponse<TRootCategories[]>>(
    `/root-categories?${queryString}`,
    {
      id: queryString.toString(),
      cache: { ttl: 1000 * 600 },
      // cache: false,
    },
  );

  return data.data;
};
