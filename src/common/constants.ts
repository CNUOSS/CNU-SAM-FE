import { AttributeType } from 'src/components/widgets/Table';
import {
  Trash,
  Number,
  NavItem,
  AddLectureSWListAttr,
  SubscribedSWListAttr,
  TotalLectureSWListAttr,
  LectureSWManagementListAttr,
} from '../@types/types';

export interface CategoryType {
  disable: boolean;
  title: string;
  items: NavItem[];
}

export const LANGUAGES = [
  { name: '한국어', lang: 'ko' },
  { name: 'English', lang: 'en' },
];

export const swCategory = (disable: boolean = false): CategoryType => ({
  disable,
  title: 'usingSW',
  items: [NavItem.TotalLectureSWList, NavItem.SubscribingSWList, NavItem.SWDashboard],
});

export const pjCategory = (disable: boolean = false): CategoryType => ({
  disable,
  title: 'project',
  items: [NavItem.PJList, NavItem.LicenseList],
});

export const mgCategory = (disable: boolean = false): CategoryType => ({
  disable,
  title: 'management',
  items: [NavItem.UserManagement, NavItem.SWManagement],
});

/**
 * List Attributes
 */
export const totalLectureSWListAttr: AttributeType<TotalLectureSWListAttr>[] = [
  { label: '년도', dataKey: 'year', widthPercent: 5, disableSort: true },
  { label: '학기', dataKey: 'semester', widthPercent: 8, disableSort: false },
  { label: '조직분류', dataKey: 'organization', widthPercent: 8, disableSort: true },
  { label: '과목번호', dataKey: 'lectureNum', widthPercent: 11, disableSort: false },
  { label: '분반', dataKey: 'class', widthPercent: 4, disableSort: true },
  { label: '과목명', dataKey: 'lectureName', widthPercent: 10, disableSort: false },
  { label: '이수구분', dataKey: 'division', widthPercent: 8, disableSort: true },
  { label: '등록자', dataKey: 'writer', widthPercent: 6, disableSort: true },
  { label: '제품명', dataKey: 'productName', widthPercent: 9, disableSort: false },
  { label: '제조사', dataKey: 'productCompany', widthPercent: 6, disableSort: true },
  { label: '라이선스', dataKey: 'license', widthPercent: 9, disableSort: true },
  { label: 'SW관리대상', dataKey: 'managed', widthPercent: 14, disableSort: false },
];

export const addLectureSWListAttr: AttributeType<AddLectureSWListAttr | Trash | Number>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 10, disableSort: true },
  { label: '소프트웨어 제조사', dataKey: 'company', widthPercent: 20, disableSort: true },
  { label: '소프트웨어 제품명', dataKey: 'productName', widthPercent: 30, disableSort: true },
  { label: '라이선스', dataKey: 'license', widthPercent: 35, disableSort: true },
  { label: '', dataKey: 'trash', widthPercent: 5, disableSort: true },
];

export const lectureSWManagementListAttr: AttributeType<LectureSWManagementListAttr | Number>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 10, disableSort: true },
  { label: '제조사', dataKey: 'company', widthPercent: 18, disableSort: false },
  { label: '제품명', dataKey: 'product', widthPercent: 18, disableSort: false },
  { label: '사용 개수', dataKey: 'usedCount', widthPercent: 18, disableSort: false },
  { label: '등록자', dataKey: 'writer', widthPercent: 18, disableSort: true },
  { label: '등록 날짜', dataKey: 'enrollDate', widthPercent: 18, disableSort: false },
];

export const subscibedSWListAttr: AttributeType<SubscribedSWListAttr | Number>[] = [
  { label: 'No', dataKey: 'number', widthPercent: 8, disableSort: true },
  { label: '제품군', dataKey: 'productFamily', widthPercent: 12, disableSort: false },
  { label: '제조사', dataKey: 'company', widthPercent: 12, disableSort: false },
  { label: '이용범위', dataKey: 'range', widthPercent: 12, disableSort: false },
  { label: '라이선스', dataKey: 'license', widthPercent: 12, disableSort: false },
  { label: '만료일', dataKey: 'expireDate', widthPercent: 12, disableSort: false },
  { label: '최근 업데이트 날짜', dataKey: 'updatedDate', widthPercent: 16, disableSort: false },
  { label: '작성자', dataKey: 'writer', widthPercent: 12, disableSort: false },
];
