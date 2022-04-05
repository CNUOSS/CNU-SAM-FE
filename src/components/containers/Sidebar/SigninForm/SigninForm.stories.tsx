import React from 'react';
import SigninForm from '.';

export default {
  title: 'Container/Sidebar/SigninForm',
  component: SigninForm,
};

export const signinForm = () => (
  <div style={{ width: '25rem' }}>
    <SigninForm />
  </div>
);
