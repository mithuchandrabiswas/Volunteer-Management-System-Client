
import { Outlet } from 'react-router-dom';
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer"

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-466px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;