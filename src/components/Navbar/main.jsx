import React, { useState } from 'react';
import ArrowButton from '../Arrow Button/main';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        "Products",
        "Leaderboard",
        "Enterprise",
        "Government",
        "Customer",
        "Resources",
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <>
            <nav className="bg-black lg:bg-black/30 lg:backdrop-blur-md text-white fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-20 border-b border-white/30">
                <span className="text-xl font-bold">NikuSoft</span>

                <button
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                    className="md:hidden focus:outline-none"
                >
                    {isMobileMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
                <div className="hidden md:flex items-center justify-between">
                    <ul className="flex items-center gap-[2vw]">
                        {menuItems.map((item) => (
                            <li key={item}>
                                <a className="hover:text-gray-300" href="#">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center gap-[2vw] ml-[2vw]">
                        <li>
                            <ArrowButton name="Book a Demo"></ArrowButton>
                        </li>
                        <li>
                            <a className="hover:text-gray-300" href="#">
                                Log In
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                className={`md:hidden text-white fixed top-15 left-0 w-full z-20 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                style={{
                    minHeight: '40vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                <ul className="flex flex-col px-6 py-8 space-y-6">
                    {[...menuItems, "Sign In"].map((item) => (
                        <li key={item}>
                            <a className="hover:text-gray-300 text-lg" href="#">
                                {item}
                            </a>
                        </li>
                    ))}
                    <li className="pt-4 w-full">
                        <ArrowButton name="Book a Demo"></ArrowButton>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;