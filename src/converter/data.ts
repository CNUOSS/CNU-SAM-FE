import { LicenseNamesType } from '@@types/client';
import {
  CategoryNamesServerType,
  DepartmentServerType,
  LectureTypeServerType,
  LicenseNamesServerType,
  LicenseTypeServerType,
  ManufacturerNameServerType,
  RestrictionServerType,
} from '@@types/server';

// Get Restrictions
export const getRestrictionResponseServer2Client = (restrictions: RestrictionServerType[]): string[] => {
  return restrictions.map((res) => res.restriction_name);
};

// Get Licenses Type
export const getLicenseTypesResponseServer2Client = (licenseTypes: LicenseTypeServerType[]): string[] => {
  return licenseTypes.map((type) => type.license_type_name);
};

// Get Category Names
export const getCategoryNamesResponseServer2Client = (categoryNames: CategoryNamesServerType[]): string[] => {
  return categoryNames.map((category) => category.project_category_name);
};

// Get License Names
export const getLicenseNamesResponseServer2Client = (licenseNames: LicenseNamesServerType[]): LicenseNamesType[] => {
  return licenseNames.map((names) => ({ id: names.id, licenseName: names.license_name }));
};

// Get Manufacturer Names
export const getManufacturerNamesResponseServer2Client = ({
  manufacturers,
}: {
  manufacturers: ManufacturerNameServerType[];
}): string[] => {
  if (!manufacturers) return [];
  return manufacturers.map((names) => names.manufacturer);
};

// Get Lecture Types
export const getLectureTypesResponseServer2Client = ({
  lectureTypes,
}: {
  lectureTypes: LectureTypeServerType[];
}): string[] => {
  if (!lectureTypes) return [];
  return lectureTypes.map((lecture) => lecture.lecture_type);
};

// Get Departments
export const getDepartmentResponseServer2Client = ({
  departments,
}: {
  departments: DepartmentServerType[];
}): string[] => {
  if (!departments) return [];
  return departments.map((department) => department.department);
};
