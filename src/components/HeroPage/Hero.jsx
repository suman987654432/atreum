import heroortho from "../../images/heroortho.png";
import { BsChevronDown } from "react-icons/bs";


const Hero = () => {


  return (
    <div className="relative w-full font-sans overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full">
        <img
          src={heroortho}
          alt="Orthopedics Background"
          className="w-full h-[100vh] object-cover "
        />
        {/* Overlay - Darker teal overlay */}
        <div className="absolute inset-0 bg-[#0e4857]/70"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-center p-4 gap-6 sm:gap-8 -translate-y-12 md:translate-y-0">
          <h1 className="text-white font-canela font-normal text-[2rem] sm:text-[2.625rem] md:text-[3.375rem] leading-[1.2] md:leading-[1.1] tracking-normal text-center max-w-[90%] md:max-w-none">
            Your Journey towards <span className="font-bold italic">better </span><br className="hidden sm:block" />
            <span className="font-bold italic"> health</span> starts with <span className="font-bold italic">Atreum</span>
          </h1>

          <a href="tel:9606970542" className="w-[12.5rem] h-[2.75rem] bg-[#19628D]/40 text-white font-sohne font-semibold text-[1.25rem] rounded-full border border-white/50 hover:bg-[#19628D]/60 transition-all duration-300 mt-2 flex items-center justify-center backdrop-blur-sm">
            CONTACT US
          </a>
        </div>

        {/* Scroll to Explore */}
        <div
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <BsChevronDown className="text-white text-[1.5rem] animate-bounce" />
          <span className="text-white font-sohne font-semibold text-[1.125rem] leading-none tracking-normal">Scroll to Explore</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;