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

export interface AuthState {
  user: {
    name: string;
    email: string;
  };
  accessToken: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isRegister: boolean;
}

export interface IRouteProps {
  component: ComponentType;
  redirectTo?: string;
}
