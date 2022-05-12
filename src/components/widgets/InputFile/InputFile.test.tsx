import React from 'react';
import InputFile from '.';
import { render, screen, fireEvent, waitFor } from '@libs/rtl-utils';
import { generateString } from '../../../__mocks__/create-mock';

const label = generateString(4);
const onChangeMock = jest.fn();
const renderApp = () => render(<InputFile label={label} onChange={onChangeMock} />);

beforeEach(() => {
  onChangeMock.mockClear();
});

describe('Widget/InputFile', () => {
  it('rendering test', () => {
    renderApp();

    screen.getByText(label);
    screen.getByText('Upload');
  });

  it('change file', async () => {
    renderApp();

    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const input = screen.getByTestId('inputfile');
    await waitFor(() => {
      fireEvent.change(input, { target: { files: [file] } });
    });

    const { files } = screen.getByTestId('inputfile') as HTMLInputElement;
    if (!files) throw Error();
    expect(files[0].name).toBe('chucknorris.png');
    expect(onChangeMock).toBeCalledTimes(1);
  });

  it('there is no file', async () => {
    renderApp();

    const input = screen.getByTestId('inputfile');
    await waitFor(() => {
      fireEvent.change(input, { target: { files: [] } });
    });

    const { files } = screen.getByTestId('inputfile') as HTMLInputElement;
    if (!files) throw Error();
    expect(onChangeMock).toBeCalledTimes(0);
  });
});
