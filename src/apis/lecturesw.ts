import { MethodType } from '@hooks/useMutation';

export const getLectureSWListAPI = `/lectures/search?`;

export const getLectureChartAPI: { method: MethodType; url: string; dynamicUrl: (year: number) => string } = {
  method: 'GET',
  url: '/lectures/chart/:year',
  dynamicUrl: (year: number) => `/lectures/chart/${year}`,
};

export const createLectureSWAPI: { method: MethodType; url: string } = {
  method: 'POST',
  url: '/lectures',
};

export const deleteLectureSWAPI: { method: MethodType; url: string; dynamicUrl: (id: number) => string } = {
  method: 'DELETE',
  url: '/lectures/:id',
  dynamicUrl: (id: number) => `/lectures/${id}`,
};
