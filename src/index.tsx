import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './style/GlobalStyle';
import App from './App';
import Helmet from './libs/Helmet';
import { theme } from './style/theme';
import './libs/i18n';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Helmet />
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
