import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabsCategories = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios(`${import.meta.env.VITE_LOCAL_API_URL}/jobs`);
            console.log("Fetched data:", data); // Log fetched data
            setJobs(data);
        }
        getData();
    } ,[])
    return (
        <Tabs>
            <h1>Total Job Post: {jobs.length}</h1>
            <div className='container px-6 py-10 mx-auto'>
                <div className='flex justify-center items-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Web Design</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs?.filter(sJob => sJob.job_category === 'Web Development').map(job => (
                                <JobCard key={job._id} job={job}></JobCard>
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs?.filter(sJob => sJob.job_category === 'Web Design').map(job => (
                                <JobCard key={job._id} job={job}></JobCard>
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs?.filter(sJob => sJob.job_category === 'Graphics Design').map(job => (
                                <JobCard key={job._id} job={job}></JobCard>
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs?.filter(sJob => sJob.job_category === 'Digital Marketing').map(job => (
                                <JobCard key={job._id} job={job}></JobCard>
                            ))
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabsCategories;