import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../src/style/GlobalStyle';
import { theme } from '../src/style/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
