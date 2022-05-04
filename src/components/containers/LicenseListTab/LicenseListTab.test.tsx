import React from 'react';
import axios from 'axios';
import LicenseListTab from '.';
import { render, screen, waitFor } from '../../../libs/rtl-utils';
import { licenseListAttr } from '../../../common/constants';
import { generateLicenseListItem } from '../../../__mocks__/create-mock';

const renderApp = () => render(<LicenseListTab />);

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('Container/LicenseListTab', () => {
  describe('rendering test', () => {
    it('if admin', async () => {
      mockedAxios.get.mockResolvedValueOnce([
        generateLicenseListItem(),
        generateLicenseListItem(),
        generateLicenseListItem(),
      ]);
      renderApp();

      await waitFor(() => {
        const attrs = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
        expect(attrs).toEqual(licenseListAttr.map((attr) => attr.label));
      });
    });

    // it('if not admin', () => {

    // });
  });
});
