import { UseMutationOptions, UseQueryOptions } from 'react-query';

export type TApiResponse<D> = {
  code: string;
  message: string | null;
  data: D;
  timestamp: '2024-01-10 10:01:01';
};

export type TResponsePaginate<D> = {
  [x: string]: any;
  page: number;
  size: number;
  count: number;
  totalCount: number;
  content: D[];
};

export type TApiResponsePaginate<D> = Omit<TApiResponse<D>, 'data'> & {
  data: TResponsePaginate<D>;
};

export type TProductApiResponsePaginate<D> = Omit<TApiResponse<D>, 'data'> & {
  data: TResponsePaginate<D> & {
    productCount: number;
  };
};

export type TApiAccessToken = {
  token: string;
  refresh_token: string;
  expired_token: string;
};

export type ApiServiceErr = any;

export type MutOpt<Response, TVariables = unknown> = UseMutationOptions<
  Response,
  ApiServiceErr,
  TVariables,
  unknown
>;

export type QueryOpt<Response, TVariables = unknown> = UseQueryOptions<
  Response,
  ApiServiceErr,
  TVariables,
  string
>;

export type TApiParamsOptions = {
  size: number;
  page: number;
  sort: string;
  order: string;
  search: string;
  [key: string]: any;
};

export type TSearchProductsQueryParams = {
  page?: number;
  size?: number;
  order?: string;
  sort?: string;
  search?: string;
  categories?: string[];
  brands?: string[];
  minPrice?: number;
  maxPrice?: number;
};

export type TSearchBrandsQueryParams = {
  page?: number;
  size?: number;
  order?: string;
  sort?: string;
  search?: string;
  categories?: string[];
  hasCategories?: boolean;
};

export type TSearchCategoriesQueryParams = {
  search?: string;
  brands?: string[];
};
