// https://codesandbox.io/s/react-query-auth-demo-fvvvt?file=/src/api.ts:775-792
import { initReactQueryAuth } from 'react-query-auth';
import { signinAPIFn, SigninRequestBodyClientType, UserType } from '../apis/user';
import * as storage from '../utils/storage';

const handleUserResponse = async (data: any): Promise<UserType> => {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
};

// TODO: implement not yet
const loadUser = async (): Promise<UserType> => {
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

const logoutFn = async () => storage.clearToken();

const config = { loadUser, loginFn, logoutFn, registerFn };

export default initReactQueryAuth<UserType>(config);
