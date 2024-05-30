import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home"
import LogIn from "../pages/authentication/LogIn";
import Register from "../pages/authentication/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";
import NeedVolunteer from "../pages/needVolunteer/NeedVolunteer";
import AddVolunteerPost from "../pages/addVounteerPost/AddVolunteerPost";
import ManageMyPost from "../pages/manageMyPost/ManageMyPost";
import UpdateVolunteerPost from "../pages/updateVolunteerPost/UpdateVolunteerPost";
import PrivateRoutes from '../routes/PrivateRoutes'
import NeedVolunteerDetails from "../pages/detailsPage/NeedVolunteerDetails";
import VolunteerNeedSectionDetails from "../pages/detailsPage/VolunteerNeedSectionDetails";
import BeVolunteer from "../pages/beVolunteer/BeVolunteer";
import MyProfile from "../pages/myProfile/MyProfile";

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
                path: "/need-volunteer",
                element: <NeedVolunteer />,
            },
            {
                path: "/myprofile",
                element: <PrivateRoutes><MyProfile /></PrivateRoutes>,
            },
            {
                path: "/volunteer-need-section-details/:id",
                element: <PrivateRoutes><VolunteerNeedSectionDetails /></PrivateRoutes>,
                loader: () => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/volunteers`),
            },
            {
                path: "/need-volunteer-details/:id",
                element: <PrivateRoutes><NeedVolunteerDetails /></PrivateRoutes>,
                loader: () => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/volunteers`),
            },
            {
                path: "/add-volunteer-post",
                element: <PrivateRoutes><AddVolunteerPost /></PrivateRoutes>,
            },
            {
                path: "/manage-my-post",
                element: <PrivateRoutes><ManageMyPost /></PrivateRoutes>,
            },
            {
                path: "/be-a-volunteer/:id",
                element: <BeVolunteer />,
                // loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/volunteer/${params.id}`),
                loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/volunteer/${params.id}`),
            },
            {
                path: "/updateVolunteerPost/:id",
                element: <PrivateRoutes><UpdateVolunteerPost /></PrivateRoutes>,
                // loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/volunteer/${params.id}`),
                loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/volunteer/${params.id}`),
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;