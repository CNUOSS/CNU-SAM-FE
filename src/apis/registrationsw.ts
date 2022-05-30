import { MethodType } from '@hooks/useMutation';

export const getSubscribedSWAPI = `/registrations/search?`;

export const createRegistrationSWAPI: { method: MethodType; url: string } = { method: 'POST', url: '/registrations' };
