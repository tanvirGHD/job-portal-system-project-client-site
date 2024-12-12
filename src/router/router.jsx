import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/JobDetails/JobDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/jobs/:id',
        element: <JobDetails></JobDetails>,
        loader : ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`) 
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      }
    ],
  },
]);

export default router;

