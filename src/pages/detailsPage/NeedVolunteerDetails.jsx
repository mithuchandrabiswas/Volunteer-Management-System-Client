import { Helmet } from "react-helmet";
import { CiMail } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const NeedVolunteerDetails = () => {
    const volunteersData = useLoaderData();
    const { user } = useAuthContext();
    const { id } = useParams();
    // console.log(volunteersData);

    // find Method Use for achive singleCraft
    const volunteerData = volunteersData.find(item => item._id == id);
    const { thumbnail, post_title, description, category, location, total_volunteer_need, deadline, organizer_email, organizer_name } = volunteerData;
    // console.log(volunteerData);
    return (
        <div className="py-4 px-3 flex flex-col-reverse lg:flex-row justify-center items-center bg-[#10101034] rounded mt-20 border">
            <Helmet>
                <title>UnityVolunteer | Need Volunteer Details Page</title>
            </Helmet>

            <div className="px-1 w-full md:px-4 space-y-2 lg:w-1/2">
                <h3 className="text-[#111] font-bold text-xs lg:text-lg text-left">{category}</h3>
                <h1 className="text-sm md:text-lg font-bold text-[#5a7f81]">{post_title}</h1>
                <h3 className="text-xs lg:text-base font-bold">{description}</h3>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex items-center">
                        <IoTime className="text-red-600 mr-2" />
                        <p className="flex items-center gap-1 text-xs text-gray-600"> {new Date(deadline).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center">
                        <FaLocationDot className="text-[#E74C3C]" />
                        <p className="flex items-center gap-1 text-xs text-gray-600"> {location}</p>
                    </div>
                </div>
                <div className="flex items-center  flex-col md:flex-row gap-4 mb-1">
                    <img className="w-8 h-8 rounded-full flex ml-1" src={user?.photoURL} alt="" />
                    <div className="flex flex-col">
                        <div className="flex">
                            <FaRegUserCircle className="text-[#E74C3C]" />
                            <p className="text-xs font-bold ml-1">{organizer_name}</p>
                        </div>
                        <div className="flex">
                            <CiMail className="text-[#E74C3C]" />
                            <p className="text-[10px] ml-1"> {organizer_email}</p>
                        </div>
                    </div>
                </div>
                <div className='text-center w-full'>
                    <Link to={`/be-a-volunteer/${id}`}><button className='btn btn-primary btn-sm w-full'>Be a Volunteer</button></Link>
                </div>
            </div>
            <div className="relative w-full lg:w-1/2 mb-5 md:mb-0">
                <img className="rounded w-full h-[75vh]" src={thumbnail} alt="" />
                <span className="absolute top-0 right-2 text-red-500 text-xs rounded-md"> <span className="text-white">Remaining Post: </span>{total_volunteer_need}</span>
            </div>
        </div>
    );
};

export default NeedVolunteerDetails;