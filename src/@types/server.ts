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

export interface ManufacturerNameServerType {
  manufacturer: string;
}

export interface SWNameServerType {
  sw_name: string;
}

export interface LicenseNamesServerType {
  id: number;
  license_name: string;
  license_url: string;
  oss_license_type: {
    license_type_name: string;
  };
}

export interface LectureTypeServerType {
  lecture_type: string;
}

export interface DepartmentServerType {
  department: string;
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
  page_info: {
    total_elements: number;
    last: boolean;
    total_pages: number;
    size: number;
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
  page_info: {
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

/* Registration SW */
export interface RegistrationSWServerType {
  id: number;
  latest_updater_id: string;
  sw_manufacturer: string;
  sw_name: string;
  latest_update_date: string;
  managed: boolean;
}

// get
export interface GetRegistrationswListRequestParamsServerType {
  size: number;
  page: number;
  sort: string | null;
  ['sw-mfr']: string | null;
  ['sw-name']: string | null;
}

export interface GetRegistrationSWListResponseServerType {
  page_info: {
    total_elements: number;
    last: boolean;
    total_pages: number;
    size: number;
  };
  registration_sw: RegistrationSWServerType[];
}

// create
export type CreateRegistrationSWRequestBodyServerType = Omit<
  RegistrationSWServerType,
  'id' | 'latest_update_date' | 'managed'
> & { is_managed: boolean };

// update
export type UpdateRegistrationSWRequestBodyServerType = Omit<
  RegistrationSWServerType,
  'latest_update_date' | 'managed'
> & {
  is_managed: boolean;
};

/* Lecture SW */
export interface LectureSWServerType {
  id: number;
  owner_id: string;
  year: string;
  semester: string;
  lecture_num: string;
  lecture_name: string;
  lecture_type: string;
  department: string;
  create_date: string;
  latest_update_date: string;
  registration_swid: number;
  sw_manufacturer: string;
  sw_name: string;
  license: string;
  isManaged: boolean;
}

// get
export interface GetLectureSWListRequestParamsServerType {
  size: number;
  page: number;
  sort: string | null;
  department: string | null;
  year: string | null;
  ['lecture-type']: string | null;
  semester: string | null;
  ['lecture-name']: string | null;
  ['lecture-num']: string | null;
  owner: string | null;
}

export interface GetLectureSWListResponseServerType {
  page_info: {
    total_elements: number;
    last: boolean;
    total_pages: number;
    size: number;
  };
  lecture_sw: LectureSWServerType[];
}

export interface GetLectureChartResponseServerType {
  lecture_sw_for_chart: {
    registration_sw: {
      id: number;
      latestUpdaterId: string;
      swManufacturer: string;
      swName: string;
      latestUpdateDate: string;
      isManaged: boolean;
    };
    count: number;
  }[];
}

// create
export interface CreateLectureSWResponseServerType {
  owner_id: string;
  year: string;
  semester: string;
  lecture_num: string;
  lecture_name: string;
  lecture_type: string;
  department: string;
  sw: {
    sw_manufacturer: string;
    sw_name: string;
    license: string;
  }[];
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
export interface ProjectMetaServerType {
  project_description: string;
  project_name: string;
  project_status: string;
  oss_license_id: number;
  project_category_name: string;
}
export interface ProjectDetailServerType {
  id: number;
  project_description: string;
  project_name: string;
  project_status: string;
  create_date: string;
  update_date: string;
  project_category_name: string;
  oss_license_name: string;
  user_id: string;
  version: {
    id: number;
    version_name: string;
    create_date: string;
  }[];
}

// search
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
  project: ProjectListItemServerType[];
}

// get detail
export interface GetProjectDetailResponseServerType extends ProjectDetailServerType {}

// create
export interface CreateProjectRequestServerType extends ProjectMetaServerType {
  user_id: string;
}

export interface CreateProjectResponseServerType extends ProjectMetaServerType {
  id: number;
  create_date: string;
  update_date: string;
  user_id: string;
}

/* version */
export interface CreateVersionRequestServerType {
  project_id: number;
  version_name: string;
  version_description: string;
  oss_analysis: {
    oss_location: string;
    oss_name: string;
    oss_version: string;
    oss_url: string;
    license_id: number;
  }[];
}

export interface GetVersionDetailResponseServerType {
  versionId: number;
  versionName: string;
  versionDescription: string;
  ossAnalysis: {
    ossLocation: string;
    ossName: string;
    ossVersion: string;
    ossUrl: string;
    licenseName: string;
    licenseUrl: string;
    licenseTypeName: string;
  }[];
  analysisRestriction: {
    licenseName: string;
    restriction: {
      restriction_name: string;
    }[];
  }[];
}
