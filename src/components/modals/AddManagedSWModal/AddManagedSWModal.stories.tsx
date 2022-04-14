import React from 'react';
import { action } from '@storybook/addon-actions';
import AddManagedSWModal from '.';

export default {
  title: 'Modal/AddManagedSWModal',
  component: AddManagedSWModal,
};

const defaultCompanyList = ['LG', 'SAMSUNG'];
const defaultSWName = 'fosslight';
const closeModalAction = action('close modal');
const onSubmitAction = action('on submit');

export const selectedSW = () => (
  <AddManagedSWModal
    defaultCompanyList={defaultCompanyList}
    defaultCompanyIndex={1}
    defaultSWName={defaultSWName}
    onSubmit={onSubmitAction}
    closeModal={closeModalAction}
  />
);

export const noSWName = () => (
  <AddManagedSWModal defaultCompanyList={defaultCompanyList} onSubmit={onSubmitAction} closeModal={closeModalAction} />
);
