import { MethodType } from '@hooks/useMutation';

export const createVersionAPI: { method: MethodType; url: string; dynamicUrl: (id: number) => string } = {
  method: 'POST',
  url: `projects/:project_id/versions`,
  dynamicUrl: (id: number) => `projects/${id}/versions`,
};
