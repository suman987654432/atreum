
import React from 'react';
// import care1 from "../../images/care1.png";
import care2 from "../../images/care2.png";
import care3 from "../../images/care3.png";
import care4 from "../../images/care4.png";
import care5 from "../../images/care5.png";

const careData = [
    {
        id: 1,
        title: "JOINT REPLACEMENT",
        description: "Orthopaedics at Atreum Hospitals is a multi-disciplinary department dedicated to the diagnosis, treatment, and long-term management of conditions affecting bones, joints, muscles, and the spine.",
        image: care4,
        width: "col-span-1",
    },
    {
        id: 2,
        title: "SPORTS MEDICINE & ARTHROSCOPY",
        description: "Our sports medicine team provides comprehensive care for athletes of all levels, focusing on injury prevention, treatment, and rehabilitation to get you back in the game.",
        image: care5,
        width: "col-span-1",
    },
    {
        id: 3,
        title: "SPINE CARE",
        description: "We offer advanced treatments for spinal conditions, ranging from minimally invasive procedures to complex spinal reconstruction surgeries.",
        image: care3,
        width: "col-span-1",
    },
    {
        id: 4,
        title: "TRAUMA & FRACTURE CARE",
        description: "Orthopaedics at Atreum Hospitals is a multi-disciplinary department dedicated to the diagnosis, treatment, and long-term management of conditions affecting bones, joints, muscles, and the spine.",
        image: care2,
        width: "lg:col-span-2 col-span-1",
    },
    {
        id: 5,
        title: "REHABILITATION & PHYSIOTHERAPY",
        description: "Our rehabilitation team provides personalized therapy plans to help you recover strength and mobility after surgery or injury, ensuring a safe return to daily activities.",
        image: care5,
        width: "col-span-1",
    }
];

const Care = () => {
    return (
        <div className="relative -mt-4 z-20 bg-white rounded-t-[50px] shadow-[0_-25px_50px_rgba(100,100,100,0.3)] pt-16 pb-16">
            <div className="px-4 w-full max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center mb-12 gap-6">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-serif text-[#19628D] leading-tight">
                            Orthopaedic <span className=" font-bold italic">Care</span><br />at
                            <span className="text-[#19628D] font-bold italic"> Atreum</span>
                        </h2>
                    </div>
                    <div className="md:w-2/5">
                        <p className="text-black text-sm md:text-base leading-tight font-semibold">
                            Orthopaedics at Atreum Hospitals is a multi-disciplinary department
                            dedicated to the diagnosis, treatment, and long-term management of
                            conditions affecting bones, joints, muscles, and the spine.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {careData.map((item) => (
                        <div key={item.id} className={`relative group overflow-hidden rounded-2xl h-[400px] cursor-pointer shadow-xl ${item.width}`}>
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover "
                                />
                                {/* Dark Overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                            </div>


                            {/* Content Container - Slides up from bottom */}
                            {/* Initially translated down so only the top part (title) is visible */}
                            <div className=" rounded-t-3xl absolute bottom-0 left-0 w-full bg-transparent group-hover:bg-[#19628DBD] p-6 md:p-8 transform translate-y-[calc(100%-90px)] group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-start">

                                {/* Title Section - This part is always visible */}
                                <div className="h-[90px] flex items-end pb-2 md:-mt-12">
                                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase leading-tight drop-shadow-md font-sohne">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description - Revealed on Hover */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <p className="text-white text-sm md:text-base leading-relaxed font-sohne">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Horizontal Black Line */}
                <div className="w-full h-[1px] bg-black mt-16"></div>
            </div>
        </div>
    );
};

export default Care;