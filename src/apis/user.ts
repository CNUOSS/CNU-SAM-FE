import axios from 'axios';
import {
  SigninResponseServerType,
  signinResponseServer2Client,
  signinRequestClient2Server,
  reloadResponseServer2Client,
} from '@converter/user';
import { RoleType } from '@@types/types';
import { getToken } from '@utils/storage';

export interface UserType {
  id: string;
  role: RoleType;
}

// Signin
export interface SigninRequestBodyClientType {
  id: string;
  password: string;
}

export interface SigninResponseClientType {
  user: UserType;
  accessToken: string;
  uuid: string;
}

export const signinAPI = `/login`;
export const signinAPIFn = async (data: SigninRequestBodyClientType): Promise<SigninResponseClientType> => {
  const response = await axios.post<SigninResponseServerType>(signinAPI, { ...signinRequestClient2Server(data) });
  if (response.data) return signinResponseServer2Client(response.data);
  return Promise.reject(response.data);
};

// Logout
export const logoutAPI = `/users/logout`;

// reload
export interface ReloadResponseClientType {
  id: string;
  role: RoleType;
}

export const reloadAPI = `/reload`;
export const reloadAPIFn = async () => {
  const response = await axios.post(reloadAPI, {}, { headers: { Authorization: `Bearer ${getToken('at')}` } });
  if (response.data) return reloadResponseServer2Client(response.data);
  return Promise.reject(response.data);
};
