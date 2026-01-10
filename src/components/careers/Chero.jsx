import career from "../../images/career.png";
import bg from "../../images/bg.png";

const Chero = () => {
  return (
    <div
      className="relative h-[55vh] xs:h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[95vh] w-full flex flex-col sm:flex-row items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Text */}
      <div className="flex-1 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-0">
        <h1 className="uppercase font-semibold font-oswald text-[#19628D] leading-tight max-w-full sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-3xl">
          <span className="block text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
            At <span className="text-[#0DB1AB]">Atreum</span> , we grow talent to build meaningful impact together.
          </span>
        </h1>
      </div>

      {/* Right Image */}
      <div className="hidden sm:flex flex-1 h-full justify-end items-end pr-4 sm:pr-6 md:pr-10 lg:pr-12 xl:pr-16">
        <img
          src={career}
          alt="Career"
          className="object-contain h-[50%] sm:h-[60%] md:h-[70%] lg:h-[75%] xl:h-[80%] w-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default Chero;
