import React from 'react';
import heroortho from "../../images/heroortho.png";
import { Phone, MessageCircle } from 'lucide-react';

const Ortho = () => {
    return (
        <div className="relative w-full min-h-screen h-auto lg:h-screen font-sans">
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
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-0">

                    {/* Left Side Content */}
                    <div className="w-full lg:w-1/2 text-white flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 lg:pl-12 xl:pl-56 mb-8 lg:mb-0">
                        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                            <h1 className="font-canela font-normal text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[32px] sm:leading-[42px] md:leading-[48px] lg:leading-[54px] tracking-normal">
                                Open doors <br />
                                to
                                <span className="font-canela font-bold italic text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[32px] sm:leading-[42px] md:leading-[48px] lg:leading-[54px] tracking-normal"> health.</span>
                            </h1>
                            <h1 className="font-canela font-normal text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[32px] sm:leading-[42px] md:leading-[48px] lg:leading-[54px] tracking-normal">
                                Open doors <br />
                                to
                                <span className="font-canela font-bold italic text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[32px] sm:leading-[42px] md:leading-[48px] lg:leading-[54px] tracking-normal"> Atreum</span>
                            </h1>
                        </div>

                        {/* Bottom Contact Buttons */}
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <button className="flex items-center gap-2 bg-transparent border border-white/70 hover:bg-white/10 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-sm transition-all group">
                                <MessageCircle size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                                <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold">WhatsApp</span>
                            </button>
                            <button className="flex items-center gap-2 bg-transparent border border-white/70 hover:bg-white/10 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-sm transition-all group">
                                <Phone size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                                <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold">Call Us</span>
                            </button>
                        </div>
                    </div>
                    {/* Right Side Form */}
                    <div className="w-full lg:w-[600px] max-w-full lg:max-w-[600px] px-4 sm:px-0">
                        <div className="bg-[#2C747C80] border-[1px] border-[#FFFFFF61] p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl">
                            <h3 className="text-white font-canela font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-[28px] sm:leading-[30px] md:leading-[31px] tracking-normal text-center">
                                <span className="font-bold italic">Unconditional care</span> begins
                            </h3>
                            <h3 className="text-white font-canela font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-[28px] sm:leading-[30px] md:leading-[31px] tracking-normal text-center mb-6 sm:mb-8">
                                with knowing you
                            </h3>

                            <form className="space-y-3 sm:space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-[#ffffff1a] border border-transparent rounded-lg text-white placeholder-white/70 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] transition-all font-sohne"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full bg-[#ffffff1a] border border-transparent rounded-lg text-white placeholder-white/70 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] transition-all font-sohne"
                                    />
                                </div>

                                <div className="relative">
                                    <select
                                        className="w-full bg-[#ffffff1a] border border-transparent rounded-lg text-white placeholder-white/70 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] transition-all appearance-none cursor-pointer"
                                        defaultValue=""
                                    >
                                        <option value="" disabled className="text-gray-400 bg-[#19628DE0] font-sohne font-normal text-[14px] sm:text-[16px] leading-[31px] tracking-normal">State Your Concern</option>
                                        <option value="knee" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] sm:text-[16px] leading-[31px] tracking-normal">Knee Replacement</option>
                                        <option value="joint" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] sm:text-[16px] leading-[31px] tracking-normal">Joint Replacement</option>
                                        <option value="trauma" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] sm:text-[16px] leading-[31px] tracking-normal">Trauma and Fracture Care</option>
                                        <option value="sports" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] sm:text-[16px] leading-[31px] tracking-normal">Sports Medicine Surgery</option>
                                        <option value="hand" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] sm:text-[16px] leading-[31px] tracking-normal">Hand and Wrist Surgery</option>
                                        <option value="deformity" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] sm:text-[16px] leading-[31px] tracking-normal">Deformity Correction</option>
                                        <option value="pediatric" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] sm:text-[16px] leading-[31px] tracking-normal">Pediatric Ortho</option>
                                        <option value="shoulder" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] sm:text-[16px] leading-[31px] tracking-normal">Shoulder Surgery</option>
                                    </select>

                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none pr-3 sm:pr-4">
                                        <svg width="10" height="7" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-3 sm:h-2">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="pt-4 sm:pt-6 text-center">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-[#0FB1AB33] border border-[#0FFFFFF] hover:bg-[#347d8b] text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded shadow-lg uppercase tracking-wide text-xs sm:text-sm transition-all duration-300"
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