import React from 'react';
import Button, { ButtonType } from '.';
import { render, screen, fireEvent } from '@libs/rtl-utils';
import { theme } from '@style/theme';
import { generateString } from '../../../__mocks__/create-mock';

const onClickMock = jest.fn();

const text = generateString(8);
const renderApp = (theme: ButtonType) =>
  render(
    <Button theme={theme} onClick={onClickMock}>
      {text}
    </Button>
  );

describe('Widget/Button', () => {
  describe('rendering test', () => {
    it('secondary', () => {
      renderApp('secondary');

      const button = screen.getByTestId('button-test');
      expect(button.textContent).toBe(text);
      expect(button).toHaveStyle({
        backgroundColor: theme.colors.secondary,
      });
    });

    it('warning', () => {
      renderApp('warning');

      const button = screen.getByTestId('button-test');
      expect(button.textContent).toBe(text);
      expect(button).toHaveStyle({
        backgroundColor: theme.colors.warning,
      });
    });
  });

  it('click test', () => {
    renderApp('secondary');

    const button = screen.getByTestId('button-test');
    fireEvent.click(button);
    expect(onClickMock).toBeCalledTimes(1);
  });
});
