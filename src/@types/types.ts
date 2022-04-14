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
} as const;

export type NavItem = typeof NavItem[keyof typeof NavItem];

// TotalLectureSWList
export const TotalLectureSWListAttr = {
  Year: 'year',
  Semester: 'semester',
  Organization: 'organization',
  LectureNum: 'lectureNum',
  Class: 'class',
  LectureName: 'lectureName',
  Division: 'division',
  Writer: 'writer',
  ProductName: 'productName',
  ProductCompany: 'productCompany',
  License: 'license',
  Managed: 'managed',
} as const;

export type TotalLectureSWListAttr = typeof TotalLectureSWListAttr[keyof typeof TotalLectureSWListAttr];
