import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import TestComponentForRouting from './components/TestComponentForRouting.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/test',
    element: <TestComponentForRouting />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
