import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AddVolunteerPost = () => {
    const { user } = useAuthContext(); // custom hook
    const axiosCus = useAxiosSecure(); // custom hook
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();

    const organizer_photo = user?.photoURL;
    console.log(organizer_photo);


    const handleAddVolunteer = async (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const post_title = form.post_title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const total_volunteer_need = parseInt(form.total_volunteer_need.value);
        const deadline = startDate;
        const organizer_email = form.organizer_email.value;
        const organizer_name = form.organizer_name.value;
        const volunteerData = { thumbnail, post_title, description, category, location, total_volunteer_need, deadline, organizer_email, organizer_name, organizer_photo }
        // console.log(volunteerData);
        // console.table(volunteerData);

        try {
            const { data } = await axiosCus.post(`/volunteer`, volunteerData)
            console.log(data);
            toast.success("Volunteer post added successfully");
            navigate('/manage-my-post')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="my-4 p-1 rounded-md mt-16">
            <Helmet>
                <title>CareOX | Add Volunteer Post</title>
            </Helmet>
            <div className='py-2 md:py-4 space-y-1'>
                <h1 className='text-center text-lg md:text-2xl font-bold text-[#a95757]'>Add Volunteer</h1>
                <p className="text-xs md:text-md text-center w-full md:w-2/3 md:mx-auto text-[#8f8484]">If you're ready to make a difference and join our team, please send a resume and brief cover letter outlining your interest in the position to [contact email or phone number]. We look forward to hearing from you!</p>
            </div>
            <div className="card shrink-0 my-2 md:my-5 shadow-2xl bg-[#eddfdf31] w-full md:w-5/6 mx-auto">
                <form onSubmit={handleAddVolunteer} className="card-body p-4">
                    {/* row-1 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Thumbnail<span className="text-red-600">*</span></span>
                            </label>
                            <input type="text" name="thumbnail" placeholder="Thumbnail..." required className="input input-sm input-bordered placeholder:text-xs" />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Post Title<span className="text-red-600">*</span></span>
                            </label>
                            <input type="text" name="post_title" placeholder="Post title..." required className="input input-sm input-bordered placeholder:text-xs" />
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description<span className="text-red-600">*</span></span>
                            </label>
                            <textarea name="description" rows={2} cols={4} className="p-2 rounded-md placeholder:text-xs" placeholder="Description your post..." required></textarea>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category Name<span className="text-red-600">*</span></span>
                            </label>
                            <select name="category" id="category" className="px-2 py-1 rounded-md text-xs">
                                <option value="">Select your category</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Education">Education</option>
                                <option value="Social service">Social service</option>
                                <option value="Animal welfare">Animal welfare</option>
                            </select>
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location<span className="text-red-600">*</span></span>
                            </label>
                            <input type="text" name="location" placeholder="Location..." required className="input input-sm input-bordered placeholder:text-xs" />
                        </div>
                    </div>

                    {/* row-4 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">No. of volunteers needed<span className="text-red-600">*</span></span>
                            </label>
                            <input type="number" name="total_volunteer_need" placeholder="Volunteers need..." required className="input input-sm input-bordered placeholder:text-xs" />
                        </div>
                        <div className='form-control w-full md:w-1/2'>
                            <label className='text-gray-700 md:mt-3'>Deadline<span className="text-red-600">*</span></label>
                            <DatePicker
                                className='border p-2 rounded-md input-sm w-full'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                required
                            />
                        </div>
                    </div>

                    {/* row-5 */}
                    <div className="flex flex-col md:flex-row  gap-4">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Organizer Email</span>
                            </label>
                            <input type="email" name="organizer_email" defaultValue={user?.email} className="input input-sm input-bordered text-xs" disabled />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Organizer Name</span>
                            </label>
                            <input type="text" name="organizer_name" defaultValue={user?.displayName} className="input input-sm input-bordered text-xs" disabled />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-sm btn-primary">Add Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVolunteerPost;