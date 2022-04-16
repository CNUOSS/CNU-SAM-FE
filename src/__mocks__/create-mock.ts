// Attribute Type
import { ItemType as TotalLectureSWItemAttrType } from '../components/containers/TotalLectureSWListTab';
import { ItemType as AddLectureSWItemAttrType } from '../components/containers/AddLectureSWTab/Table';
import { ItemType as LectureSWManagementAttrType } from '../components/containers/LectureSWManagementTab';

// Obj Type
import { LectureSWType } from '../components/containers/AddLectureSWTab';

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
}): TotalLectureSWItemAttrType => ({
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

export const generateAddLectureSWItem = (): AddLectureSWItemAttrType => ({
  company: generateString(5),
  productName: generateString(10),
  license: generateString(8),
});

// FIXME: rename SWForLecture
export const generateLectureSWItem = (): LectureSWManagementAttrType => ({
  company: generateString(5),
  enrollDate: generateString(8),
  product: generateString(10),
  usedCount: generateString(1),
  writer: generateString(3),
});

export const generateLectureSW = (): LectureSWType => ({
  organization: generateString(5),
  lectureNum: generateString(6),
  lectureName: generateString(8),
  semester: generateString(3),
  division: generateString(5),
  year: generateString(4),
  writer: generateString(3),
  receivedItems: [generateAddLectureSWItem(), generateAddLectureSWItem(), generateAddLectureSWItem()],
});
