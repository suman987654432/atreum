import React from 'react';
import heroortho from "../../images/heroortho.png";
import { Phone, MessageCircle } from 'lucide-react';

const Ortho = () => {
    return (
        <div className="relative w-full min-h-screen h-auto lg:h-screen font-sans overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroortho}
                    alt="Orthopedics Background"
                    className="w-full h-full object-cover object-center sm:object-top"
                />
                {/* Overlay - Darker teal overlay to match the reference */}
                <div className="absolute inset-0 bg-[#0e4857]/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center justify-between h-full pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-0 gap-8 lg:gap-0">

                    {/* Left Side Content */}
                    <div className="w-full lg:w-1/2 text-white flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-6 sm:gap-6 lg:gap-8 lg:pl-0 xl:pl-8">
                        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                            <h1 className="font-canela font-normal text-[32px] sm:text-[38px] md:text-[42px] lg:text-[43px] leading-[36px] sm:leading-[44px] md:leading-[48px] lg:leading-[54px] tracking-normal">
                                Open doors <br />
                                to
                                <span className="font-canela font-bold italic text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[36px] sm:leading-[44px] md:leading-[48px] lg:leading-[54px] tracking-normal"> health.</span>
                            </h1>
                            <h1 className="font-canela font-normal text-[32px] sm:text-[38px] md:text-[42px] lg:text-[43px] leading-[36px] sm:leading-[44px] md:leading-[48px] lg:leading-[54px] tracking-normal">
                                Open doors <br />
                                to
                                <span className="font-canela font-bold italic text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[36px] sm:leading-[44px] md:leading-[48px] lg:leading-[54px] tracking-normal"> Atreum</span>
                            </h1>
                        </div>

                       
                    </div>
                    {/* Right Side Form */}
                    <div className="w-full lg:w-[600px] max-w-full lg:max-w-[600px] lg:ml-auto">
                        <div className="bg-[#2C747C80] border-[1px] border-[#FFFFFF61] p-6 sm:p-7 md:p-8 rounded-xl shadow-2xl bg-blur-lg backdrop-blur-md">
                            <h3 className="text-white font-canela font-normal text-[22px] sm:text-[28px] md:text-[32px] leading-[30px] sm:leading-[32px] md:leading-[36px] tracking-normal text-center">
                                <span className="font-bold italic">Unconditional care</span> begins
                            </h3>
                            <h3 className="text-white font-canela font-normal text-[22px] sm:text-[28px] md:text-[32px] leading-[30px] sm:leading-[32px] md:leading-[36px] tracking-normal text-center mb-6 sm:mb-8">
                                with knowing you
                            </h3>

                            <form className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-[#ffffff1a] border border-transparent rounded-lg text-white placeholder-white/70 px-4 py-3 text-base focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] transition-all font-sohne"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full bg-[#ffffff1a] border border-transparent rounded-lg text-white placeholder-white/70 px-4 py-3 text-base focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] transition-all font-sohne"
                                    />
                                </div>

                                <div className="relative">
                                    <select
                                        className="w-full bg-[#ffffff1a] border border-transparent rounded-lg text-white placeholder-white/70 px-4 py-3 text-base focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] transition-all appearance-none cursor-pointer"
                                        defaultValue=""
                                    >
                                        <option value="" disabled className="text-gray-400 bg-[#19628DE0] font-sohne font-normal text-[16px] leading-[31px] tracking-normal">State Your Concern</option>
                                        <option value="knee" className="text-white bg-[#19628DE0] font-sohne font-normal text-[16px] leading-[31px] tracking-normal">Knee Replacement</option>
                                        <option value="joint" className="text-white bg-[#19628DE0] font-sohne font-normal text-[16px] leading-[31px] tracking-normal">Joint Replacement</option>
                                        <option value="trauma" className="text-white bg-[#19628DE0] font-sohne font-normal text-[16px] leading-[31px] tracking-normal">Trauma and Fracture Care</option>
                                        <option value="sports" className="text-white bg-[#19628DE0] font-sohne font-normal text-[16px] leading-[31px] tracking-normal">Sports Medicine Surgery</option>
                                        <option value="hand" className="text-white bg-[#19628DE0] font-sohne font-normal text-[16px] leading-[31px] tracking-normal">Hand and Wrist Surgery</option>
                                        <option value="deformity" className="text-white bg-[#19628DE0] font-sohne font-normal text-[16px] leading-[31px] tracking-normal">Deformity Correction</option>
                                        <option value="pediatric" className="text-white bg-[#19628DE0] font-sohne font-normal text-[16px] leading-[31px] tracking-normal">Pediatric Ortho</option>
                                        <option value="shoulder" className="text-white bg-[#19628DE0] font-sohne font-normal text-[16px] leading-[31px] tracking-normal">Shoulder Surgery</option>
                                    </select>

                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none pr-4">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="pt-6 text-center">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-[#0FB1AB33] border border-[#0FFFFFF] hover:bg-[#347d8b] text-white font-bold py-3 px-8 rounded shadow-lg uppercase tracking-wide text-sm transition-all duration-300"
                                    >
                                        GET COST ESTIMATE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Ortho;