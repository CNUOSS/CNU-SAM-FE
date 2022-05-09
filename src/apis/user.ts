import axios from 'axios';
import { SigninResponseServerType, signinResponseServer2Client, signinRequestClient2Server } from '../converter/user';
import { RoleType } from '../converter/common';
import { getToken } from '../utils/storage';

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

export const signinAPI = `/users/signin`;
export const signinAPIFn = async (data: SigninRequestBodyClientType): Promise<SigninResponseClientType> => {
  const response = await axios.post<SigninResponseServerType>(signinAPI, { data: signinRequestClient2Server(data) });
  if (response.data) return signinResponseServer2Client(response.data);
  return Promise.reject(response.data);
};

// Logout
export const logoutAPI = `/users/logout`;

// refresh
export const refreshAPI = `/users/self`;
export const refreshAPIFn = async () => {
  const response = await axios.get(refreshAPI, { headers: { Authorization: `Bearer ${getToken('at')}` } });
  if (response.data) return response.data;
  return Promise.reject(response.data);
};
