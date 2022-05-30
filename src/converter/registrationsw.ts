import { CreateRegistrationSWRequestBodyClientType } from '@@types/client';
import { CreateRegistrationSWRequestBodyServerType } from '@@types/server';

export const createRegistrationSWRequestClient2Server = ({
  latestUpdatorId,
  swManufacturer,
  swName,
  managed,
}: CreateRegistrationSWRequestBodyClientType): CreateRegistrationSWRequestBodyServerType => {
  return { managed, latest_updator_id: latestUpdatorId, sw_manufacturer: swManufacturer, sw_name: swName };
};
