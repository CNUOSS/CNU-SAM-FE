import React from 'react';
import { action } from '@storybook/addon-actions';
import UpdateOSSModal from '.';
import { generateStringArray, generateOSSListItem } from '../../../__mocks__/create-mock';

export default {
  title: 'Modal/UpdateOSSModal',
  component: UpdateOSSModal,
};

const licenses = generateStringArray(5);
const updateAction = action('on update');
const closeModalAction = action('close modal');
const oss = generateOSSListItem();
export const updateModal = () => (
  <UpdateOSSModal oss={oss} licenses={licenses} changeOSS={updateAction} closeModal={closeModalAction} />
);
