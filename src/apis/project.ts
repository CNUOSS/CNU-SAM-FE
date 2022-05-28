import { MethodType } from '@hooks/useMutation';

export const getProjectListAPI = `/projects/search?`;

export const createProjectAPI: { method: MethodType; url: string } = { method: 'POST', url: '/projects' };
