import './App.css'
import Button from '@mui/material/Button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage'
import Internships from './pages/Internships';
import Features from './pages/Features';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signup",
    element: <SignupPage/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/courses",
    element: <CoursesPage/>
  },
  {
    path: "/courses/:id",
    element: <CourseDetailsPage/>
  },
  {
    path: "/internships",
    element: <Internships/>
  },
  {
    path: "/features",
    element: <Features/>
  },
]);



function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
