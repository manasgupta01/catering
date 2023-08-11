import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Replace ReactDOM.render with createRoot
const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);
appRoot.render(<App />);
