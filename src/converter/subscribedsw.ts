import { CreateSubscribedRequestBodyClientType } from '@@types/client';
import { CreateSubscribedRequestBodyServerType } from '@@types/server';

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
