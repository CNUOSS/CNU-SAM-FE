import React from 'react';
import SubscribedSWTab from '.';
import { render, screen, fireEvent } from '@libs/rtl-utils';
import { subscibedSWListAttr } from '@common/constants';
import { generateSubscribedSW, generateStringArray } from '../../../__mocks__/create-mock';

const manufacturings = generateStringArray(3);
const types = generateStringArray(3);
const items = [generateSubscribedSW(), generateSubscribedSW(), generateSubscribedSW()];
const renderApp = () => render(<SubscribedSWTab items={items} manufacturings={manufacturings} types={types} />);

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

    const manufacturing = screen.getByText(manufacturings[1]);
    const type = screen.getByText(types[1]);
    fireEvent.click(manufacturing);
    fireEvent.click(type);
    screen.getByText(manufacturings[1]);
    screen.getByText(types[1]);
  });

  it('click enroll button', () => {
    renderApp();

    const enrollButton = screen.getByText('등록하기');
    fireEvent.click(enrollButton);
    screen.getByText('학내 구독중인 SW 등록하기');
  });
});
