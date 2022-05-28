import { MethodType } from '@hooks/useMutation';

export const getProjectListAPI = `/projects/search?`;

export const getProjectDetailAPI: { method: MethodType; url: (projectId: number) => string } = {
  method: 'GET',
  url: (projectId) => `/projects/${projectId}`,
};

export const createProjectAPI: { method: MethodType; url: string } = { method: 'POST', url: '/projects' };

export const deleteProjectAPI: { method: MethodType; url: (projectId: number) => string } = {
  method: 'DELETE',
  url: (projectId) => `/projects/${projectId}`,
};
