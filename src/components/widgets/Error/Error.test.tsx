import React from 'react';
import ErrorModal from '.';
import { render } from '../../../libs/rtl-utils';

const error = new Error('ERROR');
const resetErrorBoundaryMock = jest.fn();

describe('Widget/ErrorModal', () => {
  it('rendering test', () => {
    render(<ErrorModal error={error} resetErrorBoundary={resetErrorBoundaryMock} />);
  });
});
