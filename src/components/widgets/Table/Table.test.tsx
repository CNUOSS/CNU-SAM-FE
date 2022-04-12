import React from 'react';
import Table, { AttributeType } from '.';
import { render, screen, fireEvent } from '../../../libs/rtl-utils';

export default {
  title: 'Widget/Table',
  component: Table,
};

const onClickMock = jest.fn();
const attributes: AttributeType<string>[] = [
  { label: '이름', dataKey: 'name', widthPercent: 20, disableSort: true },
  { label: '설명', dataKey: 'description', widthPercent: 50, disableSort: false },
];
const items = [
  { name: 'B', description: 'E' },
  { name: 'A', description: 'G' },
  { name: 'C', description: 'F' },
  { name: 'D', description: 'E' },
];

const renderApp = (click: boolean = false) =>
  render(<Table attributes={attributes} items={items} onRowClick={click ? onClickMock : undefined} />);

describe('Widget/Table', () => {
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { configurable: true, value: 800 });
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 800 });
  });

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight as PropertyDescriptor);
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth as PropertyDescriptor);
  });
  describe('rendering test', () => {
    it('basic table', () => {
      renderApp();

      const attrNames = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
      const labels = screen.getAllByTestId('table-cell-name').map((cell) => cell.textContent);
      const descriptions = screen.getAllByTestId('table-cell-description').map((cell) => cell.textContent);
      expect(attrNames).toEqual(attributes.map((attr) => attr.label));
      expect(labels).toEqual(items.map((item) => item.name));
      expect(descriptions).toEqual(items.map((item) => item.description));
    });
  });

  describe('sort items', () => {
    it('sort', () => {
      renderApp();

      const descriptions = items.map((item) => item.description);
      const descriptionHeader = screen.getAllByTestId('table-attr').find((attr) => attr.textContent === '설명');
      if (!descriptionHeader) throw Error('no description');

      fireEvent.click(descriptionHeader);
      const descriptionsAsc = screen.getAllByTestId('table-cell-description').map((cell) => cell.textContent);
      expect(descriptionsAsc).toEqual(descriptions.sort());

      fireEvent.click(descriptionHeader);
      const descriptDesc = screen.getAllByTestId('table-cell-description').map((cell) => cell.textContent);
      expect(descriptDesc).toEqual(descriptions.sort().reverse());
    });
  });

  it('click handler', () => {
    renderApp(true);

    const label = screen.getAllByTestId('table-cell-name')[0];
    fireEvent.click(label);
    expect(onClickMock).toBeCalledTimes(1);
  });
});
