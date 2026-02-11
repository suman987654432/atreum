import React from 'react'
import doctor from "../../images/doctor.png"

const Specialist = () => {
    return (
        <div className="w-full bg-[#EDF8FF]  py-8 md:py-12 px-4 md:px-8">
            <div className="container mx-auto">
                {/* Main White Card */}
                <div className=" rounded-[30px] p-6 md:p-8  flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

                    {/* Left Side: Information */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[#18628D] text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl  mb-6 font-oswald whitespace-nowrap">
                            what is Orthopaedics & Joint Replacement?
                        </h2>
                        <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 text-justify">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Amet porttitor eget dolor morbi non arcu risus quis varius. Aliquam etiam erat velit scelerisque in.
                            </p>
                            <p>
                                fermentum posuere urna nec tincidunt praesent semper feugiat. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Morbi tristique senectus et.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Specialist Card */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-[#18628D] rounded-[24px] p-6 md:p-8 relative overflow-hidden">
                            <h3 className="text-white text-lg font-medium mb-4 relative z-10 font-oswald">Meet Our Specialist</h3>

                            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 relative z-10">
                                {/* Doctor Image */}
                                <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
                                    <img
                                        src={doctor}
                                        alt="Dr. Mohith Shenoy"
                                        className="h-64 object-contain object-bottom -mb-8 sm:-mb-8 filter drop-shadow-lg"
                                    />
                                </div>

                                {/* Doctor Details */}
                                <div className="w-full sm:w-1/2 text-white pb-4">
                                    <h4 className="text-2xl font-bold mb-1">Dr. Mohith Shenoy</h4>
                                    <p className="text-blue-100 text-sm mb-6">Orthopaedics | Surgeon</p>

                                    <div className="flex items-center gap-2 mb-6 text-sm text-blue-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Mon-Fri : 9:00 AM - 5:00 PM</span>
                                    </div>

                                    <button className="bg-white text-[#18628D] px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-gray-100 transition-colors uppercase">
                                        Talk Now
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Specialist