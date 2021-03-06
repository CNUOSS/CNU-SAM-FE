// Attribute Type
import { ItemType as LectureSWItemAttrType } from '../components/tabs/LectureSWListTab/Table';
import { ItemType as AddLectureSWItemAttrType } from '../components/tabs/AddOrUpdateLectureSWTab/Table';
import { ItemType as RegistrationSWItemAttrType } from '../components/tabs/RegistrationSWTab/Table';
import { ItemType as SubscribedSWAttrType } from '../components/tabs/SubscribedSWTab/Table';
import { ItemType as LicenseAttrType } from '../components/tabs/LicenseListTab/Table';
import { ItemType as ProjectAttrType } from '../components/tabs/ProjectListTab/Table';
import { ItemType as OSSAttrType } from '../components/tabs/EnrollVersionTab/Table';
import { SummarizedVersionType } from '../components/tabs/ProjectDetailTab';

// Obj Type
import generateGuid from '@utils/generate-id';
import { LectureSWType } from '@@types/client';

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
}): LectureSWItemAttrType => ({
  year: generateString(4),
  semester: generateString(3),
  department: generateString(5),
  lectureNum: generateString(6),
  lectureName: lectureName || generateString(8),
  lectureType: generateString(5),
  ownerId: generateString(3),
  swName: generateString(10),
  swManufacturer: generateString(5),
  license: generateString(8),
  updateDate: generateString(8),
  isManaged: managed || Math.random() < 0.5,
});

export const generateAddLectureSWItem = (): AddLectureSWItemAttrType => ({
  swManufacturer: generateString(5),
  swName: generateString(10),
  license: generateString(8),
});

export const generateSWForLecture = (): RegistrationSWItemAttrType => ({
  swManufacturer: generateString(5),
  latestUpdateDate: generateString(8),
  swName: generateString(10),
  latestUpdaterId: generateString(3),
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
  id: 0,
  department: generateString(5),
  lectureNum: generateString(6),
  lectureName: generateString(8),
  semester: generateString(3),
  lectureType: generateString(5),
  year: generateString(4),
  ownerId: generateString(3),
  swId: 0,
  swName: generateString(3),
  swManufacturer: generateString(3),
  license: generateString(3),
  updateDate: generateString(3),
  isManaged: false,
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

export const generateOSSListItem = (): OSSAttrType & { id: string } => ({
  id: generateGuid(),
  ossLocation: generateString(10),
  ossName: generateString(6),
  ossUrl: generateString(10),
  ossVersion: generateString(4),
  license: generateString(5),
});

// FIXME: Replace with license object in api-mock file
export const generateLicenseListItem = (): LicenseAttrType => ({
  licenseName: generateString(8),
  licenseType: generateString(8),
  licenseUrl: generateString(20),
  restriction: generateString(30),
});
