import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TruckProvider } from './contexts/TruckContext'; // Example context

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TruckProvider>
      <App />
    </TruckProvider>
  </React.StrictMode>
);