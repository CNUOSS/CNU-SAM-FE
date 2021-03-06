/**
 * temporary folder for type storing
 */

// NavItem
export const NavItem = {
  TotalLectureSWList: 'TotalLectureSWList',
  SubscribingSWList: 'SubscribingSWList',
  SWDashboard: 'SWDashboard',

  PJList: 'PJList',
  LicenseList: 'LicenseList',

  UserManagement: 'UserManagement',
  SWManagement: 'SWManagement',

  UserGuide: 'UserGuide',

  EnrollSW: 'EnrollSW',
  EnrollPRJ: 'EnrollPRJ',
} as const;

export type NavItem = typeof NavItem[keyof typeof NavItem];

// List Attributes
export const Trash = 'trash';
export const Number = 'number';
export const Temp = 'temp';
export type Trash = typeof Trash;
export type Number = typeof Number;
export type Temp = typeof Temp;

export const LectureSWListAttr = {
  Year: 'year',
  Semester: 'semester',
  Department: 'department',
  LectureNum: 'lectureNum',
  LectureName: 'lectureName',
  LectureType: 'lectureType',
  OwnerId: 'ownerId',
  SWName: 'swName',
  SWManufacturer: 'swManufacturer',
  License: 'license',
  UpdateDate: 'updateDate',
  isManaged: 'isManaged',
} as const;
export type LectureSWListAttr = typeof LectureSWListAttr[keyof typeof LectureSWListAttr];

export const AddLectureSWListAttr = {
  swManufacturer: 'swManufacturer',
  SWName: 'swName',
  License: 'license',
} as const;
export type AddLectureSWListAttr = typeof AddLectureSWListAttr[keyof typeof AddLectureSWListAttr];

export const RegistrationSWListAttr = {
  SWManufacturer: 'swManufacturer',
  SWName: 'swName',
  LatestUpdatorId: 'latestUpdaterId',
  LatestUpdateDate: 'latestUpdateDate',
} as const;
export type RegistrationSWListAttr = typeof RegistrationSWListAttr[keyof typeof RegistrationSWListAttr];

export const SubscribedSWListAttr = {
  SWType: 'swType',
  SWManufacturer: 'swManufacturer',
  SWName: 'swName',
  UsageRange: 'usageRange',
  License: 'license',
  ExpireDate: 'expireDate',
  FirstSubscribeDate: 'firstSubscribeDate',
  LatestUpdateDate: 'latestUpdateDate',
  UpdatorId: 'updatorId',
} as const;
export type SubscribedSWListAttr = typeof SubscribedSWListAttr[keyof typeof SubscribedSWListAttr];

export const ProjectListAttr = {
  ProjectName: 'projectName',
  CreateDate: 'createDate',
  UpdateDate: 'updateDate',
  ProjectStatus: 'projectStatus',
  OSSLicenseName: 'ossLicenseName',
  ProjectCategoryName: 'projectCategoryName',
  UserId: 'userId',
} as const;
export type ProjectListAttr = typeof ProjectListAttr[keyof typeof ProjectListAttr];

export const VersionListAttr = {
  VersionName: 'versionName',
  CreatedDate: 'createDate',
} as const;
export type VersionListAttr = typeof VersionListAttr[keyof typeof VersionListAttr];

export const OSSListAttr = {
  OSSLocation: 'ossLocation',
  OSSName: 'ossName',
  OSSVersion: 'ossVersion',
  License: 'license',
  OSSUrl: 'ossUrl',
} as const;
export type OSSListAttr = typeof OSSListAttr[keyof typeof OSSListAttr];

export const LicenseListAttr = {
  LicenseName: 'licenseName',
  LicenseType: 'licenseType',
  LicenseUrl: 'licenseUrl',
  Restriction: 'restriction',
} as const;
export type LicenseListAttr = typeof LicenseListAttr[keyof typeof LicenseListAttr];

export const OSSAnalysisListAttr = {
  OSSLocation: 'ossLocation',
  OSSName: 'ossName',
  OSSVersion: 'ossVersion',
  OSSUrl: 'ossUrl',
  LicenseName: 'licenseName',
  LicenseUrl: 'licenseUrl',
  LicenseTypeName: 'licenseTypeName',
};
export type OSSAnalysisListAttr = typeof OSSAnalysisListAttr[keyof typeof OSSAnalysisListAttr];
