import { CreateVersionRequestClientType } from '@@types/client';
import { CreateVersionRequestServerType } from '@@types/server';

export const createVersionRequestClient2Server = ({
  projectId,
  versionName,
  versionDescription,
  ossList,
}: CreateVersionRequestClientType): CreateVersionRequestServerType => {
  return {
    project_id: projectId,
    version_name: versionName,
    version_description: versionDescription,
    oss_analysis: ossList.map((oss) => ({
      oss_location: oss.ossLocation,
      oss_name: oss.ossName,
      oss_url: oss.ossUrl,
      oss_version: oss.ossVersion,
      license_id: oss.licenseId,
    })),
  };
};
