import { MethodType } from '@hooks/useMutation';

export const getSubscribedSWAPI = `/subscriptions/search?`;

export const createSubscribedSWAPI: { method: MethodType; url: string } = { method: 'POST', url: '/subscriptions' };

export const deleteSubscribedSWAPI: { method: MethodType; dynamicUrl: (id: number) => string; url: string } = {
  method: 'DELETE',
  url: `subscriptions/:id`,
  dynamicUrl: (id: number) => `/subscriptions/${id}`,
};
