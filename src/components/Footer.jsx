import React from "react";
import footer from "../images/footer.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#18628D] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-16">
      
      {/* Decorative Half Circle */}
      {/* <div
        className="absolute -top-16 -left-16 w-40 h-40 bg-[#E2D66B] rounded-full opacity-90"
        style={{ clipPath: "inset(0 0 50% 0)" }}
      /> */}

      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
          
          {/* Left Section */}
          <div className="flex flex-col justify-between gap-8 xl:col-span-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={footer}
                  alt="ATREUM Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="font-bold text-xl">ATREUM</h3>
                  <p className="text-xs opacity-90">
                    Speciality Hospital
                  </p>
                </div>
              </div>

              <p className="text-sm text-white/90 leading-relaxed max-w-sm">
                Who we are? Welcome to Atreum! We're South Bangalore's first and
                premier multi-specialty facility that offers comprehensive care.
              </p>
            </div>

            <p className="font-bold text-base">Be Bold.</p>
          </div>

          {/* Right Links Section */}
          <div className="xl:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            
            {/* Clinical */}
            <div>
              <h4 className="font-bold text-sm tracking-wide mb-4 whitespace-nowrap">Clinical Specialities</h4>
              <ul className="space-y-2 text-sm text-white/90">
                {[
                  "Orthopaedics",
                  "Gynaecology",
                  "Paediatrics",
                  "Urology",
                  "Critical Care",
                  "Plastic Surgery",
                ].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Visit</h4>
              <ul className="space-y-2 text-sm text-white/90">
                {[
                  "Our Doctors",
                  "About Us",
                  "Burns Unit",
                  "Jobs",
                  "TPA / Insurance",
                  "Blogs",
                ].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-white/90">
                {["instagram", "twitter", "linkedin"].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/90">
                {["Terms", "Privacy"].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-2 text-left">
          <p className="text-sm text-white/80">
            ©2025 , all right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
