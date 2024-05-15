import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuthContext from '../../hooks/useAuthContext';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const ManageMyPost = () => {
  const axiosCus = useAxiosSecure();
  const { user } = useAuthContext();
  // console.log(user.email);
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
  // console.log(volunteers);

  const handleVolunterPostDelete = async (id) => {
    // Show confirmation before delete
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosCus.delete(`/volunteer/${id}`);
          toast.success('Delete Successful');
          getVolunteerData(); // Refresh data after deletion
        } catch (error) {
          console.error("Error deleting post:", error);
          toast.error("Error deleting post. Please try again later.");
        }
      }
    });
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

  const handleVolunterRequestCancel = async (id) => {
    // Show confirmation before delete
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosCus.delete(`/request-volunteer-post-sData/${id}`);
          toast.success('Delete Successful');
          getVolunteerRequestData();
        } catch (error) {
          console.error("Error deleting post:", error);
          toast.error("Error deleting post. Please try again later.");
        }
      }
    })
  };

  // console.log(volunteersRequest);

  return (
    <div className='mt-16'>
      <section className='container px-4 mx-auto pt-12'>
        <Helmet>
          <title>CareOX | Manage My Post</title>
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
                            Location
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
                            <td title={volunteer.location} className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>{volunteer.location}</td>
                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                              <div className='flex items-center gap-x-6'>
                                <button onClick={() => handleVolunterPostDelete(volunteer._id)} className='btn btn-sm btn-outline btn-error'>
                                  Delete
                                </button>
                                <Link to={`/updateVolunteerPost/${volunteer._id}`} className='btn btn-sm btn-outline btn-info'>
                                  Update
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
                            Status
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
                            <td title={volunteerRequest.status} className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>{volunteerRequest.status}</td>
                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                              <div className='flex items-center gap-x-6'>
                                <button onClick={() => handleVolunterRequestCancel(volunteerRequest._id)} className='text-white font-bold focus:outline-none btn btn-error btn-xs'>
                                  Cancel
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
    </div>
  );
};

export default ManageMyPost;
