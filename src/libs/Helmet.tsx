import React from 'react';
import { Helmet as ReactHelmet, HelmetProvider } from 'react-helmet-async';

function Helmet() {
  return (
    <HelmetProvider>
      <ReactHelmet title="CNU-SAM" />
    </HelmetProvider>
  );
}

export default Helmet;
