

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 container mx-auto my-10">
            <div className="w-full md:w-2/5 relative">
                <img className="hover:scale-110 transition" src="https://i.ibb.co/2YDHpCy/about-1-1.jpg" alt="" />
                <img className="absolute top-1/2 left-1/2 w-1/2 hover:scale-110 transition border-8 border-white" src="https://i.ibb.co/vzQ1m6n/about-1-2.jpg" alt="" />
            </div>
            <div className="w-full md:w-3/5 space-y-2 p-2">
                <div className="flex items-center">
                    <div className="h-5 w-1 bg-[#E74C3C]"></div>
                    <h5 className="ml-2 text-blue-400">  About Us </h5>
                </div>
                <h1 className="text-sm md:text-lg font-bold text-[#121232]">We Believe This Lifes About Give For Poor People.</h1>
                <p className="text-xs md:text-sm text-[#6a6868]">Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.</p>
                <h2 className="text-sm md:text-md text-[#F1C40F] font-extrabold">What We Do</h2>
                <ul>
                    <li><strong>Volunteer Opportunities:</strong> We offer a variety of volunteer opportunities, ranging from local community service projects to international outreach programs.</li>
                    <li><strong>Community Building:</strong> Building a strong, supportive community is at the core of what we do. </li>
                </ul>

                <h2 className="text-sm md:text-md text-[#F1C40F] font-extrabold">Our Values</h2>
                <ul>
                    <li><strong>Empowerment:</strong> We believe in empowering individuals to create positive change in their own communities.</li>
                    <li><strong>Inclusivity:</strong> We embrace diversity and strive to create an inclusive environment where everyone feels welcome and valued.</li>
                </ul>
                <div>
                    <button className="btn btn-info btn-sm">About More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;