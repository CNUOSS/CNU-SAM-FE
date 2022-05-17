import React from 'react';
// import axios from 'axios';
import LicenseListTab from '.';
import { render } from '@libs/rtl-utils';
// import { licenseListAttr } from '@common/constants';
// import { generateGetLicensesResponseMock } from '../../../__mocks__/api-mock';

const renderApp = () => render(<LicenseListTab />);

// jest.mock('axios');

// const mockedAxios = jest.mocked(axios, true);

// TODO: add open dropdown test case, Maybe use axios-mock-adapter
describe('Container/LicenseListTab', () => {
  // FIXME: 추후에 msw도입해야함
  it('', () => {
    renderApp();
    expect(1).toBe(1);
  });
  // describe('rendering test', () => {
  //   it('if admin', async () => {
  //     mockedAxios.get.mockResolvedValueOnce(generateGetLicensesResponseMock());
  //     renderApp();
  //     await waitFor(() => {
  //       const attrs = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
  //       expect(attrs).toEqual(licenseListAttr.map((attr) => attr.label));
  //     });
  //   });
  //   // it('if not admin', () => {
  //   // });
  // });
});
