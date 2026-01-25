import bg from "../../images/bg.png";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const DocHero = () => {
  const [showAvailable, setShowAvailable] = useState(false);

  return (
    <section className="relative w-full h-[360px] xs:h-[400px] sm:h-[440px] md:h-[500px] lg:h-[520px]">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Card (Half overlap) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-90px] xs:bottom-[-95px] sm:bottom-[-100px] md:bottom-[-110px] w-[95%] xs:w-[94%] sm:w-[92%] md:w-[90%] lg:w-[88%] xl:w-[85%] max-w-6xl">
        <div
          className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl px-3 xs:px-4 sm:px-6 md:px-7 lg:px-10 py-5 xs:py-6 sm:py-8 md:py-9 lg:py-10"
          style={{ boxShadow: "0 10px 34px 0 #02908B" }}
        >
          {/* Title */}
          <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#0B5C8F] mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            Find your Doctor
          </h2>

          {/* Inputs */}
          <div className="flex flex-col md:flex-row gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 items-stretch md:items-center">
            <input
              type="text"
              placeholder="Enter doctor name"
              className="w-full border border-gray-300 rounded-lg px-3 xs:px-3.5 sm:px-4 py-2 xs:py-2.5 sm:py-3 outline-none focus:border-[#0B5C8F] text-xs xs:text-sm sm:text-base transition-colors"
            />

            <select className="w-full md:w-auto md:flex-1 border border-gray-300 rounded-lg px-3 xs:px-3.5 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-gray-500 text-xs xs:text-sm sm:text-base outline-none focus:border-[#0B5C8F] transition-colors">
              <option>Hospital branch</option>
            </select>

            <select className="w-full md:w-auto md:flex-1 border border-gray-300 rounded-lg px-3 xs:px-3.5 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-gray-500 text-xs xs:text-sm sm:text-base outline-none focus:border-[#0B5C8F] transition-colors">
              <option>Department</option>
            </select>

            <button className="w-full md:w-auto bg-[#0B5C8F] hover:bg-[#094a70] text-white px-5 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full font-semibold text-xs xs:text-sm sm:text-base transition-colors">
              FIND
            </button>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 xs:mt-4 sm:mt-5 md:mt-6 gap-2.5 xs:gap-3 text-[10px] xs:text-xs sm:text-sm text-gray-600">
            <div className="flex flex-wrap gap-2.5 xs:gap-3 sm:gap-4">
              <span className="cursor-pointer flex items-center gap-1.5 xs:gap-2 hover:text-[#0B5C8F] transition-colors">
                Filter By <FaChevronDown className="text-[8px] xs:text-[10px]" />
              </span>
              <span className="cursor-pointer flex items-center gap-1.5 xs:gap-2 hover:text-[#0B5C8F] transition-colors">
                Sort By <FaChevronDown className="text-[8px] xs:text-[10px]" />
              </span>
            </div>

            {/* Custom Toggle Switch */}
            <label className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showAvailable}
                onChange={() => setShowAvailable((v) => !v)}
                className="sr-only"
              />
              <span
                className={`relative w-8 xs:w-9 sm:w-10 h-[18px] xs:h-5 sm:h-6 flex-shrink-0 rounded-full transition-colors duration-300
                  ${showAvailable ? "bg-[#18628D]" : "bg-gray-300"}
                `}
              >
                <span
                  className={`absolute top-[2px] xs:top-0.5 sm:top-1 left-[2px] xs:left-0.5 sm:left-1 w-[14px] xs:w-4 sm:w-4 h-[14px] xs:h-4 sm:h-4 rounded-full bg-white shadow-md transition-transform duration-300
                    ${showAvailable ? "translate-x-[18px] xs:translate-x-3.5 sm:translate-x-4" : ""}
                  `}
                ></span>
              </span>
              <span className="text-[10px] xs:text-xs sm:text-sm leading-tight">Show only available doctors today</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocHero;
