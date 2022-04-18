import React from 'react';
import AddOrUpdateSubscribedSWModal from '.';
import { render, screen, fireEvent } from '../../../libs/rtl-utils';

const closeModalMock = jest.fn();
const onSubmitMock = jest.fn();
const onDelteItemMock = jest.fn();

beforeEach(() => {
  document.body.innerHTML = '<div id="modal"></div>';
  onSubmitMock.mockClear();
  onDelteItemMock.mockClear();
});

const renderApp = (isCreate: boolean) =>
  render(
    <AddOrUpdateSubscribedSWModal
      modalState={isCreate ? 'create' : 'update'}
      closeModal={closeModalMock}
      onSubmit={onSubmitMock}
      onDelete={onDelteItemMock}
    />
  );

describe('Modal/AddOrUpdateSubscribedSWModal', () => {
  describe('create modal', () => {
    it('rendering test', () => {
      renderApp(true);

      screen.getByText('등록하기');
    });

    it('click add Button', () => {
      renderApp(true);

      const addButton = screen.getByText('등록하기');
      fireEvent.click(addButton);
      expect(onSubmitMock).toBeCalledTimes(1);
    });
  });

  describe('update modal', () => {
    it('rendering test', () => {
      renderApp(false);

      screen.getByText('수정하기');
      screen.getByText('삭제하기');
    });

    it('click update Button', () => {
      renderApp(false);

      const updateButton = screen.getByText('수정하기');
      fireEvent.click(updateButton);
      expect(onSubmitMock).toBeCalledTimes(1);
    });

    it('click delete Button', () => {
      renderApp(false);

      const deleteButton = screen.getByText('삭제하기');
      fireEvent.click(deleteButton);
      expect(onDelteItemMock).toBeCalledTimes(1);
    });
  });
});