/**
 * override react-testing-library
 */
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import { AuthProvider } from './auth';
import { theme } from '../style/theme';
import '../libs/i18n';

interface CustomRendererProps {
  needAuth?: boolean;
}

interface IsAuthProps {
  needAuth?: boolean;
  children: React.ReactNode;
}

const AuthCover = ({ needAuth = false, children }: IsAuthProps) =>
  needAuth ? <AuthProvider>{children}</AuthProvider> : <>{children}</>;

const AllTheProviders: FC<IsAuthProps> = ({ children, needAuth }: IsAuthProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <AuthCover needAuth={needAuth}>
            <div id="modal" />
            {children}
          </AuthCover>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

const customRender = (ui: ReactElement, props?: CustomRendererProps, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper: ({ children }) => <AllTheProviders {...props}>{children}</AllTheProviders>,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
