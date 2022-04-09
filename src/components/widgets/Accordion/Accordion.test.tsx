import React from 'react';
import Accordion from '.';
import { render, screen, fireEvent } from '../../../libs/rtl-utils';

const testTItle = 'test-title';
const testItems = ['item1', 'item2'];
const onClickMock = jest.fn();

const renderApp = (disable = false) =>
  render(<Accordion title={testTItle} items={testItems} disable={disable} onClickItem={onClickMock} />);

beforeEach(() => {
  onClickMock.mockClear();
});

describe('Widget/Accordion', () => {
  describe('rendering test', () => {
    it('initial state', () => {
      renderApp();

      screen.getByText(testTItle);
    });

    it('open accordion', () => {
      renderApp();

      const title = screen.getByText(testTItle);
      fireEvent.click(title);
      const accordionItems = screen.getAllByTestId('accordion-item').map((dom) => dom.textContent);
      expect(accordionItems).toEqual(testItems);
    });
  });

  describe('click item', () => {
    it('able', () => {
      renderApp();

      const title = screen.getByText(testTItle);
      fireEvent.click(title);
      const accordionItems = screen.getAllByTestId('accordion-item');
      fireEvent.click(accordionItems[0]);
      expect(onClickMock).toBeCalledTimes(1);
    });

    it('diable', () => {
      renderApp(true);

      const title = screen.getByText(testTItle);
      fireEvent.click(title);
      const accordionItems = screen.getAllByTestId('accordion-item');
      fireEvent.click(accordionItems[0]);
      expect(onClickMock).toBeCalledTimes(0);
    });
  });
});
