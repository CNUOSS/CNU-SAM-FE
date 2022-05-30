import React from 'react';
import { action } from '@storybook/addon-actions';
import AddOrUpdateSubscribedSWModal from '.';

const closeModalAction = action('close modal');

export default {
  title: 'Modal/AddOrUpdateSubscribedSWModal',
  component: AddOrUpdateSubscribedSWModal,
};

export const createModal = () => <AddOrUpdateSubscribedSWModal closeModal={closeModalAction} />;

export const updateModal = () => <AddOrUpdateSubscribedSWModal closeModal={closeModalAction} />;
