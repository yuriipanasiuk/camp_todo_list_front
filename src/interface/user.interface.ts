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
