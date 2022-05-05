import axios from 'axios';

// TODO: converter에 있는 서버타입이랑 합쳐야할까?

/**
 * naming
 * apiname+(request|response)+(params|body)?+(client|server)?+type
 */
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
  licenses: {
    licenseName: string;
    licenseUrl: string;
    licenseType: string;
    restrictions: string[];
  }[];
}

export const getLicenseListAPI = `/licenses/search?`;

export const createLicenseListAPI = async () => {
  const { data } = await axios.post(`/licenses`);
  return data;
};

export const deleteLicenseList = async () => {
  const { data } = await axios.delete(`/license/id`);
  return data;
};
