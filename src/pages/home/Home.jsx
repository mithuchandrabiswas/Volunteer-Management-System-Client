import { Helmet } from "react-helmet";
import SwipperSlider from "../../components/SwipperSlider";
import VolunteerNeedSection from "../../components/volunteerNeedSection/VolunteerNeedSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>UnityVolunteer | Home</title>
            </Helmet>
            <SwipperSlider></SwipperSlider>
            <VolunteerNeedSection></VolunteerNeedSection>
        </div>
    );
};

export default Home;