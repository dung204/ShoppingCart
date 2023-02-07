import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CustomerProvider } from './contexts/CustomerContext';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomerProvider>
  </React.StrictMode>
);
