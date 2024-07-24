import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden text-black bg-green-100 rounded-lg sm:py-16 py-12">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
                        {/* Text Section */}
                        <div className="lg:w-1/2">
                            <div className="space-y-8 text-center lg:text-left">
                                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4">
                                    Harvest Your Success
                                    <span className="block text-2xl sm:text-3xl lg:text-4xl text-green-700 mt-2">Grow with Us</span>
                                </h2>

                                <Link
                                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-green-700 rounded-lg hover:bg-green-800 transition duration-300"
                                    to="/"
                                >
                                    <svg
                                        fill="white"
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    >
                                        <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                    </svg>
                                    &nbsp; Get Started
                                </Link>
                                
                                {/* Additional Farmer-Themed Content */}
                                <div className="space-y-6 mt-8 text-center lg:text-left">
                                    <h3 className="text-2xl font-semibold text-green-800">Why Choose Us?</h3>
                                    <p className="text-gray-700">
                                        Our application provides farmers with a range of essential tools and resources designed to enhance productivity and profitability. From crop management to real-time weather updates, we are committed to supporting your farming journey.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h4 className="text-xl font-semibold text-green-700 mb-2">Comprehensive Crop Management</h4>
                                            <p className="text-gray-600">
                                                Manage your crops efficiently with our intuitive tools for planting, monitoring, and harvesting.
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h4 className="text-xl font-semibold text-green-700 mb-2">Reliable Weather Forecasts</h4>
                                            <p className="text-gray-600">
                                                Stay ahead of the weather with accurate forecasts tailored for agricultural planning.
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h4 className="text-xl font-semibold text-green-700 mb-2">Market Price Insights</h4>
                                            <p className="text-gray-600">
                                                Access real-time market prices to make informed decisions on selling your produce.
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-md">
                                            <h4 className="text-xl font-semibold text-green-700 mb-2">Expert Support</h4>
                                            <p className="text-gray-600">
                                                Get assistance from our team of experts for any questions or challenges you encounter.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                            <img className="w-full max-w-md object-cover" src="https://pngimg.com/uploads/farmer/farmer_PNG21.png" alt="Farmer" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
