import React from 'react';
import SubscribedSWTab from '.';
import { render, screen, fireEvent } from '../../../libs/rtl-utils';
import { generateSubscribedSW, generateStringArray } from '../../../__mocks__/create-mock';
import { subscibedSWListAttr } from '../../../common/constants';

const companys = generateStringArray(3);
const productFamilys = generateStringArray(3);
const items = [generateSubscribedSW(), generateSubscribedSW(), generateSubscribedSW()];
const renderApp = () => render(<SubscribedSWTab items={items} companys={companys} productFamilys={productFamilys} />);

describe('Container/SubscribedSW', () => {
  it('rendering test', () => {
    renderApp();

    const attrs = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
    expect(attrs).toEqual(subscibedSWListAttr.map((attr) => attr.label));
  });

  it('click search button', () => {
    renderApp();

    const button = screen.getByText('조회하기');
    fireEvent.click(button);
  });

  it('click dropdown item', () => {
    renderApp();
    const dropdowns = screen.getAllByTestId('dropdown-selected');
    fireEvent.click(dropdowns[0]);
    fireEvent.click(dropdowns[1]);

    const company = screen.getByText(companys[1]);
    const productFamily = screen.getByText(productFamilys[1]);
    fireEvent.click(company);
    fireEvent.click(productFamily);
    screen.getByText(companys[1]);
    screen.getByText(productFamilys[1]);
  });
});
