import React from 'react';
import { action } from '@storybook/addon-actions';
import AddOrUpdateRegistrationSWModal from '.';

export default {
  title: 'Modal/AddOrUpdateRegistrationSWModal',
  component: AddOrUpdateRegistrationSWModal,
};

const closeModalAction = action('close modal');

export const selectedSW = () => <AddOrUpdateRegistrationSWModal closeModal={closeModalAction} />;

export const noSWName = () => <AddOrUpdateRegistrationSWModal closeModal={closeModalAction} />;

export const editable = () => <AddOrUpdateRegistrationSWModal isEditable closeModal={closeModalAction} />;
