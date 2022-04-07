import React from 'react';
import Dropdown from '.';
import { render, waitFor, fireEvent, screen } from '../../../libs/rtl-utils';
import { generateStringArray } from '../../../__mocks__/create-mock';

const onClickItemMock = jest.fn();
const stringArray = generateStringArray(3);

const renderApp = () => render(<Dropdown items={stringArray} onClickItem={onClickItemMock} />);

describe('Widget/Dropdown', () => {
  describe('rendering test', () => {
    it('initial state', () => {
      renderApp();

      const selectedText = screen.getByTestId('dropdown-selected');
      waitFor(() => {
        expect(selectedText.innerHTML).toContainHTML(stringArray[0]);
      });
    });

    it('open dropdown', () => {
      renderApp();

      const selectedText = screen.getByTestId('dropdown-selected');
      fireEvent.click(selectedText);
      waitFor(() => {
        stringArray.forEach((string) => screen.getAllByText(string));
      });
    });
  });

  it('select item', () => {
    renderApp();
    const selectedText = screen.getByTestId('dropdown-selected');
    fireEvent.click(selectedText);
    waitFor(() => {
      const lastText = screen.getByText(stringArray[stringArray.length - 1]);
      fireEvent.click(lastText);
    });
    expect(onClickItemMock).toBeCalledWith(stringArray.length - 1);
    expect(selectedText.textContent).toEqual(stringArray[stringArray.length - 1]);
  });
});
