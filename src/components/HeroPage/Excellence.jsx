import { useNavigate } from "react-router-dom";
import ortho1 from "../../images/ortho1.png"
import uro from "../../images/uro.png"
import plastics from "../../images/plastics.png"
import gyna from "../../images/gyna.png"
import pedia from "../../images/pedia.png"
import critical from "../../images/critical.png"
import derma from "../../images/derma.png"
import endrio from "../../images/endrio.png"
import gastro from "../../images/gastro.png"
import general from "../../images/general.png"
import nephro from "../../images/nephro.png"
import neuro from "../../images/neuro.png"
import onco from "../../images/onco.png"
import vas from "../../images/vas.png"
import ent from "../../images/ent.png"





const careData = [
    {
        id: 1,
        title: "Orthopaedics",
        slug: "orthopedics",
        image: ortho1,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 2,
        title: "Urology",
        slug: "urology",
        image: uro,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 4,
        title: "Gynaecology",
        slug: "obstetrics-gynecology",
        image: gyna,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },

    {
        id: 7,
        title: "Neurology",
        slug: "neurology",
        image: neuro, // Placeholder
        description: "The Neurology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 8,
        title: "Nephrology",
        slug: "nephrology",
        image: nephro, // Placeholder
        description: "The Nephrology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 9,
        title: "Gastroenterology",
        slug: "gastroenterology",
        image: gastro, // Placeholder
        description: "The Gastroenterology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },

    {
        id: 5,
        title: "Pediatrics",
        slug: "pediatrics",
        image: pedia,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 11,
        title: "Endocrinology",
        slug: "endocrinology",
        image: endrio, // Placeholder
        description: "The Endocrinology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 13,
        title: "Oncology",
        slug: "oncology",
        image: onco, // Placeholder
        description: "The Oncology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 6,
        title: "Critical Care",
        slug: "critical-care",
        image: critical,
        description: "The Critical Care Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },

    {
        id: 10,
        title: "Dermatology",
        slug: "dermatology",
        image: derma, // Placeholder    
        description: "The Dermatology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },

    {
        id: 15,
        title: "ENT",
        slug: "ent",
        image: ent, // Placeholder
        description: "The ENT Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },

    {
        id: 3,
        title: "Plastic Surgery",
        slug: "plastics",
        image: plastics,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },

    {
        id: 12,
        title: "General Surgery",
        slug: "general-surgery",
        image: general, // Placeholder
        description: "The General Surgery Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 14,
        title: "Vascular Surgery",
        slug: "vascular-surgery",
        image: vas, // Placeholder
        description: "The Vascular Surgery Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
];


const Excellence = () => {
    const navigate = useNavigate();
    return (
        <div className="relative -mt-4 z-20 bg-white/20 backdrop-blur-md border-b border-white/30 rounded-xl sm:rounded-2xl md:rounded-3xl pt-8 sm:pt-10 pb-8 sm:pb-10 md:pb-12 mx-4 sm:mx-6 lg:mx-8">
            <div className="px-3 sm:px-4 lg:px-5 w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-10 sm:mb-12 md:mb-16 gap-5 sm:gap-6 md:gap-8 lg:gap-10 px-0">
                    <div className="w-full md:w-2/5 max-w-[600px] text-center md:text-left md:pl-3 lg:pl-5">
                        <h2 className="text-[#19628D]">
                            <span className="font-canela font-bold italic text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight tracking-normal">Atreum Center of Excellence </span>
                        </h2>
                    </div>
                    <div className="w-full md:w-3/5 max-w-[680px] text-center md:text-left mt-2 md:mt-0">
                        <p className="text-black font-sohne font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-tight tracking-normal">
                            At Atreum, we combine expert doctors with advanced medical facilities to deliver care that prioritises your safety, comfort, and recovery.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                    {careData.map((item) => (
                        <div 
                            key={item.id} 
                            onClick={() => navigate(`/department/${item.slug}`)}
                            className="bg-[#F9F9F9] rounded-2xl px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 flex flex-row justify-between items-center gap-3 sm:gap-4 w-full min-h-[11rem] sm:min-h-[11.5rem] lg:min-h-[12.5rem] cursor-pointer hover:bg-gray-50 hover:shadow-sm transition-all duration-300"
                        >
                            <div className="flex flex-col flex-1 min-w-0">
                                <h3 className="font-canela font-bold text-[19px] sm:text-[21px] md:text-[23px] lg:text-[26px] leading-[115%] tracking-normal text-[#19628D] mb-1 sm:mb-2 md:mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-sohne font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] text-[#000000]">
                                    The <span className="font-sohne font-semibold text-black">{item.title} Specialists</span> at Atreum Hospitals represent a multidisciplinary team of <span className="font-sohne font-semibold text-black">experienced consultants</span>, each focused on a specific area.
                                </p>
                            </div>
                            <div className="w-20 h-28 sm:w-24 sm:h-32 md:w-24 md:h-36 lg:w-28 lg:h-40 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Excellence;