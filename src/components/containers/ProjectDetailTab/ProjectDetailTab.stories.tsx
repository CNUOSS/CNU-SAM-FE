import React from 'react';
import ProjectDetailTab from '.';
import { generateVersionListItem } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/ProjectDetailTab',
  component: ProjectDetailTab,
};

const versions = [generateVersionListItem(), generateVersionListItem(), generateVersionListItem()];
export const tab = () => <ProjectDetailTab versions={versions} />;
