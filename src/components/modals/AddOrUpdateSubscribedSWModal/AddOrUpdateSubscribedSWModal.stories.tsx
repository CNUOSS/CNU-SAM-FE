import React from 'react';
import { action } from '@storybook/addon-actions';
import AddOrUpdateSubscribedSWModal from '.';

const closeModalAction = action('close modal');
const onDeleteAction = action('on delete');

export default {
  title: 'Modal/AddOrUpdateSubscribedSWModal',
  component: AddOrUpdateSubscribedSWModal,
};

export const createModal = () => <AddOrUpdateSubscribedSWModal modalState="create" closeModal={closeModalAction} />;

export const updateModal = () => (
  <AddOrUpdateSubscribedSWModal modalState="update" closeModal={closeModalAction} onDelete={onDeleteAction} />
);
