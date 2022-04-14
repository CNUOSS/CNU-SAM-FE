import { ItemType } from '../components/containers/TotalLectureSWListTab';

export const generateString = (num: number = 9) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + num);

export const generateStringArray = (num: number) => new Array(num).fill('').map(() => generateString());

export const generateTotalLectureSWItem = (): ItemType => ({
  year: generateString(4),
  semester: generateString(3),
  organization: generateString(5),
  lectureNum: generateString(6),
  class: generateString(1),
  lectureName: generateString(8),
  division: generateString(5),
  writer: generateString(3),
  productName: generateString(10),
  productCompany: generateString(5),
  license: generateString(8),
  managed: generateString(3),
});
