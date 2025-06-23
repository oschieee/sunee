import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind-entry.css'; // <--- Make sure this line exists and points to your main CSS file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);