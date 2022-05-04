import React from 'react';
import { action } from '@storybook/addon-actions';
import ErrorModal from '.';

export default {
  title: 'Modal/ErrorModal',
  component: ErrorModal,
};

const resetErrorBoundaryAction = action('action');
export const errorModal = () => <ErrorModal error={new Error()} resetErrorBoundary={resetErrorBoundaryAction} />;
