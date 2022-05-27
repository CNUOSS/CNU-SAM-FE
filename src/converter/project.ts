import { ProjectSearchRequestParamsClientType, ProjectSearchResponseClientType } from '@@types/client';
import { ProjectSearchRequestParamsServerType, ProjectSearchResponseServerType } from '@@types/server';

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