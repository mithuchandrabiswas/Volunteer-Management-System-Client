import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { Typewriter } from 'react-simple-typewriter';

const SwipperSlider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={500}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className='my-20'>
                <div style={{ backgroundImage: "url('https://i.ibb.co/jZGLJw2/premium-photo-1663039947303-0fad26f737b8.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 bg-no-repeat bg-cover bg-center text-center'>
                    <h1 className='font-bold z-40 text-xl md:text-2xl text-white'>
                        Environmental Conservation
                    </h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg'> Volunteering in this category could involve activities like tree planting, beach clean-ups, wildlife monitoring, or participating in habitat restoration projects.</p>
                    <button className="btn btn-sm btn-outline btn-info text-xs">More Details</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='my-20'>
                <div style={{ backgroundImage: "url('https://i.ibb.co/W2mYWMb/larm-rmah-AEa-TUnvneik-unsplash.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 bg-no-repeat bg-cover bg-center text-center'>
                    <h1 className='font-bold z-40 text-xl md:text-2xl text-white'>
                        Education and Literacy
                    </h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg'>You could volunteer to tutor children or adults in subjects like reading, writing, math, or English as a second language.</p>
                    <button className="btn btn-sm btn-outline btn-info text-xs">More Details</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='my-20'>
                <div style={{ backgroundImage: "url('https://i.ibb.co/CbxGTMv/roman-synkevych-5w-J2-Gi-YSif-A-unsplash.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 bg-no-repeat bg-cover bg-center text-center'>
                    <h1 className='font-bold z-40 text-xl md:text-2xl text-white' >
                        Fundraising
                    </h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg' >Sarah is passionate about fundraising for important causes. She organizes campaigns and events to raise funds for our projects.</p>
                    <button className="btn btn-sm btn-outline btn-info text-xs">More Details</button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwipperSlider;