import axios from 'axios';
import {
  signinResponseServer2Client,
  signinRequestClient2Server,
  reloadResponseServer2Client,
  logoutRequestClient2Server,
} from '@converter/user';
import { getToken } from '@utils/storage';
import { LogoutRequestBodyServerType, SigninResponseServerType } from '@@types/server';
import { LogoutRequestBodyClientType, SigninRequestBodyClientType, SigninResponseClientType } from '@@types/client';

export const signinAPI = `/login`;
export const signinAPIFn = async (data: SigninRequestBodyClientType): Promise<SigninResponseClientType> => {
  const response = await axios.post<SigninResponseServerType>(signinAPI, { ...signinRequestClient2Server(data) });
  if (response.data) return signinResponseServer2Client(response.data);
  return Promise.reject(response.data);
};

export const logoutAPI = `/users/logout`;
export const logoutAPIFn = async (data: LogoutRequestBodyClientType) => {
  await axios.post<LogoutRequestBodyServerType>(logoutAPI, { ...logoutRequestClient2Server(data) });
};

export const reloadAPI = `/reload`;
export const reloadAPIFn = async () => {
  const response = await axios.post(reloadAPI, {}, { headers: { Authorization: `Bearer ${getToken('at')}` } });
  if (response.data) return reloadResponseServer2Client(response.data);
  return Promise.reject(response.data);
};
