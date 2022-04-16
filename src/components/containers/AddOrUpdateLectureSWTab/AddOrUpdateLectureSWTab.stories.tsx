import React from 'react';
import AddOrUpdateLectureSWTab, { LectureSWType } from '.';
import { generateLectureSW, generateStringArray } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/AddOrUpdateLectureSWTab',
  component: AddOrUpdateLectureSWTab,
};

const lectureSW: LectureSWType = generateLectureSW();
const companyList = generateStringArray(3);
const productList = generateStringArray(3);

export const createTab = () => (
  <AddOrUpdateLectureSWTab companyList={companyList} productList={productList} onCreateItem={() => {}} />
);

export const modifyTab = () => (
  <AddOrUpdateLectureSWTab
    lectureSW={lectureSW}
    companyList={companyList}
    productList={productList}
    onDeleteItem={() => {}}
    onModifyItem={() => {}}
  />
);
