import React from "react";
import footer from "../images/footer.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#D9D9D959] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-16 rounded-[50px] border border-[#0FB1AB] mx-4 md:mx-16 mb-4 mt-20">

      {/* Decorative Half Circle */}
      {/* <div
        className="absolute -top-16 -left-16 w-40 h-40 bg-[#E2D66B] rounded-full opacity-90"
        style={{ clipPath: "inset(0 0 50% 0)" }}
      /> */}

      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-12">

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
                  <h3 className="font-bold text-xl text-[#006492]">ATREUM</h3>
                  <p className="text-xs opacity-90 text-[#006492]">
                    Speciality Hospital
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#006492] leading-relaxed max-w-sm">
                Who we are? Welcome to Atreum! We're South Bangalore's first and
                premier multi-specialty facility that offers comprehensive care.
              </p>
            </div>

            <p className="font-bold text-base text-[#006492]">Be Bold.</p>
          </div>

          {/* Right Links Section */}
          <div className="xl:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

            {/* Clinical */}
            <div>
              <h4 className="font-bold text-sm text-[#000000] tracking-wide mb-4 whitespace-nowrap">Clinical Specialities</h4>
              <ul className="space-y-3 text-sm text-[#000000]">
                {[
                  "Orthopaedics",
                  "Gynaecology",
                  "Paediatrics",
                  "Urology",
                  "Critical Care",
                  "Plastic Surgery",
                ].map((item) => (
                  <li key={item} className="cursor-pointer transition-colors hover:text-[#0FB1AB]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-[#000000]">Visit</h4>
              <ul className="space-y-3 text-sm text-[#000000]">
                {[
                  "Our Doctors",
                  "About Us",
                  "Burns Unit",
                  "Jobs",
                  "TPA / Insurance",
                  "Blogs",
                ].map((item) => (
                  <li key={item} className="cursor-pointer transition-colors hover:text-[#0FB1AB]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-[#000000]">Follow</h4>
              <ul className="space-y-3 text-sm text-[#000000]">
                {["instagram", "twitter", "linkedin"].map((item) => (
                  <li key={item} className="cursor-pointer transition-colors hover:text-[#0FB1AB]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-[#000000]">Legal</h4>
              <ul className="space-y-3 text-sm text-[#000000]">
                {["Terms", "Privacy"].map((item) => (
                  <li key={item} className="cursor-pointer transition-colors hover:text-[#0FB1AB]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-[#000000]">Contact</h4>
              <ul className="space-y-3 text-sm text-[#000000]">
                <li className="cursor-pointer transition-colors hover:text-[#0FB1AB]">
                  <span className="font-bold text-[#000000]">Address:</span> Ideal Homes Layout, Kenchenhalli, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
                </li>
                <li className="cursor-pointer transition-colors hover:text-[#0FB1AB]">
                  <span className="font-bold">Phone:</span> +91 9606970542
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        {/* <div className="mt-12 pt-2 text-left">
          <p className="text-sm text-[#000000]">
            ©2025 , all right reserved
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
