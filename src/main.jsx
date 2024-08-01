import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import HomePage from './HomePage.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div><strong>404 Not Found</strong></div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
