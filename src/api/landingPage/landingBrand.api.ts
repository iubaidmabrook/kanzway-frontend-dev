import http from '@/plugins/axios';
import { TApiResponsePaginate, TResponsePaginate } from '@/types/api.type';
import { TBrand } from '@/types/brand.type';

export const getLandingPageBrands = async () => {
  const { data } = await http.get<TApiResponsePaginate<TBrand>>(
    '/brands?size=50',
    {
      id: 'list-landing-brands',
      cache: { ttl: 1000 * 600 },
      // cache: false,
    },
  );
  return data.data;
};

export const getAllPageBrands = async () => {
  const { data } = await http.get<TResponsePaginate<TBrand>>('/brands?page=1');
  return data.data;
};
