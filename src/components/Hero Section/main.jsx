import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/main";
import ArrowButton from "../Arrow Button/main";
import Hero from "../../assets/Careers-4k-Mp4.mp4";
import NewsCard from "../News Card/main";
import AIinnovator from "../../assets/8ece7b4ecdd64da289625284dd6e5499.svg"

export default function HeroSection() {
    const videoRef = useRef(null);
    const hasLoopStarted = useRef(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            if (!hasLoopStarted.current && video.currentTime >= 8) {
                hasLoopStarted.current = true;
                video.currentTime = 2;
                video.play();
            } else if (hasLoopStarted.current && video.currentTime >= 8) {
                video.currentTime = 2;
                video.play();
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={Hero} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-between min-h-screen">
                {/* Navbar */}
                <header>
                    <Navbar />
                </header>

                {/* Main Hero Content */}
                <div className="flex flex-col items-center justify-center text-center px-4 pt-25">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-white">
                        Scale is growing
                    </h1>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-white mt-4">
                        Grow with Us.
                    </h1>
                    <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-xl mx-auto">
                        Join us as we accelerate the development of applications
                    </p>
                    <div className="mt-6">
                        <ArrowButton
                            name="View Open Positions"
                            bgColor="bg-[#85427f]"
                            textColor="text-white"
                            hoverColor="hover:bg-[#5c2b58]"
                        ></ArrowButton>
                    </div>
                </div>

                {/* Card Carousel */}
                <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
                    <NewsCard
                        title="Fortune has named Scale as one of their 50 AI Innovators"
                        logo={AIinnovator}
                        link="#"
                    />
                    <NewsCard
                        title="Scale announces collaboration with Microsoft Azure"
                        subtitle="Accelerating enterprise AI adoption"
                        link="#"
                    />
                </div>
            </div>
        </section>
    );
}