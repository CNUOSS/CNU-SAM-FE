import React from 'react';
import SubscribedSWTab from '.';
import { generateSubscribedSW, generateStringArray } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/SubscribedSW',
  component: SubscribedSWTab,
};

const manufacturings = generateStringArray(3);
const types = generateStringArray(3);
const items = [generateSubscribedSW(), generateSubscribedSW(), generateSubscribedSW()];
export const tab = () => <SubscribedSWTab items={items} manufacturings={manufacturings} types={types} />;
