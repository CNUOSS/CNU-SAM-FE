import { RoleType } from '@@types/client';
import { RoleServerType } from '@@types/server';

export const clientRole2ServerRole = (role: RoleType): RoleServerType => {
  switch (role) {
    case 'ADMIN':
      return 'ROLE_ADMIN';
    case 'USER':
      return 'ROLE_USER';
    case 'MANAGER':
      return 'ROLE_MANAGER';
    default:
      throw Error();
  }
};

export const serverRole2ClientRole = (role: RoleServerType): RoleType => {
  switch (role) {
    case 'ROLE_ADMIN':
      return 'ADMIN';
    case 'ROLE_USER':
      return 'USER';
    case 'ROLE_MANAGER':
      return 'MANAGER';
    default:
      throw Error();
  }
};
