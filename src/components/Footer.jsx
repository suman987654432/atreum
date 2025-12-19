import React from "react";
import footer from "../images/footer.png"; // Adjust path as needed

const Footer = () => {
    return (
        <footer className="bg-[#18628D] text-white pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 relative">
            {/* Half Yellow Circle - Top Left */}
            <div className="absolute -top-20 -left-16 w-40 h-40 bg-[#E2D66B] rounded-full opacity-90 z-20"
                style={{ clipPath: "inset(0 0 50% 0)" }}
            ></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {/* Left: Logo & About */}
                    <div className="space-y-4 flex flex-col justify-between h-full">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-12 h-12 rounded-md flex items-center justify-center">
                                    <img src={footer} alt="ATREUM Logo" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">ATREUM</h3>
                                    <p className="text-xs opacity-90">Speciality Hospital</p>
                                </div>
                            </div>
                            <p className="text-sm text-white/90 leading-relaxed max-w-xs">
                                Who we are? Welcome to Atreum! We're North Bangalore's first and premier multi-specialty facility that offers comprehensive care
                            </p>
                        </div>
                        <p className="font-bold text-base mt-6">Be Bold.</p>
                    </div>

                    {/* Right: All Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-24 gap-y-10">

                        {/* Clinical Specialities */}
                        <div>
                            <h4 className="font-bold text-base mb-4 whitespace-nowrap">
                                Clinical Specialities
                            </h4>
                            <ul className="space-y-2.5 text-sm text-white/90">
                                <li className="hover:text-white cursor-pointer">Orthopaedics</li>
                                <li className="hover:text-white cursor-pointer">Gynaecology</li>
                                <li className="hover:text-white cursor-pointer">Paediatrics</li>
                                <li className="hover:text-white cursor-pointer">Urology</li>
                                <li className="hover:text-white cursor-pointer">Critical Care</li>
                                <li className="hover:text-white cursor-pointer">Plastic Surgery</li>
                            </ul>
                        </div>

                        {/* Visit */}
                        <div>
                            <h4 className="font-bold text-base mb-4">VISIT</h4>
                            <ul className="space-y-2.5 text-sm text-white/90">
                                <li className="hover:text-white cursor-pointer">Our Doctors</li>
                                <li className="hover:text-white cursor-pointer">About Us</li>
                                <li className="hover:text-white cursor-pointer">Burns Unit</li>
                                <li className="hover:text-white cursor-pointer">Jobs</li>
                                <li className="hover:text-white cursor-pointer">TPA / insurance</li>
                                <li className="hover:text-white cursor-pointer">Blogs</li>
                            </ul>
                        </div>

                        {/* Follow */}
                        <div>
                            <h4 className="font-bold text-base mb-4">FOLLOW</h4>
                            <ul className="space-y-2.5 text-sm text-white/90">
                                <li className="hover:text-white cursor-pointer">Instagram</li>
                                <li className="hover:text-white cursor-pointer">Twitter</li>
                                <li className="hover:text-white cursor-pointer">LinkedIn</li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="font-bold text-base mb-4">LEGAL</h4>
                            <ul className="space-y-2.5 text-sm text-white/90">
                                <li className="hover:text-white cursor-pointer">Terms</li>
                                <li className="hover:text-white cursor-pointer">Privacy</li>
                            </ul>
                        </div>

                    </div>


                </div>

                {/* Bottom Copyright */}
                <div className="mt-10">
                    <p className="text-sm text-white/80">@2025 , all right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
