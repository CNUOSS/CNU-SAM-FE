import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './style/GlobalStyle';
import App from './App';
import Helmet from './libs/Helmet';
import { theme } from './style/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Helmet />
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
