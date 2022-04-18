import React from 'react';
import { action } from '@storybook/addon-actions';
import AddOrUpdateSubscribedSWModal from '.';
import { generateString } from '../../../__mocks__/create-mock';

const closeModalAction = action('close modal');
const onSubmitAction = action('on submit');

export default {
  title: 'Modal/AddOrUpdateSubscribedSWModal',
  component: AddOrUpdateSubscribedSWModal,
};

const defaultLicense = generateString(8);
const defaultProduct = generateString(8);
const defaultExpireDate = generateString(8);

export const createModal = () => (
  <AddOrUpdateSubscribedSWModal
    defaultLicense={defaultLicense}
    defaultProduct={defaultProduct}
    defaultExpireDate={defaultExpireDate}
    modalState="create"
    closeModal={closeModalAction}
    onSubmit={onSubmitAction}
  />
);

export const updateModal = () => (
  <AddOrUpdateSubscribedSWModal modalState="update" closeModal={closeModalAction} onSubmit={onSubmitAction} />
);
