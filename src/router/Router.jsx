import {
  createBrowserRouter,
} from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import JobDetails from "../pages/JobDetails/JobDetails";

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
          Component: JobDetails
        }
    ]
    // element: <div>Fuck you!</div>
    // loader: loadRootData,
  },
]);

export default Router