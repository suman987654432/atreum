import React from 'react'
import doctor from "../../images/doctor.png";

const DoctorCard = ({ doctorData }) => {
    return (
        <div className="flex items-center px-1 sm:px-2 pt-8 sm:pt-12 md:pt-16 w-full justify-center">
            <div
                className="relative rounded-[20px] sm:rounded-[24px] bg-[#18628D] px-6 sm:px-6 md:px-10 py-8 sm:py-8 md:py-10 flex flex-col sm:flex-row items-center sm:items-start w-full transition-all duration-300 "
                style={{
                    maxWidth: 600,
                    minHeight: 280,
                }}
            >
                {/* Doctor Image - absolute bottom left */}
                <img
                    src={doctor}
                    alt={doctorData.name}
                    className="absolute left-[-10px] sm:left-5 bottom-0 h-60 xs:h-64 sm:h-80 md:h-96 object-contain pointer-events-none "
                    style={{ zIndex: 2 }}
                />

                {/* Card Content */}
                <div className="w-full pl-36 xs:pl-40 sm:pl-0 sm:ml-56 md:ml-64 relative z-10 pt-2 text-left">
                    <h2 className="text-white text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 leading-tight tracking-tight">
                        {doctorData.name}
                    </h2>
                    <p className="text-[#e0eaf3]/90 text-xs xs:text-sm sm:text-base md:text-lg mb-3 sm:mb-4 font-medium whitespace-nowrap truncate block">
                        {doctorData.specialties.join(' | ')}
                    </p>
                    <div className="flex items-center text-[#e0eaf3] mb-5 sm:mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium text-xs xs:text-sm sm:text-base opacity-90">{doctorData.schedule}</span>
                    </div>
                    <button className="bg-white text-[#18628D] hover:bg-gray-50 active:scale-95 font-bold px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-base rounded-full flex items-center gap-2 shadow-lg transition-transform duration-200">
                        BOOK APPOINTMENT
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard