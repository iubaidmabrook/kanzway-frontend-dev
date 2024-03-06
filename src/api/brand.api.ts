'use server';

import http from '@/plugins/axios';
import {
  TApiResponse,
  TApiResponsePaginate,
  TSearchBrandsQueryParams,
} from '@/types/api.type';
import { TBrand } from '@/types/brand.type';

export const getBrands = async () => {
  const { data } = await http.get<TApiResponsePaginate<TBrand>>(
    'https://kanzway.com:3465/v1/brands',
    {
      id: 'list-brands',
      cache: { ttl: 1000 * 600 },
      // cache: false,
    },
  );

  return data.data;
};

export const searchBrandsApi = async (query: TSearchBrandsQueryParams) => {
  const { search = '', categories = [], hasCategories } = query;
  const queryString = new URLSearchParams({
    search,
  });

  if (categories.length > 0) {
    categories.map((slug) => queryString.append('categories', slug));
  }

  if (hasCategories) {
    queryString.set('hasCategories', 'true');
  }

  const { data } = await http.get<TApiResponsePaginate<TBrand>>(
    `https://kanzway.com:3465/v1/brands?${queryString}`,
    {
      // id: query.toString(),
      // cache: { ttl: 1000 * 600 },
      cache: false,
    },
  );

  return data.data.content;
};

export const searchAllBrands = async (query: TSearchBrandsQueryParams) => {
  const { page = 1, search = '', size = 56 } = query;

  const queryString = new URLSearchParams({
    page: (page - 1).toString(),
    search,
    size: size.toString(),
  });

  const { data } = await http.get<TApiResponsePaginate<TBrand>>(
    `/brands?${queryString}`,
    {
      id: queryString.toString(),
      cache: { ttl: 1000 * 300 },
      // cache: false,
    },
  );

  return data.data;
};

export const getBrandById = async (brandId: number) => {
  const { data } = await http.get<TApiResponse<TBrand>>(
    `https://kanzway.com:3465/v1/brands/${brandId}`,
    {
      id: `brand-${brandId}`,
      cache: { ttl: 1000 * 600 },
      // cache: false,
    },
  );

  return data.data;
};

export const getBrandBySlug = async (slug: string) => {
  const { data } = await http.get<TApiResponse<TBrand>>(
    `https://kanzway.com:3465/v1/brands/slug/${slug}`,
    {
      id: `brand-${slug}`,
      cache: { ttl: 1000 * 600 },
      // cache: false,
    },
  );

  return data.data;
};
