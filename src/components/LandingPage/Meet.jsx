import React, { useState, useEffect } from "react";
import {  ChevronLeft, ChevronRight } from "lucide-react";
import sideImage from "../../images/image.png";
import DoctorCard from "./DoctorCard";
import doctorsData from "../../data/doctors.json";

const Excellence = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(650);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Duplicate cards for infinite scroll
    const infiniteDoctors = [...doctorsData, ...doctorsData, ...doctorsData];

    useEffect(() => {
        const updateSlideWidth = () => {
            if (window.innerWidth < 640) {
                setSlideWidth(340);
            } else if (window.innerWidth < 768) {
                setSlideWidth(460);
            } else if (window.innerWidth < 1024) {
                setSlideWidth(530);
            } else {
                setSlideWidth(620);
            }
        };

        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);
        return () => window.removeEventListener('resize', updateSlideWidth);
    }, []);

    useEffect(() => {
        // Start from middle set
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentIndex(doctorsData.length);
    }, []);

    useEffect(() => {
        // Reset position when reaching start or end
        if (currentIndex >= doctorsData.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(doctorsData.length);
                setTimeout(() => setIsTransitioning(true), 50);
            }, 500);
        } else if (currentIndex < doctorsData.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(doctorsData.length * 2 - (doctorsData.length - currentIndex));
                setTimeout(() => setIsTransitioning(true), 50);
            }, 500);
        }
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    const goToSlide = (index) => {
        setCurrentIndex(doctorsData.length + index);
    };

    return (
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-2 sm:px-4 md:px-8 lg:px-12 overflow-hidden">

            {/* Yellow Circle */}
            <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 right-[8%] sm:right-[12%] md:right-[18%] lg:right-[22%] w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#E2D66B] rounded-full opacity-80"></div>

            {/* Decorative Image */}
            <img
                src={sideImage}
                alt=""
                className="absolute top-4 sm:top-6 md:top-8 lg:top-10 right-2 sm:right-4 md:right-6 lg:right-10 w-20 sm:w-24 md:w-32 lg:w-40 opacity-90"
            />

            {/* Heading */}
            <div className="max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#02908B] mb-2 sm:mb-3 md:mb-4">
                    MEET OUR DOCTORS
                </h2>
                <p className="mt-2 sm:mt-3 md:mt-4 text-gray-700 max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Experienced medical professionals dedicated to your health and wellbeing.
                </p>
            </div>

            {/* card slide  */}
            <div className="max-w-7xl mx-auto relative px-2 sm:px-4 md:px-8 lg:px-12">
                {/* Slider Container */}
                <div className="relative overflow-hidden">
                    <div
                        className={`flex gap-2 sm:gap-3 md:gap-4 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                        style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
                    >
                        {infiniteDoctors.map((doctor, idx) => (
                            <div
                                key={`${doctor.id}-${idx}`}
                                className="flex-shrink-0 w-[340px] sm:w-[460px] md:w-[530px] lg:w-[620px]"
                            >
                                <DoctorCard doctorData={doctor} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute -left-1 sm:-left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-1.5 md:p-2 rounded-full shadow-lg transition z-10"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2176ae]" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute -right-1 sm:-right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-1.5 md:p-2 rounded-full shadow-lg transition z-10"
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2176ae]" />
                </button>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-1 sm:gap-1.5 md:gap-2 mt-4 sm:mt-6 md:mt-8">
                    {doctorsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all ${(currentIndex % doctorsData.length) === index
                                    ? "bg-[#2176ae] w-5 sm:w-6 md:w-8"
                                    : "bg-gray-300 hover:bg-gray-400 w-2 sm:w-2.5 md:w-3"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Excellence;
