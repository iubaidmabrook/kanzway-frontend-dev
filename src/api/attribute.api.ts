import http from '@/plugins/axios';
import { TApiResponsePaginate } from '@/types/api.type';
import { TAttribute } from '@/types/attribute.type';

export const getAttributes = async () => {
  const { data } =
    await http.get<TApiResponsePaginate<TAttribute>>('/attributes');

  return data.data;
};
