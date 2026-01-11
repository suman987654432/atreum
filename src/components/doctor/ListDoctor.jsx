import React from 'react'
import DoctorCard from '../LandingPage/DoctorCard'
import doctorsData from '../../data/doctors.json'

const ListDoctor = () => {
  // Group doctors by their first specialty
  const orthopaedicsDoctors = doctorsData.filter(doctor => 
    doctor.specialties.some(specialty => specialty.toLowerCase().includes('orthopedics'))
  )
  
  const urologyDoctors = doctorsData.filter(doctor => 
    doctor.specialties.some(specialty => specialty.toLowerCase().includes('urology'))
  )
  
  const paediatricsDoctors = doctorsData.filter(doctor => 
    doctor.specialties.some(specialty => specialty.toLowerCase().includes('paediatrics'))
  )

  return (
    <div className="container mx-auto px-4 py-8 mt-[160px]">
      {/* ORTHOPAEDICS Section */}
      {orthopaedicsDoctors.length > 0 && (
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold font-oswald text-[#02908B] mb-8">
            ORTHOPAEDICS
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {orthopaedicsDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctorData={doctor} />
            ))}
          </div>
        </div>
      )}

      {/* UROLOGY Section */}
      {urologyDoctors.length > 0 && (
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold font-oswald text-[#02908B] mb-8">
            UROLOGY
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {urologyDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctorData={doctor} />
            ))}
          </div>
        </div>
      )}

      {/* PAEDIATRICS Section */}
      {paediatricsDoctors.length > 0 && (
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold font-oswald text-[#02908B] mb-8">
            PAEDIATRICS
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {paediatricsDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctorData={doctor} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ListDoctor