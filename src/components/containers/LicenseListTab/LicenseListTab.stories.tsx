import React from 'react';
import LicenseListTab from '.';
import { generateLicenseListItem } from '../../../__mocks__/create-mock';

export default {
  title: 'Container/LicenseListTab',
  component: LicenseListTab,
};

const items = [generateLicenseListItem(), generateLicenseListItem(), generateLicenseListItem()];
export const tab = () => <LicenseListTab items={items} />;
