import React from 'react';
import SelfDropdown from '.';
import { render, screen, fireEvent } from '@libs/rtl-utils';
import { generateStringArray, generateString } from '../../../__mocks__/create-mock';

const onChangeMock = jest.fn();
const labelMock = generateString();
const inputValueMock = generateString();
const itemsMock = generateStringArray(5);
const renderApp = () =>
  render(
    <SelfDropdown
      label={labelMock}
      width={200}
      inputWidth={100}
      items={itemsMock}
      inputValue={inputValueMock}
      onChange={onChangeMock}
    />
  );

beforeEach(() => {
  onChangeMock.mockClear();
});

describe('Widget/SelfDropdown', () => {
  describe('rendering test', () => {
    it('with label', () => {
      renderApp();

      screen.getByText(labelMock);
    });
  });

  describe('click event', () => {
    it('click item', () => {
      renderApp();

      const selected = screen.getByText('직접 입력');
      fireEvent.click(selected);
      const secondItem = screen.getByText(itemsMock[1]);
      fireEvent.click(secondItem);
      screen.getByText(itemsMock[1]);
    });

    it('click selfinput', () => {
      renderApp();

      // click
      const selfInput = screen.getByText('직접 입력');
      fireEvent.click(selfInput);

      // change
      const changedText = 'change';
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: changedText } });
      expect(onChangeMock).toBeCalledWith(changedText);
    });
  });
});
