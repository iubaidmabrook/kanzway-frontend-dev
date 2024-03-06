'use server';

import http from '@/plugins/axios';
import { TApiResponse } from '@/types/api.type';
import {
  TAuthForgotPassword,
  TAuthLogin,
  TAuthLoginResponse,
  TAuthRegister,
  TAuthRegisterResponse,
  TAuthResetPassword,
} from '@/types/auth.type';

/**
 * Register
 * @param payload
 * @returns
 */
export const authLogin = async (payload: TAuthLogin) => {
  const { data } = await http.post<TApiResponse<TAuthLoginResponse>>(
    '/auth/login',
    payload,
  );
  return data.data;
};

export const authRegister = async (payload: TAuthRegister) => {
  const { data } = await http.post<TApiResponse<TAuthRegisterResponse>>(
    '/auth/register',
    payload,
  );
  return data.data;
};

/**
 * Forgot Password
 * @param payload
 * @returns
 */
export const authForgotPassword = async (payload: TAuthForgotPassword) => {
  const { data } = await http.post<TApiResponse<TAuthRegisterResponse>>(
    '/auth/forgot-password',
    payload,
  );
  return data.data;
};

/**
 * Auth Reset Password
 * @param payload
 * @returns
 */
export const authResetPassword = async (payload: TAuthResetPassword) => {
  const { data } = await http.post<TApiResponse<TAuthRegisterResponse>>(
    '/auth/reset-password',
    payload,
  );
  return data.data;
};
