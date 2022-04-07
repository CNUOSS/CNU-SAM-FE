import React from 'react';
import Dropdown from '.';
import { render, waitFor, fireEvent } from '../../../libs/rtl-utils';
import { generateStringArray } from '../../../__mocks__/create-mock';

const onClickItemMock = jest.fn();
const stringArray = generateStringArray(3);

describe('Widget/Dropdown', () => {
  describe('rendering test', () => {
    it('initial state', () => {
      const component = render(<Dropdown items={stringArray} onClickItem={onClickItemMock} />);

      const selectedText = component.getByLabelText('dropdown-selected');
      waitFor(() => {
        expect(selectedText.innerHTML).toContainHTML(stringArray[0]);
      });
    });

    it('open dropdown', () => {
      const component = render(<Dropdown items={stringArray} onClickItem={onClickItemMock} />);

      const selectedText = component.getByLabelText('dropdown-selected');
      fireEvent.click(selectedText);
      waitFor(() => {
        stringArray.forEach((string) => component.getAllByText(string));
      });
    });
  });

  it('select item', () => {
    const component = render(<Dropdown items={stringArray} onClickItem={onClickItemMock} />);
    const selectedText = component.getByLabelText('dropdown-selected');
    fireEvent.click(selectedText);
    waitFor(() => {
      const lastText = component.getByText(stringArray[stringArray.length - 1]);
      fireEvent.click(lastText);
    });
    expect(onClickItemMock).toBeCalledWith(stringArray.length - 1);
    expect(selectedText.textContent).toEqual(stringArray[stringArray.length - 1]);
  });
});
