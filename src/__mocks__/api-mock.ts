import { generateString } from './create-mock';
import { GetLicenseListResponseClientType } from '../apis/license';

export const generateGetLicensesResponseMock = (): GetLicenseListResponseClientType => ({
  meta: {
    totalCount: 10,
    isEnd: false,
  },
  licenses: [
    {
      licenseName: generateString(5),
      licenseType: generateString(7),
      licenseUrl: generateString(15),
      restrictions: [generateString(6), generateString(6), generateString(6)],
    },
    {
      licenseName: generateString(5),
      licenseType: generateString(7),
      licenseUrl: generateString(15),
      restrictions: [generateString(6), generateString(6), generateString(6)],
    },
    {
      licenseName: generateString(5),
      licenseType: generateString(7),
      licenseUrl: generateString(15),
      restrictions: [generateString(6), generateString(6), generateString(6)],
    },
  ],
});
