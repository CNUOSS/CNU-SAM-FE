/**
 * temporary folder for type storing
 */
// UserAuth
export const UserAuth = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
} as const;
export type UserAuth = typeof UserAuth[keyof typeof UserAuth];

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
} as const;

export type NavItem = typeof NavItem[keyof typeof NavItem];

// List Attributes
export const Trash = 'trash';
export const Number = 'number';
export type Trash = typeof Trash;
export type Number = typeof Number;

export const TotalLectureSWListAttr = {
  Year: 'year',
  Semester: 'semester',
  Department: 'department',
  LectureNum: 'lectureNum',
  ClassNum: 'classNum',
  LectureName: 'lectureName',
  LectureType: 'lectureType',
  Writer: 'writer',
  SWName: 'swName',
  Manufacturing: 'manufacturing',
  License: 'license',
  Managed: 'managed',
} as const;
export type TotalLectureSWListAttr = typeof TotalLectureSWListAttr[keyof typeof TotalLectureSWListAttr];

export const AddLectureSWListAttr = {
  Manufacturing: 'manufacturing',
  SWName: 'swName',
  License: 'license',
} as const;
export type AddLectureSWListAttr = typeof AddLectureSWListAttr[keyof typeof AddLectureSWListAttr];

export const LectureSWManagementListAttr = {
  Manufacturing: 'manufacturing',
  SWName: 'swName',
  UsedCount: 'usedCount',
  Writer: 'writer',
  EnrollDate: 'enrollDate',
} as const;
export type LectureSWManagementListAttr = typeof LectureSWManagementListAttr[keyof typeof LectureSWManagementListAttr];

export const SubscribedSWListAttr = {
  Type: 'type',
  Manufacturing: 'manufacturing',
  SWName: 'swName',
  UsageRange: 'usageRange',
  License: 'license',
  ExpireDt: 'expireDt',
  FirstSubscribeDt: 'FirstSubscribeDt',
  LatestUpdatedDt: 'LatestUpdatedDt',
  Writer: 'writer',
} as const;
export type SubscribedSWListAttr = typeof SubscribedSWListAttr[keyof typeof SubscribedSWListAttr];
