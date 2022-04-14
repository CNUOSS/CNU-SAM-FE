import React from 'react';
import TotalLectureSWListTab, { ItemType } from '.';
import { generateTotalLectureSWItem } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/TotalLectureSWListTab',
  component: TotalLectureSWListTab,
};

const items: ItemType[] = [
  generateTotalLectureSWItem({}),
  generateTotalLectureSWItem({}),
  generateTotalLectureSWItem({}),
];

export const adminTab = () => <TotalLectureSWListTab isAdmin items={items} />;
export const userTab = () => <TotalLectureSWListTab isAdmin={false} items={items} />;
