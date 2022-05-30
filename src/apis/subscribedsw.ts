import { MethodType } from '@hooks/useMutation';

export const getSubscribedSWAPI = `/subscriptions/search?`;

export const createSubscribedSWAPI: { method: MethodType; url: string } = { method: 'POST', url: '/subscriptions' };

export const deleteSubscribedSWAPI: { method: MethodType; url: (id: number) => string } = {
  method: 'DELETE',
  url: (id: number) => `/subscriptions/${id}`,
};
