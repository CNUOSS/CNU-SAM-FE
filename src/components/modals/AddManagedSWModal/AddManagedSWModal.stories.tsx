import React from 'react';
import { action } from '@storybook/addon-actions';
import AddManagedSWModal from '.';

export default {
  title: 'Modal/AddManagedSWModal',
  component: AddManagedSWModal,
};

const closeModalAction = action('close modal');

export const selectedSW = () => <AddManagedSWModal closeModal={closeModalAction} />;

export const noSWName = () => <AddManagedSWModal closeModal={closeModalAction} />;

export const editable = () => <AddManagedSWModal isEditable closeModal={closeModalAction} />;
