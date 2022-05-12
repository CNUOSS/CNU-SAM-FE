import React from 'react';
import DefaultText from '.';
import { render, screen } from '@libs/rtl-utils';
import { generateString } from '../../../__mocks__/create-mock';

const label = generateString(4);
const text = generateString(4);

const renderApp = (isLabel = true) => render(<DefaultText label={isLabel ? label : ''}>{text}</DefaultText>);

describe('Widget/DefaultText', () => {
  describe('rendering test', () => {
    it('with label', () => {
      renderApp();

      screen.getByText(label);
      screen.getByText(text);
    });

    it('no label', () => {
      renderApp(false);

      screen.getByText(text);
      const labelItem = screen.queryByText(label);
      expect(labelItem).toBeNull();
    });
  });
});
