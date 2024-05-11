import { AiFillLike } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdEmail, MdOutlinePriceChange } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

const VolunteerNeedSectionDetails = () => {
    const volunteersData = useLoaderData();
    const { id } = useParams();
    // console.log(volunteersData);

    // find Method Use for achive singleCraft
    const volunteerData = volunteersData.find(item => item._id == id);
    const { _id, thumbnail, post_title, description, category, location, total_volunteer_need, deadline, organizer_email, organizer_name   } =volunteerData;
    // console.log(volunteerData);
    return (
        <div className="py-4 px-3 flex flex-col md:flex-row bg-red-50 rounded">
            <div className="relative md:w-1/2 mb-5 md:mb-0">
                <img className="rounded w-full h-full" src={thumbnail} alt="" />
                <span className="absolute top-0 right-2 text-red-600 text-xs rounded-md">{total_volunteer_need}</span>
            </div>
            <div className="px-1 md:px-4 space-y-2 md:w-1/2">
                <span className="bg-blue-200 px-2 py-1 rounded-lg text-[#111] font-bold text-xs lg:text-lg text-left">{category}</span>
                <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-y-2">
                    <div className="flex justify-between  gap-1">
                        <FaRegUserCircle />
                        <p className="flex items-center gap-1 text-xs text-gray-600">  {organizer_name}</p>
                    </div>
                    <div className="flex justify-between gap-1">
                        <MdEmail />
                        <p className="flex items-center gap-1 text-xs text-gray-600">{organizer_email}</p>
                    </div>
                </div>
                <h3 className="text-sm md:text-md font-bold text-[#5a7f81]">{post_title}</h3>
                <h3 className="text-xs lg:text-base font-bold">{description}</h3>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1 text-xs text-gray-600">  <AiFillLike /> {deadline}</p>
                    <p className="flex items-center gap-1 text-xs text-gray-600"><MdOutlinePriceChange />${location}</p>
                </div>
            </div>
        </div>
    );
};

export default VolunteerNeedSectionDetails;