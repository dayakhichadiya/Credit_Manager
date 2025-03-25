import React from 'react'
import logo from '../assets/logo1.png'
import img1 from '../assets/img1.png'
import img3 from '../assets/img3.png'
import img2 from '../assets/img2.png'
import img4 from '../assets/img4.png'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router'
import { useNavigate } from 'react-router'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()
  const login=()=>{

    navigate("/login")
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center">
     
      {/* Navbar */}
      <nav className="w-full max-w-6xl mt-8 flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg relative">
        <div className="text-xl font-bold text-blue-600">CREDIT MANAGER</div>

        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Add Card</li>
          <li className="hover:text-blue-600 cursor-pointer">My Cards</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4 text-gray-700 md:hidden">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Add Card</li>
          <li className="hover:text-blue-600 cursor-pointer">My Cards</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        )}


        <button onClick={login} className="bg-blue-600 text-white px-4 py-2 rounded-md hidden md:block transition-transform hover:scale-105">
          Sign Up
        </button>

      </nav>

      <section className="flex flex-col md:flex-row items-center max-w-6xl mt-12 px-6">

        <div className="md:w-1/2 text-center md:text-left space-y-4 animate-fadeIn">
          <h1 className="text-4xl font-bold text-blue-700">
            Credit Card <span className="text-blue-500">Management</span> System
          </h1>
          <p className="text-gray-600">
            Securely manage your credit cards, track transactions, and improve your financial health.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 transition-transform hover:scale-105">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center animate-fadeIn">
          <img
            src={img4}
            alt="Credit Card Management"
            className="w-80 md:w-full drop-shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
