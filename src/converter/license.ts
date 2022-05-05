import { GetLicenseListRequestParamsClientType, GetLicenseListResponseClientType } from '../apis/license';

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
  license: {
    license_name: string;
    license_url: string;
    license_type_name: string;
    restriction: {
      restriction_name: string;
    }[];
  }[];
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
