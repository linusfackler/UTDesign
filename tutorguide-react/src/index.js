import ReactDOM from 'react-dom'
import App from './App'
import Login from './pages/Login';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "login",
        element: <Login/>,
      },
  ]);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.querySelector("#root"))