import React from 'react'
import doctor from "../../images/doctor.png";

const DoctorCard = ({ doctorData }) => {
    return (
        <div className="flex items-center px-1 sm:px-2 pt-6 xs:pt-8 sm:pt-12 md:pt-16 w-full justify-center">
            <div
                className="relative rounded-2xl sm:rounded-[24px] bg-[#18628D] px-4 xs:px-5 sm:px-6 md:px-10 py-6 xs:py-7 sm:py-8 md:py-10 flex flex-col sm:flex-row items-center sm:items-start w-full transition-all duration-300"
                style={{
                    maxWidth: 600,
                    minHeight: window.innerWidth < 640 ? 240 : 280,
                }}
            >
                {/* Doctor Image - absolute bottom left */}
                <img
                    src={doctor}
                    alt={doctorData.name}
                    className="absolute left-[-8px] xs:left-[-10px] sm:left-5 bottom-0 h-48 xs:h-56 sm:h-80 md:h-96 object-contain pointer-events-none"
                    style={{ zIndex: 2 }}
                />

                {/* Card Content */}
                <div className="w-full pl-32 xs:pl-36 sm:pl-0 sm:ml-56 md:ml-64 relative z-10 pt-1 xs:pt-2 text-left">
                    <h2 className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 leading-tight tracking-tight">
                        {doctorData.name}
                    </h2>
                    <p className="text-[#e0eaf3]/90 text-[10px] xs:text-xs sm:text-base md:text-lg mb-2.5 xs:mb-3 sm:mb-4 font-medium truncate">
                        {doctorData.specialties.join(' | ')}
                    </p>
                    <div className="flex items-center text-[#e0eaf3] mb-3.5 xs:mb-4 sm:mb-5 md:mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1.5 xs:mr-2 flex-shrink-0 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium text-[10px] xs:text-xs sm:text-base opacity-90">{doctorData.schedule}</span>
                    </div>
                    <button className="bg-white text-[#18628D] hover:bg-gray-50 active:scale-95 font-bold px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 text-[10px] xs:text-xs sm:text-base rounded-full flex items-center gap-1.5 xs:gap-2 shadow-lg transition-transform duration-200">
                        BOOK APPOINTMENT
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard