import React from 'react';
import AddLicenseModal from '.';
import { render, screen, fireEvent } from '@libs/rtl-utils';

const onCreateMock = jest.fn();
const closeModalMock = jest.fn();
const renderApp = () => render(<AddLicenseModal onCreate={onCreateMock} closeModal={closeModalMock} />);

beforeEach(() => {
  document.body.innerHTML = '<div id="modal"></div>';
  onCreateMock.mockClear();
  closeModalMock.mockClear();
});

describe('Modal/AddLicenseModal', () => {
  it('rendering test', () => {
    renderApp();

    screen.getByText('라이선스 생성하기');
    screen.getByText('화이팅');
  });

  it('click create button', () => {
    renderApp();

    const enrollButton = screen.getByText('등록하기');
    fireEvent.click(enrollButton);
    expect(onCreateMock).toBeCalledTimes(0);
  });
});
