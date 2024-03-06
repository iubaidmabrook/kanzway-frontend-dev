'use server';

// Http
import http from '@/plugins/axios';

// Types
import {
  TApiResponse,
  TApiResponsePaginate,
  TProductApiResponsePaginate,
  TSearchProductsQueryParams,
} from '@/types/api.type';
import { TProduct, TProductFamily } from '@/types/product.type';

/**
 * Get product by slug
 * @param slug
 * @returns
 */
export const getProductBySlug = async (slug: string) => {
  const { data } = await http.get<TApiResponse<TProduct>>(
    `/sale-products/slug/${slug}`,
  );
  return data.data;
};

/**
 * Get product by id
 * @param id
 * @returns
 */
export const getProductById = async (id: number) => {
  const { data } = await http.get<TApiResponse<TProduct>>(
    `/sale-products/${id}`,
  );
  return data.data;
};

/**
 * Get products by ids
 * @param ids
 * @returns
 */
export const getProductsByIds = async (ids: number[]): Promise<TProduct[]> => {
  const data = await Promise.all(ids.map((id) => getProductById(id)));
  return data;
};

/**
 * Get list product
 * @returns
 */
export const getProducts = async () => {
  const { data } =
    await http.get<TApiResponsePaginate<TProductFamily>>(`/product-families`);

  return data.data;
};

/**
 * Get related products by id
 * @param id
 * @returns
 */
export const getRelatedProductsById = async (id: number) => {
  const { data } = await http.get<TApiResponse<TProductFamily[]>>(
    `/sale-products/${id}/related-products`,
  );
  return data.data;
};

/**
 * Get related products by slug
 * @param slug
 * @returns
 */
export const getRelatedProductsBySlug = async (slug: string) => {
  const { data } = await http.get<TApiResponse<TProductFamily[]>>(
    `/sale-products/slug/${slug}/related-products`,
  );
  return data;
};

/**
 * search product
 * @param query
 * @returns
 */
export const searchProducts = async (query: TSearchProductsQueryParams) => {
  const {
    page = 1,
    sort = 'familyCode',
    order = 'desc',
    size = 10,
    search = '',
    categories = [],
    brands = [],
    minPrice,
    maxPrice,
  } = query;

  const queryString = new URLSearchParams({
    page: (page - 1).toString(),
    sort,
    order,
    size: size.toString(),
    search,
  });

  if (categories.length > 0) {
    categories.map((id) => queryString.append('categories', id.toString()));
  }

  if (brands.length > 0) {
    brands.map((id) => queryString.append('brands', id.toString()));
  }

  if (minPrice && minPrice !== 0) {
    queryString.set('minPrice', minPrice.toString());
  }
  if (maxPrice && maxPrice !== 0) {
    queryString.set('maxPrice', maxPrice.toString());
  }

  const { data } = await http.get<TProductApiResponsePaginate<TProductFamily>>(
    `/product-families?${queryString}`,
    {
      id: queryString.toString(),
      cache: { ttl: 1000 * 300 },
      // cache: false,
    },
  );

  return data.data;
};
