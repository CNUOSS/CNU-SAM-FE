import {
  GetLicenseListRequestParamsClientType,
  GetLicenseListResponseClientType,
  CreateLicenseRequestBodyClientType,
} from '@apis/license';

interface LicenseServerType {
  id: string;
  license_name: string;
  license_url: string;
  oss_license_type: {
    license_type_name: string;
  };
  restriction: {
    restriction_name: string;
  }[];
}

// GetLicenses
interface GetLicenseListRequestParamsServerType {
  size: number;
  page: number;
  ['lc-name']: string | null;
  ['lc-type']: string | null;
  restriction: string | null;
}

interface GetLicenseListResponseServerType {
  meta: {
    total_count: number;
    is_end: boolean;
  };
  oss_license: LicenseServerType[];
}

export const licenseSearchRequestClient2Server = ({
  limit,
  offset,
  licenseName,
  licenseType,
  restriction,
}: GetLicenseListRequestParamsClientType): GetLicenseListRequestParamsServerType => {
  return {
    size: limit,
    page: offset - 1,
    restriction: restriction || null,
    'lc-name': licenseName || null,
    'lc-type': licenseType || null,
  };
};

export const licenseSearchResponseServer2Client = ({
  meta,
  oss_license,
}: GetLicenseListResponseServerType): GetLicenseListResponseClientType => {
  return {
    meta: {
      totalCount: meta.total_count,
      isEnd: meta.is_end,
    },
    licenses: oss_license.map((li) => ({
      id: li.id,
      licenseName: li.license_name,
      licenseType: li.oss_license_type.license_type_name,
      licenseUrl: li.license_url,
      restrictions: li.restriction.map((res) => res.restriction_name),
    })),
  };
};

// CreateLicense
interface CreateLicenseRequestBodyServerType extends Omit<LicenseServerType, 'id'> {}

export const createLicenseRequestClient2Server = ({
  licenseName,
  licenseType,
  licenseUrl,
  restrictions,
}: CreateLicenseRequestBodyClientType): CreateLicenseRequestBodyServerType => ({
  license_name: licenseName,
  oss_license_type: { license_type_name: licenseType },
  license_url: licenseUrl,
  restriction: restrictions.map((res) => ({ restriction_name: res })),
});
