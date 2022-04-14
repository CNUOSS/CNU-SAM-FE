import React from 'react';
import TotalLectureSWListTab, { ItemType } from '.';
import { render, screen } from '../../../libs/rtl-utils';
import { generateTotalLectureSWItem } from '../../../__mocks__/create-mock';
import { totalLectureSWListAttr } from '../../../common/constants';

const items: ItemType[] = [generateTotalLectureSWItem(), generateTotalLectureSWItem(), generateTotalLectureSWItem()];
const renderApp = (isAdmin: boolean = true) => render(<TotalLectureSWListTab isAdmin={isAdmin} items={items} />);

describe('Container/TotalLectureSWList', () => {
  describe('rendering test', () => {
    it('manager case', () => {
      renderApp();

      const attrs = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
      expect(attrs).toEqual(totalLectureSWListAttr.map((attr) => attr.label));
    });
  });
});
