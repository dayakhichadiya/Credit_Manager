import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Auth/firebaseConfig";
import logo from "../assets/logomain.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center">
      <nav className="w-full max-w-6xl mt-8 flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg relative">
        {/* Logo Section */}
        <Link to="/">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-12 w-14 rounded-full object-contain hover:cursor-pointer" />
            <span className="text-xl font-bold text-blue-600">CREDIT MANAGER</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <NavLink to="/" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
            <li className="cursor-pointer">Home</li>
          </NavLink>
          <NavLink to="/addcard" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
            <li className="cursor-pointer">Add Card</li>
          </NavLink>
          <NavLink to="/cardlist" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
            <li className=" cursor-pointer">My Cards</li>
          </NavLink>
          <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
            <li className="cursor-pointer">About Us</li>
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
            <li className="cursor-pointer">Services</li>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
            <li className="cursor-pointer">Dashboard</li>
          </NavLink>
          {/* <NavLink to="/transaction" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
            <li className="cursor-pointer">Transaction</li>
          </NavLink> */}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-600 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4 text-gray-700 md:hidden">
            <NavLink to="/" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
              <li className="cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/addcard" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
              <li className="cursor-pointer">Add Card</li>
            </NavLink>
            <NavLink to="/cardlist" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
              <li className="cursor-pointer">My Cards</li>
            </NavLink>
            <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
              <li className="cursor-pointer">About Us</li>
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
              <li className="cursor-pointer">Services</li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
              <li className="cursor-pointer">Contact</li>
            </NavLink>
            {/* <NavLink to="/transaction" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
            <li className="cursor-pointer">Transaction</li>
            </NavLink> */}
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active text-blue-700 font-bold" : "hover:text-blue-600"}>
              <li className="cursor-pointer">Dashboard</li>
            </NavLink>

            {/* Show Login/Logout Button in Mobile Menu */}
            {user ? (
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                  Login
                </button>
              </Link>
            )}
          </ul>
        )}

        {/* Desktop Login/Logout Button */}
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hidden md:block transition-transform hover:scale-105">
            Logout
          </button>
        ) : (
          <button onClick={() => navigate("/login")} className="bg-blue-600 text-white px-4 py-2 rounded-md hidden md:block transition-transform hover:scale-105">
            Login
          </button>
        )}

      </nav>
    </div>
  );
};

export default Navbar;
