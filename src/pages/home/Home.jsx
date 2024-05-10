import { useLoaderData } from "react-router-dom";
import SwipperSlider from "../../components/SwipperSlider";


const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div>
            <SwipperSlider></SwipperSlider>
        </div>
    );
};

export default Home;