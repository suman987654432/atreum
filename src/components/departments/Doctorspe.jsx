
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
        <div className="w-full py-2 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="bg-[#D9D9D933] rounded-[40px] px-6 py-6 md:px-12 md:py-8 lg:py-0">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">

                        {/* Left Content Section */}
                        <div className="w-full lg:w-[45%] space-y-6 pl-0 lg:pl-12 py-4 lg:py-8 flex flex-col items-center lg:items-start text-center lg:text-left">

                            {/* 1. Doctor Carousel */}
                            <div className="flex items-center justify-center gap-4 w-full lg:w-max">
                                {/* Left Arrow */}
                                <button
                                    onClick={handlePrev}
                                    className="text-[#2a6b77] hover:text-[#0e4857] transition-colors p-1"
                                >
                                    <ChevronLeft size={24} strokeWidth={2.5} />
                                </button>


                                <div className="text-center min-w-[200px] md:min-w-[250px]">
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#19628D] mb-0.5">
                                        {currentDoctor.name}
                                    </h3>
                                    <p className="text-gray-900 text-sm md:text-base mb-1">
                                        {currentDoctor.specialty}
                                    </p>
                                    <p className="text-black font-semibold text-sm md:text-xl tracking-wide">
                                        {currentDoctor.timing}
                                    </p>
                                </div>


                                <button
                                    onClick={handleNext}
                                    className="text-[#2a6b77] hover:text-[#0e4857] transition-colors p-1"
                                >
                                    <ChevronRight size={24} strokeWidth={2.5} />
                                </button>
                            </div>


                            <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:ml-20">
                                <button className="bg-[#1EBAB3] hover:bg-[#189d97] text-white font-bold py-2.5 px-6 rounded shadow-md uppercase text-xs tracking-wider transition-all">
                                    Book an Appointment
                                </button>
                            </div>


                            <div className="mt-4 lg:mt-8 w-full">
                                <h2 className="text-2xl md:text-3xl font-serif text-[#19628D] mb-4">
                                    Orthopaedic <span className="italic font-serif font-bold">Specialists</span>
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xl mx-auto lg:mx-0">
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
                                className="w-full h-auto object-contain drop-shadow-2xl lg:scale-125 lg:origin-right lg:translate-x-8 lg:-mt-32"
                            />
                        </div>

                    </div>
                </div>
                <div className="w-full h-[2px] bg-black mt-16"></div>
            </div>
        </div>
    );
};

export default Doctorspe;