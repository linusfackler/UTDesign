import ReactDOM from 'react-dom'
import App from './App'
import Login from './pages/Login';
import Tutors from './pages/Tutors';


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
    {
      path: "tutors",
      element: <Tutors/>,
    },
  ]);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.querySelector("#root"))