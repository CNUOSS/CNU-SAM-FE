// Get Restrictions
interface RestrictionServerType {
  restriction_name: string;
}

export const getRestrictionResponseServer2Client = (restrictions: RestrictionServerType[]): string[] => {
  return restrictions.map((res) => res.restriction_name);
};

// Get Licenses Type
interface LicenseTypeServerType {
  license_type_name: string;
}

export const getLicenseTypesResponseServer2Client = (licenseTypes: LicenseTypeServerType[]): string[] => {
  return licenseTypes.map((type) => type.license_type_name);
};
