import { useEffect, useState } from 'react';
import NeedVolunteerCard from '../../components/needVolunteerPage/NeedVolunteerCard';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

const NeedVolunteer = () => {
  const axiosCus = useAxiosSecure();
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')
  const [volunteers, setVolunteers] = useState([]);
  const [displayFormat, setDisplayFormat] = useState('card');
  const { loading, setLoading } = useAuthContext()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axiosCus(`/volunteers?search=${searchText}&filter=${filter}&sort=${sort}`);
        setVolunteers(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false)
      }
    };
    fetchData();
  }, [searchText, axiosCus, filter, setLoading, sort]);

  if (loading) {
    return <p>Data loading......</p>
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await axiosCus(`/volunteers?search=${searchText}`);
    setVolunteers(data);
  };

  const handleReset = () => {
    setSearchText('');
    setFilter('');
    setSort('');
  };

  const handleDisplayChange = (format) => {
    setDisplayFormat(format);
  };

  return (
    <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between my-16'>
      <Helmet>
        <title>CareOX | Need Volunteer</title>
      </Helmet>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5'>

          <div>
            <select
              onChange={e => {
                setFilter(e.target.value)
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-2 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Social service">Social service</option>
              <option value="Animal welfare">Animal welfare</option>
            </select>
          </div>


          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent input-xs md:input-sm'
                type='text'
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button
                type='submit'
                className='btn btn-sm text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none  hidden md:block'>
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              onChange={e => {
                setSort(e.target.value)
              }}
              value={sort}
              name='sort'
              id='sort'
              className='border p-2 rounded-md'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button
            onClick={handleReset}
            className='btn btn-sm btn-outline'>
            Reset
          </button>
        </div>

        {/* // Table and Card View */}
        <div className='flex justify-center items-center gap-5 mt-4 p-2'>
          <button
            onClick={() => handleDisplayChange('card')}
            className={`btn btn-sm ${displayFormat === 'card' ? 'btn-primary' : 'btn-outline'}`}>
            Card View
          </button>
          <button
            onClick={() => handleDisplayChange('table')}
            className={`btn btn-sm ${displayFormat === 'table' ? 'btn-primary' : 'btn-outline'}`}>
            Table View
          </button>
        </div>
        <div className='mt-4'>
          <h1 className='text-sm md:text-lg font-bold text-center my-4 text-red-400'>Here is our all volunteer post</h1>
          {displayFormat === 'card' ? (
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {volunteers.map(volunteer => (
                <NeedVolunteerCard key={volunteer._id} volunteer={volunteer} />
              ))}
            </div>
          ) : (
            <div>
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
                                  <Link to={`/need-volunteer-details/${volunteer._id}`} className='text-gray-500 hover:text-yellow-500 focus:outline-none'>
                                    <button className='btn btn-xs btn-outline btn-info'>View Details</button>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteer;

