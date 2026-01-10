import bg from "../../images/bg.png";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const DocHero = () => {
  const [showAvailable, setShowAvailable] = useState(false);

  return (
    <section className="relative w-full h-[450px]">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Card (Half overlap) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-110px] w-[85%]">
        <div
          className="bg-white rounded-2xl px-8 py-10"
          style={{ boxShadow: "0 10px 34px 0 #02908B" }}
        >
          {/* Title */}
          <h2 className="text-2xl font-semibold text-[#0B5C8F] mb-6">
            Find your Doctor
          </h2>

          {/* Inputs */}
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Enter doctor name"
              className="flex-1 border rounded-lg px-4 py-3 outline-none"
            />

            <select className="flex-1 border rounded-lg px-4 py-3 text-gray-500">
              <option>Hospital branch</option>
            </select>

            <select className="flex-1 border rounded-lg px-4 py-3 text-gray-500">
              <option>Department</option>
            </select>

            <button className="bg-[#0B5C8F] text-white px-8 py-3 rounded-full font-semibold">
              FIND
            </button>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
            <div className="flex gap-6">
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
