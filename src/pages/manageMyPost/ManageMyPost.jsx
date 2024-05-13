import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuthContext from '../../hooks/useAuthContext';
import { Helmet } from 'react-helmet';

const ManageMyPost = () => {
  const axiosCus = useAxiosSecure();
  const { user } = useAuthContext();
  console.log(user.email);
  const [volunteers, setVolunteers] = useState([]);
  const [volunteersRequest, setVolunteersRequest] = useState([]);


  // ====> For Volunteer Post: Start
  useEffect(() => {
    if (user) {
      getVolunteerData();
    }
  }, [user]);

  const getVolunteerData = async () => {
    try {
      const { data } = await axiosCus(`/volunteers/${user?.email}`);
      // console.log(data);
      setVolunteers(data);
    } catch (error) {
      // console.error("Error fetching data:", error);
      toast.error("Error fetching data. Please try again later.");
    }
  };

  const handleVolunterPostDelete = async (id) => {
    try {
      await axiosCus.delete(`/volunteer/${id}`);
      toast.success('Delete Successful');
      getVolunteerData(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Error deleting post. Please try again later.");
    }
  };
  // ====> For Volunteer Post: End

  // ====> For Volunteer Request: Start
  useEffect(() => {
    if (user) {
      getVolunteerRequestData();
    }
  }, [user]);

  const getVolunteerRequestData = async () => {
    try {
      const { data } = await axiosCus(`/request-volunteer-post-allData/${user?.email}`);
      // console.log(data);
      setVolunteersRequest(data);
    } catch (error) {
      // console.error("Error fetching data:", error);
      toast.error("Error fetching data. Please try again later.");
    }
  };

  const handleVolunterRequestDelete = async (id) => {
    try {
      await axiosCus.delete(`/request-volunteer-post-sData/${id}`);
      toast.success('Delete Successful');
      getVolunteerRequestData(); 
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Error deleting post. Please try again later.");
    }
  };


  return (
    <>
      <section className='container px-4 mx-auto pt-12'>
        <Helmet>
          <title>UnityVolunteer | Manage My Post</title>
        </Helmet>
        <div className='flex items-center gap-x-3 justify-center'>
          <h2 className='text-lg font-medium text-gray-800'>My Volunteers Post</h2>
          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            {volunteers.length} Post
          </span>
        </div>

        {
          volunteers.length === 0 ?
            <h1>Please add some volunteer post.</h1>
            :
            <div className='flex flex-col mt-6'>
              <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                  <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                    <table className='min-w-full divide-y divide-gray-200'>
                      <thead className='bg-gray-50'>
                        <tr>
                          <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Post Title
                          </th>
                          <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Deadline
                          </th>
                          <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Category
                          </th>
                          <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Description
                          </th>
                          <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className='bg-white divide-y divide-gray-200 '>
                        {volunteers.map(volunteer => (
                          <tr key={volunteer._id}>
                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>{volunteer.post_title}</td>
                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>{new Date(volunteer.deadline).toLocaleDateString()}</td>
                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                              <div className={`flex items-center gap-x-2 px-3 py-1 text-xs text-white rounded-full ${volunteer.category === 'Healthcare' ? 'bg-blue-500' : volunteer.category === 'Education' ? 'bg-emerald-500' : 'bg-pink-500'}`}>
                                {volunteer.category}
                              </div>
                            </td>
                            <td title={volunteer.description} className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>{volunteer.description}</td>
                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                              <div className='flex items-center gap-x-6'>
                                <button onClick={() => handleVolunterPostDelete(volunteer._id)} className='text-gray-500 hover:text-red-500 focus:outline-none'>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                                  </svg>
                                </button>
                                <Link to={`/updateVolunteerPost/${volunteer._id}`} className='text-gray-500 hover:text-yellow-500 focus:outline-none'>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                                  </svg>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        }
      </section>

      {/* // =====> Volunteer Request Post <====== */}
      <section className='container px-4 mx-auto pt-12'>
        <div className='flex items-center gap-x-3 justify-center'>
          <h2 className='text-lg font-medium text-gray-800'>My Volunteers Request Post</h2>
          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            {volunteersRequest.length} Post
          </span>
        </div>

        {
          volunteersRequest.length === 0 ?
            <h1>Please add some volunteer request.</h1>
            :
            <div className='flex flex-col mt-6'>
              <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                  <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                    <table className='min-w-full divide-y divide-gray-200'>
                      <thead className='bg-gray-50'>
                        <tr>
                          <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Post Title
                          </th>
                          <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Deadline
                          </th>
                          <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Category
                          </th>
                          <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Description
                          </th>
                          <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className='bg-white divide-y divide-gray-200 '>
                        {volunteersRequest.map(volunteerRequest => (
                          <tr key={volunteerRequest._id}>
                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>{volunteerRequest.post_title}</td>
                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>{new Date(volunteerRequest.deadline).toLocaleDateString()}</td>
                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                              <div className={`flex items-center gap-x-2 px-3 py-1 text-xs text-white rounded-full ${volunteerRequest.category === 'Healthcare' ? 'bg-blue-500' : volunteerRequest.category === 'Education' ? 'bg-emerald-500' : 'bg-pink-500'}`}>
                                {volunteerRequest.category}
                              </div>
                            </td>
                            <td title={volunteerRequest.description} className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>{volunteerRequest.description}</td>
                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                              <div className='flex items-center gap-x-6'>
                                <button onClick={() => handleVolunterRequestDelete(volunteerRequest._id)} className='text-gray-500 hover:text-red-500 focus:outline-none'>
                                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        }
      </section>
    </>
  );
};

export default ManageMyPost;
