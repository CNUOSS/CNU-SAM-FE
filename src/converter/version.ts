import { CreateVersionRequestClientType, GetVersionDetailResponseClientType } from '@@types/client';
import { CreateVersionRequestServerType, GetVersionDetailResponseServerType } from '@@types/server';

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

export const getVersionDetailResponseServer2Client = ({
  versionId,
  versionName,
  versionDescription,
  ossAnalysis,
  analysisRestriction,
}: GetVersionDetailResponseServerType): GetVersionDetailResponseClientType => {
  return {
    versionId,
    versionName,
    versionDescription,
    ossAnalysis,
    analysisRestriction: analysisRestriction.map((analysis) => ({
      licenseName: analysis.licenseName,
      restriction: analysis.restriction.map((res) => ({ restrictionName: res.restriction_name })),
    })),
  };
};
