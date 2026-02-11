import React from 'react';
import heroortho from "../../images/heroortho.png";
import { Phone, MessageCircle } from 'lucide-react';

const Ortho = () => {
    return (
        <div className="relative w-full h-screen font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroortho}
                    alt="Orthopedics Background"
                    className="w-full h-full object-cover object-top"
                />
                {/* Overlay - Darker teal overlay to match the reference */}
                <div className="absolute inset-0 bg-[#0e4857]/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full pt-20">

                    {/* Left Side Content */}
                    <div className="hidden lg:flex w-full lg:w-1/2 text-white flex-col justify-center gap-8 pl-4 lg:pl-12 mt-10 lg:mt-0">
                        <div className="space-y-12">
                            <h1 className="text-4xl md:text-6xl lg:text-6xl  tracking-wide leading-tight mt-4 font-serif">
                                Open doors <br />
                                to
                                <span className="font-canela lg:text-6xl font-bold italic text-[48px] leading-[54px] tracking-normal"> health.</span>
                            </h1>
                            <h1 className="text-4xl md:text-6xl lg:text-6xl  tracking-wide leading-tight mt-4 font-serif">
                                Open doors <br />
                                to
                                <span className="font-canela font-bold lg:text-6xl text-[48px] leading-[54px] tracking-normal"> Atreum</span>
                            </h1>
                        </div>

                        {/* Bottom Contact Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="flex items-center gap-2 bg-transparent border border-white/70 hover:bg-white/10 text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all group">
                                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                                <span className="uppercase tracking-widest text-sm font-semibold">WhatsApp</span>
                            </button>
                            <button className="flex items-center gap-2 bg-transparent border border-white/70 hover:bg-white/10 text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all group">
                                <Phone size={20} className="group-hover:scale-110 transition-transform" />
                                <span className="uppercase tracking-widest text-sm font-semibold">Call Us</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="w-full lg:w-[500px] lg:mr-12 mb-10 lg:mb-0 mt-10 lg:mt-0">
                        <div className="bg-[#1f4d55] p-8 md:p-8 rounded-xl shadow-2xl">
                            <h3 className="text-white text-2xl md:text-3xl font-serif  text-center leading-tight">
                                <span className="font-canela font-bold italic">Unconditional care</span> begins
                            </h3>
                            <h3 className="text-white text-2xl md:text-3xl font-serif  text-center leading-tight mb-8">
                                with knowing you
                            </h3>

                            <form className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-[#ffffff1a] border border-transparent rounded-lg text-white placeholder-white/70 px-4 py-3 focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] transition-all font-sohne"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full bg-[#ffffff1a] border border-transparent rounded-lg text-white placeholder-white/70 px-4 py-3 focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] transition-all font-sohne"
                                    />
                                </div>

                                <div className="relative">
                                    <select
                                        className="w-full bg-[#ffffff1a] border border-transparent rounded-lg text-white placeholder-white/70 px-4 py-3 focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] transition-all appearance-none cursor-pointer"
                                        defaultValue=""
                                    >
                                        <option value="" disabled className="text-gray-400 bg-[#19628DE0] font-sohne">State Your Concern</option>
                                        <option value="knee" className="text-white bg-[#19628DE0] font-sohne">Knee Replacement</option>
                                        <option value="joint" className="text-white bg-[#19628DE0] font-sohne">Joint Replacement</option>
                                        <option value="trauma" className="text-white bg-[#19628DE0] font-sohne">Trauma and Fracture Care</option>
                                        <option value="sports" className="text-white bg-[#19628DE0] font-sohne">Sports Medicine Surgery</option>
                                        <option value="hand" className="text-white bg-[#19628DE0] font-sohne">Hand and Wrist Surgery</option>
                                        <option value="deformity" className="text-white bg-[#19628DE0] font-sohne">Deformity Correction</option>
                                        <option value="pediatric" className="text-white bg-[#19628DE0] font-sohne">Pediatric Ortho</option>
                                        <option value="shoulder" className="text-white bg-[#19628DE0] font-sohne">Shoulder Surgery</option>
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
                                        className="bg-[#2a6b77] border border-[#4a8b97] hover:bg-[#347d8b] text-white font-bold py-3 px-8 rounded shadow-lg uppercase tracking-wide text-sm transition-all duration-300"
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