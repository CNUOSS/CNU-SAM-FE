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
  Organization: 'organization',
  LectureNum: 'lectureNum',
  Class: 'class',
  LectureName: 'lectureName',
  Division: 'division',
  Writer: 'writer',
  Product: 'product',
  Company: 'company',
  License: 'license',
  Managed: 'managed',
} as const;
export type TotalLectureSWListAttr = typeof TotalLectureSWListAttr[keyof typeof TotalLectureSWListAttr];

export const AddLectureSWListAttr = {
  Company: 'company',
  ProductName: 'productName',
  License: 'license',
} as const;
export type AddLectureSWListAttr = typeof AddLectureSWListAttr[keyof typeof AddLectureSWListAttr];

export const LectureSWManagementListAttr = {
  Company: 'company',
  Product: 'product',
  UsedCount: 'usedCount',
  Writer: 'writer',
  EnrollDate: 'enrollDate',
} as const;
export type LectureSWManagementListAttr = typeof LectureSWManagementListAttr[keyof typeof LectureSWManagementListAttr];

export const SubscribedSWListAttr = {
  ProductFamily: 'productFamily',
  Company: 'company',
  Product: 'product',
  Range: 'range',
  License: 'license',
  ExpireDate: 'expireDate',
  FirstSubscribeDate: 'FirstSubscribeDate',
  LatestUpdatedDate: 'LatestUpdatedDate',
  Writer: 'writer',
} as const;
export type SubscribedSWListAttr = typeof SubscribedSWListAttr[keyof typeof SubscribedSWListAttr];
