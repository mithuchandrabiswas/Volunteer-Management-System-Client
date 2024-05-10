import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);

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
        } catch (error) {
            console.error("Error signing out:", error);
            toast.error("Error signing out");
        }
    };


    return (
        <div className="navbar">
            <ToastContainer />
            <div className="navbar-start">
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
                                    <div tabIndex={0}><img className="rounded-full w-8 h-8" src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"} alt="User Avatar" /></div>
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
                <Link to={"/"} className="text-md md:text-xl font-bold text-cyan-600">Artis<span className="text-amber-400">tic</span>
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
                                        <li><NavLink to={"/add-volunteer"}>Add Volunteer</NavLink></li>
                                        <li><NavLink to={"/manage-my-post"}>Manage My Post</NavLink></li>
                                    </>
                                )}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-2 hidden lg:flex">
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {user ? (
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0}><img className="rounded-full w-6 h-6" src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"} alt="User Avatar" /></div>
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
