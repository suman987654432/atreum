import React, { useState } from 'react';
import logo from "../../images/logo1.png";
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 w-full flex justify-center px-4 md:px-12 z-50 font-sohne font-light">
      {/* Maximum width container to align with content */}
      <div className="flex items-center w-full max-w-[1700px]">

        {/* Logo Section - Separate Box */}
        {/* Logo Section - Separate Box */}
        <a href="/" className="h-[60px] w-[60px] bg-white flex items-center justify-center rounded-lg shadow-[0px_7px_15.6px_-6px_#00000040] flex-shrink-0 mr-4 cursor-pointer hover:shadow-lg transition-shadow">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        </a>

        {/* Main Interface Bar - Desktop */}
        <div className="hidden lg:flex flex-1 items-center justify-between bg-[#016591]/70 backdrop-blur-md rounded-lg pl-8 pr-2 h-[60px] shadow-[0px_7px_15.6px_-6px_#00000040]">

          {/* Navigation Links */}
          <div className="flex-1 flex justify-center gap-16">
            {[
              { name: "Our Services", path: "/orthopedics" },
              { name: "Doctors", path: "/doctor" },
              { name: "Packages", path: "#" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-white hover:font-semibold  text-[18px] leading-none tracking-normal font-light font-sohne"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Section - Right Side */}
          <div className="flex items-center gap-3">
            {/* Phone Icon Button */}
            <div className="bg-[#0FB1AB33] h-[40px] w-[40px] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#4ea8a5] border border-white/30 shadow-md">
              <Phone size={20} className="text-white fill-white" />
            </div>

            {/* Phone Number Button */}
            <div className="bg-[#0FB1AB33] h-[40px] px-5 rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#4ea8a5] border border-white/30 shadow-md">
              <span className="text-white font-sohne font-light text-[18px] leading-none tracking-normal">
                +91 - 9606970542
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-[#19628D]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-28 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 z-40 animate-fade-in border border-white/20 font-sohne">
          <ul className="flex flex-col gap-4 text-center">
            {[
              { name: "Our Services", path: "#" },
              { name: "Doctors", path: "/doctor" },
              { name: "Packages", path: "#" }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="block text-[#19628D] py-2 hover:font-bold rounded-lg transition-all duration-200 font-light text-[18px] leading-none tracking-normal"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
              <button className="flex items-center justify-center gap-2 bg-[#0FB1AB33] text-white py-3 rounded-xl shadow-md font-light text-[18px]">
                <Phone size={18} fill="currentColor" />
                Call Now
              </button>
              <div className="text-[#19628D] py-1 font-light text-[18px] leading-none tracking-normal">
                +91 - 9606970542
              </div>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;