import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';
import SignInPage from './pages/SignIn/SignInPage';
import LandingPage from './pages/LandingPage';

// Manage all the nested routing
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LandingPage />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <SignInPage />
      }
    ]
  }
])

// Render Layout.jsx file instead App.js file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
