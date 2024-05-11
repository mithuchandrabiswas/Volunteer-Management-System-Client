import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";

const VolunteerNeedSectionCard = ({ volunteer }) => {
    const { _id, thumbnail, post_title, description, category, location, total_volunteer_need, deadline, organizer_email, organizer_name  } = volunteer || {};
    // console.log(volunteer);

    return (
        <div className="shadow-sm space-y-1 py-4 px-2 border">
            <h1>{category}</h1>
            <div className="relative">
                <img className="rounded w-full h-[40vh]" src={thumbnail} alt="" />
                <span className="absolute top-1 right-2 text-red-500 bg-slate-50 px-2 rounded-md text-xs">{deadline}</span>
            </div>
            <div className="pl-2 pt-1 text-left  rounded-md space-y-2">
                <button className="text-red-600 text-xs lg:text-lg text-left">{post_title}</button>
                <div className="flex justify-between">
                    <p className="flex items-center gap-1 text-xs text-gray-600">  <AiFillLike /> {description}</p>
                    <p className="flex items-center gap-1 text-xs text-gray-600"><MdOutlinePriceChange />{total_volunteer_need}</p>
                </div>
            </div>
            <Link to={`/volunteer-need-section-details/${_id}`} className="btn btn-sm btn-secondary w-full">View Details</Link>
        </div>
    );
};

export default VolunteerNeedSectionCard;