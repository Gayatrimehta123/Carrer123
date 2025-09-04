import React from "react";
import { ArrowRight } from "lucide-react";

const NewsCard = ({ title, logo }) => {
    return (
        <div className="group max-w-md h-auto md:h-30 lg:h-50 rounded-2xl bg-black/60 backdrop-blur-md text-white p-6 flex items-center gap-4 shadow-lg transition-colors duration-300">
            {/* Left Logo/Badge */}
            {logo && (
                <div className="flex-shrink-0 w-20 h-20 bg-white text-black flex flex-col items-center justify-center rounded-lg font-bold text-xs leading-tight">
                    <img src={logo} alt="blog-logo" className="w-16" />
                </div>
            )}

            {/* Content */}
            <div className="flex-1">
                <p className="text-sm text-purple-300 font-medium">News</p>
                <p className="text-lg font-medium leading-snug">{title}</p>
            </div>

            {/* Arrow Button */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black transition-colors duration-300">
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default NewsCard;