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
                            fermentum posuere urna nec tincidunt praesent semper feugiat.
                            Viverra aliquet eget sit amet tellus cras adipiscing enim eu.
                            Massa vitae tortor condimentum lacinia quis vel eros donec ac.
                            Venenatis a condimentum. fermentum posuere urna nec tincidunt
                            praesent semper feugiat.
                        </p>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                            Viverra aliquet eget sit amet tellus cras adipiscing enim eu.
                            Massa vitae tortor condimentum lacinia quis vel eros donec ac.
                            Venenatis a condimentum.
                        </p>

                        <p className="text-gray-700 mb-6">
                            fermentum posuere urna nec tincidunt praesent semper feugiat.
                            Viverra aliquet eget sit amet tellus cras adipiscing enim eu.
                        </p>

                        <div>
                            <p className="text-gray-700 mb-1">Sincerely,</p>
                            <p className="text-[#19628D] font-semibold">
                                Dr. Harish Kumar
                            </p>
                            <p className="text-gray-500 text-sm">
                                Founder & Chairman
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
