import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";


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
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`) 
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: '/myApplications',
        element : <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: '/addJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: '/myPostJobs',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path: '/viewApplication/:job_id',
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>
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

