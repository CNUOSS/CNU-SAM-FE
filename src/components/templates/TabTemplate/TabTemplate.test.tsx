import React from 'react';
import TabTemplate from '.';
import { render, screen, fireEvent } from '@libs/rtl-utils';
import { generateString } from '../../../__mocks__/create-mock';

const description = generateString(30);
const children = generateString(30);

const onCreateMock = jest.fn();
const onUpdateMock = jest.fn();
const onDeleteMock = jest.fn();

const renderApp = (state: 'create' | 'update') =>
  render(
    <TabTemplate
      description={description}
      onCreate={state === 'create' ? onCreateMock : undefined}
      onUpdate={state === 'update' ? onUpdateMock : undefined}
      onDelete={state === 'update' ? onDeleteMock : undefined}
    >
      <>{children}</>
    </TabTemplate>
  );

describe('Template/TabTemplate', () => {
  describe('create test', () => {
    it('rendering test', () => {
      renderApp('create');

      screen.getByText('등록하기');
      screen.getByText(description);
      screen.getByText(children);
    });

    it('click button', () => {
      renderApp('create');

      const enrollButton = screen.getByText('등록하기');
      fireEvent.click(enrollButton);
      expect(onCreateMock).toBeCalledTimes(1);
    });
  });

  describe('update test', () => {
    it('rendering test', () => {
      renderApp('update');

      screen.getByText('수정하기');
      screen.getByText('삭제하기');
      screen.getByText(description);
      screen.getByText(children);
    });

    it('click button', () => {
      renderApp('update');

      const updateButton = screen.getByText('수정하기');
      const deleteButton = screen.getByText('삭제하기');
      fireEvent.click(updateButton);
      fireEvent.click(deleteButton);
      expect(onUpdateMock).toBeCalledTimes(1);
      expect(onDeleteMock).toBeCalledTimes(1);
    });
  });
});
