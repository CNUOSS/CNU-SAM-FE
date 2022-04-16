import React from 'react';
import AddLectureSWTab, { LectureSWType } from '.';
import { generateLectureSW, generateStringArray } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/AddLectureSWTab',
  component: AddLectureSWTab,
};

const lectureSW: LectureSWType = generateLectureSW();
const companyList = generateStringArray(3);
const productList = generateStringArray(3);

export const createTab = () => (
  <AddLectureSWTab companyList={companyList} productList={productList} onCreateItem={() => {}} />
);

export const modifyTab = () => (
  <AddLectureSWTab
    lectureSW={lectureSW}
    companyList={companyList}
    productList={productList}
    onDeleteItem={() => {}}
    onModifyItem={() => {}}
  />
);
