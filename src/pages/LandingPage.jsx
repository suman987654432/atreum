import Hero from '../components/HeroPage/Hero'
import Excellence from '../components/HeroPage/Excellence'
// import Excellence from '../components/HeroPage/Excellence'
// import Special from '../components/HeroPage/Special'
import Facility from '../components/HeroPage/Facility'
import DoctorHero from '../components/HeroPage/DoctorHero'
// import Care from '../components/departments/Care'


const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <Excellence />
      <DoctorHero />
      {/* <Special /> */}
      <Facility />
      {/* <Care /> */}

    </div>
  )
}

export default LandingPage