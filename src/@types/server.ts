/* Common */
export type RoleServerType = 'ROLE_USER' | 'ROLE_MANAGER' | 'ROLE_ADMIN';

/* Data */
export interface RestrictionServerType {
  restriction_name: string;
}

export interface LicenseTypeServerType {
  license_type_name: string;
}

/* License */
interface LicenseServerType {
  id: number;
  license_name: string;
  license_url: string;
  oss_license_type: {
    license_type_name: string;
  };
  restriction: {
    restriction_name: string;
  }[];
}

// get licenses
export interface GetLicenseListRequestParamsServerType {
  size: number;
  page: number;
  ['lc-name']: string | null;
  ['lc-type']: string | null;
  restriction: string | null;
}

export interface GetLicenseListResponseServerType {
  meta: {
    total_count: number;
    is_end: boolean;
  };
  oss_license: LicenseServerType[];
}

// create license
export interface CreateLicenseRequestBodyServerType extends Omit<LicenseServerType, 'id'> {}

/* User */
// signin
export interface SigninRequestBodyServerType {
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

// reload
export interface ReloadResponseServerType {
  user_id: string;
  role: RoleServerType;
}

// logout
export interface LogoutRequestBodyServerType {
  user_id: string;
  access_token: string;
  uuid: string;
}

/* Subscribed SW */
export interface CreateSubscribedRequestBodyServerType {
  latest_updater_id: string;
  sw_type: string;
  sw_manufacturer: string;
  sw_name: string;
  usage_range: string;
  license: string;
  expire_date: string;
  first_subscribe_date: string;
}