import {
  CreateRegistrationSWRequestBodyClientType,
  UpdateRegistrationSWRequestBodyClientType,
  GetRegistrationSWListRequstParamsClientType,
  GetRegistrationSWListResponseClientType,
} from '@@types/client';
import {
  CreateRegistrationSWRequestBodyServerType,
  UpdateRegistrationSWRequestBodyServerType,
  GetRegistrationSWListResponseServerType,
  GetRegistrationswListRequestParamsServerType,
} from '@@types/server';

export const createRegistrationSWRequestClient2Server = ({
  latestUpdaterId,
  swManufacturer,
  swName,
  isManaged,
}: CreateRegistrationSWRequestBodyClientType): CreateRegistrationSWRequestBodyServerType => {
  return {
    is_managed: isManaged,
    latest_updater_id: latestUpdaterId,
    sw_manufacturer: swManufacturer,
    sw_name: swName,
  };
};

export const updateRegistrationSWRequestClient2Server = ({
  id,
  latestUpdaterId,
  swManufacturer,
  swName,
  isManaged,
}: UpdateRegistrationSWRequestBodyClientType): UpdateRegistrationSWRequestBodyServerType => {
  return {
    id,
    latest_updater_id: latestUpdaterId,
    sw_manufacturer: swManufacturer,
    sw_name: swName,
    is_managed: isManaged,
  };
};

export const getRegistrationSWRequestClient2Server = ({
  size,
  page,
  sort,
  swMfr,
  swName,
}: GetRegistrationSWListRequstParamsClientType): GetRegistrationswListRequestParamsServerType => {
  return {
    size,
    page: page - 1,
    sort: sort || null,
    'sw-mfr': swMfr || null,
    'sw-name': swName || null,
  };
};

export const getRegistrationSWResponseServer2Client = ({
  page_info,
  registration_sw,
}: GetRegistrationSWListResponseServerType): GetRegistrationSWListResponseClientType => {
  return {
    pageInfo: {
      totalElements: page_info.total_elements,
      last: page_info.last,
      totalPages: page_info.total_pages,
      size: page_info.size,
    },
    registrationSWList: registration_sw.map((sw) => ({
      id: sw.id,
      swManufacturer: sw.sw_manufacturer,
      swName: sw.sw_name,
      latestUpdaterId: sw.latest_updater_id,
      latestUpdateDate: new Date(sw.latest_update_date).toLocaleDateString(),
      managed: sw.managed,
    })),
  };
};
