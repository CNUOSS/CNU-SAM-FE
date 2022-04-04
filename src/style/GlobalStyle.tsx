import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalStyle(): React.ReactElement {
  return (
    <Global
      styles={css`
        :root {
          --vh: 100%;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html,
        body {
          font-size: 62.5%;
          height: 100%;

          #root {
            height: 100%;
          }
        }
        body {
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        button {
          border: none;
          outline: none;
          cursor: pointer;
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
      `}
    />
  );
}

export default GlobalStyle;
