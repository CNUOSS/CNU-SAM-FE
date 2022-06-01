import { MethodType } from '@hooks/useMutation';

export const getVersionDetailAPI: {
  method: MethodType;
  url: string;
  dynamicUrl: (projectId: number, versionId: number) => string;
} = {
  method: 'GET',
  url: `projects/:projectId/versions/:versionId/license-protector`,
  dynamicUrl: (projectId: number, versionId: number) => `projects/${projectId}/versions/${versionId}/license-protector`,
};

export const createVersionAPI: { method: MethodType; url: string; dynamicUrl: (id: number) => string } = {
  method: 'POST',
  url: `projects/:project_id/versions`,
  dynamicUrl: (id: number) => `projects/${id}/versions`,
};
