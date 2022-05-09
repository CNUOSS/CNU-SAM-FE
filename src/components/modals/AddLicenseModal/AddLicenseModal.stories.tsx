import React from 'react';
import withMock from 'storybook-addon-mock';
import { action } from '@storybook/addon-actions';
import AddLicenseModal from '.';
import { createLicenseAPI } from '../../../apis/license';
import { getLicenseTypesAPI, getRestrictionsAPI } from '../../../apis/data';
import { generateCreateLicenseResponseMock } from '../../../__mocks__/api-mock';
import { generateString } from '../../../__mocks__/create-mock';

export default {
  title: 'Modal/AddLicenseModal',
  component: AddLicenseModal,
  decorators: [withMock],
};

const onCreateAction = action('on create');
const closeModalAction = action('close modal');

const Modal = () => <AddLicenseModal onCreate={onCreateAction} closeModal={closeModalAction} />;

export const Default = Modal.bind({});
(Default as any).parameters = {
  mockData: [
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
    {
      url: createLicenseAPI.url,
      method: 'POST',
      status: 200,
      response: generateCreateLicenseResponseMock(),
    },
  ],
};
