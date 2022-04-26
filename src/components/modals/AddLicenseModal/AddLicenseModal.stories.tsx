import React from 'react';
import { action } from '@storybook/addon-actions';
import AddLicenseModal from '.';

export default {
  title: 'Modal/AddLicenseModal',
  component: AddLicenseModal,
};

const onCreateAction = action('on create');
const closeModalAction = action('close modal');

export const addLicenseModal = () => <AddLicenseModal onCreate={onCreateAction} closeModal={closeModalAction} />;
