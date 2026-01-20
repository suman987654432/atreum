import about from "../../images/abouthead.png";

const AboutHead = () => {
  return (
    <div className="relative h-[50vh] xs:h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[88vh] w-full bg-slate-50 sm:bg-transparent overflow-hidden">
      <img
        src={about}
        alt="Hero"
        className="hidden sm:block h-full w-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full">
          <h1 className="uppercase font-bold font-oswald text-[#19628D] leading-tight max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
            <div className="flex flex-col space-y-1 xs:space-y-2 sm:space-y-2 md:space-y-3">
              <span className="block text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="text-[#0DB1AB]">Your Health, Our Commitment</span> 
              </span>
              <span className="block text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Expert Care Made Affordable
              </span>
           
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;
