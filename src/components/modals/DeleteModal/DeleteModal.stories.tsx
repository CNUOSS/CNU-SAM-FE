import React from 'react';
import { action } from '@storybook/addon-actions';
import DeleteModal from '.';

export default {
  title: 'Modal/DeleteModal',
  component: DeleteModal,
};

const onDeleteAction = action('on delete ');
const closeModalAction = action('close modal');

export const deleteModal = () => <DeleteModal onDelete={onDeleteAction} closeModal={closeModalAction} />;
