import React from 'react';
import ProjectListTab from '.';
import { generateProjectListItem } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/ProjectListTab',
  component: ProjectListTab,
};

const items = [generateProjectListItem(), generateProjectListItem(), generateProjectListItem()];
export const tab = () => <ProjectListTab items={items} />;
