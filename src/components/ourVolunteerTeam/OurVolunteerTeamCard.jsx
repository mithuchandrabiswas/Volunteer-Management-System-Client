import { MdEmail } from "react-icons/md";


const OurVolunteerTeamCard = ({ volunteer }) => {
    const { name, position, email, image } = volunteer || {}
    return (
        <div className="shadow border">
            <div>
                <img src={image} className="rounded-sm" alt="" />
            </div>
            <div className="p-2">
                <h4>{name}</h4>
                <h4>{position}</h4>
                <div>
                    <h1 className="text-info">Contact Info</h1>
                    <div className="flex items-center gap-2 text-xs">
                        <MdEmail className="text-[#E74C3C]"/><span>{email}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurVolunteerTeamCard;