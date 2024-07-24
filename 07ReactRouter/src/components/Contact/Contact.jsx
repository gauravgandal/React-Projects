import React from "react";

export default function Contact() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-3xl font-semibold text-gray-800 sm:text-4xl mb-6 text-center lg:text-left">
                        Get in Touch with Us
                    </h1>
                    <p className="text-gray-700 mb-6">
                        Whether you have questions about our services or need assistance, our team is here to help. Reach out to us through any of the following methods:
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2l2-7h10l2 7h2m-3 0h3m-3 4v7h-8v-7m8 0l-2-5H5l-2 5m14 0h3m-6-5H8l-2 5h7l2-5z"></path>
                            </svg>
                            <div>
                                <h4 className="font-semibold text-gray-800">Address</h4>
                                <p className="text-gray-600">At - Newasa, District - Ahmednagar, MH, India</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 14.5l-7.03-4.72a4 4 0 00-4.94 0L3 14.5M21 14.5v4.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18.75v-4.25M21 14.5L12 19.25 3 14.5"></path>
                            </svg>
                            <div>
                                <h4 className="font-semibold text-gray-800">Email</h4>
                                <p className="text-gray-600">gauravgandal@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M4 10h16m-6 4h6m-8 0h6m-6 4h6m-8 0h6m-8 0h6"></path>
                            </svg>
                            <div>
                                <h4 className="font-semibold text-gray-800">Phone</h4>
                                <p className="text-gray-600">+91 9834353238</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center lg:text-left">Send Us a Message</h2>
                    <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
