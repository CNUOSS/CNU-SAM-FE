import { MethodType } from '@hooks/useMutation';

export const getLectureSWListAPI = `/lectures/search?`;

export const createLectureSWAPI: { method: MethodType; url: string } = {
  method: 'POST',
  url: '/lectures',
};
