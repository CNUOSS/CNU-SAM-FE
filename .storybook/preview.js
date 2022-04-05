import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../src/style/GlobalStyle';
import { theme } from '../src/style/theme';
import '../src/libs/i18n';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
