import { serverRole2ClientRole } from './common';
import {
  LogoutRequestBodyClientType,
  ReloadResponseClientType,
  SigninRequestBodyClientType,
  SigninResponseClientType,
} from '@@types/client';
import {
  LogoutRequestBodyServerType,
  ReloadResponseServerType,
  SigninRequestBodyServerType,
  SigninResponseServerType,
} from '@@types/server';

export const signinRequestClient2Server = ({
  id,
  password,
}: SigninRequestBodyClientType): SigninRequestBodyServerType => {
  return {
    user_id: id,
    password,
  };
};

export const signinResponseServer2Client = ({
  token_type,
  user_id,
  access_token,
  uuid,
  role,
}: SigninResponseServerType): SigninResponseClientType => {
  return {
    uuid,
    accessToken: access_token,
    user: {
      id: user_id,
      role: serverRole2ClientRole(role),
    },
  };
};

export const reloadResponseServer2Client = ({ user_id, role }: ReloadResponseServerType): ReloadResponseClientType => {
  return {
    id: user_id,
    role: serverRole2ClientRole(role),
  };
};

export const logoutRequestClient2Server = ({
  id,
  accessToken,
  uuid,
}: LogoutRequestBodyClientType): LogoutRequestBodyServerType => {
  return {
    uuid,
    user_id: id,
    access_token: accessToken,
  };
};
