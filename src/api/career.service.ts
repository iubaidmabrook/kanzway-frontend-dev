'use server';

// Axios
import http from '@/plugins/axios';

// Types
import { TApiResponse, TApiResponsePaginate } from '@/types/api.type';
import {
  TCareer,
  TCareerCategory,
  TCareerPageSearchParams,
} from '@/types/career.type';

/**
 * Get list career
 * @returns
 */
export const getCareers = async (params: TCareerPageSearchParams) => {
  const { data } = await http.get<TApiResponsePaginate<TCareer>>(
    `https://private-35ab2-kanzway1.apiary-mock.com/jobs`,
    { params },
  );

  return data.data;
};

/**
 * Get career categories
 * @returns
 */
export const getCareerCategories = async () => {
  const { data } = await http.get<TApiResponse<TCareerCategory[]>>(
    `https://private-35ab2-kanzway1.apiary-mock.com/jobs/categories`,
  );

  return data.data;
};

/**
 * Get career categories
 * @returns
 */
export const getCareerById = async (id: string) => {
  const { data } = await http.get<TApiResponse<TCareer>>(
    `https://private-35ab2-kanzway1.apiary-mock.com/jobs/${id}`,
  );

  return data.data;
};

export const careerApply = async (id: number, payload: FormData) => {
  const { data } = await http.postForm<TApiResponse<{}>>(
    `https://private-35ab2-kanzway1.apiary-mock.com/jobs/apply/${id}`,
    payload,
  );
  return data.data;
};
