import { TApiAccessToken } from '@/types/api.type';

export type TAuthLogin = {
  username: string;
  password: string;
};

export type TAuthLogionToken = {
  token: string;
  expiredAt: string;
};

export type TAuthLoginResponse = {
  // principal: TAuthLogin;
  // accessToken: TApiAccessToken;
  accessToken: TAuthLogionToken;
  refreshToken: TAuthLogionToken;
};

export type TAuthRegisterLinkItem = {
  label: string;
  route: string;
  tooltipText: string;
};

export type TAuthRegister = {
  id?: string;
  type: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumberCode: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export type TAuthRegisterResponse = {
  principal: TAuthRegister;
  accessToken: TApiAccessToken;
};

export type TAuthForgotPassword = {
  email: string;
};

export type TAuthResetPassword = {
  password: string;
  passwordConfirm: string;
};
