import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h2>

      {/* Contact Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-xl" />
            <p className="text-gray-700">+1 234 567 890</p>
          </div>

          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-xl" />
            <p className="text-gray-700">info@example.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-xl" />
            <p className="text-gray-700">123 Main Street, City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded mt-2 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-700 text-2xl hover:text-blue-900" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl hover:text-blue-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-2xl hover:text-blue-800" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

