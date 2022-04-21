// Attribute Type
import { ItemType as TotalLectureSWItemAttrType } from '../components/containers/TotalLectureSWListTab';
import { ItemType as AddLectureSWItemAttrType } from '../components/containers/AddOrUpdateLectureSWTab/Table';
import { ItemType as LectureSWManagementAttrType } from '../components/containers/LectureSWManagementTab';
import { ItemType as SubscribedSWAttrType } from '../components/containers/SubscribedSWTab';

// Obj Type
import { LectureSWType } from '../components/containers/AddOrUpdateLectureSWTab';

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
  department: generateString(5),
  lectureNum: generateString(6),
  classNum: generateString(1),
  lectureName: lectureName || generateString(8),
  lectureType: generateString(5),
  writer: generateString(3),
  swName: generateString(10),
  manufacturing: generateString(5),
  license: generateString(8),
  managed: managed || Math.random() < 0.5,
});

export const generateAddLectureSWItem = (): AddLectureSWItemAttrType => ({
  manufacturing: generateString(5),
  swName: generateString(10),
  license: generateString(8),
});

export const generateSWForLecture = (): LectureSWManagementAttrType => ({
  manufacturing: generateString(5),
  enrollDate: generateString(8),
  swName: generateString(10),
  usedCount: generateString(1),
  writer: generateString(3),
});

export const generateSubscribedSW = (): SubscribedSWAttrType => ({
  type: generateString(8),
  manufacturing: generateString(5),
  swName: generateString(10),
  usageRange: generateString(5),
  license: generateString(8),
  expireDt: generateString(7),
  FirstSubscribeDt: generateString(7),
  LatestUpdatedDt: generateString(7),
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
