import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { Assync } from './routes/Assync';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Assync/>
  </React.StrictMode>
);
