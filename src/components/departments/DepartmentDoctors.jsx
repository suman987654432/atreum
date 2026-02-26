import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import doctorsImg from "../../images/doctors1.png";

const DepartmentDoctors = ({ doctors, title, subtitle, description }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!doctors || doctors.length === 0) return null;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
    };

    const currentDoctor = doctors[currentIndex];

    return (
        <div id="doctor-specialists" className="w-full pt-0 pb-10 overflow-hidden relative z-30">
            <div className="px-4 w-full max-w-[1800px] mx-auto">
                <div className="bg-[#D9D9D933] rounded-[12px] sm:rounded-[16px] md:rounded-[22px] px-6 py-4 md:px-12 md:py-6 lg:py-0 ">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">

                        <div className="w-full lg:w-[45%] space-y-12 pl-0 lg:pl-4 py-2 lg:py-4 flex flex-col items-center lg:items-start text-center lg:text-left">

                            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
                                <div className="flex items-center justify-center gap-4 w-full lg:w-max">
                                    <button onClick={handlePrev} className="text-[#2a6b77] hover:text-[#0e4857] p-1">
                                        <ChevronLeft size={24} strokeWidth={2.5} />
                                    </button>

                                    <div className="min-w-[200px] md:min-w-[250px]">
                                        <h3 className="font-canela font-normal text-[31px] leading-[100%] text-[#19628D] mb-0.5">
                                            {currentDoctor.name.split(' ')[0]} <span className="font-canela font-bold text-[31px] leading-[100%]">{currentDoctor.name.split(' ').slice(1).join(' ')}</span>
                                        </h3>
                                        <p className="text-gray-900 text-sm md:text-base">{Array.isArray(currentDoctor.specialties) ? currentDoctor.specialties.join(' | ') : currentDoctor.specialty}</p>
                                        <p className="text-black font-semibold text-sm md:text-xl tracking-wide">{currentDoctor.schedule || currentDoctor.timing}</p>
                                    </div>

                                    <button onClick={handleNext} className="text-[#2a6b77] hover:text-[#0e4857] p-1">
                                        <ChevronRight size={24} strokeWidth={2.5} />
                                    </button>
                                </div>
                                <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:ml-12">
                                    <a href="tel:9606970542" className="bg-[#1EBAB3] hover:bg-[#189d97] !text-white font-sohne font-semibold text-[16px] leading-[40px] py-0 px-3 rounded shadow-md uppercase transition-all inline-block text-center">
                                        Book an Appointment
                                    </a>
                                </div>
                            </div>

                            <div className="w-full">
                                <h2 className="text-[#19628D] mb-4">
                                    <span className="font-canela font-light text-[31px] leading-[100%]">{title} </span>
                                    <span className="font-canela font-black text-[31px] leading-[100%] italic">{subtitle}</span>
                                </h2>
                                <p className="text-gray-700 font-sohne font-normal text-[16px] leading-[20px] max-w-md mx-auto lg:mx-0">
                                    {description}
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                            <img src={doctorsImg} alt="Doctor" className="w-full h-auto object-contain lg:scale-125 lg:origin-right lg:translate-x-16 lg:-mt-40" />
                        </div>

                    </div>
                </div>
            </div>
            {/* Horizontal Line */}
            <div className="w-full max-w-[1800px] mx-auto px-4 mt-5 mb-10 md:mb-3">
                <div className="h-[1px] bg-black w-full"></div>
            </div>
        </div>
    );
};

export default DepartmentDoctors;
