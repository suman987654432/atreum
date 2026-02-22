import React from 'react';

const DepartmentCare = ({ data }) => {
    const { title, description, items } = data;

    const handleCardClick = () => {
        const element = document.getElementById('form-section');
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
                const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                window.scrollTo(0, startPosition + distance * ease);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            requestAnimationFrame(animation);
        }
    };

    return (
        <div id="care-section" className="relative -mt-4 z-20 bg-white/20 backdrop-blur-md border-b border-white/30 rounded-3xl pt-16 pb-16 mx-2 md:mx-3 lg:mx-4">
            <div className="px-4 w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center mb-12 gap-6">
                    <div className="md:w-2/5 md:ml-8 lg:ml-12 max-w-[600px] text-center md:text-left">
                        <h2 className="text-[#19628D]">
                            <span className="font-canela font-normal text-[32px] leading-[32px]">{title.split(' ')[0]} {title.split(' ')[1]} <br /> at </span>
                            <span className="font-canela font-bold italic text-[32px] leading-[32px]">Atreum</span>
                        </h2>
                    </div>
                    <div className="md:w-2/5 md:ml-2 lg:ml-4 max-w-[600px] text-center md:text-left">
                        <p className="text-black font-sohne font-normal text-[16px] leading-[22px]">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={handleCardClick}
                            className={`relative group overflow-hidden rounded-2xl h-[400px] cursor-pointer shadow-xl ${index === 3 ? "lg:col-span-2 col-span-1" : "col-span-1"}`}
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                            </div>

                            <div className="rounded-t-3xl absolute bottom-0 left-0 w-full bg-transparent group-hover:bg-[#19628DBD] group-hover:backdrop-blur-sm p-4 md:p-6 lg:p-8 transform translate-y-[calc(100%-130px)] group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col justify-start">
                                <div className="h-auto pb-2">
                                    <h3 className="font-sohne font-bold text-[22px] md:text-[26px] leading-[1] tracking-tight text-white uppercase drop-shadow-md">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-1">
                                    <p className="font-sohne font-normal text-[16px] leading-[20px] text-white">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DepartmentCare;
