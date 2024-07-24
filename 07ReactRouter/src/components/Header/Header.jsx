import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white shadow-md sticky z-50 top-0">
            <nav className="bg-gray-800 px-4 lg:px-6 py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo and Title */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://w7.pngwing.com/pngs/233/436/png-transparent-logo-agriculture-computer-icons-agriculture-miscellaneous-leaf-company-thumbnail.png"
                            className="mr-3 h-12 rounded-full"
                            alt="Logo"
                        />
                        <span className="text-4xl font-extrabold flex items-center space-x-2 text-green-900 hover:text-green-700 transition duration-300">
                            <span className="text-red-600">Krishi</span>
                            <span className="text-green-600">World</span>
                        </span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        data-collapse-toggle="mobile-menu"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 lg:hidden"
                        onClick={toggleMobileMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:justify-between items-center w-full lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        id="mobile-menu"
                        className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        role="dialog"
                        aria-labelledby="mobile-menu-label"
                        aria-modal="true"
                    >
                        <div className="flex justify-end p-4">
                            <button
                                type="button"
                                className="text-gray-400 hover:text-white"
                                onClick={toggleMobileMenu}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col items-center pt-4">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                }
                                onClick={toggleMobileMenu}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                }
                                onClick={toggleMobileMenu}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                }
                                onClick={toggleMobileMenu}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                }
                                onClick={toggleMobileMenu}
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `block py-3 px-4 rounded-lg text-center font-semibold duration-300 ${isActive ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                                }
                                onClick={toggleMobileMenu}
                            >
                                Github
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
