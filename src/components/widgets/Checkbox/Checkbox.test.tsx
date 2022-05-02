import React from 'react';
import Checkbox from '.';
import { render, screen, fireEvent } from '../../../libs/rtl-utils';
import { generateString } from '../../../__mocks__/create-mock';

const label = generateString(5);
const onClickAction = jest.fn();
const renderApp = () => render(<Checkbox onClick={onClickAction} label={label} />);

describe('Widget/Checkbox', () => {
  it('rendering test', () => {
    renderApp();

    screen.getByText(label);
  });

  it('click checkbox', () => {
    renderApp();

    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(onClickAction).toBeCalledTimes(1);
  });
});
