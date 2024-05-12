import {useEffect, useState } from 'react';
// import { Fade } from 'react-awesome-reveal';
import VolunteerNeedSectionCard from './VolunteerNeedSectionCard';
import useAuthContext from '../../hooks/useAuthContext';
import { Link } from 'react-router-dom';
// import useAxiosSecure from '../../hooks/useAxiosSecure';

const VolunteerNeedSection = () => {
    const { loading, setLoading } = useAuthContext();
    // const axiosCus = useAxiosSecure();
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://volunteer-management-server.vercel.app/volunteers')
            .then(res => res.json())
            .then((data) => {
                setLoadedData(data);
                setLoading(false); // Set loading state to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); 
            });
    }, [setLoading]); 

    const sliceMaxSixData = loadedData.slice(0, 6);

    return (
        <div className='bg-green-50 my-4 p-1 rounded-md'>
            <div className='py-2 md:py-4'>
                {/* <Fade> */}
                    <h1 className='text-center text-lg md:text-2xl font-bold text-[#101010]'>Volunteer Need Section</h1>
                {/* </Fade> */}
            </div>
            {loading ? (
                <div className="flex justify-center items-center gap-4">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {sliceMaxSixData.map(volunteer => (
                        <VolunteerNeedSectionCard key={volunteer._id} volunteer={volunteer} />
                    ))}
                </div>
            )}
            <div className='text-center'>
                <Link to={'need-volunteer'}><button className='btn btn-primary btn-sm'>See all </button></Link>
            </div>
        </div>
    );
};

export default VolunteerNeedSection;
