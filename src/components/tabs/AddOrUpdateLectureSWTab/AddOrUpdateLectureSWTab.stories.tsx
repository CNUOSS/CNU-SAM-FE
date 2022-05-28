import React from 'react';
import AddOrUpdateLectureSWTab, { LectureSWType } from '.';
import { generateLectureSW, generateStringArray } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/AddOrUpdateLectureSWTab',
  component: AddOrUpdateLectureSWTab,
};

const lectureSW: LectureSWType = generateLectureSW();
const manufacturingList = generateStringArray(3);
const swNames = generateStringArray(3);

export const createTab = () => (
  <AddOrUpdateLectureSWTab manufacturingList={manufacturingList} swNames={swNames} tabState="create" />
);

export const modifyTab = () => (
  <AddOrUpdateLectureSWTab
    lectureSW={lectureSW}
    manufacturingList={manufacturingList}
    swNames={swNames}
    tabState="update"
  />
);
