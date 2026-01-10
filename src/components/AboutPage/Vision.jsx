import vision from "../../images/vision.png"

const Vision = () => {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-600 uppercase">
                        Our Vision, Mission & Core Values
                    </h2>
                    <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl">
                        Experienced medical professionals dedicated to your health and wellbeing.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    {/* Vision Card */}
                    <div className="bg-white rounded-3xl border border-gray-300 overflow-hidden p-3">
                        <div className="bg-[#18628D] p-6 sm:p-7 flex items-center gap-9 rounded-xl shadow-[0_10px_30px_rgba(13,177,171,0.3)] ">
                            <div className="w-12 h-12 sm:w-14 sm:h-14">
                                <img src={vision} alt="Vision" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-white text-xl sm:text-2xl font-bold">
                                Vision
                            </h3>
                        </div>
                        <div className="p-3 sm:p-5">
                            <p className="text-gray-700 text-sm sm:text-base">
                                fermentum posuere urna nec tincidunt praesent semper feugiat. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Venenatis a condimentum.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white rounded-3xl  border border-gray-300 overflow-hidden p-3">
                        <div className="bg-[#18628D] p-6 sm:p-7 flex items-center gap-4 rounded-xl shadow-[0_10px_30px_rgba(13,177,171,0.3)]">
                                                       <div className="w-12 h-12 sm:w-14 sm:h-14">
                                <img src={vision} alt="Vision" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-white text-xl sm:text-2xl font-bold">
                                Mission
                            </h3>
                        </div>
                        <div className="p-5 sm:p-6">
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                fermentum posuere urna nec tincidunt praesent semper feugiat. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Venenatis a condimentum.
                            </p>
                        </div>
                    </div>

                    {/* Core Values Card */}
                    <div className="bg-white rounded-3xl  border border-gray-300 overflow-hidden p-3">
                        <div className="bg-[#18628D] p-6 sm:p-7 flex items-center gap-4 rounded-xl shadow-[0_10px_30px_rgba(13,177,171,0.3)]">
                            <div className="w-12 h-12 sm:w-14 sm:h-14">
                                <img src={vision} alt="Vision" className="w-full h-full object-contain" />
                            </div>                            <h3 className="text-white text-xl sm:text-2xl font-bold">
                                Core Values
                            </h3>
                        </div>
                        <div className="p-5 sm:p-6">
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                fermentum posuere urna nec tincidunt praesent semper feugiat. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Venenatis a condimentum.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Vision;
