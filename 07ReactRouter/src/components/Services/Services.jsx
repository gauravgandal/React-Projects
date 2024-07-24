import React from "react";

export default function Services() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold text-gray-800 sm:text-4xl mb-8 text-center">
                Our Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">Crop Management</h3>
                    <p className="text-gray-700">
                        Efficient tools for managing crops from planting to harvest, ensuring a healthy yield.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">Weather Updates</h3>
                    <p className="text-gray-700">
                        Stay informed with real-time weather updates to optimize your farming activities.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">Market Prices</h3>
                    <p className="text-gray-700">
                        Get the latest market prices to make informed decisions on selling your produce.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">Consultation Services</h3>
                    <p className="text-gray-700">
                        Access expert advice on crop management, market strategies, and more.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">Training Programs</h3>
                    <p className="text-gray-700">
                        Participate in training programs to enhance your skills and knowledge in modern farming techniques.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">Community Support</h3>
                    <p className="text-gray-700">
                        Join a community of like-minded farmers and get support through forums and local meetups.
                    </p>
                </div>
            </div>
        </div>
    );
}
