import axios from 'axios';
import { MethodType } from '@hooks/useMutation';

// TODO: converter에 있는 서버타입이랑 합쳐야할까?

/**
 * naming
 * apiname+(request|response)+(params|body)?+(client|server)?+type
 */
export interface LicenseType {
  id: string;
  licenseName: string;
  licenseUrl: string;
  licenseType: string;
  restrictions: string[];
}

// Get Licenses
export interface GetLicenseListRequestParamsClientType {
  limit: number;
  offset: number;
  licenseName: string;
  licenseType: string;
  restriction: string;
}

export interface GetLicenseListResponseClientType {
  meta: {
    totalCount: number;
    isEnd: boolean;
  };
  licenses: LicenseType[];
}

export const getLicenseListAPI = `/licenses/search?`;

// Create License
export interface CreateLicenseRequestBodyClientType extends LicenseType {}

export const createLicenseAPI: { method: MethodType; url: string } = { method: 'POST', url: '/licenses' };

// Delete License
export const deleteLicenseList = async () => {
  const { data } = await axios.delete(`/license/id`);
  return data;
};
