import ortho1 from "../../images/ortho1.png"


const careData = [
    {
        id: 1,
        title: "Orthopaedics",
        description: "The Orthopaedics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area.",
        image: ortho1,
        width: "col-span-1",
    },
    {
        id: 2,
        title: "Urology",
        description: "The Urology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area.",
        image: ortho1,
        width: "col-span-1",
    },
    {
        id: 3,
        title: "Plastic Surgery",
        description: "The Plastic Surgery Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area.",
        image: ortho1,
        width: "col-span-1",
    },
    {
        id: 4,
        title: "Gynaecology",
        description: "The Gynaecology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area.",
        image: ortho1,
        width: "col-span-1",
    },
    {
        id: 5,
        title: "Pediatrics",
        description: "The Pediatrics Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area.",
        image: ortho1,
        width: "col-span-1",
    },
    {
        id: 6,
        title: "Critical Care",
        description: "The Critical Care Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on a specific area.",
        image: ortho1,
        width: "col-span-1",
    }
];

const Excellence = () => {
    return (
        <div className="relative -mt-4 z-20 bg-white/20 backdrop-blur-md border-b border-white/30 rounded-3xl pt-8 pb-16 mx-2 md:mx-3 lg:mx-4">
            <div className="px-4 w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-center mb-12 gap-6">
                    <div className="md:w-2/5 md:ml-8 lg:ml-12 max-w-[600px] text-center md:text-left">
                        <h2 className="text-[#19628D]">
                            <span className="font-canela font-bold italic text-[33px] leading-[59px] tracking-normal">Atreum Center of Excellence </span>
                            {/* <span className="font-canela font-bold italic text-[32px] leading-[32px] tracking-normal">Atreum</span> */}
                        </h2>
                    </div>
                    <div className="md:w-2/5 md:ml-2 lg:ml-4 max-w-[600px] text-center md:text-left">
                        <p className="font-sohne font-normal text-[18px] leading-[26px] tracking-normal text-black/80">
                            At Atreum, we combine expert doctors with advanced medical facilities to deliver care that prioritises your safety, comfort, and recovery.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {careData.map((item) => (
                        <div key={item.id} className={`bg-[#F9F9F9] rounded-2xl p-3 md:p-4 flex flex-row justify-between items-start gap-3 ${item.width}`}>
                            <div className="flex flex-col flex-1 mt-4">
                                <h3 className="font-canela font-bold text-[29px] leading-[100%] tracking-normal text-[#19628D] mb-4">
                                    {item.title}
                                </h3>
                                <p className="font-sohne font-normal text-[16px] leading-[26px] tracking-normal text-black/80">
                                    The <span className="font-semibold">{item.title} Specialists</span> at Atreum Hospitals represent a multidisciplinary team of <span className="font-semibold">experienced consultants</span>, each focused on a specific area.
                                </p>
                            </div>
                            <div className="w-[158px] h-[220px] flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain"
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