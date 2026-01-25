
import hospital from "../../images/hospital.png";
import doctor from "../../images/streth.png";
import delivery from "../../images/child.png";
import surgery from "../../images/scissor.png";

/* ========= CARD DATA (JSON) ========= */
const journeyData = [
    { count: "3+", label: "Hospitals", img: hospital },
    { count: "100+", label: "Doctors", img: doctor },
    { count: "2500+", label: "Deliveries", img: delivery },
    { count: "7500+", label: "Surgeries", img: surgery },
];

const Journey = () => {
 

    return (
        <>
         
                <div  className="relative bg-[#EDF8FF] py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
                    {/* Heading */}
                    <h2
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#02908B] mb-8 sm:mb-12 md:mb-16 relative z-10 transition-all duration-300"
                    >
                        OUR JOURNEY SO FAR
                    </h2>

                    {/* Yellow circle (LEFT) */}
                    <div
                        className="absolute left-4 sm:left-12 md:left-24 top-[30%] w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-[#E2D66B] rounded-full z-0 transition-all duration-300"
                    ></div>

                    {/* Green circle (RIGHT) - half visible */}
                    <div
                        className="absolute -right-10 sm:-right-16 md:-right-20 top-[20%] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#12B0A6] rounded-full z-0 transition-all duration-300"
                    ></div>

                    {/* Cards Wrapper */}
                    <div
                        className="relative flex justify-center gap-6 sm:gap-8 md:gap-10 flex-wrap z-10 transition-all duration-300"
                    >
                        {journeyData.map((item, index) => (
                            <div key={index} className="relative w-[160px] h-[240px] sm:w-[180px] sm:h-[260px] md:w-[200px] md:h-[290px] rounded-[40px]">
                                {/* Gradient border - top */}
                                <div className="absolute top-0 left-0 right-0 h-[45%] p-1 rounded-t-[40px] bg-gradient-to-b from-[#80E4DF] to-[#80E4DF] z-10">
                                    <div className="w-full h-full rounded-t-[38px]"></div>
                                </div>

                                {/* Gradient border - bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-[45%] p-[2px] rounded-b-[40px] bg-gradient-to-b from-[#80E4DF] to-[#18628D] z-10">
                                    <div className="w-full h-full rounded-b-[10px]"></div>
                                </div>
                                {/* Left circular cutout */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 overflow-hidden z-40">
                                    <div className="w-8 h-8 bg-[#eef8fc] border-[3px] border-[#6ecad3] rounded-full -translate-x-1/2"></div>
                                </div>
                                {/* Right circular cutout */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-19 overflow-hidden z-40">
                                    <div className="w-8 h-8 border-[3px] border-[#6ecad3] rounded-full -translate-1/2"></div>
                                </div>

                                {/* Inner card */}
                                <div className="absolute inset-1 bg-[#EDF8FF] rounded-[36px] flex flex-col items-center z-20">
                                    {/* Icon */}
                                    <div className="mt-4 sm:mt-6 md:mt-7">
                                        <div className="p-4 sm:p-5 md:p-6 rounded-2xl flex items-center justify-center">
                                            <img src={item.img} alt={item.label} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
                                        </div>
                                    </div>

                                    {/* Dotted line */}
                                    <div className="w-full px-3 sm:px-4 md:px-5 mt-0">
                                        <div className="border-t-2 border-dashed border-[#6ecad3]"></div>
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col items-center justify-center flex-1 text-[#1d5e8a]">
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{item.count}</h1>
                                        <p className="text-sm sm:text-base md:text-lg font-semibold mt-1 sm:mt-2">{item.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
          
        </>
    );
};

export default Journey;
