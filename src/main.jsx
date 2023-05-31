import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import JobDetails from "./components/JobDetails";
import Statistics from "./components/Statistics";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("JobData.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,

      },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/appliedJob", element: <AppliedJobs></AppliedJobs> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
