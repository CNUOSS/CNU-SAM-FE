import React from 'react';
import { mockGetComputedStyle, mockDndSpacing, makeDnd, DND_DIRECTION_UP } from 'react-beautiful-dnd-test-utils';
import DnD from '.';
import { TabList, TabItem } from '../../containers/Workspace';
import { render, screen, fireEvent } from '../../../libs/rtl-utils';
import { generateStringArray } from '../../../__mocks__/create-mock';

const onDragEndMock = jest.fn();
const clickItemMock = jest.fn();
const stringArray = generateStringArray(3);

const renderApp = (): void => {
  const { container } = render(
    <DnD
      ListComponent={TabList}
      ItemComponent={TabItem}
      items={stringArray}
      onDragEnd={onDragEndMock}
      clickItem={clickItemMock}
    />
  );
  mockDndSpacing(container);
};

beforeEach(() => {
  mockGetComputedStyle();
});

describe('Widget/DnD', () => {
  it('rendering test', () => {
    renderApp();

    stringArray.forEach((string) => screen.getByText(string));
  });

  it('click item', () => {
    renderApp();

    // click first item
    const firstString = screen.getByText(stringArray[0]);
    fireEvent.click(firstString);
    expect(clickItemMock).toBeCalledWith(0);
  });

  // FIXME: https://github.com/colinrobertbrooks/react-beautiful-dnd-test-utils/blob/9adf1632a3/example/src/App.test.tsx
  it('dnd', async () => {
    renderApp();

    await makeDnd({
      text: stringArray[stringArray.length - 1],
      direction: DND_DIRECTION_UP,
      positions: 0,
    });

    const texts = screen.getAllByTestId('dnd-item').map((x) => x.textContent);
    expect(texts).toEqual(stringArray);
  });
});
