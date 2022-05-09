import React from 'react';
import * as Style from './styled';

interface ErrorProps {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

function Error({ error, resetErrorBoundary }: ErrorProps) {
  return <Style.Description>{error.message}</Style.Description>;
}

export default Error;
