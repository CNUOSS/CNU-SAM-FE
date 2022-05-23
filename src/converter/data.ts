import { LicenseTypeServerType, RestrictionServerType } from '@@types/server';

// Get Restrictions
export const getRestrictionResponseServer2Client = (restrictions: RestrictionServerType[]): string[] => {
  return restrictions.map((res) => res.restriction_name);
};

// Get Licenses Type
export const getLicenseTypesResponseServer2Client = (licenseTypes: LicenseTypeServerType[]): string[] => {
  return licenseTypes.map((type) => type.license_type_name);
};
