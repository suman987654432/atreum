import React from "react";
import hero from "../../images/hero.png";
import Navbar from "../LandingPage/Navbar";
import { useScrollBlur } from "../../hooks/useScrollBlur";

const Hero = () => {
    const { scrollEffect, elementRef } = useScrollBlur({
        startBlurAfter: 90,
        maxBlur: 5,
        blurSpeed: 1.7,
        minOpacity: 0.2
    });

    return (
        <>
            {/* Navbar Overlay */}
            <section ref={elementRef} className="relative w-full h-screen z-10">
                <div className="sticky top-0 left-0 w-full z-20">
                    <Navbar />
                </div>
                {/* Background Image (hide on mobile) */}
                <img
                    src={hero}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover will-change-transform"
                    style={{
                        filter: `blur(${scrollEffect.blur}px)`,
                        opacity: scrollEffect.opacity,
                    }}
                />


                {/* Text Overlay */}
                <div
                    className="relative z-10 h-full flex items-center px-2 sm:px-6 md:px-8 lg:px-4 xl:px-24 transition-all duration-300 bg-white/90 sm:bg-transparent"
                    style={{ filter: `blur(${scrollEffect.blur}px)`, opacity: scrollEffect.opacity }}
                >
                    <div className="w-full flex flex-col items-center sm:items-start justify-center">
                        <h1 className="
                            text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                            font-bold leading-tight text-[#19628D] text-center sm:text-left
                            max-w-xl sm:max-w-2xl md:max-w-3xl
                            mt-16 sm:mt-0 mb-6 sm:mb-0
                            sm:ml-0 md:ml-2 lg:ml-6 xl:ml-12
                            mx-auto sm:mx-0
                        ">
                            <span className="block sm:hidden mb-6"></span>
                            <span className="block sm:hidden text-3xl xs:text-4xl font-extrabold mb-6 mt-6">
                                YOUR JOURNEY<br />
                                TOWARDS BETTER<br />
                                HEALTH STARTS<br />
                                WITH <span className="text-[#0EA8A7]">ATREUM</span>
                            </span>
                            <span className="hidden sm:block">
                                YOUR JOURNEY<br />
                                TOWARDS BETTER<br />
                                HEALTH STARTS<br />
                                WITH <span className="text-[#0EA8A7]">ATREUM</span>
                            </span>
                        </h1>
                        {/* Mobile Only Button */}
                        <button
                            className="block sm:hidden mt-8 bg-[#18628D] text-white font-semibold rounded-full px-6 py-3 text-lg shadow-lg"
                        >
                            BOOK APPOINTMENT
                        </button>
                    </div>
                </div>

                {/* Decorative Circle - Bottom Left (hide on mobile) */}
                <div
                    className="absolute bottom-0 left-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[#0DB0AA] rounded-full z-10 translate-y-1/2 -translate-x-1/2 transition-all duration-300 hidden sm:block"
                    style={{ filter: `blur(${scrollEffect.blur}px)`, opacity: scrollEffect.opacity }}
                ></div>
            </section>
        </>
    );
};

export default Hero;
