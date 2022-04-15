import { ItemType as TotalLectureSWItemType } from '../components/containers/TotalLectureSWListTab';
import { ItemType as AddLectureSWItemType } from '../components/containers/AddLectureSWTab/Table';
import { ItemType as LectureSWManagementType } from '../components/containers/LectureSWManagementTab';

export const generateString = (num: number = 9) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + num);

export const generateStringArray = (num: number) => new Array(num).fill('').map(() => generateString());

export const generateTotalLectureSWItem = ({
  managed,
  lectureName,
}: {
  managed?: boolean;
  lectureName?: string;
}): TotalLectureSWItemType => ({
  year: generateString(4),
  semester: generateString(3),
  organization: generateString(5),
  lectureNum: generateString(6),
  class: generateString(1),
  lectureName: lectureName || generateString(8),
  division: generateString(5),
  writer: generateString(3),
  productName: generateString(10),
  productCompany: generateString(5),
  license: generateString(8),
  managed: managed || Math.random() < 0.5,
});

export const generateAddLectureSWItem = (): AddLectureSWItemType => ({
  company: generateString(5),
  productName: generateString(10),
  license: generateString(8),
});

export const generateLectureSWItem = (): LectureSWManagementType => ({
  company: generateString(5),
  enrollDate: generateString(8),
  product: generateString(10),
  usedCount: generateString(1),
  writer: generateString(3),
});
