import React, { useEffect, useState } from 'react';
import OurVolunteerTeamCard from './OurVolunteerTeamCard';

const OurVolunteerTeam = () => {
    const [volunteersTeam, setVolunteersTeam] = useState([]);
    useEffect(() => {
        fetch('/volunteerTeamData.json')
            .then(res => res.json())
            .then((data) => {
                setVolunteersTeam(data)
            })
    }, [])

    // console.log(volunteersTeam);
    return (
        <div className='container mx-auto'>
            <div className="flex items-center justify-center">
                <div className="h-5 w-1 bg-[#E74C3C]"></div>
                <h5 className="ml-2 text-blue-400">  Our Volunteer Team </h5>
            </div>
            <h1 className="text-sm md:text-lg font-bold text-[#121232] text-center">Meet The Team Member</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {
                volunteersTeam.map(volunteer => <OurVolunteerTeamCard key={volunteer.id} volunteer={volunteer}></OurVolunteerTeamCard>)
            }
            </div>
        </div>
    );
};

export default OurVolunteerTeam;