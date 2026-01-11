import bg from "../../images/bg.png";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const DocHero = () => {
  const [showAvailable, setShowAvailable] = useState(false);

  return (
    <section className="relative w-full h-[420px] sm:h-[460px] md:h-[520px]">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Card (Half overlap) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-90px] sm:bottom-[-110px] w-[92%] sm:w-[88%] lg:w-[85%] max-w-6xl">
        <div
          className="bg-white rounded-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10"
          style={{ boxShadow: "0 10px 34px 0 #02908B" }}
        >
          {/* Title */}
          <h2 className="text-2xl font-semibold text-[#0B5C8F] mb-5 sm:mb-6">
            Find your Doctor
          </h2>

          {/* Inputs */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch md:items-center">
            <input
              type="text"
              placeholder="Enter doctor name"
              className="w-full border rounded-lg px-4 py-3 outline-none"
            />

            <select className="w-full md:w-auto flex-1 border rounded-lg px-4 py-3 text-gray-500">
              <option>Hospital branch</option>
            </select>

            <select className="w-full md:w-auto flex-1 border rounded-lg px-4 py-3 text-gray-500">
              <option>Department</option>
            </select>

            <button className="w-full md:w-auto bg-[#0B5C8F] text-white px-8 py-3 rounded-full font-semibold">
              FIND
            </button>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-5 sm:mt-6 gap-3 sm:gap-4 text-sm text-gray-600">
            <div className="flex flex-wrap gap-4">
              <span className="cursor-pointer flex items-center gap-2">
                Filter By <FaChevronDown />
              </span>
              <span className="cursor-pointer flex items-center gap-2">
                Sort By <FaChevronDown />
              </span>
            </div>

            {/* Custom Toggle Switch */}
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showAvailable}
                onChange={() => setShowAvailable((v) => !v)}
                className="sr-only"
              />
              <span
                className={`relative w-10 h-6 flex-shrink-0 rounded-full transition-colors duration-300
                  ${showAvailable ? "bg-[#18628D]" : "bg-gray-300"}
                `}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300
                    ${showAvailable ? "translate-x-4" : ""}
                  `}
                ></span>
              </span>
              <span>Show only available doctors today</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocHero;
