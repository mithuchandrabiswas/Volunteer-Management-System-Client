import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Addjob = () => {
    const { user } = useAuthContext(); // custom hook
    const axiosCus = useAxiosSecure(); // custom hook
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()

    const handleJobSubmit = async (e) => {
        // if(email === user?.email) return alert("Sorry you are not bid. Because you are onwer of this bid")
        e.preventDefault();
        const form = e.target;
        // const jobId = _id;
        const job_title = form.job_title.value;
        const email = form.email.value;
        const job_category = form.category.value;
        const min_price = parseFloat(form.min_price.value);
        const max_price = parseFloat(form.max_price.value);
        // if(price < min_price) return alert("min price is to low... al least equal to min price Please check")
        const description = form.description.value;
        // const comment = form.comment.value;
        const user_email = form.userEmail?.value || '';
        // const status = "Pending";
        const deadline = startDate;
        const jobData = { job_title, email, deadline, job_category, min_price, max_price, description, user_email, buyer: {email, name: user?.displayName, photo: user?.photoURL } };
        console.table(jobData);
        try {
            const { data } = await axiosCus.post(`/job`, jobData)
            console.log(data);
            toast.success("Job post successfully");
            navigate('/mypostedjobs')
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Post a Job
                </h2>

                <form onSubmit={handleJobSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Job Title
                            </label>
                            <input
                                id='job_title'
                                name='job_title'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                defaultValue={user.email}
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>

                            {/* Date Picker Input Field */}
                            <DatePicker className="border p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                className='border p-2 rounded-md'
                            >
                                <option value='Web Development'>Web Development</option>
                                <option value='Web Design'>Web Design</option>
                                <option value='Graphics Design'>Graphics Design</option>
                                <option value='Digital Marketing'>Digital Marketing</option>
                            </select>
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='min_price'>
                                Minimum Price
                            </label>
                            <input
                                id='min_price'
                                name='min_price'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='max_price'>
                                Maximum Price
                            </label>
                            <input
                                id='max_price'
                                name='max_price'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Addjob;