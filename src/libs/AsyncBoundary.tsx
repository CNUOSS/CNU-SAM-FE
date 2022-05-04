import React, { ComponentProps, Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface AsyncBoundaryProps extends Omit<ErrorBoundaryProps, 'fallbackRender'> {
  pendingFallback: ComponentProps<typeof Suspense>['fallback'];
  rejectedFallback: ErrorBoundaryProps['fallbackRender'];
}

function Substitute({ error, resetErrorBoundary }: FallbackProps) {
  return <>{error.message}</>;
}

function AsyncBoundary({ pendingFallback, rejectedFallback, children }: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallbackRender={rejectedFallback || Substitute}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
