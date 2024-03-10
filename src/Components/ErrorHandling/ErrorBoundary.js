import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => {
    console.error('Error Boundary caught an error:', error, errorInfo);
    setHasError(true);
  };

  return hasError ? <div>Something went wrong.</div> : children;
};

export default ErrorBoundary;
