import axios from 'axios';
import { getToken } from '../utils/storage';

export interface UserType {
  id: string;
  role: string; // FIXME:
}

// Signin
export interface SigninRequestBodyClientType {
  id: string;
  password: string;
}

interface SigninResponseClientType {
  jwt: string;
  user: UserType;
}

export const signinAPI = `/users/signin`;
export const signinAPIFn = async (data: SigninRequestBodyClientType): Promise<SigninResponseClientType> => {
  const result = await axios.post(signinAPI, { data });
  if (result.data) return result.data;
  return Promise.reject(result.data);
};

// Logout
export const logoutAPI = `/users/logout`;

// refresh
export const refreshAPI = `/users/self`;
export const refreshAPIFn = async () => {
  const result = await axios.get(refreshAPI, { headers: { Authorization: getToken() } });
  if (result.data) return result.data;
  return Promise.reject(result.data);
};
