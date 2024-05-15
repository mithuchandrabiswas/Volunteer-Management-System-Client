import { useEffect, useState } from 'react';
// import { Fade } from 'react-awesome-reveal';
import VolunteerNeedSectionCard from './VolunteerNeedSectionCard';
import useAuthContext from '../../hooks/useAuthContext';
import { Link } from 'react-router-dom';

const VolunteerNeedSection = () => {
    const { loading, setLoading } = useAuthContext();
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_LOCAL_API_URL}/volunteers`)
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
        <div className='bg-[#9ba1ab2d] p-1 rounded-md container mx-auto my-10'>
            <div className='py-2 md:py-4 space-y-2'>

                <h1 className='text-center text-lg md:text-2xl font-bold text-[#101010]'>Volunteer Need Section</h1>
                <p className='text-xs md:text-sm text-[#8a8686] w-full md:w-3/4 mx-auto'>GreenThumb Community Gardens is seeking enthusiastic volunteers to assist with our community garden projects. As a Community Garden Assistant, you will have the opportunity to work alongside our dedicated team to maintain and cultivate our beautiful green spaces.</p>
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
            <div className='text-center mt-5'>
                <Link to={'need-volunteer'}><button className='btn btn-accent btn-sm w-full'>See all </button></Link>
            </div>
        </div>
    );
};

export default VolunteerNeedSection;
