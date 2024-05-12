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
import VolunteerNeedSection from "../components/volunteerNeedSection/VolunteerNeedSection";
import VolunteerNeedSectionCard from "../components/volunteerNeedSection/VolunteerNeedSectionCard";
import VolunteerNeedSectionDetails from "../pages/detailsPage/VolunteerNeedSectionDetails";
import BeVolunteer from "../pages/beVolunteer/BeVolunteer";

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
                path: "/volunteer-need-section-details/:id",
                element: <PrivateRoutes><VolunteerNeedSectionDetails /></PrivateRoutes>,
                loader: () => fetch('https://volunteer-management-server.vercel.app/volunteers'),
            },
            {
                path: "/need-volunteer-details/:id",
                element: <PrivateRoutes><NeedVolunteerDetails /></PrivateRoutes>,
                loader: () => fetch('https://volunteer-management-server.vercel.app/volunteers'),
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
                loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/volunteer/${params.id}`)
            },
            {
                path: "/updateVolunteerPost/:id",
                element: <UpdateVolunteerPost />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_API_URL}/volunteer/${params.id}`)
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