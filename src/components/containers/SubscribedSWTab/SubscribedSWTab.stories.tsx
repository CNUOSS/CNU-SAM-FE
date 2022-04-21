import React from 'react';
import SubscribedSWTab from '.';
import { generateSubscribedSW, generateStringArray } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/SubscribedSW',
  component: SubscribedSWTab,
};

const companys = generateStringArray(3);
const productFamilys = generateStringArray(3);
const items = [generateSubscribedSW(), generateSubscribedSW(), generateSubscribedSW()];
export const tab = () => <SubscribedSWTab items={items} companys={companys} productFamilys={productFamilys} />;
