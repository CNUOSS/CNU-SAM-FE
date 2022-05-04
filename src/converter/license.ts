export interface LicenseSearchType {
  limit: number;
  offset: number;
  licenseName: string;
  licenseType: string;
  restriction: string;
}

export const licenseSearch2ServerRequest = ({
  limit,
  offset,
  licenseName,
  licenseType,
  restriction,
}: LicenseSearchType) => {
  return {
    offset,
    limit,
    restriction: restriction || null,
    lcName: licenseName || null,
    lcType: licenseType || null,
  };
};
