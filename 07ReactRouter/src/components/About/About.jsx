import React from 'react';

function About() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <section className="text-center py-16 bg-gray-100 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to our platform! We are dedicated to providing innovative solutions for farmers to enhance their productivity and success. Our mission is to support farmers with cutting-edge tools and resources to help them grow their businesses and achieve their goals.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Our team is composed of passionate individuals committed to making a positive impact in the agricultural industry. We strive to deliver excellence through our services and continuous improvements to meet the evolving needs of farmers.
        </p>
      </section>

      <section className="text-center py-16 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Meet Our Developer
        </h2>
        <div className="flex justify-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs">
            <img
              src="/Profile.png" // Path to image in the public folder
              alt="Gaurav Gandal"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Gaurav Gandal
            </h3>
            <p className="text-gray-600">
              Gaurav is a skilled software developer with a background in computer science and a passion for creating impactful applications. With experience in various technologies, he is dedicated to building solutions that drive success and innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
