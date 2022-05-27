import {
  CreateSubscribedRequestBodyClientType,
  GetSubscribeSWRequestParamsClientType,
  GetSubscribeSWResponseClientType,
} from '@@types/client';
import {
  CreateSubscribedRequestBodyServerType,
  GetSubscribeSWRequestParamsServerType,
  GetSubscribeSWResponseServerType,
} from '@@types/server';

export const subscribedswSearchRequestClient2Server = ({
  size,
  page,
  sort,
  swType,
  swMfr,
  swName,
}: GetSubscribeSWRequestParamsClientType): GetSubscribeSWRequestParamsServerType => {
  return {
    size,
    page: page - 1,
    sort: sort || null,
    'sw-mfr': swType || null,
    'sw-name': swName || null,
    'sw-type': swType || null,
  };
};

export const subscribedswSearchResponseServer2Client = ({
  meta,
  subscription_sw,
}: GetSubscribeSWResponseServerType): GetSubscribeSWResponseClientType => {
  return {
    meta: {
      totalElements: meta.total_elements,
      last: meta.last,
      totalPages: meta.total_pages,
      size: meta.size,
    },
    subscriptionSWList: subscription_sw.map((sw) => ({
      id: sw.id,
      updatorId: sw.latest_updater_id,
      swType: sw.sw_type,
      swName: sw.sw_name,
      swManufacturer: sw.sw_manufacturer,
      license: sw.license,
      expireDate: new Date(sw.expire_date).toLocaleDateString(),
      firstSubscribeDate: new Date(sw.first_subscribe_date).toLocaleDateString(),
      usageRange: sw.usage_range,
      latestUpdateDate: new Date(sw.latest_update_date).toLocaleDateString(),
    })),
  };
};

export const createSubscribedRequestClient2Server = ({
  updatorId,
  swType,
  swManufacturer,
  swName,
  usageRange,
  license,
  expireDate,
  firstSubscribeDate,
}: CreateSubscribedRequestBodyClientType): CreateSubscribedRequestBodyServerType => {
  return {
    license,
    latest_updater_id: updatorId,
    sw_type: swType,
    sw_manufacturer: swManufacturer,
    sw_name: swName,
    usage_range: usageRange,
    expire_date: expireDate,
    first_subscribe_date: firstSubscribeDate,
  };
};
