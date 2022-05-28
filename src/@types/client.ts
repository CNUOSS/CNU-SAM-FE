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

/* Data */
export interface LicenseNamesType {
  id: number;
  licenseName: string;
}

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

/* Subscribed SW */
export interface SubscribedSWType {
  id: number;
  updatorId: string;
  swType: string;
  swManufacturer: string;
  swName: string;
  usageRange: string;
  license: string;
  latestUpdateDate: string;
  expireDate: string;
  firstSubscribeDate: string;
}

// get
export interface GetSubscribeSWRequestParamsClientType {
  size: number;
  page: number;
  sort: string;
  swType: string;
  swMfr: string;
  swName: string;
}

export interface GetSubscribeSWResponseClientType {
  meta: {
    totalElements: number;
    last: boolean;
    totalPages: number;
    size: number;
  };
  subscriptionSWList: SubscribedSWType[];
}

// create
export type CreateSubscribedRequestBodyClientType = Omit<SubscribedSWType, 'id' | 'latestUpdateDate'>;

/* Project */
export interface ProjectType {
  id: number;
  projectName: string;
  projectStatus: string;
  createDate: string;
  updateDate: string;
  ossLicenseName: string;
  projectCategoryName: string;
  userId: string;
}

// get
export interface ProjectSearchRequestParamsClientType {
  size: number;
  page: number;
  sort: string;
  user: string;
  category: string;
  lcId: string;
  pjName: string;
}

export interface ProjectSearchResponseClientType {
  pageInfo: {
    totalElements: number;
    last: boolean;
    totalPages: number;
    size: number;
  };
  project: ProjectType[];
}

// create
export interface CreateProjectRequestClientType {
  projectDescription: string;
  projectName: string;
  projectStatus: string;
  ossLicenseId: number;
  projectCategoryName: string;
  userId: string;
}
