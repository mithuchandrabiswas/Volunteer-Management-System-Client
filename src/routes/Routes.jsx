import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home"
import LogIn from "../pages/authentication/LogIn";
import Register from "../pages/authentication/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";
import NeedVolunteer from "../pages/needVolunteer/NeedVolunteer";
import AddVolunteerPost from "../pages/addVounteerPost/AddVolunteerPost";
import ManageMyPost from "../pages/manageMyPost/ManageMyPost";

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
                path: "/add-volunteer-post",
                element: <AddVolunteerPost />,
            },
            {
                path: "/manage-my-post",
                element: <ManageMyPost />,
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