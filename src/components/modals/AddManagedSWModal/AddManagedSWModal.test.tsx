import React from 'react';
import AddManagedSWModal from '.';
import { render, screen, fireEvent } from '@libs/rtl-utils';

const closeModalMock = jest.fn();

beforeEach(() => {
  document.body.innerHTML = '<div id="modal"></div>';
});

const renderApp = (isEditable?: boolean) =>
  render(<AddManagedSWModal isEditable={isEditable} closeModal={closeModalMock} />);

describe('Modal/AddManagedSWModal', () => {
  describe('not provide default values', () => {
    it('rendering test', () => {
      renderApp();
      screen.getByText('수업 용 SW 관리 항목에 추가하기');
      screen.getByText('당신의 행동으로 db의 운명이 달렸습니다. 알아서 책임지길 바라요.');
      // screen.getByText('SW 제조사');
      screen.getByText('SW 제품명');
      screen.getByText('등록하기');
    });
  });

  describe('editable', () => {
    it('rendering test', () => {
      renderApp(true);

      // screen.getByText('삭제하기');
      screen.getByText('수정하기');
    });

    // it('click delteButton', () => {
    //   renderApp(true);

    //   const deleteBtn = screen.getByText('삭제하기');
    //   fireEvent.click(deleteBtn);
    // });
  });

  it('click submit', () => {
    renderApp();
    const submitBtn = screen.getByText('등록하기');
    fireEvent.click(submitBtn);
  });

  // it('click self submit', () => {
  //   renderApp();
  //   const dropdownSelected = screen.getByTestId('dropdown-selected');
  //   fireEvent.click(dropdownSelected);
  //   const selfButton = screen.getByText('직접 입력');
  //   fireEvent.click(selfButton);
  //   const submitBtn = screen.getByText('등록하기');
  //   fireEvent.click(submitBtn);
  // });
});
