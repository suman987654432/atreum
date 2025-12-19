import React from 'react'
import doctor from "../../images/doctor.png";

const DoctorCard = ({ doctorData }) => {
  return (
      <div className="flex items-center min-h-[50vh] sm:min-h-[55vh] md:min-h-[70vh] bg-transparent px-1 sm:px-2">
                <div
                    className="relative rounded-[20px] sm:rounded-[24px] bg-[#18628D] px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 flex flex-col sm:flex-row items-center sm:items-start w-full"
                    style={{
                        minWidth: 300,
                        maxWidth: 600,
                        minHeight: 180,
                        boxShadow: "0 8px 32px 0 rgba(33, 118, 174, 0.18)"
                    }}
                >
                    {/* Doctor Image - absolute bottom left */}
                    <img
                        src={doctor}
                        alt={doctorData.name}
                        className="absolute left-3 sm:left-5 bottom-0 h-64 sm:h-80 md:h-96 object-contain "
                        style={{ zIndex: 2 }}
                    />
    
                    {/* Card Content */}
                    <div className="sm:ml-56 md:ml-64 ml-0 w-full pt-2">
                        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{doctorData.name}</h2>
                        <p className="text-[#e0eaf3] text-sm sm:text-base md:text-lg mb-3 sm:mb-4 font-medium">
                            {doctorData.specialties.join(' | ')}
                        </p>
                        <div className="flex items-center text-[#e0eaf3] mb-4 sm:mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium text-xs sm:text-sm md:text-base">{doctorData.schedule}</span>
                        </div>
                        <button className="mt-1 sm:mt-2 bg-white text-[#2176ae] font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full flex items-center gap-1.5 sm:gap-2 shadow hover:bg-gray-100 transition">
                            BOOK APPOINTMENT
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default DoctorCard