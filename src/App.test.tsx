import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('test', () => {
  const component = render(<App />);

  component.getByText('helloworld');
});
