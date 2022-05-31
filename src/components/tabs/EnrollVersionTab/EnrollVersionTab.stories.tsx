import React from 'react';
import EnrollVersionTab from '.';
import { generateString } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/EnrollVersionTab',
  component: EnrollVersionTab,
};

const projectName = generateString(6);
export const tab = () => <EnrollVersionTab projectId={0} projectName={projectName} />;
