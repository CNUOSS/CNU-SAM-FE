import React from 'react';
import { action } from '@storybook/addon-actions';
import TabForm from '.';

export default {
  title: 'Widget/TabForm',
  component: TabForm,
};

const onSubmitAction = action('on submit');
const childrens = (
  <>
    <div>item1</div>
    <div>item2</div>
  </>
);

export const form = () => (
  <TabForm onSubmit={onSubmitAction} buttonText="조회하기">
    {childrens}
  </TabForm>
);

export const container = () => <TabForm onSubmit={onSubmitAction}>{childrens}</TabForm>;
