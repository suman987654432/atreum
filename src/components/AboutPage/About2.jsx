import about2 from "../../images/about2.png";

const About2 = () => {
  return (
    <section className="bg-[#EDF8FF] py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="
          max-w-7xl
          mx-auto 
          bg-white rounded-2xl md:rounded-3xl
          border border-gray-200
          p-3 sm:p-4 md:p-6 lg:p-8
        grid md:grid-cols-2 gap-9 items-center
        "
      >

        {/* Text Section */}
        <div className="order-2 md:order-1 w-full pr-0 md:pr-6 lg:pr-10 text-left">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#19628D] mb-3 sm:mb-4 md:mb-6 leading-tight">
            About Atreum Hospital
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg mb-3 sm:mb-4 md:mb-6 leading-relaxed">
           Atreum is built on a simple purpose: to make quality healthcare affordable and accessible for every family. We combine modern medical technology with a compassionate, patient-first approach to deliver safe, specialised, and transparent care.
          </p>

          <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg leading-relaxed">
           With experienced doctors, dedicated staff, and a commitment to excellent healthcare, Atreum has become a trusted healthcare partner for the community. 
Established in 2019, our journey continues with the same promise: quality care for all.

          </p>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2 w-full">
          <img
            src={about2}
            alt="Atreum Hospital"
            className="w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg md:rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About2;
