import React from 'react';
import AddLicenseModal from '.';
import { render, screen } from '@libs/rtl-utils';

const closeModalMock = jest.fn();
const renderApp = () => render(<AddLicenseModal closeModal={closeModalMock} />);

beforeEach(() => {
  document.body.innerHTML = '<div id="modal"></div>';
  closeModalMock.mockClear();
});

describe('Modal/AddLicenseModal', () => {
  it('rendering test', () => {
    renderApp();

    screen.getByText('라이선스 생성하기');
    screen.getByText('화이팅');
  });
});
