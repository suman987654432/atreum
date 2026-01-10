import Excellence from '../components/LandingPage/Excellence'
import Hero from '../components/LandingPage/Hero'
import Journey from '../components/LandingPage/Journey'
import Meet from '../components/LandingPage/Meet'
import Facility from '../components/LandingPage/Facility'
import Feedback from '../components/LandingPage/Feedback'


const LandingPage = () => {
  return (
    <div className="pt-0">
      <Hero/>
      <Journey/>
      <Excellence/>
      <Meet/>
      <Facility/>
      <Feedback/>
   
    </div>
  )
}

export default LandingPage