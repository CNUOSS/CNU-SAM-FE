import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;

      gray: string;
      lightGray: string;

      warning: string;
    };
  }
}
