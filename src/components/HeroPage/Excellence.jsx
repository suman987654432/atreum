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
        image: ortho1,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 2,
        title: "Urology",
        image: uro,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 3,
        title: "Plastic Surgery",
        image: plastics,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 4,
        title: "Gynaecology",
        image: gyna,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 5,
        title: "Pediatrics",
        image: pedia,
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 6,
        title: "Critical Care",
        image: critical,
        description: "The Critical Care Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 7,
        title: "Neurology",
        image: neuro, // Placeholder
        description: "The Neurology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 8,
        title: "Nephrology",
        image: nephro, // Placeholder
        description: "The Nephrology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 9,
        title: "Gastroenterology",
        image: gastro, // Placeholder
        description: "The Gastroenterology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 10,
        title: "Dermatology",
        image: derma, // Placeholder
        description: "The Dermatology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 11,
        title: "Endocrinology",
        image: endrio, // Placeholder
        description: "The Endocrinology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 12,
        title: "General Surgery",
        image: general, // Placeholder
        description: "The General Surgery Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 13,
        title: "Oncology",
        image: onco, // Placeholder
        description: "The Oncology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 14,
        title: "Vascular Surgery",
        image: vas, // Placeholder
        description: "The Vascular Surgery Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    },
    {
        id: 15,
        title: "ENT",
        image: ent, // Placeholder
        description: "The ENT Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area."
    }
];

const Excellence = () => {
    return (
        <div className="relative -mt-4 z-20 bg-white/20 backdrop-blur-md border-b border-white/30 rounded-xl sm:rounded-2xl md:rounded-3xl pt-8 sm:pt-10 pb-8 sm:pb-10 md:pb-12 mx-1 sm:mx-2 md:mx-3 lg:mx-4">
            <div className="px-2 sm:px-4 w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6 md:gap-10 lg:gap-16 px-1 sm:px-2 md:px-8 lg:px-12">
                    <div className="w-full md:w-[40%] max-w-[600px] text-center md:text-left">
                        <h2 className="text-[#19628D]">
                            <span className="font-canela font-bold italic text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight tracking-normal">Atreum Center of Excellence </span>
                        </h2>
                    </div>
                    <div className="w-full md:w-[60%] max-w-[600px] text-center md:text-left mt-2 md:mt-4">
                        <p className="text-black font-sohne font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-tight tracking-normal">
                            At Atreum, we combine expert doctors with advanced medical facilities to deliver care that prioritises your safety, comfort, and recovery.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-items-center px-1 sm:px-0">
                    {careData.map((item) => (
                        <div key={item.id} className="bg-[#F9F9F9] rounded-[16px] sm:rounded-[18px] pt-2 sm:pt-3 md:pt-4 px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 flex flex-row justify-between items-center gap-2 sm:gap-3  w-full max-w-[520px] min-h-[120px] sm:min-h-[150px] md:min-h-[170px]">
                            <div className="flex flex-col flex-1 min-w-0 ml-2 sm:ml-3 md:ml-4">
                                <h3 className="font-canela font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] leading-[110%] tracking-normal text-[#19628D] mb-1 sm:mb-2 md:mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-sohne font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] text-[#000000]">
                                    The <span style={{ fontFamily: 'Test Söhne', fontWeight: 600, fontSize: '17px', lineHeight: '22px', letterSpacing: '0%' }} className="text-black">{item.title} Specialists</span> at Atreum Hospitals represent a multidisciplinary team of <span style={{ fontFamily: 'Test Söhne', fontWeight: 600, fontSize: '17px', lineHeight: '22px', letterSpacing: '0%' }} className="text-black">experienced consultants</span>, each focused on a specific area.
                                </p>
                            </div>
                            <div className="w-[80px] h-[115px] sm:w-[100px] sm:h-[145px] md:w-[120px] md:h-[180px] lg:w-[140px] lg:h-[200px] flex-shrink-0 flex items-center justify-center">
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