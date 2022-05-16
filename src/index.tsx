import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@emotion/react';
import { AuthProvider } from './libs/auth';
import GlobalStyle from './style/GlobalStyle';
import App from './App';
import Helmet from './libs/Helmet';
import { theme } from './style/theme';
import './libs/i18n';

const queryClient = new QueryClient();
axios.defaults.baseURL = process.env.SERVER_URL;

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Helmet />
            <App />
            <GlobalStyle />
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
