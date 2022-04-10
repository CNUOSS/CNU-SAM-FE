/**
 * temporary folder for type storing
 */

export const UserAuth = {
  Admin: 'Admin',
  Manager: 'Manager',
  User: 'User',
} as const;
export type UserAuth = typeof UserAuth[keyof typeof UserAuth];

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
