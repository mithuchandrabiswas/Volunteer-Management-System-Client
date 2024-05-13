import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoTime } from "react-icons/io5";

const VolunteerNeedSectionCard = ({ volunteer }) => {
    const { _id, thumbnail, post_title, description, category, location, total_volunteer_need, deadline, organizer_email, organizer_name } = volunteer || {};
    // console.log(volunteer);

    return (
        <div className="shadow-lg border bg-white hover:scale-105 transition">
            <img className="rounded w-full h-[50vh]" src={thumbnail} alt="" />
            <div className="py-4 px-2 text-left  rounded-md space-y-1">
                <h1 className="font-bold">{category}</h1>
                <h3 className="text-[#F1C40F] text-xs lg:text-md text-left">{post_title}</h3>
                <p className="flex items-center gap-1 text-xs text-gray-600">  <IoTime className="text-red-600" /> <span className="text-red-600">Deadline:</span> {new Date(deadline).toLocaleDateString()}</p>
            </div>
            <Link to={`/volunteer-need-section-details/${_id}`} className="btn btn-sm btn-secondary w-full">View Details</Link>
        </div>
    );
};

export default VolunteerNeedSectionCard;