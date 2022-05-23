/**
 * naming
 * apiname+(request|response)+(params|body)?+(client|server)?+type
 */

/* Common */
// UserAuth
export const RoleType = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  USER: 'USER',
} as const;
export type RoleType = typeof RoleType[keyof typeof RoleType];

export const NOTLOGIN = 'NOTLOGIN' as const;
export type NOTLOGIN = typeof NOTLOGIN;

/* License */
export interface LicenseType {
  id: number;
  licenseName: string;
  licenseUrl: string;
  licenseType: string;
  restrictions: string[];
}

// get licenses
export interface GetLicenseListRequestParamsClientType {
  limit: number;
  offset: number;
  licenseName: string;
  licenseType: string;
  restriction: string;
}

export interface GetLicenseListResponseClientType {
  meta: {
    totalCount: number;
    isEnd: boolean;
  };
  licenses: LicenseType[];
}

// create License
export interface CreateLicenseRequestBodyClientType extends LicenseType {}

/* User */
export interface UserType {
  id: string;
  role: RoleType;
}

// signin
export interface SigninRequestBodyClientType {
  id: string;
  password: string;
}

export interface SigninResponseClientType {
  user: UserType;
  accessToken: string;
  uuid: string;
}

// Logout
export interface LogoutRequestBodyClientType {
  id: string;
  accessToken: string;
  uuid: string;
}

// reload
export interface ReloadResponseClientType {
  id: string;
  role: RoleType;
}
