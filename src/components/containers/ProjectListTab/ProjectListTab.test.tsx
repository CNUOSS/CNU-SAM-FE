import React from 'react';
import ProjectListTab from '.';
import { render, screen } from '../../../libs/rtl-utils';
import { generateProjectListItem } from '../../../__mocks__/create-mock';
import { projectListAttr } from '../../../common/constants';

const items = [generateProjectListItem(), generateProjectListItem(), generateProjectListItem()];
const renderApp = () => render(<ProjectListTab items={items} />);

describe('Container/ProjectListTab', () => {
  it('rendering test', () => {
    renderApp();

    const attrs = screen.getAllByTestId('table-attr').map((attr) => attr.textContent);
    expect(attrs).toEqual(projectListAttr.map((attr) => attr.label));
  });
});
