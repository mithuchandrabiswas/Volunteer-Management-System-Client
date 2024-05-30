import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, googleLogIn, githubLogIn, user, loading } = useAuthContext();
  const axiosCus = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();

  // for login user redirect to home page
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [navigate, user])

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogIn = async (dataOne) => {
    try {
      const result = await signInUser(dataOne.email, dataOne.password);
      console.log(result);
      const { data } = await axiosCus.post(`/jwt`, { email: result?.user?.email })
      // console.log("token", data);
      toast.success("User sign in successfully");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.log(error);
      toast.error("Sign In Failed");
    }
  }

  // Google Sign In
  const handleGoogleLogIn = async () => {
    try {
      const result = await googleLogIn();
      console.log(result);
      const { data } = await axiosCus.post(`/jwt`, { email: result?.user?.email })
      console.log("token", data);
      toast.success("User sign in by Google");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.log(error);
      toast.error("Google Sign In Failed:", error);
    }
  }

  // Github Sign In
  const handleGithubLogIn = async () => {
    try {
      const result = await githubLogIn();
      console.log(result);
      const { data } = await axiosCus.post(`/jwt`, { email: result?.user?.email })
      // console.log("token", data);
      toast.success("User sign in by github");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.log(error);
      toast.error("GitHub Sign In Failed:", error);
    }
  }

  if (user || loading) return

  return (
    <div className="flex justify-center items-center flex-col md:flex-row gap-5 bg-cover my-16">
      <Helmet>
        <title>CareOX | Login</title>
      </Helmet>
      <div className="shrink-0 w-full max-w-sm shadow-2xl rounded-md my-3 md:my-5 border sm:bg-[#707171]">
        <form onSubmit={handleSubmit(handleLogIn)} className="card-body p-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input {...register("email", { required: true })} type="email" placeholder="Input your email..." className="input input-sm input-bordered" />
            {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} placeholder="type your password..." className="input input-sm input-bordered" />
            <span className="absolute top-3/4 right-2 transform -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <span className="text-red-500 text-xs">This field is required</span>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-sm btn-outline">Log In</button>
          </div>
          <div className="form-control mx-auto">
            <label className="label">
              <span className="label-text text-white">Don’t have an account? Please <Link className="text-red-600 font-medium" to={"/register"}>Register</Link></span>
            </label>
          </div>
          <hr />
          <h1 className="text-center text-sky-400 font-semibold"> Sign In With: </h1>
        </form>
        <div className="flex flex-col md:flex-row gap-2 justify-center mb-2 p-1">
          <button onClick={handleGoogleLogIn} className="btn btn-sm btn-outline md:text-white"> <FaGoogle /> Google </button>
          <button onClick={handleGithubLogIn} className="btn btn-sm btn-outline md:text-white"> <FaGithub /> Github </button>
        </div>
      </div>
    </div>
  )
}

export default LogIn;
