import {
  GetLicenseListRequestParamsClientType,
  GetLicenseListResponseClientType,
  CreateLicenseRequestBodyClientType,
} from '../apis/license';

interface LicenseServerType {
  license_name: string;
  license_url: string;
  license_type_name: string;
  restriction: {
    restriction_name: string;
  }[];
}

// GetLicenses
interface GetLicenseListRequestParamsServerType {
  limit: number;
  offset: number;
  lcName: string | null;
  lcType: string | null;
  restriction: string | null;
}

interface GetLicenseListResponseServerType {
  meta: {
    total_count: number;
    is_end: boolean;
  };
  license: LicenseServerType[];
}

export const licenseSearchRequestClient2Server = ({
  limit,
  offset,
  licenseName,
  licenseType,
  restriction,
}: GetLicenseListRequestParamsClientType): GetLicenseListRequestParamsServerType => {
  return {
    offset,
    limit,
    restriction: restriction || null,
    lcName: licenseName || null,
    lcType: licenseType || null,
  };
};

export const licenseSearchResponseServer2Client = ({
  meta,
  license,
}: GetLicenseListResponseServerType): GetLicenseListResponseClientType => {
  return {
    meta: {
      totalCount: meta.total_count,
      isEnd: meta.is_end,
    },
    licenses: license.map((li) => ({
      licenseName: li.license_name,
      licenseType: li.license_type_name,
      licenseUrl: li.license_url,
      restrictions: li.restriction.map((res) => res.restriction_name),
    })),
  };
};

// CreateLicense
interface CreateLicenseRequestBodyServerType extends LicenseServerType {}

export const createLicenseRequestClient2Server = ({
  licenseName,
  licenseType,
  licenseUrl,
  restrictions,
}: CreateLicenseRequestBodyClientType): CreateLicenseRequestBodyServerType => ({
  license_name: licenseName,
  license_type_name: licenseType,
  license_url: licenseUrl,
  restriction: restrictions.map((res) => ({ restriction_name: res })),
});
