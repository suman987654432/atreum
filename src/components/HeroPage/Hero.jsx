import React, { useState } from 'react';
import heroortho from "../../images/heroortho.png";
import { BsChevronDown } from "react-icons/bs";


const Hero = () => {


  return (
    <div className="relative w-full font-sans overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full">
        <img
          src={heroortho}
          alt="Orthopedics Background"
          className="w-full h-[100vh] object-cover object-top"
        />
        {/* Overlay - Darker teal overlay */}
        <div className="absolute inset-0 bg-[#0e4857]/70"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-7">
          <h1 className="text-white font-canela font-normal text-[32px] sm:text-[42px] md:text-[54px] leading-[1.1] md:leading-[59px] tracking-normal text-center">
            Your Journey towards <span className="font-bold italic">better </span><br />
            <span className="font-bold italic"> health</span> starts with <span className="font-bold italic">Atreum</span>
          </h1>

          <button className="w-[257px] h-[44px] bg-[#19628D5E] text-white font-sohne font-semibold text-[20px] rounded-[40.5px] border border-white hover:bg-[#19628D]/50 transition-colors mt-4 flex items-center justify-center">
            BOOK APPOINTMENT
          </button>
        </div>

        {/* Scroll to Explore */}
        <div
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <BsChevronDown className="text-white text-3xl animate-bounce" />
          <span className="text-white font-sohne font-semibold text-[20px] leading-[44px] tracking-normal">Scroll to Explore</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;