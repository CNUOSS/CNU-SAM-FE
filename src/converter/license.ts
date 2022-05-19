import {
  CreateLicenseRequestBodyClientType,
  GetLicenseListRequestParamsClientType,
  GetLicenseListResponseClientType,
} from '@@types/client';
import {
  CreateLicenseRequestBodyServerType,
  GetLicenseListRequestParamsServerType,
  GetLicenseListResponseServerType,
} from '@@types/server';

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
export const createLicenseRequestClient2Server = ({
  licenseName,
  licenseType,
  licenseUrl,
  restrictions,
}: Omit<CreateLicenseRequestBodyClientType, 'id'>): CreateLicenseRequestBodyServerType => ({
  license_name: licenseName,
  oss_license_type: { license_type_name: licenseType },
  license_url: licenseUrl,
  restriction: restrictions.map((res) => ({ restriction_name: res })),
});
