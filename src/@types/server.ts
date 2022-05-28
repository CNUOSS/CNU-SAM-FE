/* Common */
export type RoleServerType = 'ROLE_USER' | 'ROLE_MANAGER' | 'ROLE_ADMIN';

/* Data */
export interface RestrictionServerType {
  restriction_name: string;
}

export interface LicenseTypeServerType {
  license_type_name: string;
}

export interface CategoryNamesServerType {
  project_category_name: string;
}

export interface LicenseNamesServerType {
  id: number;
  license_name: string;
  license_url: string;
  oss_license_type: {
    license_type_name: string;
  };
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
export interface SubscribedSWServerType {
  id: number;
  latest_updater_id: string;
  sw_type: string;
  sw_manufacturer: string;
  sw_name: string;
  usage_range: string;
  license: string;
  latest_update_date: string;
  expire_date: string;
  first_subscribe_date: string;
}

// get
export interface GetSubscribeSWRequestParamsServerType {
  size: number;
  page: number;
  sort: string | null;
  ['sw-type']: string | null;
  ['sw-mfr']: string | null;
  ['sw-name']: string | null;
}

export interface GetSubscribeSWResponseServerType {
  meta: {
    total_elements: number;
    last: boolean;
    total_pages: number;
    size: number;
  };
  subscription_sw: SubscribedSWServerType[];
}

// create
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

/* Project */
export interface ProjectListItemServerType {
  id: number;
  project_name: string;
  project_status: string;
  create_date: string;
  update_date: string;
  oss_license_name: string;
  project_category_name: string;
  user_id: string;
}

// get
export interface ProjectSearchRequestParamsServerType {
  size: number;
  page: number;
  sort: string | null;
  user: string | null;
  category: string | null;
  ['lc-id']: string | null;
  ['pj-name']: string | null;
}

export interface ProjectSearchResponseServerType {
  page_info: {
    total_elements: number;
    last: boolean;
    total_pages: number;
    size: number;
  };
  project: ProjectServerType[];
}

// create
export interface CreateProjectRequestServerType {
  project_description: string;
  project_name: string;
  project_status: string;
  oss_license_id: number;
  project_category_name: string;
  user_id: string;
}
