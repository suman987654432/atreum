import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import facility1 from "../../images/facility1.png";
import facility2 from "../../images/facility1.png";
import facility3 from "../../images/facility1.png";
import facilitiesData from "../../data/facilities.json";

const Excellence = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(650);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Image mapping
    const imageMap = {
        facility1: facility1,
        facility2: facility2,
        facility3: facility3
    };

    // Duplicate cards for infinite scroll
    const infiniteFacilities = [...facilitiesData, ...facilitiesData, ...facilitiesData];

    useEffect(() => {
        const updateSlideWidth = () => {
            if (window.innerWidth < 640) {
                setSlideWidth(290);
            } else if (window.innerWidth < 768) {
                setSlideWidth(360);
            } else if (window.innerWidth < 1024) {
                setSlideWidth(410);
            } else {
                setSlideWidth(460);
            }
        };

        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);
        return () => window.removeEventListener('resize', updateSlideWidth);
    }, []);

    useEffect(() => {
        // Start from middle set
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentIndex(facilitiesData.length);
    }, []);

    useEffect(() => {
        // Reset position when reaching start or end
        if (currentIndex >= facilitiesData.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(facilitiesData.length);
                setTimeout(() => setIsTransitioning(true), 50);
            }, 500);
        } else if (currentIndex < facilitiesData.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(facilitiesData.length * 2 - (facilitiesData.length - currentIndex));
                setTimeout(() => setIsTransitioning(true), 50);
            }, 500);
        }
    }, [currentIndex]);

    // const nextSlide = () => {
    //     setCurrentIndex((prev) => prev + 1);
    // };

    // const prevSlide = () => {
    //     setCurrentIndex((prev) => prev - 1);
    // };

    const goToSlide = (index) => {
        setCurrentIndex(facilitiesData.length + index);
    };

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">

            {/* Yellow Circle */}
            <div className="absolute top-6 sm:top-8 md:top-10 right-[10%] sm:right-[15%] md:right-[10%] w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#DDD167] rounded-full opacity-80"></div>

            {/* Green Circle */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-18 sm:-top-10 md:-top-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#02908B] rounded-full opacity-80 z-10 mt-10"></div>

            {/* Heading */}
            <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-10">
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#02908B] mb-3 sm:mb-4">
                    OUR FACILITY
                </h2>
                <p className="mt-2 sm:mt-3 md:mt-4 text-gray-700 max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed">
At Atreum, your recovery comes first. Skilled professionals, advanced equipment, and modern facilities come together to ensure safe, comfortable, and effective care for all your needs.                </p>
            </div>

            {/* card slide  */}
            <div className="max-w-7xl mx-auto  ">
                {/* Slider Container */}
                <div className="relative overflow-hidden">
                    <div
                        className={`flex gap-2 sm:gap-3 md:gap-4 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                        style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
                    >
                        {infiniteFacilities.map((facility, idx) => (
                            <div
                                key={`${facility.id}-${idx}`}
                                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px]"
                            >
                                <div className="flex items-center justify-center bg-transparent px-1 sm:px-2">
                                    <img
                                        src={imageMap[facility.image]}
                                        alt={`Facility ${facility.id}`}
                                        className="w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[250px] rounded-[16px] sm:rounded-[20px] shadow-lg object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                {/* <button
                    onClick={prevSlide}
                    className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg transition z-10"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#2176ae]" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg transition z-10"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#2176ae]" />
                </button> */}

                {/* Dots Navigation */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                    {facilitiesData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2.5 sm:h-3 rounded-full transition-all ${
                                (currentIndex % facilitiesData.length) === index
                                    ? "bg-[#2176ae] w-6 sm:w-8"
                                    : "bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Excellence;
