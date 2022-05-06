import { generateString } from './create-mock';
import { LicenseType, GetLicenseListResponseClientType } from '../apis/license';

/**
 * data mock
 */
export const generateLicenseMock = (): LicenseType => ({
  id: generateString(5),
  licenseName: generateString(5),
  licenseType: generateString(7),
  licenseUrl: generateString(15),
  restrictions: [generateString(6), generateString(6), generateString(6)],
});

/**
 * response mock
 */
export const generateGetLicensesResponseMock = (): GetLicenseListResponseClientType => ({
  meta: {
    totalCount: 10,
    isEnd: false,
  },
  licenses: [generateLicenseMock(), generateLicenseMock(), generateLicenseMock()],
});

export const generateCreateLicenseResponseMock = (): LicenseType => generateLicenseMock();
