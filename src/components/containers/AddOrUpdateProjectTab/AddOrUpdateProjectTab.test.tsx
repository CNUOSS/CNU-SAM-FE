import React from 'react';
import AddOrUpdateProjectTab, { AddOrUpdateProjectTabType } from '.';
import { render, screen } from '@libs/rtl-utils';

const renderApp = (tabState: AddOrUpdateProjectTabType) => render(<AddOrUpdateProjectTab tabState={tabState} />);

describe('Container/AddOrUpdateProjectTab', () => {
  describe('create tab', () => {
    it('rendering test', () => {
      renderApp('create');

      screen.getByText('생성하기');
    });
  });

  describe('update tab', () => {
    it('rendering test', () => {
      renderApp('update');

      screen.getByText('삭제하기');
      screen.getByText('수정하기');
    });
  });
});
