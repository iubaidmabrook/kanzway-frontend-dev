import http from '@/plugins/axios';
import { TApiResponsePaginate } from '@/types/api.type';
import { TProduct } from '@/types/product.type';

export const getLandingPageFeatured = async () => {
  const { data } = await http.get<TApiResponsePaginate<TProduct>>(
    '/products?size=20&page=1&sort=id&order=desc&productType=featured',
    {
      id: 'landing-page-product-featured',
      cache: { ttl: 1000 * 600 },
    },
  );
  return data.data;
};
