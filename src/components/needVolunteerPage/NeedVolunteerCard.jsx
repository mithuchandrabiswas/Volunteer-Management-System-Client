import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { CiMail } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const NeedVolunteerCard = ({ volunteer }) => {
  const { user } = useAuthContext();
  // console.log(user);
  const { _id, thumbnail, post_title, category, deadline, organizer_email, organizer_name, organizer_photo } = volunteer || {};
  return (

    <div className="shadow-lg border bg-white hover:scale-105 transition">
      <img className="rounded w-full h-[50vh]" src={thumbnail} alt="" />
      <div className="py-4 px-2 text-left  rounded-md space-y-1">
        <h1 className="font-bold">{category}</h1>
        <h3 className="text-[#F1C40F] text-xs lg:text-md text-left">{post_title}</h3>
        <p className="flex items-center gap-1 text-xs text-gray-600">  <IoTime className="text-red-600" /> <span className="text-red-600">Deadline:</span> {new Date(deadline).toLocaleDateString()}</p>
      </div>
      <div className="flex items-center flex-col md:flex-row gap-2 mb-1">
        <img className="w-8 h-8 rounded-full flex ml-1" src={organizer_photo} alt="" />
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
      <Link to={`/need-volunteer-details/${_id}`} className="btn btn-sm btn-secondary w-full">View Details</Link>
    </div>
  )
}

export default NeedVolunteerCard;
