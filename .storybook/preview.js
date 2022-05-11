import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../src/libs/auth';
import GlobalStyle from '../src/style/GlobalStyle';
import { theme } from '../src/style/theme';
import '../src/libs/i18n';

const queryClient = new QueryClient();
export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Story />
            <GlobalStyle />
          </AuthProvider>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  ),
];
