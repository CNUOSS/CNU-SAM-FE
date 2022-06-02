import { GetLectureSWListRequestParamsClientType, GetLectureSWListResponseClientType } from '@@types/client';
import { GetLectureSWListRequestParamsServerType, GetLectureSWListResponseServerType } from '@@types/server';

export const getLectureSWListRequestClient2Server = ({
  size,
  page,
  sort,
  department,
  year,
  lectureType,
  semester,
  lectureName,
  lectureNum,
  owner,
}: GetLectureSWListRequestParamsClientType): GetLectureSWListRequestParamsServerType => {
  return {
    size,
    page,
    sort: sort || null,
    department: department || null,
    year: year || null,
    'lecture-type': lectureType || null,
    semester: semester || null,
    'lecture-name': lectureName || null,
    'lecture-num': lectureNum || null,
    owner: owner || null,
  };
};

export const getLectureSWListResponseServer2Client = ({
  page_info,
  lecture_sw,
}: GetLectureSWListResponseServerType): GetLectureSWListResponseClientType => {
  return {
    pageInfo: {
      totalElements: page_info.total_elements,
      last: page_info.last,
      totalPages: page_info.total_pages,
      size: page_info.size,
    },
    lectureSWList: lecture_sw.map((sw) => ({
      id: sw.id,
      year: sw.year,
      semester: sw.semester,
      department: sw.department,
      lectureNum: sw.lecture_num,
      lectureName: sw.lecture_name,
      lectureType: sw.lecture_type,
      ownerId: sw.owner_id,
      swName: sw.registration_sw.swName,
      swManufacturer: sw.registration_sw.swManufacturer,
      license: '',
      updateDate: sw.latest_update_date,
      isManaged: sw.registration_sw.isManaged,
    })),
  };
};
