
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import doctors1 from "../../images/doctors1.png";

const doctors = [
    {
        id: 1,
        name: "Dr. Pranav S",
        specialty: "Pediatrics | Neonatal Care",
        timing: "Mon - Fri \u00A0 9:00AM to 5:00PM"
    },
    {
        id: 2,
        name: "Dr. Sarah Johnson",
        specialty: "Orthopedic Surgeon | Sports Medicine",
        timing: "Mon - Sat \u00A0 10:00AM to 6:00PM"
    },
    {
        id: 3,
        name: "Dr. Michael Chen",
        specialty: "Joint Replacement Specialist",
        timing: "Tue - Sun \u00A0 8:00AM to 4:00PM"
    }
];

const Doctorspe = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
    };

    const currentDoctor = doctors[currentIndex];

    return (
        <div id="doctor-specialists" className="w-full -mt-8 py-1 overflow-hidden relative z-30">
            <div className="px-4 w-full max-w-[1800px] mx-auto">
                <div className="bg-[#D9D9D933] rounded-[40px] px-6 py-4 md:px-12 md:py-6 lg:py-0 ">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">

                        {/* Left Content Section */}
                        <div className="w-full lg:w-[45%] space-y-12 pl-0 lg:pl-4 py-2 lg:py-4 flex flex-col items-center lg:items-start text-center lg:text-left">

                            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
                                {/* 1. Doctor Carousel */}
                                <div className="flex items-center justify-center gap-4 w-full lg:w-max">
                                    {/* Left Arrow */}
                                    <button
                                        onClick={handlePrev}
                                        className="text-[#2a6b77] hover:text-[#0e4857] transition-colors p-1"
                                    >
                                        <ChevronLeft size={24} strokeWidth={2.5} />
                                    </button>


                                    <div className="min-w-[200px] md:min-w-[250px]">
                                        <h3 className="font-canela font-normal text-[31px] leading-[100%] tracking-normal text-[#19628D] mb-0.5">
                                            {currentDoctor.name.split(' ')[0]} <span className="font-canela font-bold text-[31px] leading-[100%] tracking-normal">{currentDoctor.name.split(' ').slice(1).join(' ')}</span> </h3>
                                        <p className="text-gray-900 text-[23px] text-sm md:text-base "> {currentDoctor.specialty} </p>
                                        <p className="text-black font-semibold text-sm md:text-xl tracking-wide"> {currentDoctor.timing} </p>
                                    </div>


                                    <button
                                        onClick={handleNext}
                                        className="text-[#2a6b77] hover:text-[#0e4857] transition-colors p-1"
                                    >
                                        <ChevronRight size={24} strokeWidth={2.5} />
                                    </button>
                                </div>
                                <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:ml-12"> <button className="bg-[#1EBAB3] hover:bg-[#189d97] text-white font-sohne font-semibold text-[16px] leading-[40px] tracking-normal py-0 px-3 rounded shadow-md uppercase transition-all"> Book an Appointment </button> </div>
                            </div>

                            <div className="w-full">
                                <h2 className="text-[#19628D] mb-4">
                                    <span className="font-canela font-light text-[31px] leading-[100%] tracking-normal">Orthopaedic </span>
                                    <span className="font-canela font-black text-[31px] leading-[100%] tracking-normal italic">Specialists</span>
                                </h2>
                                <p className="text-gray-700 font-sohne font-normal text-[16px] leading-[20px] tracking-normal max-w-md mx-auto lg:mx-0">
                                    The Orthopaedic Specialists at Atreum Hospitals represent a multi-disciplinary team
                                    of experienced consultants, each focused on a specific area of musculoskeletal care.
                                    Working within a unified clinical framework, they combine specialised expertise with
                                    collaborative decision-making to deliver precise, patient-centred treatment.
                                </p>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                            <img
                                src={doctors1}
                                alt="Doctor's Desk"
                                className="w-full h-auto object-contain  lg:scale-125 lg:origin-right lg:translate-x-16 lg:-mt-40"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Doctorspe;