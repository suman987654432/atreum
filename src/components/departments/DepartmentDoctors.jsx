import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import doctorData from '../../data/doctors.json';
import Doctor1 from "../../images/doctor/Doctor1.png";

const departments = [
    "Orthopaedics", "Urology", "Plastic Surgery", "Gynaecology", "Paediatrics",
    "Critical Care", "Neurology", "Nephrology", "Endocrinology", "General Surgery",
    "Oncology", "Vascular Surgery", "ENT", "Dermatology", "Gastroenterology"
];

const DepartmentDoctors = ({ doctors = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const pageDepartment = doctors.length > 0 ? doctors[0].department : 'View All';
    const doctorList = doctors.length > 0 ? doctors : doctorData;

    if (!doctorList || doctorList.length === 0) return null;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % doctorList.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + doctorList.length) % doctorList.length);
    };

    const currentDoctor = doctorList[currentIndex];
    const doctorDisplayName = currentDoctor.name.replace(/^Dr\.?\s*/i, '');
    const doctorSpecialties = Array.isArray(currentDoctor.specialties)
        ? currentDoctor.specialties
        : [currentDoctor.specialty].filter(Boolean);
    const doctorQualification = currentDoctor.qualification || currentDoctor.qualifications || '';
    const doctorExperience = currentDoctor.experience || '';
    const doctorDesignation = currentDoctor.designation || '';
    const doctorRole = currentDoctor.role || currentDoctor.department || doctorSpecialties[0] || '';
    const doctorTiming = currentDoctor.consultationTiming || currentDoctor.schedule || currentDoctor.timing || '';

    return (
        <div id="doctor-specialists" className="w-full pt-0 pb-8 sm:pb-10 overflow-hidden relative z-30 mt-6 sm:mt-10">
            <div className="px-4 sm:px-6 w-full max-w-[1720px] mx-auto">
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row items-start gap-5 sm:gap-6 lg:gap-10">
                        <div className="w-full lg:w-[60%] relative min-h-[16rem] sm:min-h-[22rem] lg:min-h-[28rem] bg-[#D9D9D933] rounded-[18px] overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-[105%] flex justify-center items-end overflow-hidden pointer-events-none">
                                <img
                                    src={Doctor1}
                                    alt={currentDoctor.name}
                                    className="w-full h-auto max-h-full object-contain object-bottom transform translate-x-4 translate-y-6 sm:translate-x-8 sm:translate-y-8"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-[40%] p-0 sm:p-2 lg:p-0 flex flex-col gap-3 sm:gap-4">
                            <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-2">
                                {departments.map((dept) => (
                                    <button
                                        key={dept}
                                        onClick={() => {
                                            if (dept === pageDepartment) setCurrentIndex(0);
                                        }}
                                        disabled={dept !== pageDepartment}
                                        className={`px-2.5 sm:px-3 py-1 rounded-[8px] border text-[13px] sm:text-[14px] font-sohne font-medium transition-all duration-300 whitespace-nowrap ${pageDepartment === dept
                                            ? 'bg-[#19628D] text-white border-[#19628D] cursor-pointer'
                                            : 'bg-white text-[#19628D] border-[#19628D] cursor-not-allowed'
                                            }`}
                                    >
                                        {dept}
                                    </button>
                                ))}
                                <button
                                    onClick={() => navigate('/#our-doctors')}
                                    className="text-[14px] sm:text-[15px] font-bold font-sohne transition-colors ml-0 sm:ml-2 lg:ml-4 whitespace-nowrap text-[#878787] hover:text-[#19628D] cursor-pointer"
                                >
                                    View All
                                </button>
                            </div>

                            <div>
                                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                    <h3 className="font-canela text-[22px] sm:text-[26px] md:text-[28px] leading-tight text-[#19628D]">
                                        Dr <span className="font-bold">{doctorDisplayName}</span>
                                    </h3>
                                    {doctorQualification ? (
                                        <span className="relative top-[0.1rem] sm:top-[0.18rem] font-sohne font-normal text-[1rem] sm:text-[1.3rem] leading-none text-black">
                                            ({doctorQualification})
                                        </span>
                                    ) : null}
                                </div>
                                <p className="text-[#111827] font-sohne text-[0.95rem] sm:text-[1rem] mt-1">
                                    Experience - <span className="font-bold">{doctorExperience || '18+ years'}</span>
                                    <span className="mx-2">|</span>
                                    <span className="font-bold italic">{doctorDesignation || 'Senior Consultant'}</span>
                                </p>
                                <p className="text-black font-sohne font-medium text-[1.1rem] sm:text-[1.17rem] leading-tight mt-3 uppercase">
                                    {doctorRole}
                                </p>
                                <p className="text-black font-sohne font-bold text-[0.95rem] sm:text-[1.05rem]  ">
                                    {doctorTiming}
                                </p>
                            </div>

                            <div className="flex items-center justify-start gap-1.5 sm:gap-2 w-full -ml-1 sm:-ml-3 lg:-ml-8">
                                <button onClick={handlePrev} className="text-[#2a6b77] hover:text-[#0e4857] p-1" aria-label="Previous doctor">
                                    <ChevronLeft size={26} strokeWidth={2.5} />
                                </button>
                                <a
                                    href="tel:9606970542"
                                    className="bg-[#1EBAB3] hover:bg-[#189d97] text-white font-sohne font-bold text-[13px] sm:text-[16.5px] py-2 sm:py-2.5 rounded-[10px] shadow-sm uppercase tracking-wide transition-all duration-300 transform active:scale-95 whitespace-nowrap px-2.5 sm:px-4"
                                >
                                    Book An Appointment
                                </a>
                                <button onClick={handleNext} className="text-[#2a6b77] hover:text-[#0e4857] p-1" aria-label="Next doctor">
                                    <ChevronRight size={26} strokeWidth={2.5} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DepartmentDoctors;