import about from "../../images/abouthead.png";
import abouthero from "../../images/abouthero.png";

const AboutHead = () => {
  return (
    <div className="relative w-full h-[55vh] xs:h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Mobile Image */}
        <img
          src={abouthero}
          alt="Hero Mobile"
          className="block sm:hidden w-full h-full object-cover"
        />
        {/* Desktop Image */}
        <img
          src={about}
          alt="Hero Desktop"
          className="hidden sm:block w-full h-full object-cover"
        />

        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent sm:from-white/75 sm:via-white/35 sm:to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="w-full px-4 xs:px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            <h1 className="font-oswald font-bold uppercase leading-tight">
              <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0DB1AB] mb-2 xs:mb-3 sm:mb-4 drop-shadow-sm">
                Your Health,<br className="sm:hidden" /> Our Commitment
              </span>
              <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#19628D] drop-shadow-sm">
                Expert Care Made Affordable.
              </span>
            </h1>

            {/* Decorative Line */}
            
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;
