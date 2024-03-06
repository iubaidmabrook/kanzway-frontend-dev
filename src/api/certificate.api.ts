'use server';

// Http
import http from '@/plugins/axios';

// Types
import { TApiResponsePaginate } from '@/types/api.type';
import {
  TCertificate,
  TCertificatePageSearchParams,
} from '@/types/certificate.type';

/**
 * Get list certificate
 * @returns
 */
export const getCertificates = async (params: TCertificatePageSearchParams) => {
  const { data } = await http.get<TApiResponsePaginate<TCertificate>>(
    `https://private-35ab2-kanzway1.apiary-mock.com/certificates`,
    { params },
  );

  return data.data;
};
