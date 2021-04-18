import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {ErrorBoundary} from 'generic';
import {Routes} from './routes';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
