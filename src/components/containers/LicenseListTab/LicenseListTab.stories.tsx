import React from 'react';
import withMock from 'storybook-addon-mock';
import LicenseListTab from '.';
import { getLicenseListAPI } from '../../../apis/license';
import { getLicenseTypesAPI, getRestrictionsAPI } from '../../../apis/data';
import { generateGetLicensesResponseMock } from '../../../__mocks__/api-mock';
import { generateString } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/LicenseListTab',
  component: LicenseListTab,
  decorators: [withMock],
};

const Tab = (args: any) => <LicenseListTab {...args} />;

export const Default = Tab.bind({});
(Default as any).parameters = {
  mockData: [
    {
      url: `${getLicenseListAPI}&offset=1&limit=9`,
      method: 'GET',
      status: 200,
      response: generateGetLicensesResponseMock(),
    },
    {
      url: getLicenseTypesAPI,
      method: 'GET',
      status: 200,
      response: [generateString(), generateString(), generateString()],
    },
    {
      url: getRestrictionsAPI,
      method: 'GET',
      status: 200,
      response: [generateString(), generateString(), generateString()],
    },
  ],
};
