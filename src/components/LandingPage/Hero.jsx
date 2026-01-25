import React from "react";
import hero from "../../images/hero.png";
import heroimage from "../../images/heroimage.png";


const Hero = () => {

    return (
        <>
            {/* Navbar Overlay */}
            <section className="relative w-full h-screen z-10">

                {/* Background Image */}
                {/* Mobile: heroimage */}
                <img
                    src={heroimage}
                    alt="Hero Mobile"
                    className="block sm:hidden absolute inset-0 w-full h-full object-cover will-change-transform"
                />

                {/* Desktop: hero (existing) */}
                <img
                    src={hero}
                    alt="Hero"
                    className="hidden sm:block absolute inset-0 w-full h-full object-cover will-change-transform"
                />


                {/* Text Overlay */}
                <div
                    className="relative z-10 h-full flex items-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-4 xl:px-24 transition-all duration-300 bg-white/60 sm:bg-transparent"
                >
                    <div className="w-full flex flex-col items-center sm:items-start justify-center">
                        <h1 className="
                            text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                            font-bold leading-tight text-[#19628D] text-center sm:text-left
                            max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl
                            mt-3 xs:mt-4 sm:mt-0 mb-5 xs:mb-6 sm:mb-0
                            sm:ml-0 md:ml-2 lg:ml-6 xl:ml-12
                            mx-auto sm:mx-0
                        ">
                            <span className="block sm:hidden text-2xl xs:text-3xl font-extrabold tracking-tight leading-[1.3] xs:leading-[1.35] drop-shadow-sm text-[#19628D] mb-5 xs:mb-6 mt-2">
                                YOUR JOURNEY<br />
                                TOWARDS BETTER<br />
                                HEALTH STARTS<br />
                                WITH <span className="text-[#0EA8A7]">ATREUM</span>
                            </span>
                            <span className="hidden sm:block leading-[1.15]">
                                YOUR JOURNEY<br />
                                TOWARDS BETTER<br />
                                HEALTH STARTS<br />
                                WITH <span className="text-[#0EA8A7]">ATREUM</span>
                            </span>
                        </h1>
                        {/* Mobile Only Button */}
                        <button
                            className="block sm:hidden bg-[#18628D] hover:bg-[#155072] active:scale-95 text-white font-bold rounded-full px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base shadow-xl transition-all duration-300 w-auto min-w-[180px] xs:min-w-[200px]"
                        >
                            BOOK APPOINTMENT
                        </button>
                    </div>
                </div>

                {/* Decorative Circle - Bottom Left (hide on mobile) */}
                <div
                    className="absolute bottom-0 left-0 w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[#0DB0AA] rounded-full z-10 translate-y-1/2 -translate-x-1/2 transition-all duration-300 hidden sm:block"
                ></div>
            </section>
        </>
    );
};

export default Hero;
