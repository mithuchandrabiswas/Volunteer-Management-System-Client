import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home"
import LogIn from "../pages/authentication/LogIn";
import Register from "../pages/authentication/Register";
import JobDetails from "../pages/detailsPages/JobDetails";
import Addjob from "../pages/addJob/Addjob";
import MyBids from "../pages/myBids/MyBids";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ErrorPage from "../pages/errorPage/ErrorPage";
import UpdateJob from "../pages/updateJob/UpdateJob";
import AllJobs from "../pages/allJobs/AllJobs";
import PrivateRoutes from "./PrivateRoutes";
import BidRequests from "../pages/bidRequests/BidRequests";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/job/${params.id}`)
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/addjob",
                element: <PrivateRoutes><Addjob /></PrivateRoutes>,
            },
            {
                path: "/updatejob/:id",
                element: <UpdateJob />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/job/${params.id}`)
            },
            {
                path: "/mybids",
                element: <PrivateRoutes><MyBids /></PrivateRoutes>,
            },
            {
                path: "/mypostedjobs",
                element: <MyPostedJobs />,
            },
            {
                path: "/bidrequests",
                element: <BidRequests />,
            },
            {
                path: "/alljobs",
                element: <AllJobs />,
            },
        ],
    },
]);

export default router;