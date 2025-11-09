import {
  createBrowserRouter,
} from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

let Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: "/register",
            Component: Register
        },
        {
          path: "/login",
          Component: LogIn
        },
        {
          path:'/jobs/:id',
          Component: JobDetails,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        }
    ]
    // element: <div>hi five!!</div>
    // loader: loadRootData,
  },
]);

export default Router