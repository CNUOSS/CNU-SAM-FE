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
  page_info,
  oss_license,
}: GetLicenseListResponseServerType): GetLicenseListResponseClientType => {
  return {
    pageInfo: {
      totalElements: page_info.total_elements,
      last: page_info.last,
      totalPages: page_info.total_pages,
      size: page_info.size,
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
