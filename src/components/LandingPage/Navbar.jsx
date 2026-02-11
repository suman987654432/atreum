import React, { useState } from 'react';
import logo from "../../images/logo.png";
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-8 lg:top-10 left-0 right-0 w-full flex justify-center px-2 md:px-4 lg:px-6 z-50 bg-transparent">
      <div className="flex items-center justify-between w-full max-w-[98%] md:max-w-[95%] lg:max-w-7xl bg-white rounded-full shadow-lg px-3 md:px-4 lg:px-8 py-2 md:py-2.5 lg:py-3">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-9 w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain flex-shrink-0" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-10 font-medium text-sm xl:text-base">
          <li>
            <a href="/" className="relative text-gray-500 font-semibold hover:text-[#19628D] transition-colors group whitespace-nowrap">
              Home
              <span className="pointer-events-none absolute left-0 -bottom-1 w-full h-0.5 bg-[#19628D] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
            </a>
          </li>

          {/* Departments Dropdown */}
          <li className="relative group">
            <a
              href="#"
              className="flex items-center gap-0.5 lg:gap-1 text-gray-500 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors whitespace-nowrap"
            >
              Departments
              <ChevronDown
                size={16}
                className="transition-transform group-hover:rotate-180 lg:w-[18px] lg:h-[18px]"
              />
            </a>

            <ul className="absolute left-0 top-full mt-2 min-w-[180px] lg:min-w-[200px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-30">
              {[
                { name: "Cardiology", path: "#" },
                { name: "Neurology", path: "#" },
                { name: "Orthopedics", path: "/orthopedics" },
                { name: "Pediatrics", path: "#" }
              ].map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className={`block px-4 lg:px-5 py-2 lg:py-3 text-sm lg:text-base text-gray-600 hover:bg-gray-50 hover:text-[#19628D] hover:underline active:underline transition-colors ${index === 0 ? 'rounded-t-lg' : ''
                      } ${index === 3 ? 'rounded-b-lg' : ''}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <a href="/doctor" className="text-gray-500 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors whitespace-nowrap">
              Doctors
            </a>
          </li>

          {/* Health Packages Dropdown */}
          <li className="relative group">
            <a
              href="#"
              className="flex items-center gap-0.5 lg:gap-1 text-gray-500 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors whitespace-nowrap"
            >
              Health Packages
              <ChevronDown
                size={16}
                className="transition-transform group-hover:rotate-180 lg:w-[18px] lg:h-[18px]"
              />
            </a>

            <ul className="absolute left-0 top-full mt-2 min-w-[200px] lg:min-w-[240px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-30">
              {["Basic Health Checkup", "Executive Health Checkup", "Senior Citizen Package"].map((item, index) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`block px-4 lg:px-5 py-2 lg:py-3 text-sm lg:text-base text-gray-600 hover:bg-gray-50 hover:text-[#19628D] hover:underline active:underline transition-colors ${index === 0 ? 'rounded-t-lg' : ''
                      } ${index === 2 ? 'rounded-b-lg' : ''}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <a href="#" className="text-gray-500 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors whitespace-nowrap">
              Patient Resources
            </a>
          </li>

          <li>
            <a href="/about" className="text-gray-500 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors whitespace-nowrap">
              About Us
            </a>
          </li>

          <li>
            <a href="/careers" className="text-gray-500 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors whitespace-nowrap">
              Careers
            </a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden lg:block bg-[#18628D] text-white font-medium rounded-full px-4 lg:px-5 xl:px-7 py-2 shadow-md hover:bg-[#155072] transition-colors text-xs lg:text-sm xl:text-base whitespace-nowrap flex-shrink-0">
          BOOK APPOINTMENT
        </button>

        {/* Mobile Brand Name */}
        <span className="lg:hidden font-extrabold text-[#0EA8A7] text-xl md:text-2xl tracking-widest uppercase">
          ATREUM
        </span>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#19628D] p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-2 right-2 bg-white rounded-2xl shadow-2xl p-6 z-40 max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/" className="relative block text-gray-700 font-semibold hover:text-[#19628D] transition-colors py-2 group">
                Home
                <span className="pointer-events-none absolute left-0 -bottom-0.5 w-full h-0.5 bg-[#19628D] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              </a>
            </li>

            <li>
              <details className="group">
                <summary className="flex items-center justify-between text-gray-700 font-semibold hover:text-[#19628D] transition-colors py-2 cursor-pointer">
                  Departments
                  <ChevronDown size={18} className="transition-transform group-open:rotate-180" />
                </summary>
                <ul className="ml-4 mt-2 space-y-2">
                  {[
                    { name: "Cardiology", path: "#" },
                    { name: "Neurology", path: "#" },
                    { name: "Orthopedics", path: "/orthopedics" },
                    { name: "Pediatrics", path: "#" }
                  ].map(item => (
                    <li key={item.name}>
                      <a href={item.path} className="block text-gray-600 hover:text-[#19628D] hover:underline active:underline py-1">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            <li>
              <a href="/doctor" className="block text-gray-700 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors py-2">
                Doctors
              </a>
            </li>

            <li>
              <details className="group">
                <summary className="flex items-center justify-between text-gray-700 font-semibold hover:text-[#19628D] transition-colors py-2 cursor-pointer">
                  Health Packages
                  <ChevronDown size={18} className="transition-transform group-open:rotate-180" />
                </summary>
                <ul className="ml-4 mt-2 space-y-2">
                  {["Basic Health Checkup", "Executive Health Checkup", "Senior Citizen Package"].map(item => (
                    <li key={item}>
                      <a href="#" className="block text-gray-600 hover:text-[#19628D] hover:underline active:underline py-1">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            <li>
              <a href="#" className="block text-gray-700 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors py-2">
                Patient Resources
              </a>
            </li>

            <li>
              <a href="/about" className="block text-gray-700 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors py-2">
                About Us
              </a>
            </li>

            <li>
              <a href="/careers" className="block text-gray-700 font-semibold hover:text-[#19628D] hover:underline active:underline transition-colors py-2">
                Careers
              </a>
            </li>

            <li className="pt-4 border-t border-gray-200">
              <button className="w-full bg-[#18628D] text-white font-medium rounded-full px-6 py-3 shadow-md hover:bg-[#155072] transition-colors">
                BOOK APPOINTMENT
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
