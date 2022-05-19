import { MethodType } from '@hooks/useMutation';

export const getLicenseListAPI = `/licenses/search?`;

export const createLicenseAPI: { method: MethodType; url: string } = { method: 'POST', url: '/licenses' };

export const deleteLicenseAPI: { method: MethodType; url: (id: number) => string } = {
  method: 'DELETE',
  url: (id: number) => `/licenses/${id}`,
};
