import doctor from "../../images/doctorabout.png";

const CEO = () => {
    return (
        <section className="bg-[#EDF8FF] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-600 font-oswald uppercase mb-5 sm:mb-10">
                    CEO’s Message
                </h2>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    {/* Message Card */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
                        <p className="text-gray-700 mb-4">
                            Welcome to Atreum hospital,
                        </p>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                            Healthcare is deeply personal. It is about trust placed in moments that matter most. At Atreum, we honour that trust by putting people at the centre of every decision we make.
                        </p>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                            Our care is guided by clinical excellence, ethical responsibility, and genuine compassion. From the first consultation to recovery and beyond, we focus on clarity, consistency, and outcomes that truly improve quality of life.
                        </p>

                        <p className="text-gray-700 mb-6">
                           Atreum is built on a simple promise. To care responsibly, to act with integrity, and to restore confidence and wellbeing at every step of the journey.
                        </p>

                        <div>
                            <p className="text-gray-700 mb-1">Warm regards,</p>
                            <p className="text-[#19628D] font-semibold">
                                Dr. Harish Kumar
                            </p>
                            <p className="text-gray-500 text-sm">
                                Founder & Chairman
                            </p>
                            <p className="text-gray-700 text-sm font-bold">
                                Atreum Hospitals
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center rounded-3xl p-4 sm:p-6 lg:p-2  max-w-xs mx-auto ">
                        <img
                            src={doctor}
                            alt="CEO"
                            className="w-full h-auto object-contain rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CEO;
