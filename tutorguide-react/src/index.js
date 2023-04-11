import { createRoot } from 'react-dom/client'
import App from './App'
import Login from './pages/Login';
import Tutors from './pages/Tutors';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css'


const container = document.querySelector("#root")
const root = createRoot(container)

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

root.render(
    <RouterProvider router={router} />)