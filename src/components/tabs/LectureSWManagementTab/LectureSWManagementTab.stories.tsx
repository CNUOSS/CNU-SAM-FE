import React from 'react';
import LectureSWManagementTab from '.';
import { generateSWForLecture, generateStringArray } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/LectureSWManagementTab',
  component: LectureSWManagementTab,
};

const manufacturings = generateStringArray(3);
const items = [generateSWForLecture(), generateSWForLecture(), generateSWForLecture()];
export const lectureSWManagementTab = () => <LectureSWManagementTab items={items} manufacturings={manufacturings} />;
