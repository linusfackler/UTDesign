import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import RegisterStudent from './pages/RegisterStudent.jsx';
import RegisterTutor from './pages/RegisterTutor.jsx';
import ProfileStudent from './pages/ProfileStudent.jsx';
import ProfileTutor from './pages/ProfileTutor.jsx'
import Tutors from './pages/Tutors.jsx';
import AppointmentsStudent from './pages/AppointmentsStudent.jsx';
import AppointmentsTutors from './pages/AppointmentsTutors.jsx';
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
      path: "register-student",
      element: <RegisterStudent/>,
    },
    {
      path: "register-tutor",
      element: <RegisterTutor/>,
    },
    {
      path: "tutors",
      element: <Tutors/>,
    },
    {
      path: "profile-student",
      element: <ProfileStudent/>,
    },
    {
      path: "profile-tutor",
      element: <ProfileTutor/>,
    },
    {
      path: "appointments-student",
      element: <AppointmentsStudent/>,
    },
    {
      path: "appointments-tutor",
      element: <AppointmentsTutors/>,
    }
  ]);

root.render(
    <RouterProvider router={router} />)