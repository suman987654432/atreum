import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import doctorData from '../data/doctors.json';
import doctors1 from '../images/doctors1.png';
import drbhanu from '../images/derma/drbhanu.avif';
import drchetan from '../images/ortho/drchetan.avif';
import drarthika from '../images/pedia/drarthika.avif';
import drvivek from '../images/pedia/drvivek.avif';
import drkishor from '../images/neuro/drkishor.avif';
import drravi from '../images/nephro/drravi.avif';
import drradha from '../images/gyna/drradha.avif';
import drsuma from '../images/gyna/drsuma.avif';
import drsujay from '../images/general/drsujay.avif';

const imageMap = {
    "Doctor1": doctors1,
    "drbhanu": drbhanu,
    "drchetan": drchetan,
    "drarthika": drarthika,
    "drvivek": drvivek,
    "drkishor": drkishor,
    "drravi": drravi,
    "drradha": drradha,
    "drsuma": drsuma,
    "drsujay": drsujay
};

const departments = [
    'Orthopaedics', 'Urology', 'Plastic Surgery', 'Gynaecology', 'Pediatrics',
    'Critical Care', 'Neurology', 'Nephrology', 'Gastroenterology', 'Dermatology',
    'Endocrinology', 'General Surgery', 'Oncology', 'Vascular Surgery', 'ENT'
];

const DoctorsPages = () => {
    const [selectedDepts, setSelectedDepts] = useState([]);

    const filteredDoctors = selectedDepts.length === 0
        ? doctorData
        : doctorData.filter((doctor) => selectedDepts.includes(doctor.department));

    const handleDeptToggle = (dept) => {
        setSelectedDepts((prev) => (
            prev.includes(dept)
                ? (prev.length === 1
                    ? []
                    : prev.filter((item) => item !== dept))
                : [...prev, dept]
        ));
    };

    return (
        <section className="relative z-20 border border-white/30 rounded-xl sm:rounded-2xl md:rounded-3xl pt-7 sm:pt-9 pb-8 sm:pb-10 md:pb-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8 mt-12 sm:mt-16 lg:mt-28 xl:mt-32 overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-14 sm:h-20 md:h-24 bg-gradient-to-b from-[#D9D9D955] to-transparent backdrop-blur-md "></div>
            <div className="relative z-10 px-2.5 sm:px-4 lg:px-5 w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4 sm:gap-5 lg:gap-8 mb-5 sm:mb-8 lg:mb-10">
                    <div className="w-full lg:w-1/3 text-left">
                        <h2 className="font-canela text-[#19628D] text-[1.75rem] sm:text-[2.1rem] lg:text-[2.25rem] leading-[1.1]">
                            <span className="font-bold italic">Our Doctors</span>
                        </h2>
                    </div>
                    <div className="w-full lg:w-2/3 text-left">
                        <p className="text-black font-sohne font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-tight max-w-[44rem] lg:ml-auto">
                            At Atreum, we combine expert doctors with advanced medical facilities to deliver care that prioritises your safety, comfort, and recovery.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-2 mb-4 sm:mb-6 lg:mb-8">
                    {departments.map((dept) => (
                        <button
                            key={dept}
                            onClick={() => handleDeptToggle(dept)}
                            className={`px-2.5 sm:px-3 py-1 rounded-[8px] border text-[12px] sm:text-[14px] font-sohne font-medium transition-all duration-300 whitespace-nowrap ${selectedDepts.includes(dept)
                                ? 'bg-[#19628D] text-white border-[#19628D]'
                                : 'bg-white text-[#19628D] border-[#19628D] hover:bg-[#19628D] hover:text-white'
                                }`}
                        >
                            {dept}
                        </button>
                    ))}
                    <button
                        onClick={() => setSelectedDepts([])}
                        className={`px-2.5 sm:px-3 py-1 rounded-[8px] border text-[12px] sm:text-[14px] font-sohne font-medium transition-all duration-300 whitespace-nowrap ${selectedDepts.length === 0
                            ? 'bg-[#19628D] text-white border-[#19628D]'
                            : 'bg-white text-[#19628D] border-[#19628D] hover:bg-[#19628D] hover:text-white'
                            }`}
                    >
                        All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6">
                    {filteredDoctors.map((doctor) => {
                        const displayName = doctor.name.replace(/^Dr\.?\s*/i, '');
                        const qualification = doctor.qualification || doctor.qualifications || 'MBBS, MD';
                        const experience = doctor.experience;
                        const designation = doctor.designation || 'Senior Consultant';
                        const role = doctor.role || doctor.department;
                        const timingRaw = doctor.consultationTiming || doctor.schedule || doctor.timing || '';
                        const timing = timingRaw.replace(/\s+:\s+/g, ': ');

                        return (
                            <article key={doctor.id} className="rounded-[14px] sm:rounded-[16px] overflow-hidden h-full flex flex-col">
                                <div className="relative h-[160px] sm:h-[190px] md:h-[210px] bg-[#D9D9D933] overflow-hidden">
                                    <img
                                        src={imageMap[doctor.image]}
                                        alt={doctor.name}
                                        className="w-full h-full object-contain object-bottom transform translate-y-4 sm:translate-y-5"
                                    />
                                    <span className="absolute right-1.5 sm:right-2 bottom-1.5 sm:bottom-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0f6793] text-white flex items-center justify-center">
                                        <ChevronRight size={14} />
                                    </span>
                                </div>

                                <div className="p-2.5 sm:p-3 md:p-4">
                                    <h3 className="font-canela text-[#19628D] text-[1.3rem] sm:text-[1.5rem] lg:text-[1.65rem] leading-none break-words">
                                        Dr <span className="font-bold">{displayName}</span>
                                        <span className="font-sohne font-normal text-black text-[0.48em] ml-2 align-middle">({qualification})</span>
                                    </h3>

                                    {experience && (
                                        <p className="text-black font-sohne text-[12px] sm:text-[14px] mt-1 leading-snug">
                                            Experience - <span className="font-bold">{experience}</span>
                                            <span className="mx-1.5">|</span>
                                            <span className="font-bold italic">{designation}</span>
                                        </p>
                                    )}

                                    {!experience && designation && (
                                        <p className="text-black font-sohne text-[12px] sm:text-[14px] mt-1 leading-snug">
                                            <span className="font-bold italic">{designation}</span>
                                        </p>
                                    )}

                                    <p className="text-black font-sohne font-medium text-[1rem] sm:text-[1.2rem] leading-tight uppercase">
                                        {role}
                                    </p>

                                    <p className="text-black font-sohne font-bold text-[0.88rem] sm:text-[1.02rem] leading-snug">
                                        {timing}
                                    </p>

                                    <a
                                        href="tel:9606970542"
                                        className="inline-block mt-2.5 bg-[#1EBAB3] hover:bg-[#189d97] text-white font-sohne font-bold text-[11px] sm:text-[14px] py-1.5 sm:py-2 rounded-[6px] sm:rounded-[8px] shadow-sm uppercase tracking-wide transition-all duration-300 whitespace-nowrap px-2.5 sm:px-3"
                                    >
                                        Book An Appointment
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DoctorsPages;