import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserTie } from "react-icons/fa";

const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // Implement a dark/light theme toggle
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }
    // console.log(theme);

    const handleLogOut = async () => {
        try {
            await logOutUser();
            toast.success("Sign out Successfully");
            navigate('/');
        } catch (error) {
            console.error("Error signing out:", error);
            toast.error("Error signing out");
        }
    };


    return (
        <div className="navbar fixed top-0 left-0 z-50 bg-[#97f2e7] p-0 shadow-lg rounded">
            <ToastContainer />
            <div className="navbar-start mx-10">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded w-40">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/need-volunteer"}>Need Volunteer</NavLink></li>
                        <li>
                            <details>
                                <summary>My Profile</summary>
                                <ul className="p-2 z-50">
                                    {user && (
                                        <>
                                            <li><NavLink to={"/add-volunteer-post"}>Add Volunteer Post</NavLink></li>
                                            <li><NavLink to={"/manage-my-post"}>Manage My Post</NavLink></li>
                                        </>
                                    )}
                                </ul>
                            </details>
                        </li>
                        <li>
                            {user ? (
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0}><img className="rounded-full w-8 h-8" src={user?.photoURL || <FaUserTie />} alt="User Avatar" /></div>
                                    <ul tabIndex={0} className="dropdown-content top-full right-0 z-[1] menu p-2 shadow bg-base-100 rounded-box w-36 md:w-52">
                                        <button className="block w-full text-left px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100">
                                            {user?.displayName || 'User Name Not Found'}
                                        </button>
                                        <button
                                            className="block w-full text-left px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={handleLogOut}
                                        >
                                            Log Out
                                        </button>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <Link to={'/register'}>
                                        <button className="btn btn-xs btn-outline text-sky-900 font-bold text-xs">Register</button>
                                    </Link>
                                    <Link to='/login'>
                                        <button className="btn btn-xs btn-outline text-sky-900 text-xs font-bold">Log In</button>
                                    </Link>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className="text-md md:text-xl font-bold text-cyan-600">
                    <img src="https://i.ibb.co/4Y65KZj/logo-dark.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/need-volunteer"}>Need Volunteer</NavLink></li>
                    <li>
                        <details>
                            <summary>My Profile</summary>
                            <ul className="p-2 z-50">
                                {user && (
                                    <>
                                        <li><NavLink to={"/add-volunteer-post"}>Add Volunteer</NavLink></li>
                                        <li><NavLink to={"/manage-my-post"}>Manage My Post</NavLink></li>
                                    </>
                                )}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-2 hidden lg:flex mx-10">
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input onClick={handleToggle} type="checkbox" className="theme-controller" value="dark" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
                {user ? (
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0}><img className="rounded-full w-6 h-6" src={user?.photoURL || <FaUserTie />} alt="User Avatar" /></div>
                        <ul tabIndex={0} className="dropdown-content top-auto right-0 z-[4] menu p-2 shadow bg-base-100 rounded-box w-48">
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                {user?.displayName || 'User Name Not Found'}
                            </button>
                            <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={handleLogOut}
                            >
                                Log Out
                            </button>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link to={'/register'}>
                            <button className="btn btn-xs btn-outline text-sky-900 font-bold text-xs">Register</button>
                        </Link>
                        <Link to='/login'>
                            <button className="btn btn-xs btn-outline text-sky-900 text-xs font-bold">Log In</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
