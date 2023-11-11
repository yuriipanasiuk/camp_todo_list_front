import { ComponentType } from 'react';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  accessToken: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthState {
  user: {
    name: string;
    email: string;
  };
  accessToken: string;
  isLoggedIn?: boolean;
  isRefreshing: boolean;
}

export interface IRouteProps {
  component: ComponentType;
  redirectTo?: string;
}

export interface IUserRegistrationPayload {
  email: string;
  name: string;
  accessToken?: string;
}

export interface IUserPayload {
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
}
