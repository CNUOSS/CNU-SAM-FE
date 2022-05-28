import {
  CreateProjectResponseClientType,
  ProjectSearchRequestParamsClientType,
  ProjectSearchResponseClientType,
} from '@@types/client';
import {
  CreateProjectResponseServerType,
  ProjectSearchRequestParamsServerType,
  ProjectSearchResponseServerType,
} from '@@types/server';
import { CreateProjectRequestClientType } from '../@types/client';
import { CreateProjectRequestServerType } from '../@types/server';

export const projectSearchRequestClient2Server = ({
  size,
  page,
  sort,
  user,
  category,
  lcId,
  pjName,
}: ProjectSearchRequestParamsClientType): ProjectSearchRequestParamsServerType => {
  return {
    size,
    page: page - 1,
    sort: sort || null,
    user: user || null,
    'lc-id': lcId || null,
    'pj-name': pjName || null,
    category: category || null,
  };
};

export const projectSearchResponseServer2Client = ({
  page_info,
  project,
}: ProjectSearchResponseServerType): ProjectSearchResponseClientType => {
  return {
    pageInfo: {
      totalElements: page_info.total_elements,
      last: page_info.last,
      totalPages: page_info.total_pages,
      size: page_info.size,
    },
    project: project.map((pj) => ({
      id: pj.id,
      projectName: pj.project_name,
      projectStatus: pj.project_status,
      createDate: new Date(pj.create_date).toLocaleDateString(),
      updateDate: new Date(pj.update_date).toLocaleDateString(),
      ossLicenseName: pj.oss_license_name,
      projectCategoryName: pj.project_category_name,
      userId: pj.user_id,
    })),
  };
};

export const createProjectRequestClient2Server = ({
  projectName,
  projectDescription,
  projectCategoryName,
  ossLicenseId,
  userId,
}: CreateProjectRequestClientType): CreateProjectRequestServerType => {
  return {
    project_name: projectName,
    project_description: projectDescription,
    project_status: 'C',
    project_category_name: projectCategoryName,
    oss_license_id: Number(ossLicenseId),
    user_id: userId,
  };
};

export const createProjectResponseServer2Client = ({
  id,
  project_name,
}: CreateProjectResponseServerType): CreateProjectResponseClientType => {
  return {
    id,
    projectName: project_name,
  };
};
