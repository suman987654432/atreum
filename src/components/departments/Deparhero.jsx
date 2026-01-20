import React from 'react'
import hero from "../../images/Top Content.png"
import EnquiryForm from './EnquiryForm'

const Deparhero = () => {
    return (
        <div className="relative w-full min-h-screen lg:min-h-[850px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={hero}
                    alt="Hospital Background"
                    className="w-full h-full object-cover object-top"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-blue-50/60 md:bg-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-24 lg:py-0 pb-32">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
                    <h1 className="font-oswald font-bold leading-tight">
                        <span className="text-[#02908B] text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mb-2 drop-shadow-sm">
                            BEST CARDIOLOGY
                        </span>
                        <span className="text-[#18628D] text-3xl sm:text-4xl md:text-5xl lg:text-6xl block drop-shadow-sm">
                            HOSPITAL IN RR<br className="hidden md:block" /> NAGAR, BANGALORE
                        </span>
                    </h1>
                </div>

                {/* Right Content - Form */}
                <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
                    <EnquiryForm />
                </div>
            </div>
        </div>
    )
}

export default Deparhero