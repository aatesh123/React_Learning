import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import DataListComponent from './ErrorComponent';

function App() {
  return (
    <div>
      <h1>Data List</h1>
      <ErrorBoundary>
        <DataListComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
