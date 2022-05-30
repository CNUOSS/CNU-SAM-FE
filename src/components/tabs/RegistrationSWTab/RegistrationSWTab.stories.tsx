import React from 'react';
import RegistrationSWTab from '.';
import { generateSWForLecture, generateStringArray } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/RegistrationSWTab',
  component: RegistrationSWTab,
};

const manufacturings = generateStringArray(3);
const items = [generateSWForLecture(), generateSWForLecture(), generateSWForLecture()];
export const registrationSWTab = () => <RegistrationSWTab items={items} manufacturings={manufacturings} />;
