import React from 'react';
import ProjectDetailTab from '.';
import { render, screen, fireEvent } from '@libs/rtl-utils';
import { versionListAttr } from '@common/constants';

const renderApp = () => render(<ProjectDetailTab projectId={0} />);

describe('Container/VersionListTab', () => {
  describe('rendering test', () => {
    it('mine case', () => {
      renderApp();

      const attrs = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
      expect(attrs).toEqual(versionListAttr.map((attr) => attr.label));
    });
  });

  it('click update button', () => {
    renderApp();

    const updateBtn = screen.getByText('수정하기');
    fireEvent.click(updateBtn);
  });

  it('click new version button', () => {
    renderApp();

    const enrollBtn = screen.getByText('버전 등록하기');
    fireEvent.click(enrollBtn);
  });
});
