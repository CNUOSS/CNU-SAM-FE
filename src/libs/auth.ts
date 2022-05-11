// https://codesandbox.io/s/react-query-auth-demo-fvvvt?file=/src/api.ts:775-792
import { initReactQueryAuth } from 'react-query-auth';
import {
  signinAPIFn,
  // reloadAPIFn,
  SigninRequestBodyClientType,
  UserType,
  SigninResponseClientType,
} from '../apis/user';
import * as storage from '../utils/storage';

const handleUserResponse = async (data: SigninResponseClientType): Promise<UserType> => {
  const { user, accessToken, uuid } = data;
  storage.setToken('at', accessToken);
  storage.setToken('rt', uuid);
  return user;
};

// TODO: implement not yet
// FIXME:
const loadUser = async (): Promise<UserType> => {
  // if (storage.getToken('at')) {
  //   const data = await reloadAPIFn();
  //   return data;
  // }
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
  storage.clearToken('at');
  storage.clearToken('rt');
};

const config = { loadUser, loginFn, logoutFn, registerFn };

const { AuthProvider, useAuth } = initReactQueryAuth<UserType>(config);

export { AuthProvider, useAuth };
