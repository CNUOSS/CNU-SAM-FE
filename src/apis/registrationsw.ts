import { MethodType } from '@hooks/useMutation';

export const getRegistrationSWListAPI = `/registrations/search?`;

export const createRegistrationSWAPI: { method: MethodType; url: string } = { method: 'POST', url: '/registrations' };

// FIXME: add dynamicUrl
export const deleteRegistrationSWAPI: { method: MethodType; dynamicUrl: (id: number) => string; url: string } = {
  method: 'DELETE',
  url: `/registrations/:id`,
  dynamicUrl: (id: number) => `/registrations/${id}`,
};
