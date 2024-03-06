import http from '@/plugins/axios';
import { TApiResponsePaginate } from '@/types/api.type';
import { TCategory, TCategoryAlt } from '@/types/category-old.type';
import { TProductOverview } from '@/types/product.type';

export const getLandingPageCategory = async () => {
  const { data } = await http.get<TApiResponsePaginate<TCategory[]>>(
    '/product-categories',
    {
      id: 'landing-page-product-categories',
      cache: { ttl: 1000 * 600 },
    },
  );
  return data.data;
};

export const getLandingPageCategoryProduct = async (productId: Number) => {
  const { data } = await http.get<TApiResponsePaginate<TProductOverview>>(
    `/products?size=2&page=1&sort=id&order=desc&categories[]=${productId}&brands[]&brands[]&attributes[attibuteName]&attributes[attibuteName]&minPrice&maxPrice`,
    {
      id: 'landing-page-category-product',
      cache: { ttl: 1000 * 600 },
    },
  );
  return data;
};

export const getLandingPageChildCategoryProduct = async (
  categoryId: Number,
) => {
  const { data } = await http.get<TApiResponsePaginate<TCategoryAlt>>(
    `/categories/${categoryId}`,
    {
      id: 'landing-page-child-categoory-product',
      cache: { ttl: 1000 * 600 },
    },
  );
  return data.data;
};
