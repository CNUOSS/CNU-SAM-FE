import React from 'react';
import LicenseListTab from '.';
import { render, screen } from '../../../libs/rtl-utils';
import { generateLicenseListItem } from '../../../__mocks__/create-mock';
import { licenseListAttr } from '../../../common/constants';

const items = [generateLicenseListItem(), generateLicenseListItem(), generateLicenseListItem()];
const renderApp = () => render(<LicenseListTab items={items} />);

describe('Container/LicenseListTab', () => {
  describe('rendering test', () => {
    it('if admin', () => {
      renderApp();

      const attrs = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
      expect(attrs).toEqual(licenseListAttr.map((attr) => attr.label));
    });

    // it('if not admin', () => {

    // });
  });
});
