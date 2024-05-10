import axios from 'axios';
import useAuthContext from './useAuthContext';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_LOCAL_API_URL,
    withCredentials:true,
    
})

const useAxiosSecure = () => {
    const {logOutUser} = useAuthContext();
    const navigate = useNavigate();

    // Interceptor (response)
    axiosSecure.interceptors.response.use(res => {
        // console.log('Before comming response i checked it what he will got',res);
        return res
    }, 
    async err => {
        if(err.response.status === 401 || err.response.status === 403) {
            logOutUser();
            navigate('/login');
        }
        return Promise.reject(err);
    })


    return axiosSecure
};

export default useAxiosSecure;