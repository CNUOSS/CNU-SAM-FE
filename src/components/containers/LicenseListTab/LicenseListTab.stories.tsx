import React from 'react';
import withMock from 'storybook-addon-mock';
import LicenseListTab from '.';
import { getLicenseListAPI } from '../../../apis/license';
import { getLicenseTypesAPI, getRestrictionsAPI } from '../../../apis/data';
import { generateLicenseListItem, generateString } from '../../../__mocks__/create-mock';

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
      url: getLicenseListAPI,
      method: 'GET',
      status: 200,
      response: [generateLicenseListItem(), generateLicenseListItem(), generateLicenseListItem()],
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
