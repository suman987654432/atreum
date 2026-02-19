
import React from 'react';
// import care1 from "../../images/care1.png";
import emer from "../../images/emer.png";
import mri from "../../images/mri.png";
import radio from "../../images/radio.png";
import pharma from "../../images/pharma.png";

const careData = [
    {
        id: 1,
        title: "EMERGENCY CARE UNIT (24/7)",
        image: emer,
        width: "md:col-span-2",
    },
    {
        id: 2,
        title: "MRI SCANNING",
        image: mri,
        width: "md:col-span-1",
    },
    {
        id: 3,
        title: "RADIOLOGY LAB",
        image: radio,
        width: "md:col-span-1",
    },
    {
        id: 4,
        title: "OUR PHARMACY",
        image: pharma,
        width: "md:col-span-2",
    }
];

const Facility = () => {
    const handleCardClick = () => {
        const element = document.getElementById('form-section');
        if (element) {
            const offset = 100;
            const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);

                const ease = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                window.scrollTo(0, startPosition + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            requestAnimationFrame(animation);
        }
    };

    return (
        <div id="care-section" className="relative z-20 mx-2 md:mx-3 lg:mx-4">
            <div className="backdrop-blur-md border-b border-white/30 rounded-2xl pt-6 pb-6 w-full max-w-[1800px] mx-auto" style={{ backgroundColor: '#D9D9D933' }}>
                <div className="px-4 w-full max-w-[1800px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-center mb-12 gap-6">
                        <div className="md:w-2/5 md:ml-8 lg:ml-12 max-w-[600px] text-center md:text-left">
                            <h2 className="text-[#19628D]">
                                <span className="font-canela font-bold italic text-[32px] leading-[32px] tracking-normal">Our Facility</span>
                            </h2>
                        </div>
                        <div className="md:w-2/5 md:ml-2 lg:ml-4 max-w-[600px] text-center md:text-left">
                            <p className="text-black font-sohne font-normal text-[16px] leading-[22px] tracking-normal">
                                At Atreum, your recovery comes first. Skilled professionals, advanced equipment, and modern facilities come together to ensure safe, comfortable, and effective care for all your needs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {careData.slice(0, 2).map((item) => (
                            <div
                                key={item.id}
                                onClick={handleCardClick}
                                className={`relative overflow-hidden rounded-2xl h-[400px] cursor-pointer shadow-xl ${item.width}`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`w-full h-full object-cover ${item.title === "MRI SCANNING" || item.title === "RADIOLOGY LAB" ? '' : ''}`}
                                    />
                                    {/* Dark Overlay for better text readability */}
                                    <div className="absolute inset-0 bg-black/30"></div>
                                </div>

                                {/* Title Section */}
                                <div className="absolute bottom-0 left-0 w-full bg-[#19628DBD] backdrop-blur-sm p-4 md:p-6">
                                    <h3 className="font-sohne font-bold text-[20px] md:text-[23px] leading-[100%] text-white uppercase tracking-normal">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1800px] mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {careData.slice(2, 4).map((item) => (
                        <div
                            key={item.id}
                            onClick={handleCardClick}
                            className={`relative overflow-hidden rounded-2xl h-[400px] cursor-pointer shadow-xl ${item.width}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover ${item.title === "MRI SCANNING" || item.title === "RADIOLOGY LAB" ? '' : ''}`}
                                />
                                {/* Dark Overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/30"></div>
                            </div>

                            {/* Title Section */}
                            <div className="absolute bottom-0 left-0 w-full bg-[#19628DBD] backdrop-blur-sm p-4 md:p-6">
                                <h3 className="font-sohne font-bold text-[20px] md:text-[26px] leading-[100%] text-white uppercase tracking-normal">
                                    {item.title}
                                    {/* {item.title} */}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facility;