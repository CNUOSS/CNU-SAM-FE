import React from 'react';
import TotalLectureSWListTab, { ItemType } from '.';
import { render, screen, fireEvent, waitFor } from '../../../libs/rtl-utils';
import { generateTotalLectureSWItem } from '../../../__mocks__/create-mock';
import { totalLectureSWListAttr } from '../../../common/constants';

const items: ItemType[] = [
  generateTotalLectureSWItem({ lectureName: 'lec01', managed: true }),
  generateTotalLectureSWItem({ lectureName: 'lec02', managed: false }),
  generateTotalLectureSWItem({ lectureName: 'lec03', managed: false }),
];
const renderApp = (isAdmin: boolean = true) => render(<TotalLectureSWListTab isAdmin={isAdmin} items={items} />);

describe('Container/TotalLectureSWList', () => {
  describe('rendering test', () => {
    it('manager case', () => {
      renderApp(false);

      const attrs = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
      expect(attrs).toEqual(totalLectureSWListAttr.map((attr) => attr.label));
    });

    it('manager case', () => {
      renderApp();

      const attrs = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
      expect(attrs).toEqual(totalLectureSWListAttr.map((attr) => attr.label));
    });
  });

  it('click add btn', () => {
    renderApp();

    waitFor(() => {
      const addBtn = screen.getAllByTestId('add-btn')[0];
      fireEvent.click(addBtn);
    });
  });
});
