import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App.jsx';

const root = createRoot(App);

root.render(
    <App />,
    document.getElementById('root'),
);
