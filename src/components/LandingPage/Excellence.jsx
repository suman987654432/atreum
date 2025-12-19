import React from "react";
import { ArrowRight } from "lucide-react";
import sideImage from "../../images/image.png";
import ortho from "../../images/ortho.png";
import uro from "../../images/uro.png";
import paed from "../../images/paed.png";
import plastics from "../../images/plastics.png";
import gyena from "../../images/gyena.png";
import critical from "../../images/critical.png";

// ===== DATA (JSON) =====
const excellenceData = [
    {
        title: "Orthopaedics",
        desc: "Orthopaedics is a medical speciality that deals with the musculoskeletal system",
        icon: ortho,
    },
    {
        title: "Urology",
        desc: "Urology is a speciality that deals with ailments and disorders of the urinary.",
        icon: uro,
    },
    {
        title: "Paediatrics",
        desc: "Paediatrics (also referred to as paediatrics) is a medical speciality",
        icon: paed,
    },
    {
        title: "Plastic Surgery",
        desc: "At Atreum hospital, our team has access to the most cutting-edge technology",
        icon: plastics,
    },
    {
        title: "Gynaecology",
        desc: "Gynaecology is a speciality that focuses on the female reproductive sysytem",
        icon: gyena,
    },
    {
        title: "Critical Care",
        desc: "Medical care for patients having life-threatening injuries or illnesses",
        icon: critical,
    },
];

const Excellence = () => {
    return (
        <section className="relative bg-[#EDF8FF] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">

            {/* Yellow Circle */}
            <div className="absolute top-6 sm:top-8 md:top-10 right-[10%] sm:right-[15%] md:right-[22%] w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#E2D66B] rounded-full opacity-80"></div>

            {/* Decorative Image */}
            <img
                src={sideImage}
                alt=""
                className="absolute top-6 sm:top-8 md:top-10 right-4 sm:right-6 md:right-10 w-24 sm:w-32 md:w-40 lg:w-48 opacity-90"
            />

            {/* Heading */}
            <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b8c86] mb-3 sm:mb-4">
                    ATREUM CENTERS OF EXCELLENCE
                </h2>
                <p className="mt-2 sm:mt-3 md:mt-4 text-gray-700 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
                    At Atreum, we provide world-class quality clinical care and
                    comprehensive facilities for all patients. Our team of dedicated,
                    highly qualified doctors ensure quality care in a safe and
                    comfortable environment.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {excellenceData.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-white rounded-2xl border border-gray-200/60
                            p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8
                            shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                            transition-all duration-300 ease-out
                            hover:-translate-y-2
                            hover:shadow-[0_10px_30px_rgba(0,0,0,0.14)]
                        "
                    >
                        {/* Icon box */}
                        <div
                            className="
                                w-24 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 bg-[#18628D]
                                rounded-xl flex items-center justify-center
                                shadow-[0_6px_32px_rgba(13,177,171,0.45)]
                                shrink-0
                            "
                        >
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

                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed min-h-[48px] sm:min-h-[64px]">
                                    {item.desc}
                                </p>
                            </div>

                            {/* View More */}
                            <button
                                className="
                                    mt-4 sm:mt-5 inline-flex items-center justify-center sm:justify-start gap-2
                                    text-[#18628D] font-semibold text-sm sm:text-base
                                    transition-all duration-300
                                    hover:gap-3 group
                                "
                            >
                                View More
                                <ArrowRight
                                    size={16}
                                    className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1"
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
