import { MethodType } from '@hooks/useMutation';

export const getRegistrationSWListAPI = `/registrations/search?`;

export const createRegistrationSWAPI: { method: MethodType; url: string } = { method: 'POST', url: '/registrations' };

// FIXME: add dynamicUrl
export const deleteRegistrationSWAPI: { method: MethodType; url: (id: number) => string } = {
  method: 'DELETE',
  url: (id: number) => `/registrations/${id}`,
};
