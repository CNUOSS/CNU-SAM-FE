import React from 'react';
import AddLectureSWTab from '.';
import { ItemType } from './Table';
import { generateAddLectureSWItem, generateStringArray } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/AddLectureSWTab',
  component: AddLectureSWTab,
};

const items: ItemType[] = [generateAddLectureSWItem(), generateAddLectureSWItem()];
const companyList = generateStringArray(3);
const productList = generateStringArray(3);

export const addLectureSWTab = () => (
  <AddLectureSWTab receivedItems={items} companyList={companyList} productList={productList} />
);
