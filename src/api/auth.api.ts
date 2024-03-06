// React Query
import { useMutation } from 'react-query';

// Types
import { ApiServiceErr, MutOpt } from '@/types/api.type';
import {
  TAuthForgotPassword,
  TAuthLogin,
  TAuthLoginResponse,
  TAuthRegister,
  TAuthRegisterResponse,
  TAuthResetPassword,
} from '@/types/auth.type';

// Service
import {
  authForgotPassword,
  authLogin,
  authRegister,
  authResetPassword,
} from '@/api/auth.service';

/**
 * Login
 * @param opt
 * @returns
 */
export const useAuthLogin = (opt?: MutOpt<TAuthLoginResponse>) => {
  return useMutation<TAuthLoginResponse, ApiServiceErr, TAuthLogin>(
    async (payload) => {
      const resp = await authLogin(payload);
      const strResp = JSON.stringify(resp);
      localStorage.setItem('kanzway-creds', strResp);
      return resp;
    },
    opt,
  );
};

/**
 * Register
 * @param opt
 * @returns
 */
export const useAuthRegister = (opt?: MutOpt<TAuthRegisterResponse>) => {
  return useMutation<TAuthRegisterResponse, ApiServiceErr, TAuthRegister>(
    async (payload) => {
      const resp = await authRegister(payload);
      return resp;
    },
    opt,
  );
};

/**
 * Forgot Password
 * @param opt
 * @returns
 */
export const useAuthForgotPassword = (opt?: MutOpt<TAuthRegisterResponse>) => {
  return useMutation<TAuthRegisterResponse, ApiServiceErr, TAuthForgotPassword>(
    async (payload) => {
      const resp = await authForgotPassword(payload);
      return resp;
    },
    opt,
  );
};

/**
 * Reset Password
 * @param opt
 * @returns
 */
export const useAuthResetPassword = (opt?: MutOpt<TAuthRegisterResponse>) => {
  return useMutation<TAuthRegisterResponse, ApiServiceErr, TAuthResetPassword>(
    async (payload) => {
      const resp = await authResetPassword(payload);
      return resp;
    },
    opt,
  );
};
