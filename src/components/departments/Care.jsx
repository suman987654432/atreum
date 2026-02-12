
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
        <div className="relative -mt-4 z-20 bg-white/20 backdrop-blur-md border-b border-white/30 rounded-3xl pt-16 pb-16">
            <div className="px-4 w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-center mb-12 gap-6">
                    <div className="md:w-2/5 md:ml-8 lg:ml-12 max-w-[600px] text-center md:text-left">
                        <h2 className="text-[#19628D]">
                            <span className="font-canela font-normal text-[32px] leading-[32px] tracking-normal">Orthopaedic Care <br /> at </span>
                            <span className="font-canela font-bold italic text-[32px] leading-[32px] tracking-normal">Atreum</span>
                        </h2>
                    </div>
                    <div className="md:w-2/5 md:ml-2 lg:ml-4 max-w-[600px] text-center md:text-left">
                        <p className="text-black font-sohne font-normal text-[18px] leading-[22px] tracking-normal">
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
                            <div className=" rounded-t-3xl absolute bottom-0 left-0 w-full bg-transparent group-hover:bg-[#19628DBD] group-hover:backdrop-blur-sm p-4 md:p-6 lg:p-8 transform translate-y-[calc(100%-130px)] group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-start">

                                {/* Title Section - This part is always visible */}
                                <div className="h-auto pb-4">
                                    <h3 className="font-sohne font-bold text-[22px] md:text-[26px] leading-[100%] text-white uppercase tracking-normal drop-shadow-md">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description - Revealed on Hover */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-2">
                                    <p className="font-sohne font-normal text-[16px] leading-[20px] tracking-normal text-white">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Horizontal Black Line */}
                <div className="w-full h-[1px] bg-black mt-8"></div>
            </div>
        </div>
    );
};

export default Care;