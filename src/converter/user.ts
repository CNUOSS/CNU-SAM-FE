import { SigninRequestBodyClientType, SigninResponseClientType } from '@apis/user';
import { RoleServerType, serverRole2ClientRole } from './common';
import { ReloadResponseClientType, LogoutRequestBodyClientType } from '../apis/user';

// signin
interface SigninRequestBodyServerType {
  user_id: string;
  password: string;
}

export interface SigninResponseServerType {
  token_type: string;
  user_id: string;
  access_token: string;
  uuid: string;
  role: RoleServerType;
}

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

// reload
export interface ReloadResponseServerType {
  user_id: string;
  role: RoleServerType;
}

export const reloadResponseServer2Client = ({ user_id, role }: ReloadResponseServerType): ReloadResponseClientType => {
  return {
    id: user_id,
    role: serverRole2ClientRole(role),
  };
};

// logout
export interface LogoutRequestBodyServerType {
  user_id: string;
  access_token: string;
  uuid: string;
}

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
