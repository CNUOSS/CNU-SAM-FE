import React from 'react';
import DeleteModal from '.';
import { render, screen, fireEvent } from '../../../libs/rtl-utils';

const closeModalMock = jest.fn();
const onDeleteMock = jest.fn();

beforeEach(() => {
  document.body.innerHTML = '<div id="modal"></div>';
  closeModalMock.mockClear();
  onDeleteMock.mockClear();
});

const renderApp = () => render(<DeleteModal onDelete={onDeleteMock} closeModal={closeModalMock} />);

describe('Modal/DeleteModal', () => {
  it('rendering test', () => {
    renderApp();
    screen.getByText('삭제하기');
    screen.getByText('닫기');
    screen.getByText('삭제');
  });

  it('click close button', () => {
    renderApp();

    const button = screen.getByText('닫기');
    fireEvent.click(button);
    expect(closeModalMock).toBeCalledTimes(1);
  });

  it('click delete button', () => {
    renderApp();

    const button = screen.getByText('삭제');
    fireEvent.click(button);
    expect(onDeleteMock).toBeCalledTimes(1);
  });
});
