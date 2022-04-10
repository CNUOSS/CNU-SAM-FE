import React from 'react';
import { render, screen, fireEvent, act } from '../../../libs/rtl-utils';
import Input from '.';

const onChangeMock = jest.fn();
const value = 'value';
const label = 'label';
const renderApp = (label: string = '') => render(<Input value={value} label={label} onChange={onChangeMock} />);

describe('Widget/Input', () => {
  describe('no label', () => {
    it('click test', () => {
      renderApp();

      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe(value);
    });

    it('input change', () => {
      renderApp();

      const input = screen.getByRole('textbox') as HTMLInputElement;
      act(() => {
        fireEvent.change(input, { target: { value: 'text2' } });
      });
      expect(onChangeMock).toBeCalledTimes(1);
    });
  });

  describe('with label', () => {
    it('click test', () => {
      renderApp(label);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe(value);
      screen.getByText(label);
    });
  });
});
