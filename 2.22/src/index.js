import React from 'react';
import ReactDOM from 'react-dom/client';  // Changed to react-dom/client for React 18
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Updated imports
import { StoreProvider } from 'easy-peasy';
import store from './store';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />  {/* Updated Route syntax */}
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
