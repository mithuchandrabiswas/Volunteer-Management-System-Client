import { Helmet } from "react-helmet";
import SwipperSlider from "../../components/swiper/SwipperSlider";
import VolunteerNeedSection from "../../components/volunteerNeedSection/VolunteerNeedSection";
import AboutUs from "../../components/aboutUs/AboutUs";
import OurVolunteerTeam from "../../components/ourVolunteerTeam/OurVolunteerTeam";
import useAuthContext from "../../hooks/useAuthContext";


const Home = () => {
    const {user, loading} = useAuthContext();
    if(loading) {
        // return <p>loading........</p>
    }
    return (
        <div>
            <Helmet>
                <title>CareOX | Home</title>
            </Helmet>
            <SwipperSlider></SwipperSlider>
            <VolunteerNeedSection></VolunteerNeedSection>
            <OurVolunteerTeam></OurVolunteerTeam>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;