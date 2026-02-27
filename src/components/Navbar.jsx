import React, { useState } from 'react';
import logo from "../images/logo1.png";
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
     { name: "Orthopedics", path: "/department/orthopedics" },
      { name: "Obstetrics & Gynecology", path: "/department/obstetrics-gynecology" },
        { name: "Urology", path: "/department/urology" },
    { name: "Neurology", path: "#" },
    { name: "Nephrology", path: "/department/nephrology" },
    { name: "Gastroenterology", path: "/department/gastroenterology" },
    { name: "Dermatology", path: "/department/dermatology" },
    { name: "Endocrinology", path: "/department/endocrinology" },
    { name: "Pediatrics", path: "/department/pediatrics" },
   
  
   
    { name: "Plastics", path: "/department/plastics" },
    { name: "General Surgery", path: "/department/general-surgery" },
    { name: "Oncology", path: "/department/oncology" },
    { name: "Vascular Surgery", path: "/department/vascular-surgery" },
    { name: "ENT", path: "/department/ent" }
  ];

  const handleScroll = (e, path) => {
    if (path.startsWith('#') && path.length > 1) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        const offset = 100;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function animation(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);

          const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          window.scrollTo(0, startPosition + distance * ease);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        }
        requestAnimationFrame(animation);
      }
    }
  };

  return (
    <nav className="fixed top-2 sm:top-4 md:top-6 left-0 right-0 w-full flex justify-center px-4 md:px-12 z-50 font-sohne font-light">
      {/* Maximum width container to align with content */}
      <div className="flex items-center w-full max-w-[1700px]">

        {/* Logo Section - Separate Box */}
        {/* Logo Section - Separate Box */}
        <a href="/" className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] bg-white flex items-center justify-center rounded-lg shadow-[0px_7px_15.6px_-6px_#00000040] flex-shrink-0 mr-2 sm:mr-4 cursor-pointer hover:shadow-lg transition-shadow">
          <img src={logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
        </a>

        {/* Main Interface Bar - Desktop */}
        <div className="hidden lg:flex flex-1 items-center justify-between bg-[#016591]/70 backdrop-blur-md rounded-lg pl-8 pr-2 h-[60px] shadow-[0px_7px_15.6px_-6px_#00000040]">

          {/* Navigation Links */}
          <div className="flex-1 flex justify-center gap-12">
            {/* Our Services with Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a
                href=""
                className="relative inline-block text-center cursor-pointer"
              >
                <span className="invisible font-medium text-[18px] leading-none tracking-normal font-sohne block h-0">
                  Our Departments
                </span>
                <span className="text-white hover:font-medium text-[18px] leading-none tracking-normal font-light font-sohne transition-all flex items-center gap-1">
                  Our Departments

                </span>
              </a>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-[40%] mt-4 w-[700px] transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                {/* Dropdown Content */}
                <div className="relative bg-[#19628DE0] backdrop-blur-md rounded-xl p-3.5 border border-white/20 overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-3 gap-x-3 gap-y-0.5">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.path}
                        onClick={(e) => {
                          handleScroll(e, service.path);
                          setIsServicesOpen(false);
                        }}
                        className="group flex items-center px-4 py-1.5 text-white/90 font-sohne font-normal text-[14px] leading-tight tracking-normal cursor-pointer hover:bg-white/10 hover:text-white rounded-lg transition-all"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Navigation Links */}
            {[
              { name: "Doctors", path: "#doctor-specialists" },
              { name: "Packages", path: "#" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className="relative inline-block text-center cursor-pointer"
              >
                <span className="invisible font-medium text-[18px] leading-none tracking-normal font-sohne block h-0">
                  {item.name}
                </span>
                <span className="text-white hover:font-medium text-[18px] leading-none tracking-normal font-light font-sohne transition-all">
                  {item.name}
                </span>
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
            className="bg-[#016591]/70 backdrop-blur-md p-3 rounded-lg shadow-[0px_7px_15.6px_-6px_#00000040] text-white border border-white/30 hover:bg-[#016591]/90 transition-all"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 sm:top-24 md:top-28 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 z-40 animate-fade-in border border-white/20 font-sohne">
          <ul className="flex flex-col gap-4 text-center">
            {/* Our Services with Dropdown in Mobile */}
            <li>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-center gap-2 text-[#19628D] py-2 hover:font-bold rounded-lg transition-all duration-200 font-light text-[18px] leading-none tracking-normal"
              >
                Our Services
                <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Dropdown with Animation */}
              <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#19628DE0] rounded-xl py-1.5 px-2 shadow-lg border border-white/20">
                  {services.map((service, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={service.path}
                        onClick={(e) => {
                          handleScroll(e, service.path);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block py-2 px-3 text-white hover:bg-white/15 rounded-lg font-sohne font-normal text-[13px] leading-[16px] tracking-normal transition-all duration-200 cursor-pointer"
                      >
                        {service.name}
                      </a>
                      {index < services.length - 1 && (
                        <div className="mx-2 my-0.5 border-t border-white/10"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </li>

            {/* Other Menu Items */}
            {[
              { name: "Doctors", path: "#doctor-specialists" },
              { name: "Packages", path: "#" }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    handleScroll(e, item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-[#19628D] py-2 hover:font-bold rounded-lg transition-all duration-200 font-light text-[18px] leading-none tracking-normal cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
              <a href="tel:+919606970542" className="flex items-center justify-center gap-2 bg-[#0FB1AB] hover:bg-[#0d9891] text-white py-3 px-6 rounded-lg shadow-md font-semibold text-[16px] transition-all">
                <Phone size={18} strokeWidth={2} />
                Call Now
              </a>
              <div className="text-[#19628D] py-1 font-normal text-[16px] leading-none tracking-normal">
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