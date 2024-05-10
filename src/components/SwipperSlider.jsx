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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div style={{ backgroundImage: "url('https://i.ibb.co/By6syTs/birmingham-museums-trust-w-Kl-Hsoo-RVbg-unsplash.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 rounded-lg bg-no-repeat bg-cover bg-center text-center'>
                    <h1 className='font-bold z-40 text-xl md:text-2xl text-white'>
                        Landscape Painting {''}
                        {/* <span className='text-[#F1C40F]'>
                            <Typewriter
                                words={[': Mountain view canvas', ':Forest based Landscape']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span> */}
                    </h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg'> Capture the beauty of nature with landscape painting. Explore techniques to depict serene scenes, dramatic vistas, and breathtaking landscapes on canvas.</p>
                    <button className="btn btn-sm btn-outline btn-info text-xs">More Details</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: "url('https://i.ibb.co/NF9bqx9/gustavo-leighton-z-A9o-Fa-Xl-AM4-unsplash.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 rounded-lg bg-no-repeat bg-cover bg-center text-center'>
                    <h1 className='font-bold z-40 text-xl md:text-2xl text-white'>
                        Watercolour Painting
                        {/* <span className='text-[#F1C40F]'>
                            <Typewriter
                                words={[': Pencil Sketch Portrait', ' :Ink Outline Portrait']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span> */}
                    </h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg'>Dive into the world of watercolor painting. Discover the magic of blending colors, mastering washes, and creating ethereal effects on paper with this versatile medium.</p>
                    <button className="btn btn-sm btn-outline btn-info text-xs">More Details</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: "url('https://i.ibb.co/rmS27Hw/reihaneh-naderi-BHOcoo6dr0-E-unsplash.jpg')" }} className='bg-blend-overlay bg-[#454c4ee2] p-16 md:p-24 rounded-lg bg-no-repeat bg-cover bg-center text-center'>
                    <h1 className='font-bold z-40 text-xl md:text-2xl text-white' >
                        Charcoal Sketching
                        {/* <span className='text-[#F1C40F]'>
                            <Typewriter
                                words={[': : Figure Charcoal Sketch', ' :Architectural Charcoal Drawing']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span> */}
                    </h1>
                    <p className='z-40 text-slate-300 text-xs sm:text-lg' >Unleash the power of charcoal with expert techniques and tips. Learn to create stunning, expressive sketches with depth and emotion</p>
                    <button className="btn btn-sm btn-outline btn-info text-xs">More Details</button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwipperSlider;