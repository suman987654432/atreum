import React from 'react';

const DepartmentCare = ({ data }) => {
    const { title, description, items, icon } = data;

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
        <div id="care-section" className="relative -mt-5 z-20 w-full px-4">
            <div className="bg-[#D9D9D933] backdrop-blur-md border border-white/30 rounded-[12px] sm:rounded-[16px] md:rounded-[22px] px-6 pt-4 pb-8 md:px-12 md:pt-6 md:pb-12 flex flex-col gap-6 w-full max-w-[1800px] mx-auto shadow-sm">
                {/* Header Section: Icon + Title and Description */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
                    {/* Left side: Icon + Title */}
                    <div className="flex items-center gap-4 sm:gap-8 w-full lg:w-1/2">
                        {icon && (
                            <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[120px] md:w-[110px] md:h-[140px] flex-shrink-0">
                                <img src={icon} alt="Icon" className="w-full h-full object-contain" />
                            </div>
                        )}
                        <h2 className="text-[#19628D] font-canela font-normal text-[17px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[42px] leading-[1.0] flex flex-col">
                            <span>
                                {title.replace(/Care/i, '').replace(/at Atreum/i, '').trim()} <span className="font-bold italic">Care</span>
                            </span>
                            <span className="whitespace-nowrap">
                                at <span className="font-bold italic">Atreum</span>
                            </span>
                        </h2>
                    </div>

                    {/* Right side: Description */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-[#000000] font-sohne font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] leading-tight">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Dynamic Tags / Buttons */}
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-2">
                    {items && items.map((tag, index) => (
                        <button
                            key={index}
                            onClick={handleCardClick}
                            className="bg-[#19628DBD] text-white font-sohne font-bold text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] px-3 sm:px-6 h-[42px] sm:h-[56px] rounded-[12px] sm:rounded-[14px] hover:bg-[#19628D] transition-all duration-300 uppercase tracking-tight shadow-md flex items-center justify-center whitespace-nowrap"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            {/* Horizontal Line */}
            <div className="w-full max-w-[1800px] mx-auto px-4 mt-5 mb-10 md:mb-3">
                <div className="h-[1px] bg-black w-full"></div>
            </div>
        </div>
    );
};

export default DepartmentCare;
