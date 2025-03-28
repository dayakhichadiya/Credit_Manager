import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to <span className="font-semibold">Credit Manager</span>, your ultimate solution for managing your credit cards efficiently and securely. 
          Our mission is to simplify your financial life by offering a seamless platform that allows you to store, track, and analyze your credit card details.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Why Choose Us?</h2>
        <ul className="text-gray-700 text-left list-disc pl-6 mb-6">
          <li className="mb-2"><span className="font-medium">Secure Storage:</span> Your data is protected with high-end encryption.</li>
          <li className="mb-2"><span className="font-medium">Easy Access:</span> Manage multiple credit cards in one place.</li>
          <li className="mb-2"><span className="font-medium">Smart Insights:</span> Get spending analysis to optimize your expenses.</li>
          <li className="mb-2"><span className="font-medium">User-Friendly Interface:</span> Simple and elegant design for effortless navigation.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Vision</h2>
        <p className="text-gray-600 text-lg mb-6">
          We aim to revolutionize personal finance management by providing a hassle-free credit card tracking experience. Our team is dedicated to enhancing security, convenience, and financial awareness for users worldwide.
        </p>

        <div className="flex justify-center space-x-4">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </button>
          </Link>
          <Link to="/services">
            <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Our Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;