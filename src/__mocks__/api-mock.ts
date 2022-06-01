import {
  AnalysisRestrictionType,
  GetLicenseListResponseClientType,
  LicenseType,
  OSSAnalysisType,
} from '@@types/client';
import { generateString } from './create-mock';

/**
 * data mock
 */
export const generateLicenseMock = (): LicenseType => ({
  id: Math.ceil(Math.random() * 100),
  licenseName: generateString(5),
  licenseType: generateString(7),
  licenseUrl: generateString(15),
  restrictions: [generateString(6), generateString(6), generateString(6)],
});

/**
 * response mock
 */
export const generateGetLicensesResponseMock = (): GetLicenseListResponseClientType => ({
  pageInfo: {
    totalElements: 10,
    last: false,
    totalPages: 10,
    size: 10,
  },
  licenses: [generateLicenseMock(), generateLicenseMock(), generateLicenseMock()],
});

export const generateCreateLicenseResponseMock = (): LicenseType => generateLicenseMock();

export const generateOssAnalysis = (): OSSAnalysisType => ({
  ossLocation: generateString(10),
  ossName: generateString(7),
  ossVersion: generateString(8),
  ossUrl: generateString(10),
  licenseName: generateString(7),
  licenseUrl: generateString(10),
  licenseTypeName: generateString(10),
});

export const generateAnalysisRestriction = (): AnalysisRestrictionType => ({
  licenseName: generateString(10),
  restriction: [
    {
      restrictionName: generateString(10),
    },
    {
      restrictionName: generateString(10),
    },
    {
      restrictionName: generateString(10),
    },
  ],
});
