import {
  CreateLectureSWRequestClientType,
  GetLectureChartResponseClientType,
  GetLectureSWListRequestParamsClientType,
  GetLectureSWListResponseClientType,
  LectureSWType,
  SummarizedRegistrationSWType,
} from '@@types/client';
import {
  CreateLectureSWResponseServerType,
  GetLectureChartResponseServerType,
  GetLectureSWListRequestParamsServerType,
  GetLectureSWListResponseServerType,
} from '@@types/server';

export const lectureSW2RegistrationSW = ({
  swId,
  swManufacturer,
  swName,
}: LectureSWType): SummarizedRegistrationSWType => {
  return {
    id: swId,
    swName,
    swManufacturer,
  };
};

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
    page: page - 1,
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
      swId: sw.registration_sw.id,
      swName: sw.registration_sw.swName,
      swManufacturer: sw.registration_sw.swManufacturer,
      license: '',
      updateDate: new Date(sw.latest_update_date).toLocaleDateString(),
      isManaged: sw.registration_sw.isManaged,
    })),
  };
};

export const getLectureChartResponseServer2Client = ({
  lecture_sw_for_chart,
}: GetLectureChartResponseServerType): GetLectureChartResponseClientType[] => {
  return lecture_sw_for_chart.map((item) => ({
    swName: item.registration_sw.swName,
    count: item.count,
  }));
};

export const createLectureSWRequestClient2Server = ({
  ownerId,
  year,
  semester,
  lectureName,
  lectureNum,
  lectureType,
  department,
  sw,
}: CreateLectureSWRequestClientType): CreateLectureSWResponseServerType => {
  return {
    year,
    semester,
    department,
    owner_id: ownerId,
    lecture_name: lectureName,
    lecture_num: lectureNum,
    lecture_type: lectureType,
    sw: sw.map((sw) => ({ sw_manufacturer: sw.swManufacturer, sw_name: sw.swName, license: sw.license })),
  };
};
