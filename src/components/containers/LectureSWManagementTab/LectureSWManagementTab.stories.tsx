import React from 'react';
import LectureSWManagementTab from '.';
import { generateLectureSWItem, generateStringArray } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/LectureSWManagementTab',
  component: LectureSWManagementTab,
};

const companys = generateStringArray(3);
const items = [generateLectureSWItem(), generateLectureSWItem(), generateLectureSWItem()];
export const lectureSWManagementTab = () => <LectureSWManagementTab items={items} companys={companys} />;
