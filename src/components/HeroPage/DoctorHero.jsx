
import React, { useState } from 'react';
import doctorData from '../../data/doctors.json';
import Doctor1 from "../../images/doctor/Doctor1.png";

const departments = [
    "Orthopaedics", "Urology", "Plastic Surgery", "Gynaecology", "Pediatrics",
    "Critical Care", "Neurology", "Nephrology", "Endocrinology", "General Surgery",
    "Oncology", "Vascular Surgery", "ENT", "Dermatology", "Gastroenterology"
];

const DoctorHero = () => {
    const [selectedDept, setSelectedDept] = useState("View All");

    // Filter logic
    const filteredDoctors = selectedDept === "View All"
        ? doctorData
        : doctorData.filter(doctor => doctor.department === selectedDept);

    return (
        <section id="our-doctors" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
            <div className="max-w-[1720px] mx-auto">
                {/* Header and Filter Controls */}
                <div className="flex flex-col xl:flex-row justify-between items-start gap-8 md:gap-12 mb-10">
                                        <div className="flex-shrink-0 ml-2  lg:ml-20">
                        <h2 className="font-canela  text-[2.3125rem] leading-[2.3125rem] tracking-normal text-[#19628D]">
                          <span className='font-canela bold italic'>Our</span>   <span>Doctors</span>
                        </h2>
                    </div>

                    {/* Department Filter Buttons */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 xl:justify-start lg:max-w-[1000px]">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDept(dept)}
                                className={`px-3 py-1 rounded-[8px] border text-[14px] font-sohne font-medium transition-all duration-300 whitespace-nowrap ${selectedDept === dept
                                        ? 'bg-[#19628D] text-white border-[#19628D]'
                                        : 'bg-white text-[#19628D] border-[#19628D] hover:bg-[#19628D] hover:text-white'
                                    }`}
                            >
                                {dept}
                            </button>
                        ))}
                        <button
                            onClick={() => setSelectedDept("View All")}
                            className={`text-[15px] font-bold font-sohne transition-colors ml-0 sm:ml-2 lg:ml-4 whitespace-nowrap cursor-pointer ${selectedDept === "View All" ? 'text-[#19628D]' : 'text-[#878787] hover:text-[#19628D]'
                                }`}
                        >
                            View All
                        </button>
                    </div>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 xl:gap-8 max-w-[1400px] mx-auto">
                    {filteredDoctors.length > 0 ? (
                        filteredDoctors.map((doctor) => (
                            <div
                                key={doctor.id}
                                className="bg-[#D9D9D933] rounded-[18px] overflow-hidden flex flex-col relative h-[300px] sm:h-[320px] md:h-[340px] max-w-[681px] w-full mx-auto"
                            >
                                {/* Content Wrapper */}
                                <div className="p-5 sm:p-8 md:p-10 relative h-full flex flex-col">
                                    {/* Text Info - Top Right */}
                                    <div className="absolute top-6 left-4 right-4 sm:left-auto sm:right-6 md:top-10 md:right-10 z-10 text-left max-w-[calc(100%-2rem)] sm:max-w-[280px]">
                                        <h3 className="font-canela text-[22px] sm:text-[26px] md:text-[28px] leading-tight text-[#19628D] mb-2">
                                            Dr <span className="font-bold">{doctor.name.replace('Dr. ', '').replace('Dr ', '')}</span>
                                        </h3>
                                        <button className="bg-[#1EBAB3] hover:bg-[#189d97] text-white font-sohne font-bold text-[14px] sm:text-[16.5px] py-2 sm:py-2.5 rounded-[10px] shadow-sm uppercase tracking-wide transition-all duration-300 transform active:scale-95 w-full whitespace-nowrap px-3 sm:px-4">
                                            Book An Appointment
                                        </button>
                                    </div>

                                    {/* Doctor Image Area */}
                                    <div className="absolute bottom-0 left-0 w-full h-[105%] flex justify-center items-end overflow-hidden pointer-events-none">
                                        <img
                                            src={Doctor1}
                                            alt={doctor.name}
                                            className="w-full h-auto max-h-full object-contain object-bottom transform translate-x-4 translate-y-6 sm:translate-x-8 sm:translate-y-8"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="font-sohne text-[24px] text-gray-400">No doctors found in this department.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DoctorHero;