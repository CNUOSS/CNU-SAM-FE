import { MethodType } from '@hooks/useMutation';

export const getRegistrationSWListAPI = `/registrations/search?`;

export const createRegistrationSWAPI: { method: MethodType; url: string } = { method: 'POST', url: '/registrations' };

export const deleteRegistrationSWAPI: { method: MethodType; dynamicUrl: (id: number) => string; url: string } = {
  method: 'DELETE',
  url: `/registrations/:id`,
  dynamicUrl: (id: number) => `/registrations/${id}`,
};

export const updateRegistrationSWAPI: { method: MethodType; dynamicUrl: (id: number) => string; url: string } = {
  method: 'PUT',
  url: `/registrations/:id`,
  dynamicUrl: (id: number) => `/registrations/${id}`,
};
