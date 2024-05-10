import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { user, setUser, createUser, updateUserProfile, logOutUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const formRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleRegister = (data) => {
        const { email, password, fullName, photoUrl } = data;

        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            toast.error("Please provide a valid password.");
            return;
        }

        createUser(email, password)
            .then(() => {
                toast.success("User registered successfully");
            })
            .then((userCredencial) => {
                updateUserProfile(fullName, photoUrl)
                    .then(() => {
                        logOutUser()
                            .then(() => {
                                toast.success("User logout successfully");
                                navigate("/login");
                            })
                        navigate(location?.state ? location.state : "/");
                        formRef.current.reset();
                    })
                    .catch((error) => {
                        console.log(error);
                        toast.error("Error updating user profile");
                    });
                console.log(userCredencial);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message);
            });
    }

    return (
        <div className="flex justify-center items-center flex-col md:flex-row gap-5 bg-cover">
            {/* <Helmet>
                <title>HospitalityHub | Register </title>
            </Helmet> */}
            <div>
                <img src="https://i.ibb.co/sgJ9Fpz/login.jpg" alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm my-2 md:my-5 shadow-2xl bg-[#71707080]">
                <ToastContainer />
                <form ref={formRef} onSubmit={handleSubmit(handleRegister)} className="card-body p-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input {...register("fullName", { required: true })} type="text" placeholder="Type your full name" className="input input-sm input-bordered" />
                        {errors.fullName && <span className="text-red-500 text-xs">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label py-1">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input {...register("photoUrl", { required: true })} type="text" placeholder="Photo Url provide here...." className="input input-sm input-bordered" />
                        {errors.photoUrl && <span className="text-red-500  text-xs">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label py-1">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", { required: true })} type="email" placeholder="Input your email..." className="input input-sm input-bordered" />
                        {errors.email && <span className="text-red-500  text-xs">This field is required</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label py-1">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} placeholder="type your password..." className="input input-sm input-bordered" />
                        <span className="absolute top-2/3 right-2" onClick={() => setShowPassword(!showPassword)}> {
                            showPassword ? <FaEye /> : <FaEyeSlash />
                        } </span>
                        {errors.password && <span className="text-red-500  text-xs">This field is required.</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="form-control mx-auto">
                        <label className="label py-1">
                            <span className="label-text text-white">Already have an account ? <Link className="text-red-600 font-medium" to={"/login"}>Log In</Link></span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;