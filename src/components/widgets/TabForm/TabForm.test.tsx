import React from 'react';
import TabForm from '.';
import { render, screen, fireEvent } from '@libs/rtl-utils';

const onSubmitMock = jest.fn((e) => e.preventDefault());
const renderApp = (isSubmit: boolean = false, buttonText?: string) =>
  render(
    <TabForm onSubmit={isSubmit ? onSubmitMock : undefined} buttonText={buttonText || ''}>
      <></>
    </TabForm>
  );

beforeEach(() => {
  onSubmitMock.mockClear();
});

describe('Widget/TabForm', () => {
  describe('rendering test', () => {
    it('submit test', () => {
      renderApp(true, '제출하기');

      const button = screen.getByText('제출하기');
      fireEvent.click(button);
      expect(onSubmitMock).toBeCalledTimes(1);
    });

    it('container', () => {
      renderApp();

      const button = screen.queryByText('제출하기');
      expect(button).toBeNull();
    });
  });
});
