import React from 'react';
import { action } from '@storybook/addon-actions';
import TabTemplate from '.';
import { generateString } from '../../../__mocks__/create-mock';

export default {
  title: 'Template/TabTemplate',
  component: TabTemplate,
};

const description = generateString(30);
const onCreateAction = action('create action');
const onDeleteAction = action('delete action');
const onUpdateAction = action('modify action');

export const create = () => (
  <TabTemplate description={description} onCreate={onCreateAction}>
    <></>
  </TabTemplate>
);

export const update = () => (
  <TabTemplate description={description} onUpdate={onUpdateAction} onDelete={onDeleteAction}>
    <></>
  </TabTemplate>
);
