import React, { useEffect, useRef, useState } from "react";

const isYouTubeUrl = (url) =>
    typeof url === "string" && (url.includes("youtube.com") || url.includes("youtu.be"));

const getYouTubeEmbedUrl = (url) => {
    // Supports both youtu.be and youtube.com URLs
    let videoId = "";
    if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split(/[?&]/)[0];
    } else if (url.includes("youtube.com")) {
        const match = url.match(/[?&]v=([^&]+)/);
        if (match) videoId = match[1];
        else if (url.includes("/shorts/")) {
            videoId = url.split("/shorts/")[1].split(/[?&]/)[0];
        }
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
};

const Feedback = () => {
    const feedbackData = [
        {
            id: 1,
            image: "/images/patient1.jpg",
            name: "B SRINIVASA SHETTY",
            title: "From pain to freedom",
            desc: "From pain to freedom! Hear the heartfelt words of gratitude from our patient's family. Made by the exceptional care and expertise of Dr. Rajasekhar K.T and his team.",
        },
        {
            id: 2,
            image: "/images/patient2.jpg",
            name: "TRISHA GANDHI",
            title: "Real stories of healing",
            desc: "I was diagnosed with multiple fibroids and advised surgery. After consulting various doctors, expert guidance helped me recover with confidence and comfort.",
            video: "https://youtube.com/shorts/HJQfIc1LdGw?si=sxW86ZXse7LsQASB",
        },
        {
            id: 3,
            image: "/images/patient1.jpg",
            name: "RAHUL MEHTA",
            title: "A smooth recovery journey",
            desc: "The doctors and nursing staff ensured a smooth and stress-free recovery. Their care made a huge difference in my healing journey.",
        },
    ];

    const sliderRef = useRef(null);
    const [isHover, setIsHover] = useState(false);
    const indexRef = useRef(0);
    const [playingIndex, setPlayingIndex] = useState(null);
    const videoRefs = useRef([]);
    const [showYouTube, setShowYouTube] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHover && sliderRef.current) {
                indexRef.current = (indexRef.current + 1) % feedbackData.length;
                sliderRef.current.scrollTo({
                    left: indexRef.current * sliderRef.current.offsetWidth * 0.75,
                    behavior: "smooth",
                });
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [isHover, feedbackData.length]);

    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            if (video && idx !== playingIndex) {
                video.pause();
                video.currentTime = 0;
            }
        });
    }, [playingIndex]);

    const handlePlayPause = (idx) => {
        if (!feedbackData[idx].video) return;
        const video = videoRefs.current[idx];
        if (!video) return;
        if (video.paused) {
            setPlayingIndex(idx);
            video.play();
        } else {
            video.pause();
            setPlayingIndex(null);
        }
    };

    const isVideoPlaying = (idx) => {
        return playingIndex === idx;
    };

    return (
        <section className="relative py-6 sm:py-12 md:py-16 bg-[#EDF8FF] px-1 sm:px-6 md:px-12 overflow-hidden">
            <div className="absolute -right-10 sm:-right-16 md:-right-20 top-[1%] w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#12B0A6] rounded-full z-0 transition-all duration-300"></div>

            {/* Heading */}
            <div className="max-w-7xl mx-auto mb-4 sm:mb-10 md:mb-12 px-2">
                <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-[#02908B] mb-2 sm:mb-4">
                    PATIENTS SPEAK
                </h2>
                <p className="text-gray-700 max-w-2xl text-xs sm:text-base md:text-lg">
                    Stories of healing and care                </p>
            </div>

            {/* Slider */}
            <div className="max-w-7xl mx-auto">
                <div
                    ref={sliderRef}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide items-stretch gap-2 sm:gap-4 md:gap-6 px-1"
                >
                    {feedbackData.map((item, idx) => (
                        <div
                            key={item.id}
                            className="snap-center min-w-[260px] max-w-[320px] sm:min-w-[320px] sm:max-w-[380px] md:min-w-[700px] lg:min-w-[750px] flex justify-center items-start flex-shrink-0"
                        >
                            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 items-start w-full">
                                {/* Image / Video Card */}
                                <div className="relative w-[120px] sm:w-[150px] md:w-[320px] lg:w-[340px] h-[170px] sm:h-[220px] md:h-[420px] rounded-[10px] sm:rounded-[16px] md:rounded-[24px] overflow-hidden bg-gray-300 group flex-shrink-0">
                                    {item.video ? (
                                        isYouTubeUrl(item.video) ? (
                                            <>
                                                {showYouTube === idx ? (
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={getYouTubeEmbedUrl(item.video)}
                                                        title={item.name}
                                                        frameBorder="0"
                                                        allow="autoplay; encrypted-media"
                                                        allowFullScreen
                                                        className="w-full h-full"
                                                    />
                                                ) : (
                                                    <>
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div
                                                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                                            onClick={() => setShowYouTube(idx)}
                                                        >
                                                            <div className="w-16 h-16 bg-[#02908B] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                                                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M8 5v14l11-7z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <video
                                                    ref={(el) => { videoRefs.current[idx] = el; }}
                                                    src={item.video}
                                                    poster={item.image}
                                                    className="w-full h-full object-cover"
                                                    controls={false}
                                                    onEnded={() => setPlayingIndex(null)}
                                                />
                                                {!isVideoPlaying(idx) && (
                                                    <div
                                                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                                        onClick={() => handlePlayPause(idx)}
                                                    >
                                                        <div className="w-16 h-16 bg-[#02908B] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                                            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )
                                    ) : (
                                        <>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-[#02908B] rounded-full flex items-center justify-center shadow-lg opacity-60">
                                                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Name */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1.5 sm:p-3 md:p-5">
                                        <p className="text-white font-semibold tracking-wide text-[10px] sm:text-xs md:text-base truncate">{item.name}</p>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="w-[120px] sm:w-[150px] md:w-[340px] lg:w-[360px] h-[170px] sm:h-[220px] md:h-[420px] rounded-[10px] sm:rounded-[16px] md:rounded-[24px] bg-[#18628D] p-2 sm:p-4 md:p-8 flex flex-col justify-between flex-shrink-0 overflow-hidden">
                                    <div className="overflow-hidden">
                                        <h3 className="text-white text-xs sm:text-base md:text-2xl font-bold mb-1.5 sm:mb-3 md:mb-4 line-clamp-2">{item.title}</h3>
                                        <p className="text-[#D4E9F1] text-[10px] sm:text-xs md:text-base leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-6 md:line-clamp-none">{item.desc}</p>
                                    </div>
                                    <p className="text-white font-bold tracking-wide uppercase text-[9px] sm:text-xs md:text-base truncate mt-2">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feedback;
