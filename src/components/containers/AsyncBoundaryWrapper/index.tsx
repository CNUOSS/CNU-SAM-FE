import LoadingModal from '@components/modals/LoadingModal';
import Error from '@components/widgets/Error';
import AsyncBoundary from '@libs/AsyncBoundary';
import React from 'react';

interface AsyncBoundaryWrapperProps {
  children: React.ReactNode;
}

function AsyncBoundaryWrapper({ children }: AsyncBoundaryWrapperProps) {
  return (
    <AsyncBoundary pendingFallback={<LoadingModal />} rejectedFallback={Error}>
      {children}
    </AsyncBoundary>
  );
}

export default AsyncBoundaryWrapper;
