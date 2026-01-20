import React from "react";
import { ArrowRight } from "lucide-react";
import sideImage from "../../images/image.png";
import ortho from "../../images/ortho.png";
import uro from "../../images/uro.png";
import paed from "../../images/paed.png";
import plastics from "../../images/plastics.png";
import gyena from "../../images/gyena.png";
import critical from "../../images/critical.png";

const excellenceData = [
  {
    title: "Orthopaedics",
    desc: "Orthopaedics is a medical speciality that deals with the musculoskeletal system.",
    icon: ortho,
  },
  {
    title: "Urology",
    desc: "Urology deals with ailments and disorders of the urinary system.",
    icon: uro,
  },
  {
    title: "Paediatrics",
    desc: "Paediatrics is a medical speciality focused on children’s health.",
    icon: paed,
  },
  {
    title: "Plastic Surgery",
    desc: "Advanced reconstructive and cosmetic procedures with modern technology.",
    icon: plastics,
  },
  {
    title: "Gynaecology",
    desc: "Care focused on the female reproductive system and wellbeing.",
    icon: gyena,
  },
  {
    title: "Critical Care",
    desc: "Specialized care for patients with life-threatening conditions.",
    icon: critical,
  },
];

const Excellence = () => {
  return (
    <section className="relative bg-[#EDF8FF] py-14 sm:py-18 md:py-22 lg:py-28 px-4 sm:px-6 lg:px-20 overflow-hidden">

      {/* Decorative Elements (hidden on small screens) */}
      <div className="hidden sm:block absolute top-10 right-[18%] w-28 h-28 bg-[#E2D66B] rounded-full opacity-80" />
      <img
        src={sideImage}
        alt=""
        className="hidden md:block absolute top-10 right-10 w-40 lg:w-48 opacity-90"
      />

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b8c86] mb-4">
          ATREUM CENTER OF EXCELLENCE
        </h2>
        <p className="text-gray-700 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
          At Atreum, we combine expert doctors with advanced medical facilities to deliver care that prioritises your safety, comfort, and recovery.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {excellenceData.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl border border-gray-200/60
              p-5 sm:p-6 md:p-8
              flex flex-col sm:flex-row gap-5
              items-center sm:items-start
              shadow-[0_4px_20px_rgba(0,0,0,0.08)]
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)]
            "
          >
            {/* Icon */}
            <div className="w-24 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 bg-[#18628D] rounded-xl flex items-center justify-center shrink-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between h-full text-center sm:text-left">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#18628D] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed min-h-[56px]">
                  {item.desc}
                </p>
              </div>

              <button className="mt-4 inline-flex items-center gap-2 text-[#18628D] font-semibold text-sm sm:text-base hover:gap-3 transition-all group">
                View More
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Excellence;
