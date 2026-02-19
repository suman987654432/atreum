import React from 'react'
import DocHero from '../components/doctor/DocHero'
import ListDoctor from '../components/doctor/ListDoctor'

const DoctorPage = () => {
  return (
   <>
     <div className="mb-[110px]">
       <DocHero/>
      
       <ListDoctor />
     </div>
     <br />
   </>
  )
}

// export default DoctorPage