import { MethodType } from '@hooks/useMutation';

export const createVersionAPI: { method: MethodType; url: string; dynamicUrl: (id: number) => string } = {
  method: 'POST',
  url: `project/:project_id/version`,
  dynamicUrl: (id: number) => `project/${id}/version`,
};
