// Attribute Type
import { ItemType as TotalLectureSWItemAttrType } from '../components/tabs/TotalLectureSWListTab';
import { ItemType as AddLectureSWItemAttrType } from '../components/tabs/AddOrUpdateLectureSWTab/Table';
import { ItemType as LectureSWManagementAttrType } from '../components/tabs/LectureSWManagementTab';
import { ItemType as SubscribedSWAttrType } from '../components/tabs/SubscribedSWTab/Table';
import { ItemType as LicenseAttrType } from '../components/tabs/LicenseListTab/Table';
import { ItemType as ProjectAttrType } from '../components/tabs/ProjectListTab/Table';
import { SummarizedVersionType } from '../components/tabs/ProjectDetailTab';

// Obj Type
import { LectureSWType } from '../components/tabs/AddOrUpdateLectureSWTab';

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
  swType: generateString(8),
  swManufacturer: generateString(5),
  swName: generateString(10),
  usageRange: generateString(5),
  license: generateString(8),
  expireDate: generateString(7),
  firstSubscribeDate: generateString(7),
  latestUpdateDate: generateString(7),
  updatorId: generateString(3),
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

export const generateProjectListItem = (): ProjectAttrType => ({
  projectName: generateString(6),
  createDate: generateString(6),
  updateDate: generateString(6),
  projectStatus: generateString(6),
  ossLicenseName: generateString(6),
  projectCategoryName: generateString(6),
  userId: generateString(3),
});

export const generateVersionListItem = (): SummarizedVersionType => ({
  versionName: generateString(8),
  createDate: generateString(8),
});

// FIXME: Replace with license object in api-mock file
export const generateLicenseListItem = (): LicenseAttrType => ({
  licenseName: generateString(8),
  licenseType: generateString(8),
  licenseUrl: generateString(20),
  restriction: generateString(30),
});
