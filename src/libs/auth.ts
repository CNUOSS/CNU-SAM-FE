// https://codesandbox.io/s/react-query-auth-demo-fvvvt?file=/src/api.ts:775-792
import { initReactQueryAuth } from 'react-query-auth';
import { signinAPIFn, reloadAPIFn } from '@apis/user';
import * as storage from '@utils/storage';
import { SigninRequestBodyClientType, SigninResponseClientType, UserType } from '@@types/client';

const ACCESS_TOKEN = 'at';
const REFRESH_TOKEN = 'rt';

const handleUserResponse = async (data: SigninResponseClientType): Promise<UserType> => {
  const { user, accessToken, uuid } = data;
  storage.setToken(ACCESS_TOKEN, accessToken);
  storage.setToken(REFRESH_TOKEN, uuid);
  return user;
};

// TODO: implement not yet
// FIXME:
const loadUser = async (): Promise<UserType> => {
  if (storage.getToken(ACCESS_TOKEN)) {
    const data = await reloadAPIFn();
    return data;
  }
  return {} as UserType;
};

// TODO: implement not yet
const registerFn = async (data: any): Promise<UserType> => {
  return {} as UserType;
};

const loginFn = async (data: SigninRequestBodyClientType): Promise<UserType> => {
  const response = await signinAPIFn(data);
  const user = await handleUserResponse(response);
  return user;
};

const logoutFn = async () => {
  storage.clearToken(ACCESS_TOKEN);
  storage.clearToken(REFRESH_TOKEN);
};

const config = { loadUser, loginFn, logoutFn, registerFn };

const { AuthProvider, useAuth } = initReactQueryAuth<UserType>(config);

export { AuthProvider, useAuth };
